import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  benefits?: string[];
  trustBadge?: string;
  painPoint?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  backgroundImageAlt = "",
  benefits = [],
  trustBadge,
  painPoint,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden" aria-label={backgroundImageAlt || undefined}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label={backgroundImageAlt || undefined}
      />
      {/* Hidden image for SEO */}
      <img
        src={backgroundImage}
        alt={backgroundImageAlt || ""}
        className="sr-only"
        loading="eager"
        aria-hidden="true"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Pain Point - More Prominent */}
          {painPoint && (
            <div className="inline-flex items-center gap-2 bg-destructive/30 backdrop-blur-sm border border-destructive/40 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 animate-fade-in shadow-lg">
              <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-semibold">{painPoint}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>

          {/* Benefits - More Prominent */}
          {benefits.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 animate-fade-in border border-white/20" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-white">
                    <CheckCircle size={18} className="sm:w-5 sm:h-5 text-secondary shrink-0" />
                    <span className="text-sm sm:text-base font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust Badge - Before CTA */}
          {trustBadge && (
            <div className="flex items-center gap-2 text-white/90 mb-4 sm:mb-6 animate-fade-in bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2.5 inline-flex" style={{ animationDelay: "0.4s" }}>
              <Shield size={18} className="sm:w-5 sm:h-5 text-secondary shrink-0" />
              <span className="text-sm sm:text-base font-semibold">{trustBadge}</span>
            </div>
          )}

          {/* CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
