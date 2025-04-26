
import ContactPanel from "../components/ContactPanel";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-center mb-8">
            {translations.about_casanoor || "About CasaNoor"}
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8 transition-all duration-300">
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl text-casanoor-red">
                {translations.our_story || "Our Story"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {translations.our_story_desc || "CasaNoor began with a vision to bring exceptional luxury furnishings to discerning homes. Our journey started with a passion for design and a commitment to quality that continues to drive everything we do."}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-playfair text-2xl text-casanoor-red">
                {translations.our_mission || "Our Mission"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {translations.our_mission_desc || "We strive to transform living spaces into extraordinary environments that reflect the unique style and sophistication of our clients. Through carefully curated collections and exceptional service, we aim to be the premier destination for luxury home furnishings."}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-playfair text-2xl text-casanoor-red">
                {translations.our_vision || "Our Vision"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {translations.our_vision_desc || "To be recognized globally as the leading purveyor of fine furnishings, setting new standards in luxury home decor while maintaining our commitment to quality, craftsmanship, and customer satisfaction."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactPanel />
    </div>
  );
};

export default About;
