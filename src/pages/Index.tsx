
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Companies from "../components/home/Companies";
import BackToTop from "../components/home/BackToTop";
import ContactPanel from "../components/ContactPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <Companies />
      <ContactPanel />
      <BackToTop />
    </div>
  );
};

export default Index;
