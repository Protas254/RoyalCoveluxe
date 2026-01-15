import Header from "@/components/Header";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Amenities />
      </div>
      <Footer />
    </div>
  );
};

export default AmenitiesPage;
