
import { supabase } from '@/integrations/supabase/client';

/**
 * Initialize Supabase resources required by the application.
 * This ensures that the storage bucket for product images exists.
 */
export const initializeSupabase = async (): Promise<void> => {
  try {
    // Check if the product-images bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === 'product-images');
    
    if (!bucketExists) {
      // Create the bucket if it doesn't exist
      const { error } = await supabase.storage.createBucket('product-images', {
        public: true,
        fileSizeLimit: 5 * 1024 * 1024, // 5MB
      });
      
      if (error) {
        console.error('Error creating product-images bucket:', error);
      } else {
        console.log('Created product-images bucket successfully');
      }
    }
  } catch (error) {
    console.error('Error initializing Supabase resources:', error);
  }
};
