import { motion } from "framer-motion";
import { Waves, Dumbbell, Wifi, Car, UtensilsCrossed, Shield, Sun, Sparkles } from "lucide-react";
import sunriseView from "@/assets/sunrise-view.png";
import gym from "@/assets/gym.png";

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Resort-style pools with ocean views" },
  { icon: Dumbbell, title: "Fitness Center", description: "Modern gym equipment & classes" },
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
  { icon: Car, title: "Free Parking", description: "Secure on-site parking" },
  { icon: UtensilsCrossed, title: "Restaurant", description: "Local & international cuisine" },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock protection" },
  { icon: Sun, title: "Beach Access", description: "Private beach paths" },
  { icon: Sparkles, title: "Daily Housekeeping", description: "Pristine room service" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            World-Class Facilities
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Premium <span className="text-gradient-gold">Amenities</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Every detail is crafted to provide you with an exceptional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src={sunriseView}
                alt="Sunrise ocean view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-serif text-primary">
                Ocean Views
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 mt-8">
              <img
                src={gym}
                alt="Gym and fitness area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-serif text-primary">
                Fitness Center
              </p>
            </div>
          </motion.div>

          {/* Amenities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <amenity.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{amenity.title}</h3>
                  <p className="text-sm text-foreground/60">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
