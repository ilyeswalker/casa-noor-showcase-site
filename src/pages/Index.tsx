import { Link } from "react-router-dom";
import { Cable, Plug, EthernetPort } from "lucide-react";
import ContactPanel from "../components/ContactPanel";

const featuredProducts = [
  {
    id: 1,
    name: "Industrial Power Cable",
    price: 299,
    icon: Cable,
    description: "Heavy-duty power cable for industrial applications"
  },
  {
    id: 2,
    name: "Network Cable Bundle",
    price: 149,
    icon: EthernetPort,
    description: "Cat6 ethernet cables for high-speed networking"
  },
  {
    id: 3,
    name: "Smart Power Strip",
    price: 199,
    icon: Plug,
    description: "Surge-protected power strip with smart controls"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="text-center space-y-8 animate-fadeIn">
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto px-4">
            Your trusted source for premium electrical equipment and cables
          </p>
          <div>
            <Link
              to="/catalogue"
              className="inline-block bg-casanoor-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="group cursor-pointer bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12 text-casanoor-blue" />
                  </div>
                  <h3 className="font-playfair text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-casanoor-red font-semibold">Starting from ${product.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <ContactPanel />
    </div>
  );
};

export default Index;
