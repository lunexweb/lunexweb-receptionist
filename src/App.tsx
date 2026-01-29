import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import GoogleAds from "./pages/services/GoogleAds";
import WebDevelopment from "./pages/services/WebDevelopment";
import SEOServices from "./pages/services/SEOServices";
import Portfolio from "./pages/Portfolio";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import LunexAI from "./pages/LunexAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/google-ads" element={<GoogleAds />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/seo" element={<SEOServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lunex-ai" element={<LunexAI />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
