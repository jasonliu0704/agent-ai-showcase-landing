
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight, Shield, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-8">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-600/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Enhanced Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 500+ HR Teams
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Hiring Process
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-200 font-normal mt-2">
                  with AI Intelligence
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our AI-powered HR agent screens candidates 24/7, evaluates cultural fit, 
                and identifies top talent faster than ever—while maintaining the professional 
                touch your candidates expect.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-2xl" asChild>
                <a href="https://avatartalkai.com/character/chat/HRkevin" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto border-gray-400 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="https://avatartalkai.com/character/chat/HRkevin" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </a>
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">24/7 Active</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">60% Faster Hiring</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Enhanced Video Section */}
          <div className="animate-slide-in-right flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="aspect-video bg-black/20 rounded-2xl overflow-hidden ring-1 ring-white/20">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JIM8aKMFJLE"
                    title="AI HR Digital Agent Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-2xl w-full h-full"
                  ></iframe>
                </div>
                
                <div className="mt-6 flex items-center justify-between text-sm text-gray-300">
                  <span className="font-medium">Live AI Agent Demonstration</span>
                  <span className="flex items-center gap-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    Live Demo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
