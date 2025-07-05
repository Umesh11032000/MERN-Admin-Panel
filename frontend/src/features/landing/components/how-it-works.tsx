import { PenTool, Share, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Survey",
    description: "Use our intuitive drag-and-drop builder to create professional surveys with various question types.",
    icon: PenTool,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    number: "02",
    title: "Share & Collect",
    description: "Distribute your survey via email, social media, or embed it directly on your website.",
    icon: Share,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    number: "03",
    title: "Analyze Results",
    description: "Get real-time insights with advanced analytics, charts, and exportable reports.",
    icon: BarChart3,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/20"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50 dark:from-gray-800/50 dark:to-gray-800/50"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 animate-fade-in-up">
            How it works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Simple three-step process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            From creation to insights, our streamlined workflow gets you from idea 
            to actionable data in record time.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 stagger-animation">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0"></div>
                )}
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>Ready to get started?</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Join thousands of users creating better surveys today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 