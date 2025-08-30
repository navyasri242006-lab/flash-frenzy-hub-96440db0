import Header from "@/components/Header";
import HealthcareHero from "@/components/HealthcareHero";
import FindDoctorsSection from "@/components/FindDoctorsSection";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import HealthRecordsSection from "@/components/HealthRecordsSection";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HealthcareHero />
        <FindDoctorsSection />
        <BookAppointmentSection />
        <HealthRecordsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;