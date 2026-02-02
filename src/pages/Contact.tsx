import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-contact.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Kempton Park, Johannesburg\nSouth Africa",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "078 999 2503",
    link: "tel:+27789992503",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@lunexweb.com",
    link: "mailto:info@lunexweb.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 8am - 6pm\nSat: 9am - 2pm",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const whatsappMessage = encodeURIComponent("Hi Lunexweb! I'm interested in your services and would like to discuss my project.");

  return (
    <Layout>
      <SEO
        title="Contact Us | Lunexweb - Get Your Free Consultation"
        description="Get in touch with Lunexweb for a free consultation. Serving businesses across South Africa. Call 078 999 2503 or email info@lunexweb.com. We typically respond within 2 hours."
        keywords="contact lunexweb, free consultation south africa, web development quote, seo consultation south africa, lunexweb contact"
        canonical="/contact"
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
              name: "Contact",
              item: "https://lunexweb.co.za/contact",
            },
          ],
        }}
      />
      
      <HeroSection
        title="Contact Lunexweb - Get Your Free Consultation"
        subtitle="Ready to take your business to the next level? Get in touch with our team for a free consultation. We're here to help you succeed online."
        ctaText="Discuss Your Project"
        ctaLink="tel:+27789992503"
        backgroundImage={heroImage}
        backgroundImageAlt="Contact Lunexweb - Get in touch for a free consultation"
        benefits={["Free Consultation", "Quick Response", "No Obligation"]}
        trustBadge="We typically respond within 2 hours"
        painPoint="Have questions? We have answers."
      />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-6 sm:p-8 card-shadow">
              <h2 className="text-xl sm:text-2xl font-serif font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 sm:h-11 px-3 rounded-md border border-input bg-background text-sm touch-manipulation"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Your Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="text-sm sm:text-base"
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full touch-manipulation" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold mb-2">Get in Touch</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                Prefer to reach out directly? Here's how you can contact us.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <info.icon size={20} className="sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          aria-label={`${info.title}: ${info.content}`}
                          className="text-muted-foreground text-sm sm:text-base hover:text-secondary transition-colors whitespace-pre-line touch-manipulation"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm sm:text-base whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-muted rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="sm:w-6 sm:h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Prefer WhatsApp?</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Get instant responses on WhatsApp</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full touch-manipulation"
                  size="lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/27789992503?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Location</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Based in Kempton Park, Johannesburg
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            While we're proudly based in Kempton Park, we serve clients across South Africa and beyond. Distance is no barrier to great work.
          </p>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden card-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57349.39689389751!2d28.194099099999998!3d-26.1068726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951c5c3ed7e2d5%3A0x7a9c3e8f9b5a8c0e!2sKempton%20Park%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lunexweb Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
