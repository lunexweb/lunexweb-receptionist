import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp, Phone, HeadphonesIcon, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is backed by data and focused on delivering measurable outcomes for your business.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust and transparency.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do, from design to delivery.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We stay ahead of digital trends to ensure your business always has a competitive edge.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us | Lunexweb - Digital Agency in Johannesburg"
        description="Founded in Johannesburg, Lunexweb helps local businesses thrive online. With 50+ happy clients and 100+ projects completed, we combine creativity with strategy to deliver results."
        keywords="about lunexweb, digital agency johannesburg, web development company kempton park, digital marketing team south africa"
        canonical="/about"
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
              name: "About",
              item: "https://lunexweb.co.za/about",
            },
          ],
        }}
      />
      
      <HeroSection
        title="About Lunexweb - Digital Agency in Johannesburg Committed to Your Growth"
        subtitle="Founded in Johannesburg, Lunexweb was born from a passion for helping local businesses thrive in the digital world. We combine creativity with strategy to deliver results that matter."
        ctaText="Start Your Journey"
        ctaLink="/contact"
        backgroundImage={heroImage}
        backgroundImageAlt="About Lunexweb - Digital agency team in Johannesburg committed to business growth"
        benefits={["Local Expertise", "Proven Results", "Dedicated Support"]}
        trustBadge="Proudly serving businesses across South Africa"
        painPoint="Need a partner who truly understands your business?"
      />

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                From Kempton Park to Empowering Businesses Nationwide
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  Lunexweb started with a simple mission: to help local businesses compete and win in the digital space. As an agency based in Kempton Park, Johannesburg, we understand the unique challenges that South African entrepreneurs face.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver websites and marketing campaigns that don't just look good—they generate real results. We believe every business, regardless of size, deserves access to world-class digital solutions.
                </p>
                <p>
                  Today, we're proud to have helped over 50 businesses across various industries transform their online presence and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-xl p-4 sm:p-6 md:p-8 text-center hover:bg-secondary hover:text-secondary-foreground transition-colors group"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-1 sm:mb-2 group-hover:text-secondary-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-xs sm:text-sm group-hover:text-secondary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 text-center card-shadow hover:card-shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon size={24} className="sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lunex AI Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Innovation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Introducing Lunex AI - Never Miss Another Call
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                <p>
                  As part of our commitment to innovation, we've developed <strong className="text-foreground">Lunex AI</strong> - an AI-powered receptionist service that answers calls 24/7, qualifies leads, and books appointments automatically.
                </p>
                <p>
                  Recognizing that many South African businesses struggle with missed calls and lost opportunities, we created Lunex AI to ensure every customer call is answered professionally, even when you're busy or after hours.
                </p>
                <p>
                  Our AI receptionist captures lead information, qualifies prospects, and instantly notifies you via email - ensuring you never miss a potential customer again. Trusted by 100+ businesses across South Africa, Lunex AI represents our dedication to solving real business problems with cutting-edge technology.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">24/7 Availability</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Never miss a call, even after hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <HeadphonesIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Professional Service</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Natural-sounding AI that captures every detail</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Instant Notifications</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Get qualified leads emailed immediately</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Trusted Solution</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Used by 100+ South African businesses</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/lunex-ai">
                  Learn More About Lunex AI <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-8 sm:p-10 md:p-12 text-center text-white shadow-2xl">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <HeadphonesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Lunex AI</h3>
                <p className="text-white/90 text-base sm:text-lg mb-6">
                  Your AI receptionist that never sleeps
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl sm:text-3xl font-bold">10K+</div>
                    <div className="text-xs sm:text-sm text-white/80">Calls Answered</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm text-white/80">Available</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl sm:text-3xl font-bold">100+</div>
                    <div className="text-xs sm:text-sm text-white/80">Businesses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great Together"
        subtitle="Ready to take your business to the next level? We'd love to hear from you."
      />
    </Layout>
  );
};

export default About;
