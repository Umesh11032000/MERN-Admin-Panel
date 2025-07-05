import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "No credit card required",
  "Free 14-day trial",
  "Cancel anytime",
  "24/7 support"
];

export function CallToAction() {
  return (
    <section className="py-24 sm:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/20 px-4 py-2 text-sm font-medium text-green-800 dark:text-green-200">
              <Zap className="h-4 w-4" />
              Start your free trial today
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to revolutionize your surveys?
          </h2>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            Join the thousands of teams already creating better surveys and 
            unlocking powerful insights with our platform.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 stagger-animation">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group w-full sm:w-auto hover-lift">
              <Link to="/register">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto hover-lift">
              <Link to="/login">
                Sign In to Account
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by teams at
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-400">TechCorp</div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-lg font-semibold text-gray-400">InnovateLab</div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-lg font-semibold text-gray-400">GlobalTech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 