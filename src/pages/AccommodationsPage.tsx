import Header from "@/components/Header";
import Accommodations from "@/components/Accommodations";
import Footer from "@/components/Footer";

const AccommodationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Accommodations />
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationsPage;
