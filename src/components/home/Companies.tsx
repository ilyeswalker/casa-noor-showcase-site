
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

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

const Companies = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl text-center mb-12">
          {translations.our_companies}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ourCompanies.map((company) => (
            <Link key={company.id} to={company.link} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
                <div className="h-48 bg-gray-100">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
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
  );
};

export default Companies;
