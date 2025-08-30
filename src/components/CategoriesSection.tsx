import { ShoppingBag, Smartphone, Home, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
  const categories = [
    {
      id: "fashion",
      name: "Fashion",
      icon: ShoppingBag,
      description: "Trendy clothes & accessories",
      dealCount: "2,500+ deals",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: Smartphone,
      description: "Latest tech & gadgets",
      dealCount: "1,800+ deals",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "groceries",
      name: "Groceries",
      icon: Utensils,
      description: "Fresh food & essentials",
      dealCount: "3,200+ deals",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "home",
      name: "Home Essentials",
      icon: Home,
      description: "Furniture & home decor",
      dealCount: "1,900+ deals",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="categories" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
            Trending Categories
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Discover amazing deals across all your favorite categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-card rounded-xl p-6 shadow-card hover:shadow-deal transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10 text-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Category Info */}
                  <div className="space-y-2">
                    <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {category.dealCount}
                    </div>
                  </div>

                  {/* Hover Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Browse Deals
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;