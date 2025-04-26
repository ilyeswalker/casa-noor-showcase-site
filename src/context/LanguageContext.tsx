import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type LanguageCode = 'EN' | 'FR' | 'AR';

interface TranslationMap {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: TranslationMap = {
  home: {
    EN: "Home",
    FR: "Accueil",
    AR: "الرئيسية"
  },
  catalogue: {
    EN: "Catalogue",
    FR: "Catalogue",
    AR: "الكتالوج"
  },
  about: {
    EN: "About",
    FR: "À Propos",
    AR: "حول"
  },
  contact: {
    EN: "Contact",
    FR: "Contact",
    AR: "اتصل بنا"
  },
  profile: {
    EN: "Profile",
    FR: "Profil",
    AR: "الملف الشخصي"
  },
  featured_products: {
    EN: "Featured Products",
    FR: "Produits Vedettes",
    AR: "المنتجات المميزة"
  },
  our_companies: {
    EN: "Our Companies",
    FR: "Nos Entreprises",
    AR: "شركاتنا"
  },
  explore_products: {
    EN: "Explore Our Products",
    FR: "Explorez Nos Produits",
    AR: "استكشف منتجاتنا"
  },
  west_region: {
    EN: "WEST REGION",
    FR: "RÉGION OUEST",
    AR: "المنطقة الغربية"
  },
  center_region: {
    EN: "CENTER REGION",
    FR: "RÉGION CENTRE",
    AR: "المنطقة الوسطى"
  },
  east_region: {
    EN: "EAST REGION",
    FR: "RÉGION EST",
    AR: "المنطقة الشرقية"
  },
  contact_info: {
    EN: "CONTACT INFO",
    FR: "COORDONNÉES",
    AR: "معلومات الاتصال"
  },
  customer_service: {
    EN: "CUSTOMER SERVICE",
    FR: "SERVICE CLIENT",
    AR: "خدمة العملاء"
  },
  product_categories: {
    EN: "PRODUCT CATEGORIES",
    FR: "CATÉGORIES DE PRODUITS",
    AR: "فئات المنتجات"
  },
  subscribe_newsletter: {
    EN: "SUBSCRIBE TO NEWSLETTER",
    FR: "ABONNEZ-VOUS À LA NEWSLETTER",
    AR: "اشترك في النشرة الإخبارية"
  },
  newsletter_desc: {
    EN: "Get the latest updates about new products and upcoming sales",
    FR: "Recevez les dernières mises à jour sur les nouveaux produits et les ventes à venir",
    AR: "احصل على آخر التحديثات حول المنتجات الجديدة والمبيعات القادمة"
  },
  subscribe: {
    EN: "Subscribe",
    FR: "S'abonner",
    AR: "اشترك"
  },
  enter_email: {
    EN: "Enter your email",
    FR: "Entrez votre e-mail",
    AR: "أدخل بريدك الإلكتروني"
  },
  trusted_source: {
    EN: "Fabrication et distribution câble et accessoires électriques",
    FR: "Fabrication et distribution câble et accessoires électriques",
    AR: "تصنيع وتوزيع الكابلات والملحقات الكهربائية"
  },
  regional_contacts: {
    EN: "REGIONAL CONTACTS",
    FR: "CONTACTS RÉGIONAUX",
    AR: "جهات الاتصال الإقليمية"
  },
  starting_from: {
    EN: "Starting from",
    FR: "À partir de",
    AR: "يبدأ من"
  },
  learn_more: {
    EN: "Learn More",
    FR: "En Savoir Plus",
    AR: "اقرأ المزيد"
  },
  ready_explore: {
    EN: "Ready to explore our products?",
    FR: "Prêt à explorer nos produits?",
    AR: "هل أنت مستعد لاستكشاف منتجاتنا؟"
  },
  browse_catalogue: {
    EN: "Browse our complete catalogue of cables and wires to find the perfect solution for your electrical needs.",
    FR: "Parcourez notre catalogue complet de câbles pour trouver la solution parfaite à vos besoins électriques.",
    AR: "تصفح كتالوج الكابلات لدينا للعثور على الحل المثالي لاحتياجاتك الكهربائية"
  },
  view_catalogue: {
    EN: "View Catalogue",
    FR: "Voir le Catalogue",
    AR: "عرض الكتالوج"
  },
  about_company: {
    EN: "About Cablette Casa",
    FR: "À Propos de Cablette Casa",
    AR: "حول كابلات كازا"
  },
  company_desc: {
    EN: "Founded in 2005, Cablette Casa has grown to become one of the leading manufacturers of electrical cables and wires in the region.",
    FR: "Fondée en 2005, Cablette Casa est devenue l'un des principaux fabricants de câbles électriques de la région.",
    AR: "تأسست كابلات كازا في عام 2005، ونمت لتصبح واحدة من الشركات الرائدة في تصنيع الكابلات والأسلاك الكهربائية في المنطقة"
  },
  quality_desc: {
    EN: "We take pride in our craftsmanship and our commitment to providing electrical solutions that power homes, businesses, and industries across the country.",
    FR: "Nous sommes fiers de notre savoir-faire et de notre engagement à fournir des solutions électriques qui alimentent les maisons, les entreprises et les industries à travers le pays.",
    AR: "نحن نفخر بحرفيتنا والتزامنا بتقديم حلول كهربائية تغذي المنازل والشركات والصناعات في جميع أنحاء البلاد"
  },
  about_casanoor: {
    EN: "About CasaNoor",
    FR: "À Propos de CasaNoor",
    AR: "حول كازا نور"
  },
  our_story: {
    EN: "Our Story",
    FR: "Notre Histoire",
    AR: "قصتنا"
  },
  our_story_desc: {
    EN: "CasaNoor began with a vision to bring exceptional luxury furnishings to discerning homes. Our journey started with a passion for design and a commitment to quality that continues to drive everything we do.",
    FR: "CasaNoor a commencé avec la vision d'apporter des meubles de luxe exceptionnels aux maisons les plus exigeantes. Notre voyage a commencé avec une passion pour le design et un engagement envers la qualité qui continue de guider tout ce que nous faisons.",
    AR: "بدأت كازا نور برؤية لتقديم مفروشات فاخرة استثنائية للمنازل المميزة. بدأت رحلتنا بشغف للتصميم والتزام بالجودة يستمر في توجيه كل ما نقوم به."
  },
  our_mission: {
    EN: "Our Mission",
    FR: "Notre Mission",
    AR: "مهمتنا"
  },
  our_mission_desc: {
    EN: "We strive to transform living spaces into extraordinary environments that reflect the unique style and sophistication of our clients.",
    FR: "Nous nous efforçons de transformer les espaces de vie en environnements extraordinaires qui reflètent le style unique et la sophistication de nos clients.",
    AR: "نسعى جاهدين لتحويل مساحات المعيشة إلى بيئات استثنائية تعكس الأسلوب الفريد والرقي لعملائنا."
  },
  our_vision: {
    EN: "Our Vision",
    FR: "Notre Vision",
    AR: "رؤيتنا"
  },
  our_vision_desc: {
    EN: "To be recognized globally as the leading purveyor of fine furnishings, setting new standards in luxury home decor.",
    FR: "Être reconnu mondialement comme le principal fournisseur de meubles raffinés, établissant de nouvelles normes dans la décoration de maison de luxe.",
    AR: "أن نكون معروفين عالمياً كأفضل مزود للمفروشات الراقية، ونضع معايير جديدة في ديكور المنازل الفاخرة."
  },
  contact_us: {
    EN: "Contact Us",
    FR: "Contactez-Nous",
    AR: "اتصل بنا"
  },
  name: {
    EN: "Name",
    FR: "Nom",
    AR: "الاسم"
  },
  message: {
    EN: "Message",
    FR: "Message",
    AR: "الرسالة"
  },
  send_message: {
    EN: "Send Message",
    FR: "Envoyer le Message",
    AR: "إرسال الرسالة"
  },
  contact_information: {
    EN: "Contact Information",
    FR: "Informations de Contact",
    AR: "معلومات الاتصال"
  },
  business_hours: {
    EN: "Business Hours",
    FR: "Heures d'Ouverture",
    AR: "ساعات العمل"
  },
  monday_friday: {
    EN: "Monday - Friday",
    FR: "Lundi - Vendredi",
    AR: "الإثنين - الجمعة"
  },
  saturday: {
    EN: "Saturday",
    FR: "Samedi",
    AR: "السبت"
  },
  sunday: {
    EN: "Sunday",
    FR: "Dimanche",
    AR: "الأحد"
  },
  closed: {
    EN: "Closed",
    FR: "Fermé",
    AR: "مغلق"
  },
  phone: {
    EN: "Phone",
    FR: "Téléphone",
    AR: "الهاتف"
  }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  translations: { [key: string]: string };
  getTranslation: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage as LanguageCode) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
  }, [language]);

  const getTranslation = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const translatedTexts = Object.keys(translations).reduce((acc, key) => {
    acc[key] = getTranslation(key);
    return acc;
  }, {} as { [key: string]: string });

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      translations: translatedTexts,
      getTranslation
    }}>
      <div className="transition-all duration-300 ease-in-out">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
