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
        title="Lunexweb | Web Development & SEO Services in South Africa"
        description="Lunexweb is a digital agency offering website development and SEO services across South Africa. Transform your business online. Based in Kempton Park, trusted nationwide."
        keywords="web development south africa, seo services south africa, website design south africa, digital agency south africa"
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
        title="Web Development & SEO Services in South Africa | Lunexweb"
        subtitle="We build stunning websites and optimize them for search engines to put your business in front of the right people, at the right time. Serving businesses across South Africa."
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/portfolio"
        backgroundImage={heroImage}
        backgroundImageAlt="Lunexweb digital agency offering web development and SEO services across South Africa"
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
