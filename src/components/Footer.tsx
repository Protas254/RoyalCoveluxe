import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="RoyalCove" className="h-20 mb-4" />
            <p className="text-foreground/60 text-sm leading-relaxed">
              Luxury holiday homes and coastal adventures across Kenya. 
              Experience the finest in hospitality and unforgettable memories.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Accommodations", "Adventures", "Amenities", "Book Now"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/60 text-sm">
                  Mombasa, Kenya<br />
                  Diani Beach Road
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@royalcove.co.ke"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  info@royalcove.co.ke
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg font-bold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 bg-secondary rounded-xl text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-foreground/60 text-sm">
              Follow us for travel tips, special offers, and coastal inspiration.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            © 2025 RoyalCove. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
