import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "Service" | "WebSite" | "BreadcrumbList" | "Review" | "SiteNavigationElement";
  data: Record<string, any>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getSchema = () => {
    const baseUrl = "https://lunexweb.co.za";
    
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lunexweb",
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description: "Digital agency offering website development and SEO services across South Africa.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kempton Park",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+27-78-999-2503",
            contactType: "Customer Service",
            email: "info@lunexweb.com",
            areaServed: "ZA",
            availableLanguage: "English",
          },
          sameAs: [
            // Add social media URLs here when available
          ],
          ...data,
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}#business`,
          name: "Lunexweb",
          image: `${baseUrl}/logo.png`,
          description: "Digital agency offering website development and SEO services across South Africa.",
          url: baseUrl,
          telephone: "+27-78-999-2503",
          email: "info@lunexweb.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kempton Park",
            addressLocality: "Kempton Park",
            addressRegion: "Gauteng",
            postalCode: "1619",
            addressCountry: "ZA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -26.1068726,
            longitude: 28.1940990,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "14:00",
            },
          ],
          priceRange: "$$",
          ...data,
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data.serviceType || "Web Development Service",
          provider: {
            "@type": "LocalBusiness",
            "@id": `${baseUrl}#business`,
            name: "Lunexweb",
          },
          areaServed: {
            "@type": "Country",
            name: "South Africa",
          },
          ...data,
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          name: "Lunexweb",
          url: baseUrl,
          description: "Digital agency offering website development and SEO services across South Africa.",
          publisher: {
            "@type": "Organization",
            "@id": `${baseUrl}#organization`,
            name: "Lunexweb",
          },
          inLanguage: "en-ZA",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                url: `${baseUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                url: `${baseUrl}/about`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Services",
                url: `${baseUrl}/services`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Website Development",
                    url: `${baseUrl}/services/web-development`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "SEO Services",
                    url: `${baseUrl}/services/seo`,
                  },
                ],
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Portfolio",
                url: `${baseUrl}/portfolio`,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Packages",
                url: `${baseUrl}/packages`,
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Contact",
                url: `${baseUrl}/contact`,
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Lunex Reception",
                url: `${baseUrl}/lunex-ai`,
              },
            ],
          },
          ...data,
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items || [],
        };

      case "Review":
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "LocalBusiness",
            "@id": `${baseUrl}#business`,
            name: "Lunexweb",
          },
          ...data,
        };

      case "SiteNavigationElement":
        return {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: data.name || "Navigation",
          url: data.url || baseUrl,
          ...data,
        };

      default:
        return data;
    }
  };

  const schema = getSchema();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema, null, 2)}</script>
    </Helmet>
  );
};

export default StructuredData;

