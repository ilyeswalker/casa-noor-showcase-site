
import ContactPanel from "../components/ContactPanel";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-center mb-8">
            {translations.contact_us || "Contact Us"}
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                  {translations.name || "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  {translations.email || "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  {translations.message || "Message"}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue transition-all duration-200"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-casanoor-blue text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                {translations.send_message || "Send Message"}
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-xl mb-4">
                    {translations.contact_information || "Contact Information"}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Email: contact@casanoor.com</p>
                    <p>{translations.phone || "Phone"}: (555) 123-4567</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-4">
                    {translations.business_hours || "Business Hours"}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>{translations.monday_friday || "Monday - Friday"}: 9:00 AM - 6:00 PM</p>
                    <p>{translations.saturday || "Saturday"}: 10:00 AM - 4:00 PM</p>
                    <p>{translations.sunday || "Sunday"}: {translations.closed || "Closed"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactPanel />
    </div>
  );
};

export default Contact;
