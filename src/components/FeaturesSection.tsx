
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
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Enterprise-Grade HR Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Streamline Every Step of
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Hiring Workflow
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            From initial screening to final evaluation, our AI agent handles the time-consuming 
            tasks so your HR team can focus on strategic decisions and candidate relationships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 h-full hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-start space-x-4 sm:space-x-5">
                    <div className={`${feature.color} p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${feature.color.replace('text-', 'bg-')}`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 100 + 300}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced interactive demo section */}
        <div className="mt-16 sm:mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto text-white">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Real-Time AI Analysis</h3>
              <p className="text-blue-100 text-lg">
                Watch how our AI processes candidate interactions with human-like understanding
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-blue-100">Candidate Conversation</h4>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/20">
                  <div className="bg-white/20 rounded-xl p-4 text-sm backdrop-blur-sm">
                    "I have 5 years of React experience and I'm passionate about creating user-friendly interfaces..."
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-sm backdrop-blur-sm">
                    "I'm available to start in 2 weeks and my salary expectation is $120k-$140k."
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-sm backdrop-blur-sm">
                    "I'm excited about your company culture and the opportunity to work with cutting-edge technology."
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-blue-100">AI Evaluation Report</h4>
                <div className="space-y-4">
                  {[
                    { label: "Technical Skills Match", value: 95, color: "bg-green-400", bgColor: "bg-green-400/20" },
                    { label: "Cultural Fit Score", value: 88, color: "bg-blue-400", bgColor: "bg-blue-400/20" },
                    { label: "Communication Quality", value: 92, color: "bg-purple-400", bgColor: "bg-purple-400/20" },
                    { label: "Enthusiasm Level", value: 96, color: "bg-yellow-400", bgColor: "bg-yellow-400/20" }
                  ].map((item, index) => (
                    <div key={index} className={`rounded-xl p-4 ${item.bgColor} backdrop-blur-sm border border-white/20`}>
                      <div className="flex justify-between text-sm font-medium mb-3">
                        <span>{item.label}</span>
                        <span className="font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${item.color} transition-all duration-1000 delay-500`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-white/20">
              <p className="text-blue-100 text-sm">
                💼 Average time saved per candidate: <span className="font-bold text-white">45 minutes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
