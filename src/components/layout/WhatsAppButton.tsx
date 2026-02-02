import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "27789992503";
  const message = encodeURIComponent("Hi Lunexweb! I'm interested in your services.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-slow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
