import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-8">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Contact information (name, email address)</li>
                    <li>Usage data (pages visited, time spent, features used)</li>
                    <li>Device information (browser type, operating system)</li>
                    <li>Location data (only when explicitly provided for path recommendations)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide personalized business path recommendations</li>
                    <li>To communicate with you about our services</li>
                    <li>To improve our website and user experience</li>
                    <li>To send you updates about new cities and features (with your consent)</li>
                    <li>To ensure the security and integrity of our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand usage patterns</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You can control cookie preferences through our cookie banner or your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your account and data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Data portability (receive your data in a structured format)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Children's Privacy</h2>
                  <p className="text-gray-700">
                    Our services are not intended for children under 13. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">International Users</h2>
                  <p className="text-gray-700">
                    If you are using our services from outside the United States, please note that your 
                    information may be transferred to and processed in the United States.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this privacy policy from time to time. We will notify you of any 
                    significant changes by posting the new policy on this page and updating the 
                    "last updated" date.
                  </p>
                </div>

                <div className="bg-traveler-lightgray rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold text-traveler-blue mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this privacy policy or our data practices, 
                    please contact us using the form below:
                  </p>
                  <ContactForm />
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

export default Privacy;
