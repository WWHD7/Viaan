import React from 'react';
import { Calendar } from 'lucide-react';

// Simple Card component
const Card = ({ children, className }) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className || ''}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={className || "p-6"}>{children}</div>;
};

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 text-gray-800">
        <header className="max-w-5xl mx-auto py-10 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Dreamer. Creator. Investor.</h1>
          <p className="text-lg text-gray-600 mb-2">Hi, I'm Akshay Hegde</p>
          <p className="text-gray-600 mb-6">Bangalore, India</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:akshay.0015@gmail.com" className="px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/akshay7hegde/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md font-medium border border-gray-300 bg-transparent hover:bg-gray-50">
              View LinkedIn
            </a>
          </div>
        </header>

        <section className="max-w-4xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="text-center text-gray-700 leading-relaxed mb-8 space-y-4">
            <p>
              I'm Akshay Hegde — a builder at heart and a strategist by craft. As the co-founder of Shakedeal and fintech - ShakePe, I've spent the last several years transforming how enterprises approach procurement, rewards, and e-commerce.
            </p>
            <p>
              I specialize in applying AI-first thinking to B2B challenges — from building autonomous procurement workflows to designing scalable platforms for procurement, employee recognition and enterprise gifting.
            </p>
          </div>
        </section>

        {/* Experience Sections */}
        <section className="bg-white py-16 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Building The Future</h2>
            <div className="space-y-8">
              {/* ShakeDeal */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Founder & MD</h3>
                      <p className="text-blue-600 mb-1">ShakeDeal</p>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 2016 - Present
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Shakedeal is a B2B commerce and procurement enablement platform trusted by over 300+ enterprise clients, helping them drive 5-8% efficiency gains across sourcing, fulfillment, and commercial operations.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">B2B E-commerce Infrastructure</h4>
                      <p className="text-gray-600">Building custom procurement portals and digital catalogs that simplify sourcing, fulfillment, and vendor management for large organizations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI-Enabled Procurement Automation</h4>
                      <p className="text-gray-600">Helping enterprises digitize and optimize purchase workflows — from PR-to-PO — using data-driven decisioning and automation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tail Spend Management</h4>
                      <p className="text-gray-600">Centralizing and streamlining long-tail procurement to reduce maverick spend and improve compliance across indirect categories.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* ShakePe */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Co-Founder</h3>
                      <p className="text-blue-600 mb-1">ShakePe</p>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 2022 - Present
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    ShakePe is an enterprise-grade rewards and recognition platform that helps businesses deliver impactful employee and channel incentives.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Enterprise Rewards & Milestone Gifting</h4>
                      <p className="text-gray-600">A flexible platform to manage employee rewards, achievement-based recognition, and special occasion gifting at scale.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Channel Incentivization</h4>
                      <p className="text-gray-600">Drive partner engagement with personalized reward campaigns delivered through WhatsApp, email, or direct links.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Redemption Marketplace</h4>
                      <p className="text-gray-600">Recipients can redeem rewards from a vast catalog of products, experiences, and vouchers — all tracked and managed in real-time.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Aegon Power */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Founder</h3>
                      <p className="text-blue-600 mb-1">Aegon Power</p>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 2018 - Present
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Aegon Power is a private label brand offering high-performance power tools and equipment for India's growing D2C and B2B markets.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">D2C E-commerce Brand Building</h4>
                      <p className="text-gray-600">Scaled a direct-to-consumer brand delivering durable, cost-effective tools to end users across India through digital-first channels.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Category Leadership in Tools & Equipment</h4>
                      <p className="text-gray-600">Built a portfolio of best-selling products across agricultural tools, construction equipment, and professional-grade power tools.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data-Driven Product Development</h4>
                      <p className="text-gray-600">Leveraging customer feedback and marketplace insights to continuously refine product design, packaging, and positioning.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Private Label Supply Chain Optimization</h4>
                      <p className="text-gray-600">Managed sourcing, quality control, and logistics end-to-end to ensure consistent product quality and timely delivery at scale.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Akshay Hegde. All rights reserved.</p>
          <div className="mt-2 text-xs text-gray-400">Version 2.0 - With Experience Sections</div>
        </footer>
      </div>
    </div>
  );
}

export default App; 