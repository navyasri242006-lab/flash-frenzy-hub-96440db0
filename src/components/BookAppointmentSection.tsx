import DoctorCard from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const BookAppointmentSection = () => {
  // Mock doctor data
  const featuredDoctors = [
    {
      id: "1",
      name: "Sarah Johnson",
      specialty: "Cardiologist",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviewCount: 245,
      experience: 12,
      location: "Downtown Medical Center",
      consultationFee: 150,
      nextAvailable: "Today 2:30 PM",
      isOnline: true
    },
    {
      id: "2", 
      name: "Michael Chen",
      specialty: "General Physician",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviewCount: 189,
      experience: 8,
      location: "City Health Clinic",
      consultationFee: 80,
      nextAvailable: "Tomorrow 10:00 AM",
      isOnline: false
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      specialty: "Dermatologist", 
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviewCount: 156,
      experience: 10,
      location: "Skin Care Center",
      consultationFee: 120,
      nextAvailable: "Today 4:15 PM",
      isOnline: true
    },
    {
      id: "4",
      name: "David Thompson",
      specialty: "Orthopedist",
      image: "/api/placeholder/300/300", 
      rating: 4.6,
      reviewCount: 201,
      experience: 15,
      location: "Bone & Joint Hospital",
      consultationFee: 180,
      nextAvailable: "Tomorrow 11:30 AM",
      isOnline: false
    }
  ];

  return (
    <section id="book-appointment" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-trust text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Calendar className="h-4 w-4" />
            BOOK APPOINTMENT
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
            Featured Doctors
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Book appointments with our highly qualified and experienced healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-medical hover:opacity-90 text-white font-poppins font-semibold px-8"
          >
            View All Doctors
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;