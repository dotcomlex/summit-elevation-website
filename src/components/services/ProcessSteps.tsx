import { CheckCircle2 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 texture-dots opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-alpine font-semibold text-sm tracking-wider uppercase mb-3">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven approach that delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card rounded-2xl p-6 border border-border hover:border-alpine/30 transition-all duration-300 hover-lift"
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-alpine/10 text-alpine font-bold text-lg mb-4">
                {step.number}
              </div>
              
              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 border-t-2 border-dashed border-alpine/30 -translate-x-4" />
              )}
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
