import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-packages.jpg";

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses that need a professional online presence",
    price: "R4,999",
    period: "once-off",
    popular: false,
    features: [
      "Up to 5-page responsive website",
      "Mobile-friendly design",
      "Contact form integration",
      "Basic on-page SEO setup",
      "1 month support after launch",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses that need more pages and flexibility",
    price: "R14,999",
    period: "once-off",
    popular: true,
    features: [
      "Up to 10-page responsive website",
      "Premium custom design",
      "Expanded on-page SEO",
      "Google Analytics setup",
      "3 months support after launch",
      "Blog/News section if needed",
    ],
  },
  {
    name: "Enterprise",
    description: "For established businesses that need a larger, content-rich website",
    price: "R30,000",
    period: "once-off",
    popular: false,
    features: [
      "Unlimited pages (within agreed scope)",
      "Custom features & integrations",
      "E-commerce or advanced functionality (quoted into scope)",
      "Priority support for 6 months",
      "Advanced SEO & tracking setup",
      "Training session on how to use your site",
    ],
  },
];

const maintenancePackages = [
  {
    name: "Essential Care",
    price: "R499",
    period: "/month",
    includes: [
      "Uptime and basic performance checks",
      "Minor fixes and error checks",
      "Broken link review",
      "Light UI polish (small spacing/alignment tweaks)",
      "Security/dependency review",
    ],
    limits: [
      "No new pages, sections, features, or layouts",
      "No text or image changes",
      "Maintain what already exists, keep it running smoothly",
    ],
  },
  {
    name: "Content Care",
    price: "R999",
    period: "/month",
    includesEssential: true,
    includes: [
      "Everything in Essential Care",
      "Edit existing text you provide (one batch per month)",
      "Replace existing images with new ones you provide (no additions)",
    ],
    limits: [
      "No adding/removing images beyond current slots",
      "No new pages, sections, features, or galleries",
      "Site is not designed for large image volumes",
    ],
  },
  {
    name: "Growth Care",
    price: "R1,499",
    period: "/month",
    includesContentCare: true,
    includes: [
      "Everything in Content Care",
      "Up to 2 small content/image update batches per month",
      "Quarterly website review and tidy-up",
    ],
    limits: [
      "No new pages, sections, or major layout changes",
      "Larger redesigns or features are quoted separately",
    ],
  },
];


const Packages = () => {
  return (
    <Layout>
      <SEO
        title="Pricing & Packages | Website Packages - Lunexweb"
        description="Transparent pricing for website development and maintenance packages. Starting from R4,999 for websites. No hidden fees, flexible options, payment plans available. All packages include free consultation."
        keywords="website pricing south africa, web development packages, website maintenance packages, seo packages south africa"
        canonical="/packages"
        ogImage={heroImage}
      />
      
      {/* BreadcrumbList Schema */}
      <StructuredData
        type="BreadcrumbList"
        data={{
          items: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://lunexweb.co.za/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Packages",
              item: "https://lunexweb.co.za/packages",
            },
          ],
        }}
      />
      
      <HeroSection
        title="Website Packages - Transparent Pricing South Africa"
        subtitle="Choose a package that fits your budget and goals. All packages include quality workmanship and dedicated support. Custom solutions available for unique requirements."
        ctaText="See Our Pricing"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="Lunexweb Pricing and Packages - Transparent pricing for website development"
        benefits={["No Hidden Fees", "Flexible Options", "Payment Plans Available"]}
        trustBadge="All packages include free consultation"
        painPoint="Confused by agency pricing? We keep it simple."
      />

      {/* Website Packages */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Website Packages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Website Development Packages
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Professional websites built to convert visitors into customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-6 sm:p-8 flex flex-col ${
                  pkg.popular
                    ? "ring-2 ring-secondary card-shadow-elevated sm:scale-105"
                    : "card-shadow"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 gold-gradient text-primary px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-current" /> Most Popular
                  </div>
                )}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">From</span>
                    <span className="text-3xl sm:text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm sm:text-base">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] text-secondary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "navy"}
                  className="w-full mt-auto touch-manipulation"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Maintenance Packages */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Maintenance</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Website Maintenance Packages
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mx-auto mb-4">
              Keep your current site stable and tidy, with clear limits and simple monthly pricing. Advanced work and expansion are quoted separately.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-secondary shrink-0" />
                <span>Business: Lunexweb</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-secondary shrink-0" />
                <span>Website: Existing live site (no structural changes)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-secondary shrink-0" />
                <span>Billing: Monthly in advance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-secondary shrink-0" />
                <span>Support: Email/WhatsApp during business hours</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            {maintenancePackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 card-shadow hover:card-shadow-elevated transition-all flex flex-col h-full"
              >
                <div className="text-center mb-6 min-h-[120px] flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">From</span>
                    <span className="text-3xl sm:text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm sm:text-base">{pkg.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic mb-2">Price depends on your website type</p>
                  {pkg.includesEssential && !pkg.includesContentCare && (
                    <p className="text-xs sm:text-sm text-secondary font-medium min-h-[20px]">(Includes Essential Care)</p>
                  )}
                  {pkg.includesContentCare && (
                    <p className="text-xs sm:text-sm text-secondary font-medium min-h-[20px]">(Includes Content Care)</p>
                  )}
                  {!pkg.includesEssential && !pkg.includesContentCare && (
                    <p className="text-xs sm:text-sm text-secondary font-medium min-h-[20px]"></p>
                  )}
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-xs sm:text-sm mb-3 text-foreground min-h-[24px]">What we do:</h4>
                  <ul className="space-y-2 mb-6 min-h-[140px]">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle size={14} className="sm:w-4 sm:h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-xs sm:text-sm mb-3 text-foreground min-h-[24px]">Limits:</h4>
                  <ul className="space-y-2 min-h-[80px]">
                    {pkg.limits.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-muted-foreground">• {item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button variant="navy" className="w-full touch-manipulation" size="lg" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Out of Scope */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="font-serif font-bold text-xl mb-4">Out of Scope (Quoted Separately)</h3>
              <p className="text-sm text-muted-foreground mb-4">If you need any of the following, we'll prepare a separate quote:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• Advanced work and scaling (performance overhauls, load scaling, caching/CDN architecture)</li>
                <li>• Additional pages/sections, new galleries, layout redesigns</li>
                <li>• Feature development, forms, dashboards, custom components</li>
                <li>• E‑commerce, payments, bookings, user accounts</li>
                <li>• CMS setup/migrations, databases, API integrations</li>
                <li>• Multi‑language, accessibility overhauls, complex SEO campaigns</li>
                <li>• Hosting/domain changes, analytics setups beyond basics</li>
                <li>• Bulk media handling or heavy image libraries</li>
              </ul>
            </div>
          </div>

          {/* Process & Terms */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-serif font-bold text-lg mb-4">Process</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0">1.</span>
                  <span>You choose a package.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  <span>For R500, send your single monthly batch of text and replacement images (web‑ready).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground shrink-0">3.</span>
                  <span>We confirm scope and deliver updates. Turnaround: 2–5 business days per request (R500 updates).</span>
                </li>
              </ol>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-serif font-bold text-lg mb-4">Terms</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Payment:</strong> Monthly, in advance. Paused plan = paused service (But your site continues running)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Content:</strong> You supply final text/images. One round of clarifications included per monthly update (R500).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Something Custom?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Every business is unique. If our packages don't quite fit your needs, let's create a custom solution that does.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
