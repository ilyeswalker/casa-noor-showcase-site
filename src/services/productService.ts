
import { supabase } from '@/integrations/supabase/client';
import { uploadProductImage, saveProductImageMetadata } from '@/utils/imageUpload';

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

export interface ProductWithImages extends ProductFormData {
  id: string;
  created_at: string;
  updated_at: string;
  images: {
    id: string;
    url: string;
    file_name: string;
    sort_order: number;
  }[];
}

/**
 * Create a new product with images
 */
export const createProduct = async (
  productData: ProductFormData,
  imageFiles: File[]
): Promise<{ success: boolean; productId?: string; error?: string }> => {
  try {
    // 1. Insert the product data
    const { data: product, error: productError } = await supabase
      .from('products')
      .insert({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        category: productData.category,
        stock: productData.stock,
      })
      .select()
      .single();

    if (productError) {
      console.error('Error creating product:', productError);
      return { success: false, error: productError.message };
    }

    console.log('Product created successfully:', product);

    // 2. Upload images if there are any
    if (imageFiles.length > 0) {
      const productId = product.id;
      
      console.log('Uploading images for product:', productId);
      
      // Upload each image and save metadata
      const uploadPromises = imageFiles.map(async (file, index) => {
        const result = await uploadProductImage(file, productId);
        
        // Check if there was an error
        if (typeof result !== 'string') {
          console.error('Error uploading image:', result);
          return { success: false, error: result.message };
        }
        
        // Save image metadata
        const fileName = result.split('/').pop() || '';
        const fullPath = result.split('product-images/')[1] || '';
        
        const saved = await saveProductImageMetadata(
          productId,
          result,
          fullPath,
          index
        );
        
        if (!saved) {
          console.error('Error saving image metadata');
        }
        
        return { success: true };
      });
      
      await Promise.all(uploadPromises);
    }

    return { success: true, productId: product.id };
  } catch (error) {
    console.error('Error in createProduct:', error);
    return { success: false, error: 'Failed to create product' };
  }
};

/**
 * Get a product by ID including its images
 */
export const getProductById = async (id: string): Promise<ProductWithImages | null> => {
  try {
    // Get product data
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
      
    if (productError) {
      console.error('Error fetching product:', productError);
      return null;
    }
    
    // Get product images
    const { data: images, error: imagesError } = await supabase
      .from('product_images')
      .select('*')
      .eq('product_id', id)
      .order('sort_order', { ascending: true });
      
    if (imagesError) {
      console.error('Error fetching product images:', imagesError);
      return null;
    }
    
    return {
      ...product,
      images: images || []
    };
  } catch (error) {
    console.error('Error in getProductById:', error);
    return null;
  }
};

/**
 * Get all products with their images
 */
export const getAllProducts = async (): Promise<ProductWithImages[]> => {
  try {
    // Get all products
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (productsError) {
      console.error('Error fetching products:', productsError);
      return [];
    }

    // For each product, get its images
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        const { data: images, error: imagesError } = await supabase
          .from('product_images')
          .select('*')
          .eq('product_id', product.id)
          .order('sort_order', { ascending: true });
          
        if (imagesError) {
          console.error('Error fetching product images:', imagesError);
          return {
            ...product,
            images: []
          };
        }
        
        return {
          ...product,
          images: images || []
        };
      })
    );

    return productsWithImages;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    return [];
  }
};

/**
 * Update a product
 */
export const updateProduct = async (
  id: string,
  productData: Partial<ProductFormData>
): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('products')
      .update({
        ...productData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating product:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateProduct:', error);
    return { success: false, error: 'Failed to update product' };
  }
};

/**
 * Delete a product and all associated images
 */
export const deleteProduct = async (id: string): Promise<{ success: boolean; error?: string }> => {
  try {
    // Get all images first so we can delete them from storage
    const { data: images, error: imagesError } = await supabase
      .from('product_images')
      .select('url, file_name')
      .eq('product_id', id);
      
    if (imagesError) {
      console.error('Error fetching product images:', imagesError);
      return { success: false, error: imagesError.message };
    }
    
    // Delete images from storage
    if (images && images.length > 0) {
      const filePaths = images.map(image => {
        // Extract the path after the bucket name
        const parts = image.url.split('product-images/');
        return parts.length > 1 ? parts[1] : '';
      }).filter(path => path);
      
      if (filePaths.length > 0) {
        const { error: storageError } = await supabase.storage
          .from('product-images')
          .remove(filePaths);
          
        if (storageError) {
          console.error('Error removing images from storage:', storageError);
          // Continue with product deletion even if image deletion fails
        }
      }
    }
    
    // Delete the product (cascades to product_images table)
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting product:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    return { success: false, error: 'Failed to delete product' };
  }
};
