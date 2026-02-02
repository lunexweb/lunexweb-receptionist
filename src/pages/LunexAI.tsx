import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Phone, 
  Clock, 
  HeadphonesIcon, 
  MessageSquare, 
  Bell, 
  Mic, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Wrench,
  Scissors,
  Home,
  Car,
  Smartphone,
  PhoneOff,
  Timer,
  Users,
  Shield,
  Play,
  Mail,
  MapPin,
  Stethoscope,
  Scale,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Briefcase
} from "lucide-react";

const LunexAI = () => {
  return (
    <Layout>
      <SEO
        title="Lunex Reception | 24/7 Virtual Receptionist - Never Miss Another Customer Call"
        description="Professional call answering service that answers calls 24/7 and captures leads. Trusted by 100+ South African businesses. Setup in 30 minutes. Starting from R1,499/month."
        keywords="virtual receptionist south africa, call answering service, 24/7 receptionist johannesburg, phone answering service, receptionist service south africa"
        canonical="/lunex-ai"
        ogImage="/hero-home.jpg"
      />
      
      {/* Service Schema */}
      <StructuredData
        type="Service"
        data={{
          serviceType: "Virtual Receptionist Service",
          name: "Lunex Reception",
          description: "24/7 call answering service that answers calls and captures leads for businesses.",
          offers: {
            "@type": "Offer",
            priceCurrency: "ZAR",
            price: "1999",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1999",
              priceCurrency: "ZAR",
              unitText: "MONTH",
            },
            availability: "https://schema.org/InStock",
          },
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Lunex Reception",
              item: "https://lunexweb.co.za/lunex-ai",
            },
          ],
        }}
      />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">24/7 Call Answering</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-sans">
                Never Miss Another Customer Call - Your 24/7 Receptionist
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
                Professional call answering service that answers every call, captures details, and notifies you instantly. Never lose money from missed calls again.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button size="xl" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all touch-manipulation">
                  Get Your 24/7 Receptionist <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button size="xl" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 touch-manipulation">
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-black" /> See How It Works
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-primary-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs sm:text-sm font-bold">
                      {['L', 'N', 'A', 'I'][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-lunex-orange">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm">Trusted by 100+ South African businesses</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 text-center text-primary-foreground">
                  <p className="text-xl sm:text-2xl font-bold">10,000+</p>
                  <p className="text-white/70 text-xs sm:text-sm">Calls Answered</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 text-center text-primary-foreground">
                  <p className="text-xl sm:text-2xl font-bold">24/7</p>
                  <p className="text-white/70 text-xs sm:text-sm">Availability</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 text-center text-primary-foreground">
                  <p className="text-xl sm:text-2xl font-bold">30 sec</p>
                  <p className="text-white/70 text-xs sm:text-sm">Setup Time</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block text-foreground">
              <div className="relative">
                {/* Left Card - Stressed */}
                <div className="absolute -left-4 top-8 bg-card rounded-2xl p-6 shadow-2xl w-64 transform -rotate-3 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <PhoneOff className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-lunex-text">Missed Call</p>
                      <p className="text-sm text-gray-500">Customer lost</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-red-600 font-medium">-R2,000</p>
                    <p className="text-xs text-red-400">Potential revenue lost</p>
                  </div>
                </div>

                {/* Right Card - Relaxed */}
                <div className="absolute right-0 top-20 bg-card rounded-2xl p-6 shadow-2xl w-64 transform rotate-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-lunex-text">Receptionist Answered</p>
                      <p className="text-sm text-gray-500">Lead captured</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-green-600 font-medium">+R2,000</p>
                    <p className="text-xs text-green-400">New booking secured</p>
                  </div>
                </div>

                {/* Center Phone */}
                <div className="mx-auto w-72 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center text-center min-h-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <HeadphonesIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-base mb-1">Receptionist Active</h3>
                      <p className="text-muted-foreground text-xs mb-3">Answering incoming call...</p>
                      <div className="flex items-center gap-2 text-green-500">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium">Live</span>
                      </div>
                    </div>
                      <div className="bg-gray-100 rounded-2xl p-3 mt-auto shrink-0">
                        <p className="text-[10px] text-muted-foreground mb-1.5">Latest notification: 12/01/2026 | 09:28</p>
                      <div className="space-y-1 text-[10px] text-foreground leading-tight">
                        <p className="font-semibold text-[9px]">🔥 NEW LEAD RECEIVED 🔥</p>
                        <div className="border-t border-gray-300 my-1"></div>
                        <p className="font-semibold text-[9px]">CUSTOMER DETAILS:</p>
                        <div className="border-t border-gray-300 my-1"></div>
                        <div className="space-y-0.5">
                          <p className="leading-tight">👤 Name: Kevin</p>
                          <p className="leading-tight">📞 Phone: 078 999 2503</p>
                          <p className="leading-tight">📍 Location: Johannesburg</p>
                          <p className="leading-tight">💼 Problem: Looking for a web developer to create a brand new website.</p>
                          <p className="leading-tight">⚠️ Urgent: Yes</p>
                        </div>
                        <div className="border-t border-gray-300 my-1"></div>
                        <p className="flex items-center gap-1 leading-tight">
                          <Mic className="w-2.5 h-2.5 text-blue-600 shrink-0" />
                          <span className="font-semibold">Recording:</span>
                        </p>
                        <span className="text-blue-600 text-[9px] break-all leading-tight block">
                          https://dxc03zgurdly9.cloudfront.net/aa0d77f78bc9132041403c20c306b12e5ef95a7a09531e8663bae30f9d289e5b/recording.wav
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Every Missed Call is Money Lost
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The average small business misses 27% of calls. That's <span className="font-bold text-secondary">R15,000+ lost every month</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                  <PhoneOff className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Missed Opportunities</h3>
                <p className="text-muted-foreground">
                  You're on a job site. Phone rings. Customer calls the next business. <span className="font-semibold text-red-500">You lose R2,000.</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                  <Timer className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">After Hours Losses</h3>
                <p className="text-muted-foreground">
                  It's 8PM. Customer needs emergency service. Your phone goes to voicemail. <span className="font-semibold text-orange-500">Competitor gets the job.</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Overwhelmed</h3>
                <p className="text-muted-foreground">
                  You're with a customer. Three calls come in. You can't answer. <span className="font-semibold text-yellow-600">Three leads gone.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Your 24/7 Receptionist Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We answer every call professionally, capture all the details your customers share, and notify you instantly. Simple, reliable, and always available.
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 hidden md:block" style={{ left: '60%' }}></div>
              <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">Step 1</span>
              <h3 className="text-xl font-bold text-foreground mb-2">Customer Calls</h3>
              <p className="text-muted-foreground">Customer dials your business number</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                <HeadphonesIcon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 hidden md:block" style={{ left: '60%' }}></div>
              <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">Step 2</span>
              <h3 className="text-xl font-bold text-foreground mb-2">We Answer Instantly</h3>
              <p className="text-muted-foreground">Professional greeting, asks questions, captures all details</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Bell className="w-10 h-10 text-white" />
              </div>
              <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">Step 3</span>
              <h3 className="text-xl font-bold text-foreground mb-2">You Get Notified</h3>
              <p className="text-muted-foreground">Instant WhatsApp alert with customer info. You call back and close the deal.</p>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 cursor-pointer shadow-2xl border-2 border-white/20">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Never Miss a Lead
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Availability", desc: "Never miss calls during nights, weekends, or holidays. Your receptionist works around the clock." },
              { icon: MessageSquare, title: "Professional Greeting", desc: "Custom greeting with your business name. Customers hear a professional receptionist, not voicemail." },
              { icon: Users, title: "Lead Capture", desc: "Captures name, phone number, service needed, address, and urgency level. All the details you need." },
              { icon: Bell, title: "Instant Notifications", desc: "Email alerts the moment a call ends. Never wait to follow up on a warm lead." },
              { icon: Mic, title: "Call Recording", desc: "Every conversation recorded and saved. Listen back anytime to hear exactly what your customer said." },
            ].map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-lunex-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Busy Business Owners
            </h2>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-6" style={{ width: 'max-content' }}>
                {[
                  { icon: Wrench, title: "Trades & Services", desc: "Plumbers, electricians, handymen, HVAC, locksmiths", tagline: "Stop losing calls when you're on job sites" },
                  { icon: Scissors, title: "Beauty & Wellness", desc: "Salons, spas, barbers, mobile beauty, fitness trainers", tagline: "Book appointments while you're with clients" },
                  { icon: Home, title: "Home Services", desc: "Cleaners, gardeners, pool services, pest control", tagline: "Never miss a booking again" },
                  { icon: Car, title: "Mobile Services", desc: "Mobile mechanics, car washes, mobile pet grooming", tagline: "Available when your customers need you" },
                  { icon: Smartphone, title: "Solo Entrepreneurs", desc: "Real estate agents, insurance agents, consultants, coaches", tagline: "Professional image without the overhead" },
                  { icon: Stethoscope, title: "Medical & Healthcare", desc: "Doctors, dentists, clinics, physiotherapists, specialists", tagline: "Never miss an emergency call" },
                  { icon: Scale, title: "Legal Services", desc: "Lawyers, attorneys, legal consultants, paralegals", tagline: "Professional availability around the clock" },
                  { icon: Building2, title: "Real Estate", desc: "Agents, brokers, property managers, developers", tagline: "Capture leads even after hours" },
                  { icon: UtensilsCrossed, title: "Food & Hospitality", desc: "Restaurants, cafes, catering, food trucks", tagline: "Take bookings while you cook" },
                  { icon: GraduationCap, title: "Education", desc: "Tutors, training centers, online courses, schools", tagline: "Enroll students anytime" },
                  { icon: Briefcase, title: "Professional Services", desc: "Consultants, accountants, financial advisors", tagline: "Always available for your clients" },
                ].map((industry, index) => (
                  <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group flex-shrink-0 w-[280px] rounded-xl overflow-hidden">
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                          <industry.icon className="w-7 h-7 text-secondary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{industry.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{industry.desc}</p>
                        <p className="text-primary text-sm font-medium italic">"{industry.tagline}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { icon: Wrench, title: "Trades & Services", desc: "Plumbers, electricians, handymen, HVAC, locksmiths", tagline: "Stop losing calls when you're on job sites" },
                  { icon: Scissors, title: "Beauty & Wellness", desc: "Salons, spas, barbers, mobile beauty, fitness trainers", tagline: "Book appointments while you're with clients" },
                  { icon: Home, title: "Home Services", desc: "Cleaners, gardeners, pool services, pest control", tagline: "Never miss a booking again" },
                  { icon: Car, title: "Mobile Services", desc: "Mobile mechanics, car washes, mobile pet grooming", tagline: "Available when your customers need you" },
                  { icon: Smartphone, title: "Solo Entrepreneurs", desc: "Real estate agents, insurance agents, consultants, coaches", tagline: "Professional image without the overhead" },
                  { icon: Stethoscope, title: "Medical & Healthcare", desc: "Doctors, dentists, clinics, physiotherapists, specialists", tagline: "Never miss an emergency call" },
                  { icon: Scale, title: "Legal Services", desc: "Lawyers, attorneys, legal consultants, paralegals", tagline: "Professional availability around the clock" },
                  { icon: Building2, title: "Real Estate", desc: "Agents, brokers, property managers, developers", tagline: "Capture leads even after hours" },
                  { icon: UtensilsCrossed, title: "Food & Hospitality", desc: "Restaurants, cafes, catering, food trucks", tagline: "Take bookings while you cook" },
                  { icon: GraduationCap, title: "Education", desc: "Tutors, training centers, online courses, schools", tagline: "Enroll students anytime" },
                  { icon: Briefcase, title: "Professional Services", desc: "Consultants, accountants, financial advisors", tagline: "Always available for your clients" },
                ].map((industry, index) => (
                  <Card key={`duplicate-${index}`} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group flex-shrink-0 w-[280px] rounded-xl overflow-hidden">
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                          <industry.icon className="w-7 h-7 text-secondary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{industry.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{industry.desc}</p>
                        <p className="text-primary text-sm font-medium italic">"{industry.tagline}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-primary via-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
              Simple, Transparent <span className="headline-underline">Pricing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Starter Plan */}
            <Card className="border-0 shadow-2xl bg-card overflow-hidden flex flex-col h-full">
              <div className="bg-transparent text-transparent text-center py-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4"></div>
                  <p className="font-semibold invisible">Most Popular</p>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Starter Plan</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">R1,499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">Setup Fee: R3,999 (once-off)</p>
                  <p className="text-sm text-secondary font-medium mt-1">Includes first month 120 minutes FREE</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Dedicated business phone number",
                    "24/7 receptionist service",
                    "120 call minutes / month",
                    "Lead capture & qualification",
                    "Instant email notifications",
                    "Call recordings",
                    "Email support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className={feature.includes("call minutes") ? "font-bold text-black" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6">
                    Get Your 24/7 Receptionist <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="border-0 shadow-2xl bg-card overflow-hidden relative flex flex-col h-full">
              <div className="bg-secondary text-secondary-foreground text-center py-3">
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <p className="font-semibold">Most Popular</p>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Professional Plan</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">R1,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">Setup Fee: R3,999 (once-off)</p>
                  <p className="text-sm text-secondary font-medium mt-1">Includes first month 120 minutes FREE</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Starter",
                    "300 call minutes / month",
                    "Priority call handling",
                    "Priority email support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className={feature.includes("call minutes") ? "font-bold text-black" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg py-6">
                    Get Your 24/7 Receptionist <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-0 shadow-2xl bg-card overflow-hidden flex flex-col h-full">
              <div className="bg-transparent text-transparent text-center py-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4"></div>
                  <p className="font-semibold invisible">Most Popular</p>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Premium Plan</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">R2,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">Setup Fee: R3,999 (once-off)</p>
                  <p className="text-sm text-secondary font-medium mt-1">Includes first month 120 minutes FREE</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Everything in Professional",
                    "600 call minutes / month",
                    "Priority onboarding",
                    "Custom call greeting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className={feature.includes("call minutes") ? "font-bold text-black" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6">
                    Get Your 24/7 Receptionist <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Minutes Note */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
              <p className="text-sm md:text-base">
                Additional minutes are billed at R6.50 per minute.<br />
                You will be notified by email when you approach your monthly limit.
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="font-medium">Month-to-Month • No Long-Term Contract</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Business Owners Across South Africa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Mike Johnson",
                company: "Mike's Plumbing, Johannesburg",
                quote: "I was missing 15-20 calls every week when I was on jobs. Since getting Lunex Reception, I haven't missed a single lead. Paid for itself in the first week.",
              },
              {
                name: "Sarah Nkosi",
                company: "Elite Hair Studio, Sandton",
                quote: "My clients love that they can always reach someone, even when I'm busy with another customer. Bookings are up 40%.",
              },
              {
                name: "David Chen",
                company: "Chen Electrical Services, Cape Town",
                quote: "Best investment I've made for my business. The receptionist sounds professional, captures all the details, and my customers get the help they need, every time.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-muted">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-lunex-orange fill-lunex-orange" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground text-sm">Active Businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How does the receptionist sound?", a: "Professional and natural. Customers get a helpful, friendly greeting that represents your business well. You can hear a demo above." },
                { q: "What if the receptionist can't handle a call?", a: "We capture all details and notify you immediately. You can call back within minutes while the lead is still warm." },
                { q: "Can I use my existing business number?", a: "You'll get a new professional number (087 prefix). We recommend branding this as your main business line." },
                { q: "How long does setup take?", a: "30 minutes. We'll configure everything for your business, set up your number, and test it with you to make sure it's perfect." },
                { q: "What happens if I exceed my monthly minutes?", a: "Additional minutes are billed at R6.50 per minute. You'll receive an email notification when you approach your monthly limit." },
                { q: "Can I cancel anytime?", a: "Yes. Month-to-month with no long-term contract. Cancel anytime with 30 days notice." },
                { q: "What areas do you cover?", a: "All of South Africa. We provide 087 and 060 numbers that work nationwide." },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border-0 shadow-sm px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Capturing Every Lead Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 100+ South African businesses that never miss a customer call
            </p>

            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-xl px-12 py-8 shadow-lg hover:shadow-xl transition-all mb-8">
              Get Your 24/7 Receptionist <ArrowRight className="ml-2" />
            </Button>

            {/* What Happens Next */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="font-bold text-lg mb-6">What Happens Next:</h3>
              <div className="grid md:grid-cols-4 gap-6 text-left">
                {[
                  "Fill out quick form (2 minutes)",
                  "Schedule 30-min setup call",
                  "Go live within 24 hours",
                  "Start capturing every call",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Free */}
            <p className="text-white/80 mb-8">
              Month-to-month • No long-term contract • Cancel anytime
            </p>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <span className="font-medium">Prefer to talk first?</span>
              <a href="tel:+27789992503" aria-label="Call us at 078 999 2503" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> 078 999 2503
              </a>
              <a href="mailto:info@lunexweb.com" aria-label="Email us at info@lunexweb.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@lunexweb.com
              </a>
              <a href="https://wa.me/27789992503" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is provided by the shared Layout */}
    </Layout>
  );
};

export default LunexAI;
