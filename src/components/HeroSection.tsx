import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { Zap, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  // Flash sale ends in 6 hours from now
  const flashSaleEndTime = new Date(Date.now() + 6 * 60 * 60 * 1000);

  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Flash Sale Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-medium animate-flash-pulse">
            <Zap className="h-4 w-4 text-yellow-400" />
            FLASH SALE NOW LIVE
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
              Incredible Deals
              <br />
              <span className="text-yellow-400 animate-flash-pulse">
                Up to 80% OFF
              </span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Don't miss out on our biggest flash sale event! Limited time offers on thousands of products.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-4">
            <h2 className="font-poppins font-semibold text-xl md:text-2xl">
              Sale Ends In:
            </h2>
            <div className="flex justify-center">
              <CountdownTimer targetDate={flashSaleEndTime} size="lg" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-white/90 font-poppins font-semibold text-lg px-8 py-6 animate-urgent-glow"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shop Flash Deals
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent font-inter font-medium px-8 py-6"
            >
              View All Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm opacity-90">
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl">50K+</div>
              <div className="font-inter">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl">10K+</div>
              <div className="font-inter">Products on Sale</div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl">24/7</div>
              <div className="font-inter">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;