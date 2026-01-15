import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Accommodations from "@/components/Accommodations";
import Adventures from "@/components/Adventures";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BookingForm />
      <Accommodations />
      <Adventures />
      <Amenities />
      <Footer />
    </div>
  );
};

export default Index;
