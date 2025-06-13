
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowRight, Star, Users, Zap, CheckCircle } from 'lucide-react';
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Social Proof */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-8 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm">500+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-500" />
              <span className="text-sm">50% Faster Hiring</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Signup Form */}
          <div className="animate-slide-in-left">
            <div className="bg-card border rounded-2xl p-8 shadow-xl">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">
                      Start Your Free Trial
                    </h3>
                    <p className="text-muted-foreground">
                      Get instant access to our AI HR agent. No credit card required.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name" 
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        required
                      />
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name" 
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email" 
                      placeholder="Work Email" 
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                    <Input 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company Name" 
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full group" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Start Free Trial'}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    You're on the Waitlist!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for your interest! We've received your information and you're now on our waitlist. 
                    Our team will reach out to you soon with next steps.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-700">
                      <strong>What's next?</strong> You'll receive a confirmation email shortly, 
                      and we'll contact you within 24-48 hours to schedule your demo.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right side - Demo Scheduling */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Want to See It in Action?
                </h3>
                <p className="text-xl text-muted-foreground mb-6">
                  Schedule a personalized demo and see how our AI agent can transform 
                  your hiring process in just 15 minutes.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 mr-3" />
                  <div>
                    <h4 className="text-xl font-semibold">Book Your Demo</h4>
                    <p className="opacity-90">Available slots this week</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <span>✅ Live AI agent demonstration</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <span>✅ Custom use case discussion</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <span>✅ ROI calculation for your team</span>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="w-full group" 
                  size="lg"
                  asChild
                >
                  <a href="https://calendly.com/jasonliu0704/onsite-interview-slot" target="_blank" rel="noopener noreferrer">
                    Schedule Demo Call
                    <Calendar className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  🔒 Your data is secure and will never be shared
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom testimonial */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card border rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg mb-4">
              "Our AI HR agent reduced our time-to-hire by 60% and improved candidate 
              quality significantly. It's like having a senior recruiter working 24/7."
            </blockquote>
            <cite className="text-sm text-muted-foreground">
              — Sarah Johnson, Head of Talent at TechCorp
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
