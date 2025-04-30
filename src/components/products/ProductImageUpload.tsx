
import React, { useRef } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useImageUpload } from '@/hooks/useImageUpload';

interface ProductImageUploadProps {
  onImagesChange: (files: File[]) => void;
  maxFiles?: number;
}

const ProductImageUpload: React.FC<ProductImageUploadProps> = ({ 
  onImagesChange, 
  maxFiles = 5 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    images,
    addImages,
    removeImage,
    isDragging,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
  } = useImageUpload(maxFiles);
  
  // Update parent component when images change
  React.useEffect(() => {
    const validFiles = images
      .filter(img => !img.error)
      .map(img => img.file);
    
    onImagesChange(validFiles);
  }, [images, onImagesChange]);
  
  // Handle upload button click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addImages(e.target.files);
      // Reset input value so the same file can be uploaded again
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
          isDragging 
            ? 'border-casanoor-blue bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop images here or click to browse
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG or WEBP (max 5MB each)
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleUploadClick}
            className="mt-4"
            disabled={images.length >= maxFiles}
          >
            Select Files
          </Button>
        </div>
      </div>
      
      {images.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">
            Preview ({images.length}/{maxFiles})
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((image) => (
              <div 
                key={image.id} 
                className={`relative rounded-md overflow-hidden border ${
                  image.error ? 'border-red-300' : 'border-gray-200'
                }`}
              >
                <div className="aspect-square w-full relative">
                  {image.error ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                      <ImageIcon className="h-8 w-8 text-red-400" />
                    </div>
                  ) : (
                    <img 
                      src={image.preview} 
                      alt="Preview" 
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(image.id)}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 rounded-full p-1 hover:bg-opacity-80"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
                {image.error && (
                  <p className="text-xs text-red-500 p-1 truncate" title={image.error}>
                    {image.error}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;
