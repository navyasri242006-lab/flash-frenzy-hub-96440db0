import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

// Import product images
import headphonesImg from "@/assets/headphones.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import coffeeMakerImg from "@/assets/coffee-maker.jpg";
import gamingKeyboardImg from "@/assets/gaming-keyboard.jpg";
import powerBankImg from "@/assets/power-bank.jpg";
import deskLampImg from "@/assets/desk-lamp.jpg";

const FlashDealsSection = () => {
  // Mock product data
  const flashDeals = [
    {
      id: "1",
      title: "Wireless Bluetooth Headphones - Premium Sound Quality",
      originalPrice: 199.99,
      salePrice: 49.99,
      image: headphonesImg,
      rating: 4.5,
      reviewCount: 1250,
      discount: 75,
      isFlashSale: true,
      timeLeft: "02:45:12",
    },
    {
      id: "2",
      title: "Smart Fitness Watch - Health & Activity Tracker",
      originalPrice: 299.99,
      salePrice: 89.99,
      image: smartwatchImg,
      rating: 4.3,
      reviewCount: 890,
      discount: 70,
      isFlashSale: true,
      timeLeft: "01:23:45",
    },
    {
      id: "3",
      title: "Premium Coffee Maker - Programmable Brew",
      originalPrice: 149.99,
      salePrice: 59.99,
      image: coffeeMakerImg,
      rating: 4.7,
      reviewCount: 456,
      discount: 60,
      isFlashSale: true,
      timeLeft: "03:12:08",
    },
    {
      id: "4",
      title: "Gaming Mechanical Keyboard - RGB Backlit",
      originalPrice: 129.99,
      salePrice: 39.99,
      image: gamingKeyboardImg,
      rating: 4.6,
      reviewCount: 678,
      discount: 69,
      isFlashSale: true,
      timeLeft: "00:58:34",
    },
    {
      id: "5",
      title: "Portable Phone Charger - 20000mAh Power Bank",
      originalPrice: 79.99,
      salePrice: 24.99,
      image: powerBankImg,
      rating: 4.4,
      reviewCount: 923,
      discount: 69,
      isFlashSale: true,
      timeLeft: "02:17:29",
    },
    {
      id: "6",
      title: "LED Desk Lamp - Adjustable Brightness & Color",
      originalPrice: 89.99,
      salePrice: 27.99,
      image: deskLampImg,
      rating: 4.2,
      reviewCount: 234,
      discount: 69,
      isFlashSale: true,
      timeLeft: "01:45:56",
    },
  ];

  return (
    <section id="flash-deals" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-deal text-white px-4 py-2 rounded-full text-sm font-medium animate-flash-pulse">
            <Clock className="h-4 w-4" />
            LIMITED TIME OFFERS
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
            Flash Deals
            <span className="text-primary ml-2">⚡</span>
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Grab these incredible deals before they're gone! Each item has limited stock and time remaining.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-deal hover:opacity-90 text-white font-poppins font-semibold px-8"
          >
            View All Flash Deals
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashDealsSection;