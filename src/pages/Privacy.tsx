import { Phone, Tv } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Tv className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">Vizag TV Repair Expert</span>
          </Link>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Privacy Policy – Vizag TV Repair Expert
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Vizag TV Repair Expert respects your privacy and is committed to protecting your personal information.
              </p>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Information We Collect</h2>
                <p className="mb-2">We may collect basic information such as:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Location details (for service purposes)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">How We Use Your Information</h2>
                <p className="mb-2">The information collected is used only to:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Contact you regarding service requests</li>
                  <li>Provide TV repair services</li>
                  <li>Improve customer support</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Information Sharing</h2>
                <p>
                  We do not sell, rent, or share your personal information with third parties, except when required by law.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Data Security</h2>
                <p>
                  We take reasonable steps to protect your personal information from unauthorized access or misuse.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Consent</h2>
                <p>
                  By using this website, you agree to this Privacy Policy.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Contact for Privacy Concerns</h2>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  7815944046
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © Vizag TV Repair Expert | vizagtvrepairexpert.in
            </p>
            <p className="text-sm text-muted-foreground">
              Independent TV repair service provider in Vizag City.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Privacy;
