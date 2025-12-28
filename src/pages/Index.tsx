import { Tv, Clock, Shield, Wrench, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-soft">
              <Tv className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">VizagTV Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Cozy living room with family watching TV" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              Serving Vizag with Love
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
              Bringing the Magic Back to{" "}
              <span className="text-gradient">Your Living Room</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-400">
              Because your favorite shows deserve a second chance. 
              Vizag's most trusted TV doctors are just a call away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600">
              <Button variant="hero">
                Fix My Movie Night
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline">
                Get a Free Quote
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground animate-fade-up animation-delay-600">
              From Madhurawada to Gajuwaka — we keep Vizag's screens bright ✨
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Families Trust Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We treat every TV like it's the heart of your home — because it is.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Speed Card */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:glow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                "Back by Movie Night"
              </h3>
              <p className="text-muted-foreground">
                We aim for same-day service because we know the weekend cliffhanger can't wait. Your entertainment is our priority.
              </p>
            </div>
            
            {/* Honesty Card */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:glow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                "Clear as 4K"
              </h3>
              <p className="text-muted-foreground">
                No hidden charges or technical jargon. Just honest talk and fair pricing. We explain everything in simple terms.
              </p>
            </div>
            
            {/* Expertise Card */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:glow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                "Trained with Care"
              </h3>
              <p className="text-muted-foreground">
                We treat your OLED, LED, or Plasma like it's our own centerpiece. Expert hands with a gentle touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Fix
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From vintage CRTs to the latest smart TVs — we've seen it all and fixed it all.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "LED & LCD TVs", icon: "📺" },
              { name: "OLED & QLED", icon: "✨" },
              { name: "Smart TVs", icon: "📱" },
              { name: "Plasma TVs", icon: "🔧" },
              { name: "Sound Issues", icon: "🔊" },
              { name: "Display Problems", icon: "🖥️" },
              { name: "Power Issues", icon: "⚡" },
              { name: "Board Repairs", icon: "🔌" },
            ].map((service, index) => (
              <div 
                key={service.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We started as a small team of tech enthusiasts in Vizag who hated seeing good TVs go to waste. 
              To us, a TV isn't just a box of circuits; it's where your family gathers for cricket matches, 
              movie marathons, and morning news. We're here to make sure those moments never stay dark for long.
            </p>
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="font-heading text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-heading text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">TVs Repaired</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-heading text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't Miss a Single Frame
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to bring your TV back to life? Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                <Phone className="w-5 h-5" />
                Chat with a Pro
              </Button>
              <Button variant="heroOutline">
                Bring My TV Back to Life
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Tv className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">VizagTV Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 VizagTV Pro. Keeping Vizag's screens bright with love.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Visakhapatnam, Andhra Pradesh
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
