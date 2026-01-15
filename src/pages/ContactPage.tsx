import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Contact <span className="text-gradient-gold">Us</span>
              </h1>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                We're here to help you plan your perfect getaway. Reach out to us anytime.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-foreground/60">
                      Diani Beach Road<br />
                      Mombasa, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-foreground/60">+254 700 000 000</p>
                    <p className="text-foreground/60">+254 711 111 111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-foreground/60">reservations@royalcove.co.ke</p>
                    <p className="text-foreground/60">info@royalcove.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-foreground/60">Check-in: 2:00 PM</p>
                    <p className="text-foreground/60">Check-out: 11:00 AM</p>
                    <p className="text-foreground/60 mt-2">Reception: 24/7</p>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col justify-center"
              >
                <div className="bg-gradient-gold p-8 rounded-2xl text-center">
                  <div className="p-4 bg-background/10 rounded-full w-fit mx-auto mb-6">
                    <MessageCircle className="h-12 w-12 text-background" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-background mb-4">
                    Chat With Us on WhatsApp
                  </h3>
                  <p className="text-background/80 mb-6">
                    Get instant responses to your inquiries. Our team is ready to help you plan your perfect stay.
                  </p>
                  <Button
                    variant="secondary"
                    size="xl"
                    className="bg-background text-primary hover:bg-background/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/254700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Start Chat Now
                    </a>
                  </Button>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-border h-64 bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-3" />
                    <p className="text-foreground/40">Interactive Map</p>
                    <p className="text-foreground/30 text-sm">Diani Beach, Kenya</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
