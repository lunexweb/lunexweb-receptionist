import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Website Development",
    href: "/services/web-development",
    description: "Custom websites that convert visitors into customers",
  },
  {
    title: "SEO Services",
    href: "/services/seo",
    description: "Rank higher and attract organic traffic",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    description: "See our work across various industries",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-primary font-bold text-lg sm:text-xl font-serif">L</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif text-foreground">
              Lunex<span className="text-secondary">web</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isActive("/") ? "text-secondary" : "text-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isActive("/about") ? "text-secondary" : "text-foreground"
              )}
            >
              About
            </Link>

            <Link
              to="/lunex-ai"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isActive("/lunex-ai") ? "text-secondary" : "text-foreground"
              )}
            >
              Lunex Reception
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent hover:text-secondary data-[state=open]:text-secondary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background border border-border rounded-lg shadow-lg">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/packages"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isActive("/packages") ? "text-secondary" : "text-foreground"
              )}
            >
              Packages
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isActive("/contact") ? "text-secondary" : "text-foreground"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden border-t border-border animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col gap-2 py-4 px-4" aria-label="Mobile navigation">
              <Link
                to="/"
                className="text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/lunex-ai"
                className="text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lunex Reception
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  Services
                  <ChevronDown className={cn("transition-transform", mobileServicesOpen && "rotate-180")} size={18} />
                </button>
                {mobileServicesOpen && (
                  <div id="mobile-services-menu" className="pl-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="block text-muted-foreground py-2 px-2 rounded-md hover:text-secondary hover:bg-muted transition-colors touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/packages"
                className="text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                to="/contact"
                className="text-foreground font-medium py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="hero" className="mt-2 w-full" size="lg" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>

              {/* Contact Details */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Contact Us</p>
                <div className="space-y-2">
                  {/* Phone */}
                  <a
                    href="tel:+27789992503"
                    className="flex items-center gap-3 text-foreground py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Call Us</p>
                      <p className="text-sm font-medium">078 999 2503</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/27789992503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-white fill-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <p className="text-sm font-medium">Chat with us</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@lunexweb.com"
                    className="flex items-center gap-3 text-foreground py-2.5 px-2 rounded-md hover:bg-muted transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium">info@lunexweb.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
