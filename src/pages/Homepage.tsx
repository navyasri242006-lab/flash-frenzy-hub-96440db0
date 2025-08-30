import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlashDealsSection from "@/components/FlashDealsSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FlashDealsSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;