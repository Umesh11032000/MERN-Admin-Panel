import { 
  BarChart3, 
  Share2, 
  Shield, 
  Zap, 
  Smartphone, 
  Users,
  Clock,
  TrendingUp
} from "lucide-react";

const features = [
  {
    name: "Advanced Analytics",
    description: "Get detailed insights with real-time analytics and customizable dashboards.",
    icon: BarChart3,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    name: "Easy Sharing",
    description: "Share surveys instantly via email, link, or embed them on your website.",
    icon: Share2,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    name: "Secure & Private",
    description: "Enterprise-grade security with data encryption and privacy compliance.",
    icon: Shield,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    name: "Lightning Fast",
    description: "Create and deploy surveys in minutes with our intuitive drag-and-drop interface.",
    icon: Zap,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
  },
  {
    name: "Mobile Responsive",
    description: "Surveys look great on any device - desktop, tablet, or mobile.",
    icon: Smartphone,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
  },
  {
    name: "Team Collaboration",
    description: "Work together with your team to create and manage surveys efficiently.",
    icon: Users,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/20"
  },
  {
    name: "Real-time Results",
    description: "See responses as they come in with live updates and notifications.",
    icon: Clock,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/20"
  },
  {
    name: "Smart Insights",
    description: "AI-powered analysis helps you understand trends and patterns in your data.",
    icon: TrendingUp,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 animate-fade-in-up">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            From simple polls to complex research studies, our comprehensive toolkit 
            empowers you to gather meaningful insights and make data-driven decisions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 stagger-animation">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group relative flex flex-col items-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
} 