import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "Lunexweb | Web Development & SEO Services in Johannesburg",
  description = "Lunexweb is a digital agency in Johannesburg offering website development and SEO services. Transform your business online.",
  keywords = "web development johannesburg, seo services kempton park, website design johannesburg, digital agency south africa",
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://lunexweb.co.za";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  // Handle ogImage: if it's already a full URL, use it; if it's a relative path, make it absolute; if undefined, use default
  let fullOgImage: string;
  if (ogImage) {
    if (ogImage.startsWith("http")) {
      fullOgImage = ogImage;
    } else if (ogImage.startsWith("/")) {
      fullOgImage = `${siteUrl}${ogImage}`;
    } else {
      // Handle Vite asset imports (they start with /assets/ after build)
      fullOgImage = ogImage.startsWith("/assets/") ? `${siteUrl}${ogImage}` : `${siteUrl}/${ogImage}`;
    }
  } else {
    // Default OG image
    fullOgImage = `${siteUrl}/hero-home.jpg`;
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Lunexweb" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:secure_url" content={fullOgImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Lunexweb" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:locale:alternate" content="af_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@lunexweb" />
      <meta name="twitter:creator" content="@lunexweb" />

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Johannesburg, Kempton Park" />
      <meta name="geo.position" content="-26.1068726;28.1940990" />
      <meta name="ICBM" content="-26.1068726, 28.1940990" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Lunexweb" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;

