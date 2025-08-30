import { Button } from "@/components/ui/button";
import { Search, Calendar, Shield, Users } from "lucide-react";

const HealthcareHero = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-medium">
                <Shield className="h-4 w-4 text-green-400" />
                TRUSTED HEALTHCARE PLATFORM
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Your Health,
                  <br />
                  <span className="text-green-400">
                    Our Priority
                  </span>
                </h1>
                <p className="font-inter text-lg md:text-xl text-white/90 max-w-xl">
                  Book appointments with trusted doctors, manage your health records, and access quality healthcare services - all in one place.
                </p>
              </div>

              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-1 max-w-lg">
                <div className="flex items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input 
                      type="text" 
                      placeholder="Search doctors, specialties, or hospitals..."
                      className="w-full bg-transparent text-white placeholder-white/60 px-12 py-4 rounded-lg focus:outline-none"
                    />
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white m-1 px-6 py-4">
                    Search
                  </Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold text-lg px-8 py-6"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-inter font-medium px-8 py-6"
                >
                  Emergency Help
                </Button>
              </div>
            </div>

            {/* Healthcare Illustration */}
            <div className="relative lg:ml-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <div className="bg-white/20 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">24/7 Healthcare Support</h3>
                <p className="text-white/80 mb-6">Connect with qualified doctors anytime, anywhere</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-poppins font-bold text-2xl">500+</div>
                    <div className="font-inter text-white/80">Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="font-poppins font-bold text-2xl">50K+</div>
                    <div className="font-inter text-white/80">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="font-poppins font-bold text-2xl">99%</div>
                    <div className="font-inter text-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;