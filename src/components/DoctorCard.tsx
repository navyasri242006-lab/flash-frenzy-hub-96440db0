import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviewCount: number;
  experience: number;
  location: string;
  consultationFee: number;
  nextAvailable: string;
  isOnline?: boolean;
}

const DoctorCard = ({
  name,
  specialty,
  image,
  rating,
  reviewCount,
  experience,
  location,
  consultationFee,
  nextAvailable,
  isOnline = false
}: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden border border-border hover:border-primary/20">
      {/* Doctor Image & Status */}
      <div className="relative">
        <div className="aspect-square w-full bg-gray-100 flex items-center justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-poppins font-bold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        {isOnline && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Online
          </div>
        )}
      </div>

      {/* Doctor Info */}
      <div className="p-6 space-y-4">
        {/* Name & Specialty */}
        <div>
          <h3 className="font-poppins font-semibold text-lg text-foreground">
            Dr. {name}
          </h3>
          <p className="font-inter text-sm text-primary font-medium">
            {specialty}
          </p>
        </div>

        {/* Rating & Experience */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-muted-foreground">
            {experience} years exp.
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {/* Consultation Fee */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-poppins font-semibold text-lg text-foreground">
              ${consultationFee}
            </span>
            <span className="text-sm text-muted-foreground">consultation</span>
          </div>
        </div>

        {/* Next Available */}
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Next available:</span>
          <span className="font-medium text-foreground">{nextAvailable}</span>
        </div>

        {/* Book Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;