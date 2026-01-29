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
          {/* Pain Point Badge */}
          {painPoint && (
            <div className="inline-flex items-center gap-2 bg-destructive/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
              <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-xs sm:text-sm font-medium">{painPoint}</span>
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

          {/* Benefits */}
          {benefits.length > 0 && (
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                  <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] text-secondary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>

          {/* Trust Badge */}
          {trustBadge && (
            <div className="flex items-center gap-2 text-white/80 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Shield size={16} className="sm:w-[18px] sm:h-[18px] text-secondary shrink-0" />
              <span className="text-xs sm:text-sm">{trustBadge}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
