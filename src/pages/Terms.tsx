
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-8">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using Traveler.business, you accept and agree to be bound by these 
                    Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Description of Service</h2>
                  <p className="text-gray-700 mb-4">
                    Traveler.business provides curated walking paths and recommendations for business 
                    travelers in various cities worldwide. Our service includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Time-optimized walking routes</li>
                    <li>Local points of interest and cultural highlights</li>
                    <li>Dining and shopping recommendations</li>
                    <li>Integration with mapping services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">When using our service, you agree to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Use the service for lawful purposes only</li>
                    <li>Provide accurate information when required</li>
                    <li>Respect local laws and customs when following our paths</li>
                    <li>Exercise personal judgment regarding safety and appropriateness</li>
                    <li>Not misuse or attempt to disrupt our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Content and Accuracy</h2>
                  <p className="text-gray-700 mb-4">
                    While we strive to provide accurate and up-to-date information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Information may change without notice</li>
                    <li>We cannot guarantee the accuracy of all recommendations</li>
                    <li>Business hours, prices, and availability may vary</li>
                    <li>Users should verify important details independently</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Safety and Liability</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Important:</strong> You use our service at your own risk. We recommend:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Being aware of your surroundings at all times</li>
                    <li>Following local safety guidelines and regulations</li>
                    <li>Using common sense and personal judgment</li>
                    <li>Having appropriate travel insurance</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Traveler.business is not responsible for any injury, loss, or damage that may occur 
                    while following our recommendations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Intellectual Property</h2>
                  <p className="text-gray-700">
                    All content on Traveler.business, including text, graphics, logos, and route designs, 
                    is owned by us or our licensors and is protected by copyright and other intellectual 
                    property laws. You may not reproduce, distribute, or create derivative works without 
                    our written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Third-Party Services</h2>
                  <p className="text-gray-700">
                    Our service may integrate with third-party services (such as mapping platforms). 
                    Your use of these services is subject to their respective terms and conditions. 
                    We are not responsible for third-party content or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700">
                    To the fullest extent permitted by law, Traveler.business shall not be liable for 
                    any indirect, incidental, special, consequential, or punitive damages, including 
                    but not limited to loss of profits, data, or other intangible losses.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Service Availability</h2>
                  <p className="text-gray-700">
                    We strive to maintain service availability but do not guarantee uninterrupted access. 
                    We may modify, suspend, or discontinue any part of our service at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Privacy</h2>
                  <p className="text-gray-700">
                    Your privacy is important to us. Please review our Privacy Policy to understand 
                    how we collect, use, and protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Termination</h2>
                  <p className="text-gray-700">
                    We reserve the right to terminate or suspend access to our service for any reason, 
                    including violation of these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Changes to Terms</h2>
                  <p className="text-gray-700">
                    We may modify these terms at any time. Continued use of our service after changes 
                    constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Governing Law</h2>
                  <p className="text-gray-700">
                    These terms are governed by the laws of the United States. Any disputes will be 
                    resolved in the appropriate courts.
                  </p>
                </div>

                <div className="bg-traveler-lightgray rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Contact Information</h2>
                  <p className="text-gray-700">
                    If you have questions about these terms, please contact us at:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Email: legal@traveler.business<br />
                    Subject: Terms of Service Inquiry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
