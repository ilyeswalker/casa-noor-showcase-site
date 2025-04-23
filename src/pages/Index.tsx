
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

const ourCompanies = [
  {
    id: 1,
    name: "Cablette Casa",
    logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    description: "Specialized in manufacturing high-quality cables and wires for various applications."
  },
  {
    id: 2,
    name: "Casa Noor Atelier",
    logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "Custom electrical solutions and specialized equipment for industrial needs."
  },
  {
    id: 3,
    name: "Casa Noor",
    logo: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description: "The flagship brand offering comprehensive electrical equipment and services."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="mb-4">
            <h1 className="text-5xl font-bold">
              <span className="text-casanoor-blue">Casa </span>
              <span className="text-casanoor-red">Noor</span>
            </h1>
            <div className="text-white text-xl mt-1">Electric</div>
          </div>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto px-4">
            Your trusted source for premium electrical equipment and cables
          </p>
          <div>
            <Link
              to="/catalogue"
              className="inline-block bg-casanoor-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
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

      {/* Our Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">Our Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourCompanies.map((company) => (
              <Link key={company.id} to="/" className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-100">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl mb-2">{company.name}</h3>
                    <p className="text-gray-600">{company.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Panel */}
      <ContactPanel />
    </div>
  );
};

export default Index;
