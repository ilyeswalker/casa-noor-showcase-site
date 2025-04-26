
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showBackToTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-casanoor-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </Button>
  );
};

export default BackToTop;
