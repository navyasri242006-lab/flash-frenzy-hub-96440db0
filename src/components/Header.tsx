import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="font-poppins font-bold text-2xl bg-gradient-hero bg-clip-text text-transparent">
              FlashDeal
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#categories" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#flash-deals" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              Flash Deals
            </a>
            <a href="#coupons" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              Coupons
            </a>
            <a href="#about" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="font-inter font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;