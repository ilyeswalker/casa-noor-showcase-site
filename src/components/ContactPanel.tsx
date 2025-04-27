
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { useLanguage } from "../context/LanguageContext";

const ContactPanel = () => {
  const { translations } = useLanguage();

  return (
    <div className="bg-white text-gray-800 py-12 shadow-sm border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-8 border-gray-200">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">{translations.contact_info}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-casanoor-blue" />
                <p>(+213) 555-123-456</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-casanoor-blue" />
                <p>contact@casanoor.com</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-casanoor-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-casanoor-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-casanoor-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">{translations.customer_service}</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-casanoor-blue transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-casanoor-blue transition-colors">Contact Us</a></li>
              <li><a href="/account" className="text-gray-600 hover:text-casanoor-blue transition-colors">My account</a></li>
              <li><a href="/orders" className="text-gray-600 hover:text-casanoor-blue transition-colors">Orders history</a></li>
              <li><a href="/search" className="text-gray-600 hover:text-casanoor-blue transition-colors">Advanced search</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">{translations.subscribe_newsletter}</h3>
            <p className="text-sm text-gray-600">{translations.newsletter_desc}</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={translations.enter_email} 
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-casanoor-blue"
              />
              <button className="bg-casanoor-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                {translations.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
