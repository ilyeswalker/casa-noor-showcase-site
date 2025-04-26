
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { translations } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="text-center max-w-lg animate-fadeIn">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-casanoor-red">404</h1>
          <div className="h-2 w-20 bg-casanoor-blue mx-auto my-4"></div>
        </div>
        
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          {translations.page_not_found || 'Oops! Page not found'}
        </h2>
        
        <p className="text-gray-600 mb-8">
          {translations.page_not_found_message || 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
        </p>
        
        <Link to="/">
          <Button className="bg-casanoor-blue hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            {translations.return_home || 'Return to Home'}
          </Button>
        </Link>
      </div>
      
      <div className="mt-16 text-gray-500">
        <p>Casa Noor © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default NotFound;
