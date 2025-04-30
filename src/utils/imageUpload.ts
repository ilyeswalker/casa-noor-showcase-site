
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/integrations/supabase/client';

// Maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Supported image types
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

/**
 * Type check for file validation
 */
export interface FileError {
  message: string;
  code: 'file-too-large' | 'file-invalid-type' | 'server-error' | 'too-many-files';
}

/**
 * Validate a file based on size and type
 */
export const validateFile = (file: File): FileError | null => {
  if (file.size > MAX_FILE_SIZE) {
    return {
      message: 'File is too large. Maximum size is 5MB.',
      code: 'file-too-large',
    };
  }

  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return {
      message: 'File type not supported. Please upload JPG, PNG, or WEBP.',
      code: 'file-invalid-type',
    };
  }

  return null;
};

/**
 * Upload a file to Supabase storage
 */
export const uploadProductImage = async (file: File, productId: string): Promise<string | FileError> => {
  try {
    const fileError = validateFile(file);
    if (fileError) return fileError;

    // Create a unique file name to prevent conflicts
    const fileExt = file.name.split('.').pop();
    const fileName = `${productId}/${uuidv4()}.${fileExt}`;
    
    // Upload the file to Supabase storage
    const { error: uploadError, data } = await supabase.storage
      .from('product-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Error uploading file:', uploadError);
      return {
        message: 'Failed to upload image. Please try again.',
        code: 'server-error',
      };
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Error in uploadProductImage:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      code: 'server-error',
    };
  }
};

/**
 * Save image metadata to database
 */
export const saveProductImageMetadata = async (
  productId: string, 
  url: string, 
  fileName: string,
  sortOrder: number = 0
): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('product_images')
      .insert({
        product_id: productId,
        url,
        file_name: fileName,
        sort_order: sortOrder
      });

    if (error) {
      console.error('Error saving image metadata:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in saveProductImageMetadata:', error);
    return false;
  }
};

/**
 * Delete an image from storage and database
 */
export const deleteProductImage = async (url: string, fileName: string): Promise<boolean> => {
  try {
    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('product-images')
      .remove([fileName]);
      
    if (storageError) {
      console.error('Error deleting from storage:', storageError);
      return false;
    }
    
    // Delete from database
    const { error: dbError } = await supabase
      .from('product_images')
      .delete()
      .eq('url', url);
      
    if (dbError) {
      console.error('Error deleting from database:', dbError);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in deleteProductImage:', error);
    return false;
  }
};
