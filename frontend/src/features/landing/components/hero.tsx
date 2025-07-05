import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-6 sm:py-32 lg:px-8 pt-32">
      {/* Enhanced background with more shapes and patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
        
        {/* Animated background shapes */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-40 blur-3xl dark:from-blue-800/30 dark:to-purple-800/30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-green-200 to-blue-200 opacity-40 blur-3xl dark:from-green-800/30 dark:to-blue-800/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 blur-2xl dark:from-yellow-800/20 dark:to-orange-800/20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-pink-200 to-red-200 opacity-20 blur-2xl dark:from-pink-800/20 dark:to-red-800/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <div className="relative rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
              ✨ Streamline Your Surveys
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transform Your
          <span className="block gradient-text font-extrabold">
            Survey Experience
          </span>
          with Smart Insights
        </h1>

        <p className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
          Create professional surveys in minutes, collect responses seamlessly, and unlock 
          powerful analytics that drive better decisions for your business.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="group hover-lift">
            <Link to="/register">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <Link to="/login">
              Sign In
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 stagger-animation">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Surveys Created</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
              <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 