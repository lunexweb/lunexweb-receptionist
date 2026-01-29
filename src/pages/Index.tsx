import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Lunexweb | Web Development, Google Ads & SEO Services in Johannesburg"
        description="Lunexweb is a digital agency in Johannesburg offering website development, Google Ads management, and SEO services. Transform your business online. Based in Kempton Park, trusted across South Africa."
        keywords="web development johannesburg, google ads south africa, seo services kempton park, digital marketing agency, website design johannesburg, online marketing south africa"
        canonical="/"
        ogImage={heroImage}
      />
      
      {/* Organization Schema */}
      <StructuredData
        type="Organization"
        data={{
          "@id": "https://lunexweb.co.za#organization",
        }}
      />
      
      {/* LocalBusiness Schema */}
      <StructuredData
        type="LocalBusiness"
        data={{
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "50",
            bestRating: "5",
            worstRating: "1",
          },
        }}
      />
      
      {/* WebSite Schema */}
      <StructuredData
        type="WebSite"
        data={{}}
      />
      
      {/* Site Navigation Elements for Sitelinks */}
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "About",
          url: "https://lunexweb.co.za/about",
        }}
      />
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "Website Development",
          url: "https://lunexweb.co.za/services/web-development",
        }}
      />
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "Google Ads Management",
          url: "https://lunexweb.co.za/services/google-ads",
        }}
      />
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "SEO Services",
          url: "https://lunexweb.co.za/services/seo",
        }}
      />
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "Portfolio",
          url: "https://lunexweb.co.za/portfolio",
        }}
      />
      <StructuredData
        type="SiteNavigationElement"
        data={{
          name: "Contact",
          url: "https://lunexweb.co.za/contact",
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
          ],
        }}
      />
      
      <HeroSection
        title="Web Development & Digital Marketing Services in Johannesburg | Lunexweb"
        subtitle="We build stunning websites and run high-converting ad campaigns that put your business in front of the right people, at the right time. Based in Johannesburg, trusted across South Africa."
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/portfolio"
        backgroundImage={heroImage}
        backgroundImageAlt="Lunexweb digital agency in Johannesburg offering web development, Google Ads, and SEO services"
        benefits={["Free Consultation", "ROI Focused", "Local Expertise"]}
        trustBadge="Trusted by 50+ South African businesses"
        painPoint="Struggling to get noticed online?"
      />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
