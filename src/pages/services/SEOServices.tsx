import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Search, FileText, Link2, BarChart, Globe, Settings } from "lucide-react";
import heroImage from "@/assets/hero-seo.jpg";

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Identify the most valuable search terms your customers are using to find businesses like yours.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Optimize your website content, meta tags, and structure for better search visibility.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Build high-quality backlinks that boost your domain authority and rankings.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Track your SEO progress with detailed monthly reports and insights.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your area.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description: "Fix technical issues that prevent search engines from properly indexing your site.",
  },
];

const benefits = [
  {
    title: "Long-Term Results",
    description: "Unlike paid ads, SEO builds lasting visibility that continues to deliver traffic over time.",
  },
  {
    title: "Cost-Effective",
    description: "Organic traffic is free. Invest once in SEO and reap the benefits for years.",
  },
  {
    title: "Builds Trust",
    description: "High rankings signal credibility and trust to potential customers.",
  },
  {
    title: "Better ROI",
    description: "SEO delivers some of the highest returns on investment of any marketing channel.",
  },
];

const SEOServices = () => {
  return (
    <Layout>
      <SEO
        title="SEO Services Johannesburg | Get Found on Google - Lunexweb"
        description="Professional SEO services in Johannesburg. Get first page rankings, increased organic traffic, and more leads. Average 150% increase in organic traffic. Free SEO audit available."
        keywords="seo services johannesburg, seo company kempton park, search engine optimization south africa, local seo johannesburg, seo agency south africa, keyword research, link building"
        canonical="/services/seo"
        ogImage={heroImage}
      />
      
      {/* Service Schema */}
      <StructuredData
        type="Service"
        data={{
          serviceType: "SEO Services",
          name: "SEO Services Johannesburg",
          description: "Professional SEO services including keyword research, on-page optimization, link building, local SEO, and technical SEO.",
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
              name: "SEO Services",
              item: "https://lunexweb.co.za/services/seo",
            },
          ],
        }}
      />
      
      <HeroSection
        title="SEO Services Johannesburg - Get Found on Google & Rank Higher"
        subtitle="Our SEO strategies help your business rank higher on Google, attract more organic traffic, and convert visitors into customers—without paying for every click."
        ctaText="Get Free SEO Audit"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="SEO Services Johannesburg - Get found on Google with professional search engine optimization"
        benefits={["First Page Rankings", "Increased Traffic", "More Leads"]}
        trustBadge="Average 150% increase in organic traffic"
        painPoint="Invisible on Google? Your competitors are taking your customers."
      />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our SEO Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We handle every aspect of SEO so you can focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-8 hover:bg-card hover:card-shadow transition-all"
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Why SEO</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6">
              The Benefits of Ranking Higher
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-xl mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Dominate Search Results?"
        subtitle="Get a free SEO audit and discover how we can improve your rankings."
        ctaText="Get Free SEO Audit"
      />
    </Layout>
  );
};

export default SEOServices;
