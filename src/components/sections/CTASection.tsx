import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CTASection = ({
  title = "Ready to Grow Your Business?",
  subtitle = "Let's discuss how we can help you achieve your digital goals. Get a free consultation today.",
  ctaText = "Get Your Free Quote",
  ctaLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 card-shadow-elevated">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4">{title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <Link to={ctaLink} className="gap-2">
              {ctaText} <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
