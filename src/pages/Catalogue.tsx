
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ContactPanel from "../components/ContactPanel";

// Cable product types
const cableProducts = [
  {
    id: 1,
    name: "Cable 2 x 0.75",
    price: 120,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "0.75", length: "10m" }
  },
  {
    id: 2,
    name: "Cable 2 x 1.5",
    price: 150,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "1.5", length: "10m" }
  },
  {
    id: 3,
    name: "Cable 2 x 2.5",
    price: 185,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "2.5", length: "10m" }
  },
  {
    id: 4,
    name: "Cable 3 x 0.75",
    price: 140,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "0.75", length: "10m" }
  },
  {
    id: 5,
    name: "Cable 3 x 1.5",
    price: 180,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "1.5", length: "10m" }
  },
  {
    id: 6,
    name: "Cable 3 x 2.5",
    price: 220,
    category: "cables",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: { width: "2.5", length: "10m" }
  }
];

// Enrouleur product types
const enrouleurProducts = [
  {
    id: 7,
    name: "Enrouleur 20m",
    price: 320,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "20m" }
  },
  {
    id: 8,
    name: "Enrouleur 25m",
    price: 340,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "25m" }
  },
  {
    id: 9,
    name: "Enrouleur 30m",
    price: 380,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "30m" }
  },
  {
    id: 10,
    name: "Enrouleur 40m",
    price: 420,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "40m" }
  },
  {
    id: 11,
    name: "Enrouleur 50m",
    price: 450,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "50m" }
  },
  {
    id: 12,
    name: "Enrouleur 60m",
    price: 490,
    category: "enrouleur",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    specs: { width: "1.5", length: "60m" }
  }
];

// Combine all products
const allProducts = [...cableProducts, ...enrouleurProducts];

const Catalogue = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWidths, setSelectedWidths] = useState<string[]>([]);
  const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Available filter options
  const widths = ["0.75", "1.5", "2.5"];
  const lengths = ["10m", "20m", "25m", "30m", "40m", "50m", "60m"];

  // Handle width checkbox change
  const handleWidthChange = (width: string) => {
    setSelectedWidths(prev => 
      prev.includes(width) 
        ? prev.filter(w => w !== width)
        : [...prev, width]
    );
  };

  // Handle length checkbox change
  const handleLengthChange = (length: string) => {
    setSelectedLengths(prev => 
      prev.includes(length) 
        ? prev.filter(l => l !== length)
        : [...prev, length]
    );
  };

  // Apply filters
  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by width
    if (selectedWidths.length > 0) {
      filtered = filtered.filter(product => 
        selectedWidths.includes(product.specs.width)
      );
    }
    
    // Filter by length
    if (selectedLengths.length > 0) {
      filtered = filtered.filter(product => 
        selectedLengths.includes(product.specs.length)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, selectedWidths, selectedLengths]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Fixed position */}
          <aside className="w-full md:w-64 md:sticky md:top-24 md:self-start space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="font-playfair text-lg mb-4">Categories</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Categories</option>
                <option value="cables">Cables</option>
                <option value="enrouleur">Enrouleurs</option>
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
            
            <div>
              <h3 className="font-playfair text-lg mb-4">Cable Width</h3>
              <div className="space-y-2">
                {widths.map(width => (
                  <div key={width} className="flex items-center">
                    <Checkbox 
                      id={`width-${width}`} 
                      checked={selectedWidths.includes(width)}
                      onCheckedChange={() => handleWidthChange(width)}
                    />
                    <Label 
                      htmlFor={`width-${width}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {width} mm²
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-lg mb-4">Cable Length</h3>
              <div className="space-y-2">
                {lengths.map(length => (
                  <div key={length} className="flex items-center">
                    <Checkbox 
                      id={`length-${length}`} 
                      checked={selectedLengths.includes(length)}
                      onCheckedChange={() => handleLengthChange(length)}
                    />
                    <Label 
                      htmlFor={`length-${length}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {length}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                    <div className="mt-2 text-sm text-gray-500 flex justify-between">
                      <span>Width: {product.specs.width} mm²</span>
                      <span>Length: {product.specs.length}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg text-gray-600">No products match your filters</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Contact Panel */}
      <ContactPanel />
    </div>
  );
};

export default Catalogue;
