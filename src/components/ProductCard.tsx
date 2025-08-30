import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount: number;
  isFlashSale?: boolean;
  timeLeft?: string;
}

const ProductCard = ({
  title,
  originalPrice,
  salePrice,
  image,
  rating,
  reviewCount,
  discount,
  isFlashSale = false,
  timeLeft,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-deal transition-all duration-300 hover:-translate-y-1">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge
          variant="destructive"
          className={`font-poppins font-bold text-xs px-2 py-1 ${
            isFlashSale ? "animate-flash-pulse bg-gradient-deal" : ""
          }`}
        >
          -{discount}%
        </Badge>
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background text-muted-foreground hover:text-primary"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isFlashSale && timeLeft && (
          <div className="absolute bottom-2 right-2 bg-accent/90 text-accent-foreground px-2 py-1 rounded text-xs font-medium animate-countdown-blink">
            {timeLeft}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-inter font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="font-poppins font-bold text-lg text-primary">
            ${salePrice.toFixed(2)}
          </span>
          <span className="font-inter text-sm text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full bg-gradient-deal hover:opacity-90 text-white font-medium font-inter group-hover:animate-deal-bounce">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;