import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "This questionnaire system has revolutionized how we collect customer feedback. The analytics are incredible and the interface is so intuitive.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    content: "We've increased our survey response rates by 40% since switching to this platform. The mobile responsiveness is outstanding.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Research Lead",
    company: "DataInsights",
    content: "The real-time analytics and export features save us hours every week. Highly recommended for any research team.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Thompson",
    role: "HR Director",
    company: "GlobalTech",
    content: "Perfect for employee satisfaction surveys. The team collaboration features make it easy to work together on complex questionnaires.",
    rating: 5,
    avatar: "DT"
  },
  {
    name: "Lisa Wang",
    role: "Customer Success",
    company: "StartupXYZ",
    content: "The ease of use and professional templates have made our customer feedback collection so much more effective.",
    rating: 5,
    avatar: "LW"
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    company: "ScaleUp Inc",
    content: "Outstanding platform with excellent support. The security features give us confidence in handling sensitive data.",
    rating: 5,
    avatar: "JW"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 animate-fade-in-up">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trusted by teams worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            Join thousands of satisfied customers who have transformed their 
            survey processes with our platform.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200 dark:text-blue-800" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-900 dark:text-white mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Trusted by companies worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">10K+</div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-2xl font-bold text-gray-400">50K+</div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-2xl font-bold text-gray-400">99.9%</div>
          </div>
          <div className="flex justify-center items-center gap-8 text-xs text-gray-500 mt-2">
            <span>Active Users</span>
            <span>Surveys Created</span>
            <span>Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
} 