
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Companies from "../components/home/Companies";
import ContactPanel from "../components/ContactPanel";
import BackToTop from "../components/home/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Companies />
      <ContactPanel />
      <BackToTop />
    </div>
  );
};

export default Index;
