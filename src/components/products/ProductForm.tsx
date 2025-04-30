
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { createProduct, ProductFormData } from "@/services/productService";
import ProductImageUpload from "@/components/products/ProductImageUpload";
import { Progress } from "@/components/ui/progress";

const ProductForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleImagesChange = (files: File[]) => {
    setImageFiles(files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Product name is required",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.price || formData.price <= 0) {
      toast({
        title: "Validation Error",
        description: "Product price must be greater than zero",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setProgress(10);
    
    try {
      // Create product with progress simulation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 10;
          return newProgress >= 90 ? 90 : newProgress;
        });
      }, 300);
      
      const result = await createProduct(formData, imageFiles);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      if (result.success) {
        toast({
          title: "Product added",
          description: `${formData.name} has been added successfully.`
        });
        
        // Delay navigation slightly to show 100% progress
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 500);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to add product",
          variant: "destructive",
        });
        setIsSubmitting(false);
        setProgress(0);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      setIsSubmitting(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center gap-2"
          onClick={() => navigate("/admin/dashboard")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Button>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Add New Product</CardTitle>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            {isSubmitting && (
              <div className="px-6">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center mt-1 text-gray-500">
                  {progress === 100 ? 'Completed!' : 'Processing...'}
                </p>
              </div>
            )}
            
            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Basic Information</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="e.g. Cable 2 x 1.5" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("category", value)}
                      value={formData.category}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cables">Cables</SelectItem>
                        <SelectItem value="enrouleurs">Enrouleurs</SelectItem>
                        <SelectItem value="connectors">Connectors</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="tools">Tools</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Pricing & Inventory */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Pricing & Inventory</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input 
                        id="price" 
                        name="price" 
                        type="number"
                        className="pl-7"
                        placeholder="0.00" 
                        value={formData.price || ""}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                        min="0.01"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input 
                      id="stock" 
                      name="stock" 
                      type="number"
                      placeholder="0" 
                      value={formData.stock || ""}
                      onChange={handleInputChange}
                      required
                      min="0"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Product description..." 
                  className="min-h-32"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Images */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Product Images</h3>
                <ProductImageUpload 
                  onImagesChange={handleImagesChange} 
                  maxFiles={5}
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between border-t pt-6">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/admin/dashboard")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-casanoor-blue"
              >
                {isSubmitting ? "Adding Product..." : "Add Product"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProductForm;
