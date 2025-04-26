
import { Cable, Plug } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const featuredProducts = [
  {
    id: 1,
    name: "Cable 2 x 0.75",
    price: 29,
    icon: Cable,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
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
    description: "30 meter cable reel with multiple outlets and safety features",
  },
];

const FeaturedProducts = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 bg-white" id="featured-products">
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
                className="group cursor-pointer bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
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
  );
};

export default FeaturedProducts;
