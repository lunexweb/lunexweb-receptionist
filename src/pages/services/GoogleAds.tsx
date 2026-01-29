import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, BarChart3, Target, TrendingUp, DollarSign, Users } from "lucide-react";
import heroImage from "@/assets/hero-google-ads.jpg";

const benefits = [
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Reach customers actively searching for your products or services with precision targeting.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description: "Track every click, conversion, and rand spent with comprehensive analytics and reporting.",
  },
  {
    icon: DollarSign,
    title: "Budget Control",
    description: "Set your own budget and only pay when someone clicks on your ad. Complete cost control.",
  },
  {
    icon: TrendingUp,
    title: "Instant Visibility",
    description: "Get your business in front of potential customers immediately, unlike organic SEO.",
  },
  {
    icon: Users,
    title: "Remarketing",
    description: "Re-engage visitors who've shown interest with targeted follow-up campaigns.",
  },
  {
    icon: CheckCircle,
    title: "A/B Testing",
    description: "Continuously optimize your campaigns with data-driven testing and improvements.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, competitors, and goals to create a winning campaign strategy.",
  },
  {
    step: "02",
    title: "Campaign Setup",
    description: "Expert keyword research, ad copy creation, and campaign structure optimization.",
  },
  {
    step: "03",
    title: "Launch & Monitor",
    description: "We launch your campaigns and monitor performance closely, making real-time adjustments.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Continuous optimization to improve ROI and scale successful campaigns for growth.",
  },
];

const GoogleAds = () => {
  return (
    <Layout>
      <SEO
        title="Google Ads Management Johannesburg | PPC Advertising - Lunexweb"
        description="Google Ads Certified Partner in Johannesburg. High-performing campaigns that target the right customers and deliver measurable ROI. Transparent reporting, no long contracts. Free ads audit available."
        keywords="google ads johannesburg, ppc advertising south africa, google ads management kempton park, paid search marketing, google ads certified partner, adwords management south africa"
        canonical="/services/google-ads"
        ogImage={heroImage}
      />
      
      {/* Service Schema */}
      <StructuredData
        type="Service"
        data={{
          serviceType: "Google Ads Management",
          name: "Google Ads Management Johannesburg",
          description: "Google Ads Certified Partner offering campaign setup, management, optimization, and reporting for businesses in South Africa.",
          offers: {
            "@type": "Offer",
            priceCurrency: "ZAR",
            availability: "https://schema.org/InStock",
          },
        }}
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
              name: "Google Ads",
              item: "https://lunexweb.co.za/services/google-ads",
            },
          ],
        }}
      />
      
      <HeroSection
        title="Google Ads Management Johannesburg - High-Converting PPC Campaigns"
        subtitle="Our Google Ads experts create high-performing campaigns that target the right customers and deliver measurable ROI. Every rand you spend works harder for your business."
        ctaText="Get a Free Ads Audit"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="Google Ads Management Johannesburg - High-performing PPC campaigns with certified experts"
        benefits={["Certified Experts", "Transparent Reporting", "No Long Contracts"]}
        trustBadge="Google Ads Certified Partner"
        painPoint="Tired of throwing money at ads with no results?"
      />

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Why Google Ads</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              Turn Searches Into Sales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Google Ads puts your business at the top of search results when customers are actively looking for what you offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-8 hover:bg-card hover:card-shadow transition-all"
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-6">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              How We Deliver Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-serif font-bold text-secondary/30 mb-4">{item.step}</div>
                <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Boost Your Leads?"
        subtitle="Get a free Google Ads audit and see how we can improve your campaign performance."
        ctaText="Get Free Ads Audit"
      />
    </Layout>
  );
};

export default GoogleAds;
