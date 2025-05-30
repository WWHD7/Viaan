import React from 'react';
import { Calendar, Award, MapPin } from 'lucide-react';

// Simple Card component
const Card = ({ children, className }) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className || ''}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={className || "p-6"}>{children}</div>;
};

function App() {
  // Speaking engagement data
  const pastTalks = [
    {
      title: "Taking a company from Seed to Series A",
      event: "StartUp Summit 2019",
      date: "June 2019",
      location: "Bangalore, India",
      description: "Discussing How to Scale with some of the best minds of the ecosystem",
      imageUrl: "/startup-summit-2019.jpeg",
    },
    {
      title: "How procurement is no longer about focusing on cost savings only",
      event: "13th Express, Logistics & Supply Chain Conclave",
      date: "Nov 2019",
      location: "Taj Land's End - Mumbai, India",
      description: "Discussion with industry experts from various sectors on how procurement is no longer about focusing on cost savings only, and how does one manage to build long term relationships with suppliers while shifting focus beyond the cost",
      imageUrl: "/express-logistics-supply-chain.jpeg",
    },
    {
      title: "Unlocking growth for small and medium businesses through digital transformation",
      event: "Digital Bharat Economy Enclave by Financial Express",
      date: "March 2024",
      location: "The Lalit Hotel New Delhi, India",
      description: "Deep dive into the question of whether government-backed digital initiatives like ONDC, GEM, TReDS, OCEN, etc., can drive the adoption of digital technologies within SMEs",
      imageUrl: "/digital-bharat-economy-enclave.jpeg",
    },
    {
      title: "Digital Transformation AI Solutions to Address Common Pain Points in Supply Chain and Procurement",
      event: "NXTGEN ProcureConnect2024 - Delhi Chapter",
      date: "July 2024",
      location: "Sheraton New Delhi, India",
      description: "Shared valuable insights on current global supply chain issues and showcased how AI is transforming enterprise commerce through innovations and intelligence.",
      imageUrl: "/nxtgen-procureconnect2024-delhi.png",
    }
  ];
  
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 text-gray-800">
        <header className="max-w-5xl mx-auto py-10 text-center">
          <div className="mb-6">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
              <img
                src="/profile-photo.jpeg"
                alt="Akshay Hegde - Forbes 30 Under 30 Entrepreneur and Founder"
                width={128}
                height={128}
                className="object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Dreamer. Creator. Investor.</h1>
          <p className="text-lg text-gray-600 mb-2">Hi, I'm Akshay Hegde</p>
          <p className="flex items-center justify-center text-gray-600 mb-6">
            <MapPin className="w-4 h-4 mr-1" aria-hidden="true" /> <span>Bangalore, India</span>
          </p>
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
            <p>
              I'm also an active angel investor with an eye for disruptive startups. A recent highlight — a company I backed was acquired by Unicommerce and is now the second-largest shipping aggregator in India. Supporting founders on their journey to scale is something I care deeply about.
            </p>
            <p>
              If you're working on the future of AI, enterprise tech, or B2B innovation — let's connect.
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

              {/* Shipway */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Angel Investor</h3>
                      <p className="text-blue-600 mb-1">Shipway</p>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> 2021 - Present
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    As India's second-largest shipping aggregator, Shipway enables D2C and enterprise brands to streamline fulfillment, automate tracking, and scale their post-order operations with confidence. Recently acquired by Unicommerce.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Aggregation & Fulfillment Automation</h4>
                      <p className="text-gray-600">Providing a unified interface to access multiple courier partners, automate order fulfillment, and optimize shipping decisions at scale.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Post-Purchase Customer Experience</h4>
                      <p className="text-gray-600">Enabling real-time tracking, branded notifications, and proactive communication to reduce delivery anxiety and improve customer retention.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Returns & RTO Management</h4>
                      <p className="text-gray-600">Offering advanced tools to reduce Return-to-Origin (RTO) rates, streamline reverse logistics, and protect margins for e-commerce businesses.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Speaking Engagements Section */}
        <section className="max-w-5xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Where I've Shared My Voice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastTalks.map((talk, index) => (
              <Card key={index}>
                <div className="w-full h-56 overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={talk.imageUrl}
                    alt={`${talk.title} at ${talk.event}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
                  <p className="text-blue-600 mb-2">{talk.event}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{talk.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{talk.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Interested in having me speak at your next event? 
              I share insights on B2B innovation, procurement transformation, and entrepreneurship.
            </p>
            <a 
              href="mailto:akshay@shakedeal.com?subject=Speaking Inquiry" 
              className="px-4 py-2 rounded-md font-medium border border-gray-300 bg-transparent hover:bg-gray-50"
            >
              Invite Me to Speak
            </a>
          </div>
        </section>

        {/* Media & Press Coverage Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Media & Press Coverage</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a href="https://www.forbes.com/30-under-30/2021/asia/retail-ecommerce?profile=shakedeal" target="_blank" rel="noreferrer" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="https://imageio.forbes.com/specials-images/imageserve/607708432e610417a0aa612a/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds" 
                      alt="Forbes 30 Under 30 Asia 2021 featuring Akshay Hegde" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <div className="text-sm text-blue-600 mb-2">Forbes Asia</div>
                    <h3 className="text-lg font-semibold mb-2">Forbes 30 Under 30 Asia 2021: Retail & Ecommerce</h3>
                    <p className="text-gray-600 text-sm italic">
                      "More than 10,000 companies have become clients of the Bangalore-based B2B platform for office supplies and industrial goods since the Hegde brothers founded it in 2016."
                    </p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="https://www.financialexpress.com/business/industry-integration-of-b2b-marketplaces-into-supply-chain-networks-for-increased-efficiency-3224744/" target="_blank" rel="noreferrer" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="https://www.financialexpress.com/wp-content/uploads/2023/08/logistics.jpg?w=1024" 
                      alt="Financial Express article about B2B marketplace integration" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <div className="text-sm text-blue-600 mb-2">Financial Express</div>
                    <h3 className="text-lg font-semibold mb-2">Simplifying P2P</h3>
                    <p className="text-gray-600 text-sm italic">
                      "Integration of B2B marketplaces into supply chain networks for increased efficiency"
                    </p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="https://www.entrepreneur.com/en-in/news-and-trends/procurement-partners/365404" target="_blank" rel="noreferrer" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="https://assets.entrepreneur.com/content/3x2/2000/1613392515-MyPost36.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380" 
                      alt="Entrepreneur.com article featuring ShakeDeal procurement platform" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <div className="text-sm text-blue-600 mb-2">Entrepreneur.com</div>
                    <h3 className="text-lg font-semibold mb-2">Procurement Partners</h3>
                    <p className="text-gray-600 text-sm italic">
                      "In 2016, brothers Akshay and Akash Hegde & Santhosh Reddy came up with the idea of ShakeDeal – a B2B ecommerce platform that solves problems in the procurement and distribution space"
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="mt-8 text-center">
              <a href="https://stories.shakedeal.com/news/" className="px-4 py-2 rounded-md font-medium border border-gray-300 bg-transparent hover:bg-gray-50">
                View All Media Coverage
              </a>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-white py-16 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Achievements</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Forbes 30 Under 30 Asia</h3>
                <p className="text-gray-600">Class of 2021</p>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Entrepreneur 35 under 35</h3>
                <p className="text-gray-600">Class of 2021</p>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">E-Commerce Startup of the Year</h3>
                <p className="text-gray-600">2020</p>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">CNBC Young Turks</h3>
                <p className="text-gray-600">2021</p>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fastest Growing Small Business</h3>
                <p className="text-gray-600">2020</p>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Akshay Hegde. All rights reserved.</p>
          <div className="mt-2 text-xs text-gray-400">Version 2.0 - Complete</div>
        </footer>
      </div>
    </div>
  );
}

export default App; 