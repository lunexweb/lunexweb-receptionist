import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Smartphone, Zap, Shield, Search, Palette, Settings } from "lucide-react";
import heroImage from "@/assets/hero-web-dev.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Your website looks stunning on all devices - desktop, tablet, and mobile.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed to keep visitors engaged and improve search rankings.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable hosting infrastructure.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Every site is built with search engines in mind for maximum visibility.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique designs that reflect your brand identity and stand out from competitors.",
  },
  {
    icon: Settings,
    title: "Easy to Manage",
    description: "User-friendly content management so you can update your site with ease.",
  },
];

const types = [
  {
    title: "Business Websites",
    description: "Professional websites that establish credibility and convert visitors into customers.",
  },
  {
    title: "E-Commerce Stores",
    description: "Online stores with secure payment processing and inventory management.",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages for campaigns, products, or lead generation.",
  },
  {
    title: "Portfolio Sites",
    description: "Showcase your work beautifully with stunning portfolio websites.",
  },
];

const WebDevelopment = () => {
  return (
    <Layout>
      <SEO
        title="Website Development Johannesburg | Custom Websites - Lunexweb"
        description="Professional website development in Johannesburg. Custom responsive websites that convert visitors into customers. 100+ websites delivered across South Africa. Fast delivery, ongoing support."
        keywords="website development johannesburg, web design kempton park, custom website south africa, responsive website design, ecommerce website johannesburg, business website development"
        canonical="/services/web-development"
        ogImage={heroImage}
      />
      
      {/* Service Schema */}
      <StructuredData
        type="Service"
        data={{
          serviceType: "Website Development",
          name: "Website Development Johannesburg",
          description: "Professional website development services including responsive design, e-commerce, custom features, and ongoing support.",
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
              name: "Web Development",
              item: "https://lunexweb.co.za/services/web-development",
            },
          ],
        }}
      />
      
      <HeroSection
        title="Website Development Johannesburg - Custom Websites That Convert"
        subtitle="We design and develop custom websites that don't just look beautiful—they convert visitors into paying customers. Your 24/7 digital storefront, built to perform."
        ctaText="Build Your Salesperson Website"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="Website Development Johannesburg - Custom responsive websites that convert visitors into customers"
        benefits={["Custom Design", "Fast Delivery", "Ongoing Support"]}
        trustBadge="100+ websites delivered across South Africa"
        painPoint="Is your outdated website costing you customers?"
      />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              Websites Built for Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every website we build comes packed with features designed to help your business grow online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-8 hover:bg-card hover:card-shadow transition-all"
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-6">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              We Build All Types of Websites
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 card-shadow hover:card-shadow-elevated transition-all hover:-translate-y-1"
              >
                <h3 className="font-serif font-semibold text-xl mb-4">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Your Dream Website"
        subtitle="Get a free consultation and quote for your website project today."
        ctaText="Get Free Consultation"
      />
    </Layout>
  );
};

export default WebDevelopment;
