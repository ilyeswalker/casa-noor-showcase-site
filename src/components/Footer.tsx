import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { translations, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Casa Noor</h3>
            <p className="text-gray-300 mb-4">
              {translations.footer_description || 'Premium electrical equipment and solutions for all your needs.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translations.quick_links || 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {translations.home || 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {translations.catalogue || 'Catalogue'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {translations.about || 'About'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  {translations.contact || 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translations.our_companies || 'Our Companies'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Casa Noor
                </Link>
              </li>
              <li>
                <Link to="/company/cablette-casa" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Cablette Casa
                </Link>
              </li>
              <li>
                <Link to="/company/casa-noor-atelier" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Casa Noor Atelier
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translations.contact_us || 'Contact Us'}</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Electrical Avenue</p>
              <p className="mb-2">Casablanca, Morocco</p>
              <p className="mb-2">Email: info@casanoor.com</p>
              <p>Tel: +212-555-1234</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-xl font-semibold mb-6 text-center">{translations.regional_contacts || 'Regional Contacts'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <h4 className="font-semibold">{translations.west_region || 'West Region'}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <p>(+213) 555-123-456</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <p>west@casanoor.com</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <h4 className="font-semibold">{translations.center_region || 'Center Region'}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <p>(+213) 555-789-012</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <p>center@casanoor.com</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <h4 className="font-semibold">{translations.east_region || 'East Region'}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <p>(+213) 555-345-678</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <p>east@casanoor.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Casa Noor. {translations.all_rights_reserved || 'All rights reserved.'}
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors hover:underline">
              {translations.privacy_policy || 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors hover:underline">
              {translations.terms_of_service || 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
