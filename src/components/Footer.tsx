import { Facebook, Twitter, Instagram, Youtube, Smartphone, CreditCard, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-accent-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-poppins font-bold text-2xl">
              Never Miss a Deal!
            </h3>
            <p className="font-inter text-accent-foreground/80">
              Subscribe to get notified about flash sales and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-poppins font-bold text-2xl bg-gradient-hero bg-clip-text text-transparent">
              FlashDeal
            </div>
            <p className="font-inter text-sm text-accent-foreground/80">
              Your ultimate destination for incredible flash sale deals. Save big on thousands of products daily.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-accent-foreground/60 hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/60 hover:text-accent-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/60 hover:text-accent-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/60 hover:text-accent-foreground">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", "Contact", "FAQ", "Shipping Info", "Returns", "Privacy Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block font-inter text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Categories</h4>
            <div className="space-y-2">
              {["Fashion", "Electronics", "Home & Garden", "Sports", "Beauty", "Automotive"].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block font-inter text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* App Download & Support */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Get Our App</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                <Smartphone className="h-5 w-5 mr-2" />
                Download App
              </Button>
            </div>
            <div className="pt-4">
              <h5 className="font-inter font-medium text-sm mb-3">Customer Support</h5>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div>📧 support@flashdeal.com</div>
                <div>📞 1-800-FLASH-DEAL</div>
                <div>💬 24/7 Live Chat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-accent-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-inter text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="font-inter text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span className="font-inter text-sm">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-accent-foreground/60 font-inter">
            © 2024 FlashDeal. All rights reserved. Built with ❤️ for deal hunters.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;