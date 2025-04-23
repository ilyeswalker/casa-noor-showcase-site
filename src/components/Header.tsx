
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Globe, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
    { code: "AR", name: "العربية" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger className="md:hidden text-gray-700 mr-4">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 py-4">
                <Link to="/" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100">
                  Home
                </Link>
                <Link to="/catalogue" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100">
                  Catalogue
                </Link>
                <Link to="/about" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100">
                  About
                </Link>
                <Link to="/contact" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/663badf9-6ce8-4d62-b609-66238221977c.png" 
              alt="CasaNoor Logo" 
              className="h-16"
            />
            <div className="ml-2">
              <span className="text-xl font-bold">
                <span className="text-casanoor-blue">Casa </span>
                <span className="text-casanoor-red">Noor</span>
              </span>
              <div className="text-black text-sm mt-[-5px]">Electric</div>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-casanoor-red transition-colors">
            Home
          </Link>
          <Link to="/catalogue" className="text-gray-700 hover:text-casanoor-red transition-colors">
            Catalogue
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-casanoor-red transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-casanoor-red transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 bg-white border border-gray-200 rounded-md px-3 py-1.5">
              <Globe className="h-4 w-4" />
              <span>{currentLanguage}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang.code)}
                  className="cursor-pointer"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Profile Button */}
          <Link to="/register" className="flex items-center space-x-1 bg-casanoor-red text-white rounded-md px-3 py-1.5 hover:bg-red-700 transition-colors">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
