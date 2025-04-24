
import { Link } from "react-router-dom";
import ContactPanel from "../../components/ContactPanel";
import { useLanguage } from "../../context/LanguageContext";
import { Cable, Settings, Shield } from "lucide-react";

const CabletteCasa = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-64 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cablette Casa</h1>
          <p className="text-white text-lg max-w-xl mx-auto">
            Specialized in manufacturing high-quality cables and wires for various applications
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-6">About Cablette Casa</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2005, Cablette Casa has grown to become one of the leading manufacturers of electrical cables and wires in the region. 
              Our state-of-the-art production facilities and rigorous quality control ensure that our products meet the highest standards of reliability and safety.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take pride in our craftsmanship and our commitment to providing electrical solutions that power homes, businesses, and industries across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">Why Choose Our Cables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Cable className="h-12 w-12 text-casanoor-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                Our cables are made from the highest quality copper and insulation materials for optimal performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Settings className="h-12 w-12 text-casanoor-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Precision Engineering</h3>
              <p className="text-gray-600">
                Each cable is manufactured with precision to ensure consistent quality and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-casanoor-blue" />
              </div>
              <h3 className="text-xl font-medium mb-2">Safety Certified</h3>
              <p className="text-gray-600">
                All our products undergo rigorous testing and are certified to meet international safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-casanoor-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to explore our products?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Browse our complete catalogue of cables and wires to find the perfect solution for your electrical needs.
          </p>
          <Link 
            to="/catalogue" 
            className="inline-block bg-white text-casanoor-blue px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            View Catalogue
          </Link>
        </div>
      </section>

      <ContactPanel />
    </div>
  );
};

export default CabletteCasa;
