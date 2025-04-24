import { Link } from "react-router-dom";
import { Cable, Plug, EthernetPort } from "lucide-react";
import ContactPanel from "../components/ContactPanel";
import { useLanguage } from "../context/LanguageContext";

const featuredProducts = [
  {
    id: 1,
    name: "Cable 2 x 0.75",
    price: 29,
    icon: Cable,
    image:
      "C:UsersASUSDocumentsGitHubcasa-noor-showcase-siteImagespexels-pixabay-159027.jpg",
    description: "Standard 2-conductor cable with 0.75mm² cross-section",
  },
  {
    id: 2,
    name: "Cable 3 x 1.5",
    price: 39,
    icon: Cable,
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a",
    description:
      "3-conductor cable with 1.5mm² cross-section for higher power applications",
  },
  {
    id: 3,
    name: "Enrouleur 30m",
    price: 89,
    icon: Plug,
    image: "https://images.unsplash.com/photo-1629411950234-fb385088261c",
    description:
      "30 meter cable reel with multiple outlets and safety features",
  },
];

const ourCompanies = [
  {
    id: 1,
    name: "Cablette Casa",
    logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    description:
      "Specialized in manufacturing high-quality cables and wires for various applications.",
    link: "/company/cablette-casa",
  },
  {
    id: 2,
    name: "Casa Noor Atelier",
    logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description:
      "Custom electrical solutions and specialized equipment for industrial needs.",
    link: "/company/casa-noor-atelier",
  },
  {
    id: 3,
    name: "Casa Noor",
    logo: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    description:
      "The flagship brand offering comprehensive electrical equipment and services.",
    link: "/",
  },
];

const Index = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/159027/blue-and-yellow-bokeh-lights-159027.jpeg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="mb-4">
            <h1 className="text-5xl font-black font-merriweather italic">
              <span className="text-casanoor-blue">Casa </span>
              <span className="text-casanoor-red">Noor</span>
            </h1>
            <div className="text-white text-xl mt-1">
              {translations.trusted_source}
            </div>
          </div>
          <div>
            <Link
              to="/catalogue"
              className="inline-block bg-casanoor-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              {translations.explore_products}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            {translations.featured_products}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="group cursor-pointer bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-casanoor-red font-semibold">
                    {translations.starting_from} ${product.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">
            {translations.our_companies}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourCompanies.map((company) => (
              <Link key={company.id} to={company.link} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-100">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl mb-2">
                      {company.name}
                    </h3>
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
