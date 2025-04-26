
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601288496920-b6154fe3626a')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
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
            className="inline-block bg-casanoor-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors transform hover:scale-105 duration-300"
          >
            {translations.explore_products}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
