import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-serif">L</span>
              </div>
              <span className="text-2xl font-bold font-serif">
                Lunex<span className="text-secondary">web</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              Empowering businesses with cutting-edge digital solutions. We're proudly based in Johannesburg.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/lunexweb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/lunexweb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/lunexweb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/lunexweb" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/google-ads" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  Kempton Park, Johannesburg<br />South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <a href="tel:+27789992503" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  078 999 2503
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <a href="mailto:info@lunexweb.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@lunexweb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Lunexweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
