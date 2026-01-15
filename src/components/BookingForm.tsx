import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import poolResort from "@/assets/pool-resort.png";

const accommodationTypes = [
  { value: "standard", label: "Standard Room", price: "KES 3,500 - 5,000/night" },
  { value: "deluxe", label: "Deluxe Room", price: "KES 6,000 - 8,500/night" },
  { value: "apartment", label: "1-Bedroom Apartment", price: "KES 7,500 - 10,000/night" },
  { value: "holiday-home", label: "Holiday Home", price: "KES 12,000 - 16,000/night" },
];

const extraServices = [
  { value: "airport", label: "Airport Transfer" },
  { value: "car-hire", label: "Private Car Hire" },
  { value: "photoshoot", label: "Beach Photoshoot" },
  { value: "boat-tour", label: "Boat Tour" },
  { value: "safari", label: "Safari Experience" },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    checkIn: "",
    checkOut: "",
    accommodation: "",
    guests: "",
    services: "",
  });

  const handleWhatsAppBooking = () => {
    const message = `Hello RoyalCove! I'd like to book:
    
Name: ${formData.fullName}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Accommodation: ${formData.accommodation}
Guests: ${formData.guests}
Extra Services: ${formData.services || "None"}

Please confirm availability and pricing.`;

    window.open(
      `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="booking" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient-gold">Book Your Stay</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Reserve your dream getaway at Kenya's most exclusive coastal destination
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-luxury"
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-foreground/80 mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="bg-input border-border"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn" className="text-foreground/80 mb-2 block">
                    <CalendarDays className="inline h-4 w-4 mr-2" />
                    Check-in Date *
                  </Label>
                  <Input
                    id="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData({ ...formData, checkIn: e.target.value })
                    }
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="checkOut" className="text-foreground/80 mb-2 block">
                    <CalendarDays className="inline h-4 w-4 mr-2" />
                    Check-out Date *
                  </Label>
                  <Input
                    id="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData({ ...formData, checkOut: e.target.value })
                    }
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div>
                <Label className="text-foreground/80 mb-2 block">
                  <Home className="inline h-4 w-4 mr-2" />
                  Accommodation Type *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, accommodation: value })
                  }
                >
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Select accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    {accommodationTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <span className="font-medium">{type.label}</span>
                        <span className="text-muted-foreground ml-2 text-sm">
                          ({type.price})
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="guests" className="text-foreground/80 mb-2 block">
                  <Users className="inline h-4 w-4 mr-2" />
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="Enter number of guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="bg-input border-border"
                />
              </div>

              <div>
                <Label className="text-foreground/80 mb-2 block">
                  Extra Services
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, services: value })
                  }
                >
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Select extra services (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {extraServices.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="gold" size="lg" className="flex-1">
                  Calculate Price
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleWhatsAppBooking}
                >
                  <Phone className="h-4 w-4" />
                  Book via WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={poolResort}
                alt="Luxury resort pool"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-primary font-serif text-2xl mb-2">
                  Tropical Paradise Awaits
                </p>
                <p className="text-foreground/80">
                  Experience the ultimate coastal luxury in Kenya
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
