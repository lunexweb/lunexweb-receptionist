import { Award, Users, Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to empowering businesses in our community and beyond with exceptional service.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Your dedicated team is always just a call away. We treat your business like our own.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We understand time is money. Get your projects delivered on time, every time.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes. We focus on what works.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Over 50+ satisfied clients trust us with their digital presence and growth.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "We're here when you need us. Reach out anytime via WhatsApp or email.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Why Lunexweb</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Your Success Is Our Mission
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            We're more than just a digital agency. We're your partners in growth, committed to helping your business reach new heights.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-muted transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <reason.icon size={20} className="sm:w-6 sm:h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
