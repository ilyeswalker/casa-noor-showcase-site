
import { useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const mockProducts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 900) + 100,
  category: ["Furniture", "Decor", "Lighting"][Math.floor(Math.random() * 3)],
  image: "placeholder.svg"
}));

const Catalogue = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-64 space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="font-playfair text-lg mb-4">Categories</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Categories</option>
                <option value="furniture">Furniture</option>
                <option value="decor">Decor</option>
                <option value="lighting">Lighting</option>
              </select>
            </div>
            
            <div>
              <h3 className="font-playfair text-lg mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={1}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
