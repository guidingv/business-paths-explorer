
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xovwrbrl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-traveler-lightgray">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-2xl font-bold text-traveler-blue mb-4">Thank You!</h1>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you as soon as possible!
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-traveler-blue hover:bg-blue-700"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-traveler-blue mb-6 text-center">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="mt-1"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-traveler-orange hover:bg-orange-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-traveler-lightgray rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-traveler-blue mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-800">Response Time</h4>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
