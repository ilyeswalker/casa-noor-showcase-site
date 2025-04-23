
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPanel = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-casanoor-blue" />
            <div>
              <h3 className="font-playfair text-lg">Phone</h3>
              <p className="text-gray-600">(+213) 555-123-456</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-casanoor-blue" />
            <div>
              <h3 className="font-playfair text-lg">Email</h3>
              <p className="text-gray-600">contact@casanoor.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-casanoor-blue" />
            <div>
              <h3 className="font-playfair text-lg">Address</h3>
              <p className="text-gray-600">123 Business Street, Algeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
