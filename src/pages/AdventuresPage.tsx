import Header from "@/components/Header";
import Adventures from "@/components/Adventures";
import Footer from "@/components/Footer";

const AdventuresPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Adventures />
      </div>
      <Footer />
    </div>
  );
};

export default AdventuresPage;
