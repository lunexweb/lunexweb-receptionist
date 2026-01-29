import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Google Ads Management",
    description: "Drive targeted traffic and maximize your ROI with expertly managed Google Ads campaigns tailored to your business goals.",
    link: "/services/google-ads",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites designed to convert visitors into customers. We build experiences that grow your business.",
    link: "/services/web-development",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Climb the search rankings and attract organic traffic with our comprehensive SEO strategies and optimization techniques.",
    link: "/services/seo",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">What We Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Services That Drive Results
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            From stunning websites to high-converting ad campaigns, we provide the digital solutions your business needs to thrive online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 sm:p-8 card-shadow hover:card-shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg gold-gradient flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all text-sm sm:text-base"
              >
                Learn More <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button variant="navy" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/services/google-ads">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
