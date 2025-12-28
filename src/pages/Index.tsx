import { Tv, Clock, Shield, Wrench, Phone, MapPin, Users, CheckCircle, Zap, Headphones, Monitor, Volume2, Lightbulb, Cpu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tvRepairHero from "@/assets/tv-repair-hero.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Tv className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">Vizag TV Repair Expert</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="tel:7815944046">
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              <Phone className="w-4 h-4" />
              7815944046
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                TV Repair Service in Vizag | Vizag TV Repair Expert
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Vizag TV Repair Expert provides reliable LED, LCD, and Smart TV repair services in Vizag City.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We offer fast, professional, and affordable TV repair service at your doorstep.
              </p>
              
              <a href="tel:7815944046">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Phone className="w-5 h-5" />
                  Call Now: 7815944046
                </Button>
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src={tvRepairHero} 
                alt="Professional TV repair technician fixing LED TV" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              About Vizag TV Repair Expert
            </h2>
            <div className="space-y-4 text-muted-foreground text-center">
              <p>
                Vizag TV Repair Expert is an independent TV repair service provider serving Vizag City.
                We specialize in diagnosing and repairing LED, LCD, and Smart TVs for residential customers.
              </p>
              <p>
                Our focus is on honest service, clear communication, and quality repair solutions.
              </p>
              <p className="text-sm italic border-l-4 border-primary pl-4 text-left bg-card py-3 rounded-r-lg">
                Vizag TV Repair Expert is not an authorized service center and is not associated with any TV brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Our TV Repair Services
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            We provide complete TV repair solutions, including:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: "LED TV Repair", icon: Monitor },
              { name: "LCD TV Repair", icon: Tv },
              { name: "Smart TV Repair", icon: Zap },
              { name: "TV Not Powering On", icon: Lightbulb },
              { name: "Screen & Display Issues", icon: Monitor },
              { name: "Sound Problems", icon: Volume2 },
              { name: "Backlight Repair", icon: Lightbulb },
              { name: "Motherboard Repair", icon: Cpu },
            ].map((service) => (
              <div 
                key={service.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground text-center mt-8 text-sm">
            All repairs are done after proper inspection and testing.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Why Choose Vizag TV Repair Expert
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { text: "Experienced TV repair technicians", icon: Users },
              { text: "Doorstep service within Vizag City", icon: MapPin },
              { text: "Affordable and transparent pricing", icon: Shield },
              { text: "Quick response and support", icon: Clock },
              { text: "Customer-focused service", icon: Headphones },
            ].map((item) => (
              <div 
                key={item.text}
                className="flex items-center gap-3 p-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Service Area
            </h2>
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-muted-foreground">
              We provide TV repair services across Vizag City (Visakhapatnam).
            </p>
            <p className="text-muted-foreground mt-2">
              Contact us to confirm service availability in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Contact Us
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg text-foreground font-medium">Phone Number: 7815944046</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Service Area: Vizag City</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Working Hours: Monday – Sunday | 9:00 AM – 9:00 PM</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Call now to book your TV repair service in Vizag.
            </p>
            
            <a href="tel:7815944046">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5" />
                Call 7815944046
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Tv className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">Vizag TV Repair Expert</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © Vizag TV Repair Expert | vizagtvrepairexpert.in
            </p>
            <p className="text-sm text-muted-foreground">
              Independent TV repair service provider in Vizag City.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <span className="text-border">|</span>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button - Bottom Left */}
      <a 
        href="tel:7815944046" 
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* Floating WhatsApp Button - Bottom Right */}
      <a 
        href="https://wa.me/917815944046" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </main>
  );
};

export default Index;
