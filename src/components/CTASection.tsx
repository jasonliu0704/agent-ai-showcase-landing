
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowRight, Star, Users, Zap, CheckCircle, Shield, Award, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.companyName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('hr_user')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company_name: formData.companyName
        });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 bg-gradient-to-b from-slate-50 to-white">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced social proof */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-medium mb-8 border border-green-200">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by Fortune 500 HR Departments
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <span className="text-sm text-gray-600 font-medium">User Rating</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <span className="text-sm text-gray-600 font-medium">Companies</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">60%</div>
              <span className="text-sm text-gray-600 font-medium">Faster Hiring</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">SOC 2</div>
              <span className="text-sm text-gray-600 font-medium">Compliant</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Enhanced Signup Form */}
          <div className="animate-slide-in-left order-2 lg:order-1">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                      <Zap className="w-4 h-4 mr-2" />
                      No Credit Card Required
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                      Start Your Free Trial
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Join 500+ HR teams who've transformed their hiring process. 
                      Get instant access to our AI HR agent.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name" 
                        className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl"
                        required
                      />
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name" 
                        className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl"
                        required
                      />
                    </div>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email" 
                      placeholder="Work Email" 
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl"
                      required
                    />
                    <Input 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company Name" 
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full group h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Starting Your Trial...' : 'Start Free Trial Now'}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                    </Button>
                  </form>
                  
                  <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-600">
                    Welcome to the Future of HR!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Thank you for joining our exclusive waitlist! We've received your information 
                    and you're now priority access to our AI HR platform.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
                    <p className="text-sm text-green-700 font-medium">
                      <strong>What happens next?</strong> Our team will reach out within 24 hours 
                      to schedule your personalized demo and get you started with your free trial.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right side - Enhanced Demo Scheduling */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="space-y-8 sm:space-y-10">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                  See the Future of HR
                  <span className="block text-blue-600">In Action</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Book a personalized demo with our HR technology experts. 
                  See how Fortune 500 companies are revolutionizing their hiring process.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Executive Demo</h4>
                    <p className="text-blue-100 text-lg">Available this week</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium">Live AI agent demonstration</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium">Custom ROI analysis for your company</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium">Implementation roadmap discussion</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium">Q&A with HR technology experts</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full group h-14 text-lg bg-white text-blue-600 hover:bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" 
                  asChild
                >
                  <a href="https://calendly.com/jasonliu0704/onsite-interview-slot" target="_blank" rel="noopener noreferrer">
                    Schedule Executive Demo
                    <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                </Button>
                
                <div className="text-center mt-6">
                  <p className="text-blue-100 text-sm">
                    🔒 Enterprise-grade security • GDPR compliant • SOC 2 certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced testimonial */}
        <div className="mt-16 sm:mt-20 text-center animate-fade-in">
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl mb-8 text-gray-700 leading-relaxed font-medium">
              "This AI HR agent has completely transformed our hiring process. We've reduced 
              time-to-hire by 60% while significantly improving candidate quality. It's like 
              having a team of senior recruiters working around the clock."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                SJ
              </div>
              <div className="text-left">
                <cite className="text-lg font-bold text-gray-900 not-italic">Sarah Johnson</cite>
                <div className="text-gray-600">Head of Talent Acquisition, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
