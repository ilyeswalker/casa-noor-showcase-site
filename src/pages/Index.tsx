
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-casanoor-red">
            CasaNoor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our exquisite collection of luxury home furnishings and decor
          </p>
          <div>
            <Link
              to="/catalogue"
              className="inline-block bg-casanoor-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample featured products - to be replaced with dynamic data */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-playfair text-xl mb-2">Luxury Item {item}</h3>
                <p className="text-gray-600">Starting from $999</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
