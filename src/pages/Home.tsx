import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Home;
