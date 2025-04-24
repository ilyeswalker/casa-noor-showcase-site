
import { Link } from "react-router-dom";
import ContactPanel from "../../components/ContactPanel";
import { useLanguage } from "../../context/LanguageContext";
import { Wrench, Award, Users } from "lucide-react";

const CasaNoorAtelier = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-64 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab10e23c5e6')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Casa Noor Atelier</h1>
          <p className="text-white text-lg max-w-xl mx-auto">
            Custom electrical solutions and specialized equipment for industrial needs
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-6">About Casa Noor Atelier</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Casa Noor Atelier specializes in designing and manufacturing custom electrical solutions for industrial applications. 
              With over 15 years of experience, our team of expert engineers works closely with clients to develop tailored solutions that meet their specific requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From specialized power distribution systems to custom control panels, we combine innovative design with meticulous craftsmanship to deliver reliable and efficient electrical equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Wrench className="h-12 w-12 text-casanoor-red" />
              </div>
              <h3 className="text-xl font-medium mb-2">Custom Engineering</h3>
              <p className="text-gray-600">
                We design and build electrical systems tailored to your specific industrial requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-casanoor-red" />
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                All our products undergo comprehensive testing to ensure they meet the highest standards of performance and safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-casanoor-red" />
              </div>
              <h3 className="text-xl font-medium mb-2">Technical Support</h3>
              <p className="text-gray-600">
                Our team of experts provides ongoing technical support and maintenance services for all our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092738250-d3302ee19608" 
                alt="Industrial Control Panel" 
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">Industrial Control System</h3>
                <p className="text-gray-600">Custom power distribution and control system for a manufacturing plant.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1628502053362-e8e3ecef5fcc" 
                alt="Electrical Installation" 
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">Smart Building Infrastructure</h3>
                <p className="text-gray-600">Integrated electrical system for a smart commercial building project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-casanoor-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom electrical solution?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our team is ready to help you design and implement the perfect electrical system for your industrial needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-casanoor-red px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <ContactPanel />
    </div>
  );
};

export default CasaNoorAtelier;
