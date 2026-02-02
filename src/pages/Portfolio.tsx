import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-portfolio.jpg";
import securityImage from "@/assets/Gemini_Generated_Image_jnvstcjnvstcjnvs.png";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "construction", label: "Construction" },
  { id: "security", label: "Security" },
  { id: "fashion", label: "Shoes & Clothing" },
  { id: "legal", label: "Law Firms" },
  { id: "education", label: "Schools" },
  { id: "automotive", label: "Automotive" },
  { id: "solar", label: "Solar & Energy" },
  { id: "medical", label: "Medical & Healthcare" },
  { id: "beauty", label: "Beauty & Salon" },
  { id: "mlm", label: "MLM" },
];

const projects = [
  {
    id: 1,
    title: "Construction",
    category: "construction",
    description: "Modern construction company website with project showcase and inquiry system.",
    url: "https://amonz-group.vercel.app/",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 2,
    title: "Security",
    category: "security",
    description: "Professional security services website with service listings and contact features.",
    url: "https://tshwaneng-security.vercel.app/",
    image: securityImage,
  },
  {
    id: 3,
    title: "Thembani Shoes",
    category: "fashion",
    description: "E-commerce ready footwear and clothing store with modern design.",
    url: "https://thembani-shoes.vercel.app/",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
  },
  {
    id: 4,
    title: "Attorneys",
    category: "legal",
    description: "Professional law firm website with practice areas and consultation booking.",
    url: "https://mohideen-attorneys.vercel.app/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    id: 5,
    title: "Supero School",
    category: "education",
    description: "Educational institution website with programs and enrollment information.",
    url: "https://supero-school.vercel.app/",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
  {
    id: 6,
    title: "SA Steel Business",
    category: "education",
    description: "Steel industry business website with product catalog and inquiries.",
    url: "https://sa-steel-business.vercel.app/",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    id: 7,
    title: "Elite Shine Car Wash",
    category: "automotive",
    description: "Premium car wash service website with booking and pricing information.",
    url: "https://eliteshineproject.netlify.app",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80",
  },
  {
    id: 8,
    title: "Solar Quench",
    category: "solar",
    description: "Professional solar energy solutions website showcasing renewable energy services and installations.",
    url: "https://www.solarquench.co.za/",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: 9,
    title: "Unique Medical and Wellness",
    category: "medical",
    description: "Comprehensive medical and wellness practice website with services, appointments, and patient resources.",
    url: "https://www.uniquemedicalandwellness.com/",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    id: 10,
    title: "Medical Practice",
    category: "medical",
    description: "Professional medical practitioner website featuring services, credentials, and patient consultation information.",
    url: "https://olean-nthabi.vercel.app/",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    id: 11,
    title: "Car Dealership",
    category: "automotive",
    description: "Modern car dealership website with vehicle inventory, financing options, and online inquiry system.",
    url: "https://amulak-motors.vercel.app/",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
  {
    id: 12,
    title: "Day Care",
    category: "education",
    description: "Childcare and daycare center website with programs, enrollment information, and parent resources.",
    url: "https://just-like-home.vercel.app/",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  },
  {
    id: 13,
    title: "Security Company",
    category: "security",
    description: "Professional security services website with comprehensive service offerings and client solutions.",
    url: "https://dominant-1.vercel.app/",
    image: securityImage,
  },
  {
    id: 14,
    title: "Security Company",
    category: "security",
    description: "Modern security company website featuring security solutions, services, and consultation options.",
    url: "https://dominant-2.vercel.app/",
    image: securityImage,
  },
  {
    id: 15,
    title: "MLM",
    category: "mlm",
    description: "Multi-level marketing platform with member portal, product catalog, and commission tracking system.",
    url: "https://www.motleeorganics.com/",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Our Portfolio | Website Projects - Lunexweb"
        description="Explore our portfolio of successful website projects across diverse industries. Over 100 successful projects delivered including construction, security, fashion, legal, education, and more."
        keywords="lunexweb portfolio, website examples south africa, web design portfolio south africa, website projects, case studies, web development examples"
        canonical="/portfolio"
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
              name: "Portfolio",
              item: "https://lunexweb.co.za/portfolio",
            },
          ],
        }}
      />
      
      <HeroSection
        title="Our Portfolio - Website Projects Across South Africa"
        subtitle="From construction to fashion, we've helped businesses across industries establish a powerful online presence. Explore our portfolio and imagine what we can do for you."
        ctaText="Get Your Results"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="Lunexweb Portfolio - Over 100 successful website projects across diverse industries"
        benefits={["Diverse Industries", "Proven Results", "Happy Clients"]}
        trustBadge="Over 100 successful projects delivered"
        painPoint="Ready to join our success stories?"
      />

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Projects Across Industries
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all touch-manipulation ${
                  activeCategory === category.id
                    ? "gold-gradient text-primary"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project - ${project.description}`}
                className="group block bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    loading="lazy"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-semibold text-lg sm:text-xl">{project.title}</h3>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Be Our Next Success Story?"
        subtitle="Let's discuss how we can create something amazing for your business."
      />
    </Layout>
  );
};

export default Portfolio;
