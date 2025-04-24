
import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    EN: "Your trusted source for premium electrical equipment and cables",
    FR: "Votre source de confiance pour les équipements électriques et les câbles de qualité supérieure",
    AR: "مصدرك الموثوق للمعدات الكهربائية والكابلات المتميزة"
  },
  regional_contacts: {
    EN: "REGIONAL CONTACTS",
    FR: "CONTACTS RÉGIONAUX",
    AR: "جهات الاتصال الإقليمية"
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
  const [language, setLanguage] = useState<LanguageCode>('EN');

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
      {children}
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
