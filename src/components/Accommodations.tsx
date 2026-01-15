import { motion } from "framer-motion";
import { Star, Wifi, Wind, Coffee, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";

const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean View",
    description: "Spacious room with stunning ocean views, private balcony, and premium amenities.",
    image: room1,
    price: "KES 6,000 - 8,500",
    features: ["Ocean View", "King Bed", "Balcony", "Breakfast Included"],
    amenities: [Wifi, Wind, Coffee, Bath],
  },
  {
    id: 2,
    name: "Premium Suite",
    description: "Elegant suite featuring modern decor, separate living area, and luxurious bathroom.",
    image: room2,
    price: "KES 7,500 - 10,000",
    features: ["Garden View", "King Bed", "Living Room", "Mini Bar"],
    amenities: [Wifi, Wind, Coffee, Bath],
  },
  {
    id: 3,
    name: "Executive Room",
    description: "Sophisticated room with contemporary design, work desk, and all modern conveniences.",
    image: room3,
    price: "KES 3,500 - 5,000",
    features: ["City View", "Queen Bed", "Work Desk", "Free Parking"],
    amenities: [Wifi, Wind, Coffee, Bath],
  },
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Accommodations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Luxury <span className="text-gradient-gold">Stays</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Experience unparalleled comfort in our carefully curated selection of rooms and suites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-luxury transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-sm font-medium">5.0</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{room.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="flex gap-3 mb-6">
                  {room.amenities.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="h-5 w-5 text-primary/70"
                    />
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary font-bold text-lg">{room.price}</span>
                    <span className="text-foreground/50 text-sm">/night</span>
                  </div>
                  <Button variant="goldOutline" size="sm" asChild>
                    <a
                      href="https://wa.me/254759984132"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
