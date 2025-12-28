import { Tv, Clock, Shield, Wrench, Phone, MapPin, Users, CheckCircle, Zap, Headphones, Monitor, Volume2, Lightbulb, Cpu, MessageCircle, Menu, Info, Settings, Star, CalendarCheck, Search, PackageCheck, Power, Rows3, Usb, Radio, Award, UserCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroTechnician from "@/assets/hero-technician-clean.png";
import ledTvRepair from "@/assets/led-tv-repair.webp";
import lcdTvRepair from "@/assets/lcd-tv-repair.jpg";
import smartTvRepair from "@/assets/smart-tv-repair.jpg";
import plasmaTvRepair from "@/assets/plasma-tv-repair.webp";
import powerRepair from "@/assets/power-repair.webp";
import screenRepair from "@/assets/motherboard-repair.jfif";
import soundRepair from "@/assets/sound-repair.jfif";
import motherboardRepair from "@/assets/screen-repair.jfif";
import tvAutoShutoff from "@/assets/tv-auto-shutoff.jpg";
import linesOnScreen from "@/assets/lines-on-screen.jpg";
import portsRepair from "@/assets/ports-repair.jpg";
import remoteRepair from "@/assets/remote-repair.jpg";
const Index = () => {
  return <main className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Tv className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">Vizag TV Repair Expert</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="tel:7815944046">
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                <Phone className="w-4 h-4" />
                7815944046
              </Button>
            </a>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Home</a>
                  <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">About Us</a>
                  <a href="#services" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Services</a>
                  <a href="#contact" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Contact</a>
                  <a href="tel:7815944046" className="mt-4">
                    <Button variant="default" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      7815944046
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="order-first md:order-none">
              <img src={heroTechnician} alt="Professional TV repair technician in red shirt fixing LED TV" className="rounded-2xl shadow-lg w-full" loading="eager" decoding="async" />
            </div>
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Info className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                About Vizag TV Repair Expert
              </h2>
            </div>
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our TV Repair Services
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            We provide complete TV repair solutions, including:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[{
            name: "LED TV Repair",
            icon: Monitor,
            image: ledTvRepair,
            description: "Complete LED TV repair services for all major brands including Samsung, LG, Sony, Panasonic, and more. We fix backlight issues, display problems, power failures, and motherboard faults with genuine spare parts and expert technicians."
          }, {
            name: "LCD TV Repair",
            icon: Tv,
            image: lcdTvRepair,
            description: "Professional LCD panel diagnostics and repair services at affordable rates. Our technicians handle screen replacements, inverter board repairs, T-con board issues, and power supply problems for all LCD TV models."
          }, {
            name: "Smart TV Repair",
            icon: Zap,
            image: smartTvRepair,
            description: "Expert Smart TV repair including software updates, WiFi connectivity issues, app crashes, HDMI port problems, and Android/WebOS system fixes. We service all smart TV brands with latest diagnostic tools."
          }, {
            name: "Plasma TV Repair",
            icon: Lightbulb,
            image: plasmaTvRepair,
            description: "Specialized plasma TV repair services including sustain board replacement, power board repair, Y-buffer and Z-sustain fixes. We bring new life to your plasma TV with quality repairs and affordable pricing."
          }].map(service => <div key={service.name} className="rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>)}
          </div>

          {/* More Quality Repair Services Subheading */}
          <p className="text-center mt-12 mb-8 text-lg text-muted-foreground">
            Our More <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Quality Repair Services</span>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[{
            name: "TV Not Powering On",
            icon: Power,
            image: powerRepair,
            description: "Quick diagnosis and repair for TVs that won't turn on. We fix power supply failures, blown fuses, faulty capacitors, standby mode issues, and mainboard power problems to get your TV running again."
          }, {
            name: "Screen & Display Issues",
            icon: Monitor,
            image: screenRepair,
            description: "Expert solutions for all display problems including blank screens, color distortion, vertical/horizontal lines, flickering, dead pixels, and image retention. Professional screen calibration and panel replacement available."
          }, {
            name: "Sound Problems",
            icon: Volume2,
            image: soundRepair,
            description: "Complete audio repair services for TVs with no sound, distorted audio, buzzing noise, or speaker failures. We repair internal speakers, audio IC chips, and connectivity issues for crystal clear sound."
          }, {
            name: "Motherboard Repair",
            icon: Cpu,
            image: motherboardRepair,
            description: "Advanced motherboard repair and replacement services. Our skilled technicians diagnose and fix component-level issues including IC failures, circuit damage, and firmware problems to restore your TV's functionality."
          }, {
            name: "TV Turns Off by Itself",
            icon: Power,
            image: tvAutoShutoff,
            description: "Expert troubleshooting for TVs that randomly shut down or turn off unexpectedly. We diagnose and fix overheating issues, faulty power boards, timer settings, software glitches, and component failures causing auto-shutoff."
          }, {
            name: "Lines on Screen",
            icon: Rows3,
            image: linesOnScreen,
            description: "Professional repair for vertical and horizontal lines on your TV screen. We fix T-con board failures, panel ribbon cable issues, driver IC problems, and display panel faults to restore clear picture quality."
          }, {
            name: "Ports Not Working",
            icon: Usb,
            image: portsRepair,
            description: "Complete port repair services for HDMI, USB, AV, and other connectivity issues. We fix loose ports, damaged connectors, mainboard port failures, and software-related input problems for seamless device connectivity."
          }, {
            name: "Remote Control Not Working",
            icon: Radio,
            image: remoteRepair,
            description: "Troubleshooting and repair for TV remote control issues. We diagnose IR sensor problems, mainboard receiver failures, and pairing issues. We also help with remote replacement and universal remote setup."
          }].map(service => <div key={service.name} className="rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>)}
          </div>
          
          <p className="text-muted-foreground text-center mt-8 text-sm">
            All repairs are done after proper inspection and testing.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Tv className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> How It Works – TV Repair Process</h2>
          </div>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Simple 3-step process to get your TV repaired quickly and professionally
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                1
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-4">
                <CalendarCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Service Booking
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Doorstep / At-Shop</span><br />
                Book TV repair service and choose either doorstep service at home or at-shop service based on your convenience.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                2
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Diagnosis & Repair
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A trained technician inspects the TV, identifies the issue, and performs the required repair or part replacement using quality components.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                3
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-4">
                <PackageCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Testing & Delivery
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                After repair, the TV is fully tested for picture and sound quality. Doorstep repairs are completed on-site, and shop repairs are safely delivered back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Award className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Our Achievements</h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">5000+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">4+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Customer Reviews</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Excellent service! My LED TV had power issues and they fixed it the same day at my doorstep. Very professional technician and reasonable pricing. Highly recommended for TV repair in Vizag."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">RS</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">R. Siva Kumar</p>
                  <p className="text-sm text-muted-foreground">Vizag</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "My Smart TV had display lines and I was worried it needed panel replacement. But the technician diagnosed it properly and fixed the T-con board issue at a very affordable cost. Great work!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">MK</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">M. Keerthana</p>
                  <p className="text-sm text-muted-foreground">Vizag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Why Choose Us ?</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{
            text: "Experienced TV repair technicians",
            icon: Users
          }, {
            text: "Doorstep service within Vizag City",
            icon: MapPin
          }, {
            text: "Affordable and transparent pricing",
            icon: Shield
          }, {
            text: "Quick response and support",
            icon: Clock
          }, {
            text: "Customer-focused service",
            icon: Headphones
          }].map(item => <div key={item.text} className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Service Area
              </h2>
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
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </div>
            
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
      <a href="tel:7815944046" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label="Call us">
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* Floating WhatsApp Button - Bottom Right */}
      <a href="https://wa.me/917815944046" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </main>;
};
export default Index;