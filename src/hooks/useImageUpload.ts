
import { useState, useCallback } from 'react';
import { FileError, validateFile } from '@/utils/imageUpload';

interface UploadImage {
  file: File;
  preview: string;
  id: string; // Local ID for tracking
  uploading?: boolean;
  error?: string;
}

interface UseImageUploadReturn {
  images: UploadImage[];
  addImages: (files: FileList | File[]) => void;
  removeImage: (id: string) => void;
  updateImageOrder: (newOrder: UploadImage[]) => void;
  clearImages: () => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export const useImageUpload = (maxFiles: number = 5): UseImageUploadReturn => {
  const [images, setImages] = useState<UploadImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file addition
  const addImages = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    // Check if adding these files would exceed the max
    if (images.length + fileArray.length > maxFiles) {
      console.warn(`You can only upload ${maxFiles} images`);
      // Take only what we can fit
      fileArray.splice(maxFiles - images.length);
    }
    
    const newImages = fileArray.map(file => {
      // Validate file
      const fileError = validateFile(file);
      
      return {
        file,
        preview: URL.createObjectURL(file),
        id: `${file.name}-${Date.now()}`,
        error: fileError?.message
      };
    });
    
    setImages(prev => [...prev, ...newImages]);
  }, [images.length, maxFiles]);
  
  // Handle drag events
  const onDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);
  
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      addImages(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, [addImages]);
  
  // Remove an image
  const removeImage = useCallback((id: string) => {
    setImages(prev => {
      const filtered = prev.filter(image => image.id !== id);
      return filtered;
    });
  }, []);
  
  // Update image order (for drag and drop reordering)
  const updateImageOrder = useCallback((newOrder: UploadImage[]) => {
    setImages(newOrder);
  }, []);
  
  // Clear all images
  const clearImages = useCallback(() => {
    // Release object URLs to prevent memory leaks
    images.forEach(image => URL.revokeObjectURL(image.preview));
    setImages([]);
  }, [images]);
  
  return {
    images,
    addImages,
    removeImage,
    updateImageOrder,
    clearImages,
    isDragging,
    setIsDragging,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
  };
};
