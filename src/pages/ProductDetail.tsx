import { useState } from "react";
import { useParams } from "react-router-dom";
import ContactPanel from "../components/ContactPanel";

const ProductDetail = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("placeholder.svg");
  
  // Mock product data - to be replaced with real data
  const product = {
    name: `Product ${id}`,
    price: 999,
    description: "Luxury furniture piece perfect for modern homes.",
    category: "Furniture",
    availability: "In Stock",
    images: Array(4).fill("placeholder.svg")
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="font-playfair text-3xl">{product.name}</h1>
              <p className="text-2xl text-casanoor-red">${product.price}</p>
              <div className="space-y-4">
                <p className="text-gray-600">{product.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p>{product.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Availability</p>
                    <p>{product.availability}</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-casanoor-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Panel */}
      <ContactPanel />
    </div>
  );
};

export default ProductDetail;
