
import React, { useState, useEffect } from 'react';
import { CheckCircle, MessageSquare, Search, Building, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Confirm Basic Qualifications",
    description: "Automatically verify education, experience, and core requirements before human review.",
    color: "text-green-500"
  },
  {
    icon: Search,
    title: "Identify Interest and Fit",
    description: "Assess candidate motivation, culture alignment, and genuine interest in the role.",
    color: "text-blue-500"
  },
  {
    icon: Building,
    title: "Explain Role and Company",
    description: "Provide detailed information about position, team dynamics, and company culture.",
    color: "text-purple-500"
  },
  {
    icon: Clock,
    title: "Screen for Logistics",
    description: "Handle availability, salary expectations, location preferences, and start dates.",
    color: "text-orange-500"
  },
  {
    icon: MessageSquare,
    title: "Evaluate Communication",
    description: "Assess written and verbal communication skills through natural conversation.",
    color: "text-pink-500"
  },
  {
    icon: Award,
    title: "Rate Professionalism",
    description: "Evaluate professional demeanor, responsiveness, and overall candidate quality.",
    color: "text-indigo-500"
  }
];

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleFeatures(prev => {
        if (prev.length < features.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Your AI Agent is
            <span className="block text-primary">Always Working</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch as our AI agent handles every aspect of initial candidate screening 
            with precision, consistency, and 24/7 availability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.color} p-3 bg-background rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 w-full bg-muted rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-1000 ${feature.color.replace('text-', 'bg-')}`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 100 + 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive demo section */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-card border rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
              <p className="text-muted-foreground">
                Real-time demonstration of our AI agent processing a candidate interaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Candidate Input</h4>
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="bg-background rounded p-3 text-sm">
                    "I have 5 years of React experience and I'm looking for a senior role..."
                  </div>
                  <div className="bg-background rounded p-3 text-sm">
                    "I'm available to start in 2 weeks and open to $120k salary range."
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">AI Analysis</h4>
                <div className="space-y-2">
                  {[
                    { label: "Qualifications Match", value: 95, color: "bg-green-500" },
                    { label: "Interest Level", value: 88, color: "bg-blue-500" },
                    { label: "Communication Score", value: 92, color: "bg-purple-500" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color} transition-all duration-1000 delay-500`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
