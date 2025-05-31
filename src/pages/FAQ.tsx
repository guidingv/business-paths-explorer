
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do the business paths work?",
      answer: "Our business paths are carefully curated walking routes designed for professionals with limited time. Simply select your city, choose your available time (30, 60, or 120 minutes), and we'll provide a detailed route with points of interest, dining recommendations, and cultural highlights."
    },
    {
      question: "Are the paths suitable for all fitness levels?",
      answer: "Yes! Our paths are designed for comfortable walking at a leisurely pace. We include distance information and estimated walking times, and most routes are accessible via public transportation if needed."
    },
    {
      question: "How are the paths curated?",
      answer: "We work with local experts, frequent business travelers, and cultural consultants in each city. Every path is tested multiple times and updated regularly to ensure quality and accuracy."
    },
    {
      question: "Can I customize the paths?",
      answer: "Currently, our paths are pre-designed for optimal experience. However, we provide detailed step-by-step directions and highlight alternative stops along the way so you can adapt as needed."
    },
    {
      question: "Do I need to download an app?",
      answer: "No! Traveler.business works directly in your web browser. You can bookmark paths on your phone for offline reference, and we provide Google Maps integration for navigation."
    },
    {
      question: "How much do the paths cost?",
      answer: "Most path information is free to access. We're exploring premium features for the future, but our core mission is to help business travelers explore cities regardless of budget."
    },
    {
      question: "Are the paths safe?",
      answer: "Safety is our top priority. All paths stick to well-traveled, safe areas and business districts. We avoid isolated areas and provide safety tips for each location."
    },
    {
      question: "What cities are currently available?",
      answer: "We currently offer paths in New York, London, Tokyo, Paris, Singapore, and Berlin, with new cities being added regularly. Check our cities page for the most up-to-date list."
    },
    {
      question: "How often are paths updated?",
      answer: "We review and update all paths quarterly, with real-time updates for any major changes like construction, closures, or new attractions."
    },
    {
      question: "Can I suggest a new city?",
      answer: "Absolutely! We love hearing from our community. Use our contact form to suggest new cities, and we'll prioritize based on demand and feasibility."
    },
    {
      question: "What if a location is closed when I visit?",
      answer: "Each path includes alternative stops and backup options. We also provide business hours and seasonal information to help you plan accordingly."
    },
    {
      question: "Do you offer group paths?",
      answer: "Our current paths work great for small groups (2-4 people). We're developing specific group features and corporate packages for larger teams."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Everything you need to know about using Traveler.business to enhance your business trips.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <span className="text-traveler-blue text-xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still have questions section */}
            <div className="mt-12 text-center bg-traveler-lightgray rounded-xl p-8">
              <h2 className="text-2xl font-bold text-traveler-blue mb-4">Still have questions?</h2>
              <p className="text-gray-700 mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-traveler-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
