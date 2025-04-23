
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Input } from "./ui/input";

const ContactPanel = () => {
  return (
    <div className="bg-[#8B2942] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">CONTACT INFO</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <p>(+213) 555-123-456</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <p>contact@casanoor.com</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/account" className="hover:text-gray-300">My account</a></li>
              <li><a href="/orders" className="hover:text-gray-300">Orders history</a></li>
              <li><a href="/search" className="hover:text-gray-300">Advanced search</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">PRODUCT CATEGORIES</h3>
            <ul className="space-y-2">
              <li><a href="/category/cables" className="hover:text-gray-300">Cables & Wires</a></li>
              <li><a href="/category/connectors" className="hover:text-gray-300">Connectors</a></li>
              <li><a href="/category/power" className="hover:text-gray-300">Power Equipment</a></li>
              <li><a href="/category/accessories" className="hover:text-gray-300">Accessories</a></li>
              <li><a href="/category/tools" className="hover:text-gray-300">Tools</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">SUBSCRIBE TO NEWSLETTER</h3>
            <p className="text-sm">Get the latest updates about new products and upcoming sales</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <button className="bg-white text-[#8B2942] px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
