import ContactPanel from "../components/ContactPanel";

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-center mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-casanoor-blue"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-casanoor-blue text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-xl mb-4">Contact Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Email: contact@casanoor.com</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Panel */}
      <ContactPanel />
    </div>
  );
};

export default Contact;
