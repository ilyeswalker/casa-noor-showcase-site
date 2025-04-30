
import { useEffect } from "react";
import ProductForm from "@/components/products/ProductForm";
import { initializeSupabase } from "@/utils/initSupabase";

const AddProduct = () => {
  useEffect(() => {
    // Initialize Supabase resources when the component mounts
    initializeSupabase();
  }, []);
  
  return <ProductForm />;
};

export default AddProduct;
