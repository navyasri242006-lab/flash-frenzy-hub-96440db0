import { Button } from "@/components/ui/button";
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Pill, Activity } from "lucide-react";

const FindDoctorsSection = () => {
  const specialties = [
    {
      id: "general",
      name: "General Physician",
      icon: Stethoscope,
      description: "Primary care and routine checkups",
      doctors: 45,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      id: "cardiology", 
      name: "Cardiologist",
      icon: Heart,
      description: "Heart and cardiovascular care",
      doctors: 12,
      color: "bg-red-50 text-red-600 border-red-200"
    },
    {
      id: "neurology",
      name: "Neurologist", 
      icon: Brain,
      description: "Brain and nervous system",
      doctors: 8,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      id: "ophthalmology",
      name: "Ophthalmologist",
      icon: Eye,
      description: "Eye care and vision health",
      doctors: 15,
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      id: "orthopedics",
      name: "Orthopedist",
      icon: Bone,
      description: "Bone, joint and muscle care",
      doctors: 20,
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      id: "pediatrics",
      name: "Pediatrician",
      icon: Baby,
      description: "Child and infant healthcare",
      doctors: 18,
      color: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      id: "dermatology",
      name: "Dermatologist",
      icon: Activity,
      description: "Skin, hair and nail care",
      doctors: 10,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200"
    },
    {
      id: "pharmacy",
      name: "Pharmacist",
      icon: Pill,
      description: "Medication consultation",
      doctors: 25,
      color: "bg-teal-50 text-teal-600 border-teal-200"
    }
  ];

  return (
    <section id="find-doctors" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
            Find a Doctor
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Choose from our network of qualified specialists and healthcare professionals
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            
            return (
              <div 
                key={specialty.id}
                className={`bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${specialty.color} hover:scale-105`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${specialty.color.replace('border-', 'bg-').replace('text-', 'text-white bg-')}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      {specialty.name}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mb-3">
                      {specialty.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {specialty.doctors} doctors available
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full font-inter font-medium"
                  >
                    View Doctors
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-medical hover:opacity-90 text-white font-poppins font-semibold px-8"
          >
            View All Specialties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FindDoctorsSection;