import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background font-body">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <p className="text-muted-foreground">
              By using our services, you agree to our service terms. Service charges, repair approval, and service availability depend on inspection results. We reserve the right to refuse service in certain cases.
            </p>
            
            <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Service Terms</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>All repair services are subject to initial inspection and diagnosis.</li>
              <li>Service charges may vary based on the nature and complexity of the repair.</li>
              <li>Repair work will only proceed after customer approval of the estimated cost.</li>
              <li>We provide doorstep service only within Vizag City limits.</li>
            </ul>
            
            <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Payment Terms</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Payment is due upon completion of the repair service.</li>
              <li>We accept cash and digital payment methods.</li>
              <li>Inspection charges may apply if the repair is not carried out.</li>
            </ul>
            
            <h2 className="font-heading text-lg font-semibold text-foreground mt-6">Warranty</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Warranty terms vary based on the type of repair and parts used.</li>
              <li>Warranty does not cover physical damage or misuse after repair.</li>
              <li>Warranty claims must be made within the specified warranty period.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Terms;
