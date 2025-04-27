
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";

const Hero = () => {
  const { translations } = useLanguage();

  useEffect(() => {
    // Add Great Vibes font for the "Casa Noor" part
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2940&auto=format&fit=crop')",
          backdropFilter: "blur(8px)",
        }}
      ></div>
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      
      <div className="text-center space-y-8 z-10 animate-fadeIn">
        <div className="mb-4 transform transition-all duration-500 hover:scale-105">
          <h1 className="mb-2">
            <span className="block font-['Great_Vibes'] text-6xl text-casanoor-blue mb-2">
              Casa Noor
            </span>
            <span className="block font-['Poppins'] text-3xl font-black tracking-wide text-casanoor-black">
              ELECTRIC
            </span>
          </h1>
          <div className="text-gray-800 text-xl mt-3 letter-spacing-wide">
            {translations.trusted_source}
          </div>
        </div>
        <div>
          <Link
            to="/catalogue"
            className="inline-block bg-casanoor-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-all transform hover:scale-105 duration-300 shadow-md"
          >
            {translations.explore_products}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
