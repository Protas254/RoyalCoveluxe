import { motion } from "framer-motion";
import { Compass, Ship, Camera, TreePalm } from "lucide-react";
import { Button } from "@/components/ui/button";
import adventureBoat from "@/assets/adventure-boat.jpg";
import adventureSafari from "@/assets/adventure-safari.jpg";
import adventureSunset from "@/assets/adventure-sunset.jpg";

const adventures = [
  {
    id: 1,
    title: "Boat Tours",
    description: "Explore the stunning Kenyan coastline on traditional dhow boats with snorkeling stops.",
    image: adventureBoat,
    price: "From KES 2,000",
    icon: Ship,
    duration: "3-6 hours",
  },
  {
    id: 2,
    title: "Safari Excursions",
    description: "Witness majestic wildlife on unforgettable game drives through Kenya's national parks.",
    image: adventureSafari,
    price: "From KES 8,000",
    icon: Compass,
    duration: "Full Day",
  },
  {
    id: 3,
    title: "Sunset Romance",
    description: "Private beach dinners, sunset cruises, and romantic experiences for couples.",
    image: adventureSunset,
    price: "From KES 5,000",
    icon: Camera,
    duration: "2-4 hours",
  },
];

const Adventures = () => {
  return (
    <section id="adventures" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Coastal Adventures
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient-gold">Experiences</span> & Tours
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Create unforgettable memories with our curated selection of adventures and experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden h-[500px] shadow-luxury"
            >
              {/* Background Image */}
              <img
                src={adventure.image}
                alt={adventure.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                    <adventure.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/60 text-sm">{adventure.duration}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-2">{adventure.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{adventure.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{adventure.price}</span>
                  <Button variant="goldOutline" size="sm" asChild>
                    <a href="#booking">Book Now</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <TreePalm className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Airport Transfer</p>
                <p className="text-sm text-foreground/60">From KES 3,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Private Car Hire</p>
                <p className="text-sm text-foreground/60">From KES 5,000/day</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Beach Photoshoot</p>
                <p className="text-sm text-foreground/60">From KES 8,000</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Adventures;
