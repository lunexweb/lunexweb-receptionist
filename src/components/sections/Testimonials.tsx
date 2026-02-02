import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thabo Molefe",
    company: "Amonz Construction",
    content: "Lunexweb transformed our online presence completely. Our website now generates consistent leads and our search rankings have improved significantly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Nomsa Dlamini",
    company: "Mohideen Attorneys",
    content: "Professional, responsive, and results-driven. The team at Lunexweb understands what businesses need to succeed in the digital space.",
    rating: 5,
  },
  {
    name: "Sipho Nkosi",
    company: "Elite Shine Car Wash",
    content: "From concept to launch, the experience was seamless. Our new website perfectly captures our brand and has significantly increased customer inquiries.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Lunexweb.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-colors"
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-white/60 text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
