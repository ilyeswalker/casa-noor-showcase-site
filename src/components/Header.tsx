
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-playfair text-2xl text-casanoor-red font-bold">
          CasaNoor
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-casanoor-blue transition-colors">
            Home
          </Link>
          <Link to="/catalogue" className="text-gray-700 hover:text-casanoor-blue transition-colors">
            Catalogue
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-casanoor-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-casanoor-blue transition-colors">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - to be implemented */}
          <button className="text-gray-700">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
