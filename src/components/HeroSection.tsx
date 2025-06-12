
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🤖 AI-Powered HR Revolution
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Meet Your Next
                <span className="block text-primary">HR Digital Agent</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your hiring process with our AI agent that screens candidates, 
                evaluates fit, and identifies top talent 24/7 - all while maintaining 
                the human touch your candidates deserve.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started Free
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Active Screening</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>AI-Powered Insights</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Video Demo */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-card border rounded-2xl p-6 shadow-2xl">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simulated video interface */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                      <Play className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white font-medium">AI Agent Demo</p>
                      <p className="text-white/70 text-sm">See it in action</p>
                    </div>
                  </div>
                  
                  {/* Simulated chat bubbles */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="bg-primary text-primary-foreground text-sm p-2 rounded-lg max-w-xs animate-fade-in">
                      Hi! I'm your AI HR assistant. Let's discuss this role.
                    </div>
                    <div className="bg-white text-slate-900 text-sm p-2 rounded-lg max-w-xs ml-auto animate-fade-in delay-500">
                      I'm interested in learning more!
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>Live HR Agent Conversation</span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Recording
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
