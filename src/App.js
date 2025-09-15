import React from 'react';
import { Calendar, Award, MapPin, Mail, Linkedin, ExternalLink } from 'lucide-react';

// Glassmorphic Card component
const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-3xl ${className}`}>
      {children}
    </div>
  );
};

const GlassCardContent = ({ children, className = "" }) => {
  return <div className={className || "p-8"}>{children}</div>;
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
      imageUrl: "/ProcureConnect.jpg",
    }
  ];
  
  return (
    <div className="App">
      {/* Space Black Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3Ccircle cx='60' cy='60' r='0.5'/%3E%3Ccircle cx='20' cy='60' r='0.5'/%3E%3Ccircle cx='60' cy='20' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-screen text-white p-6">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto py-16 text-center">
          <div className="mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-xl border border-white/10 mx-auto mb-6 overflow-hidden relative shadow-2xl">
              <img
                src="/Profile Photo.JPG"
                alt="Akshay Hegde - Forbes 30 Under 30 Entrepreneur and Founder"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                style={{ display: 'block' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black/40"></div>
              <div className="absolute inset-0 border border-cyan-500/20 rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Dreamer. Creator. Investor.
          </h1>
          
          <p className="text-xl text-gray-200 mb-3 font-medium">Hi, I'm Akshay Hegde</p>
          
          <p className="flex items-center justify-center text-gray-300 mb-8">
            <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>Bangalore, India</span>
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:akshay.0015@gmail.com" 
              className="group px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-cyan-500-25 hover:scale-105 backdrop-blur-sm border border-cyan-500/30"
            >
              <Mail className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
              Get in Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/akshay7hegde/" 
              target="_blank" 
              rel="noreferrer" 
              className="group px-8 py-4 rounded-full font-semibold backdrop-blur-xl bg-black/20 border border-gray-700/50 text-white hover:bg-black/30 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500-10 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
              View LinkedIn
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-5xl mx-auto py-20">
          <GlassCard>
            <GlassCardContent>
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="text-center text-gray-100 leading-relaxed space-y-6 text-lg">
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
            </GlassCardContent>
          </GlassCard>
        </section>

        {/* Experience Sections */}
        <section className="max-w-6xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Building The Future
          </h2>
          <div className="space-y-12">
            {/* ShakeDeal */}
            <GlassCard>
              <GlassCardContent>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Founder & MD</h3>
                    <p className="text-cyan-300 text-xl mb-2">ShakeDeal</p>
                  </div>
                  <div className="text-slate-300 text-sm flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <Calendar className="w-4 h-4 mr-2" /> 2016 - Present
                  </div>
                </div>
                <p className="text-slate-100 mb-8 text-lg leading-relaxed">
                  Shakedeal is a B2B commerce and procurement enablement platform trusted by over 300+ enterprise clients, helping them drive 5-8% efficiency gains across sourcing, fulfillment, and commercial operations.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">B2B E-commerce Infrastructure</h4>
                    <p className="text-purple-200 text-sm">Building custom procurement portals and digital catalogs that simplify sourcing, fulfillment, and vendor management for large organizations.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">AI-Enabled Procurement Automation</h4>
                    <p className="text-purple-200 text-sm">Helping enterprises digitize and optimize purchase workflows — from PR-to-PO — using data-driven decisioning and automation.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Tail Spend Management</h4>
                    <p className="text-purple-200 text-sm">Centralizing and streamlining long-tail procurement to reduce maverick spend and improve compliance across indirect categories.</p>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
            
            {/* ShakePe */}
            <GlassCard>
              <GlassCardContent>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Co-Founder</h3>
                    <p className="text-cyan-300 text-xl mb-2">ShakePe</p>
                  </div>
                  <div className="text-slate-300 text-sm flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <Calendar className="w-4 h-4 mr-2" /> 2022 - Present
                  </div>
                </div>
                <p className="text-slate-100 mb-8 text-lg leading-relaxed">
                  ShakePe is an enterprise-grade rewards and recognition platform that helps businesses deliver impactful employee and channel incentives.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Enterprise Rewards & Milestone Gifting</h4>
                    <p className="text-purple-200 text-sm">A flexible platform to manage employee rewards, achievement-based recognition, and special occasion gifting at scale.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Channel Incentivization</h4>
                    <p className="text-purple-200 text-sm">Drive partner engagement with personalized reward campaigns delivered through WhatsApp, email, or direct links.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Redemption Marketplace</h4>
                    <p className="text-purple-200 text-sm">Recipients can redeem rewards from a vast catalog of products, experiences, and vouchers — all tracked and managed in real-time.</p>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
            
            {/* Aegon Power */}
            <GlassCard>
              <GlassCardContent>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Founder</h3>
                    <p className="text-cyan-300 text-xl mb-2">Aegon Power</p>
                  </div>
                  <div className="text-slate-300 text-sm flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <Calendar className="w-4 h-4 mr-2" /> 2018 - Present
                  </div>
                </div>
                <p className="text-slate-100 mb-8 text-lg leading-relaxed">
                  Aegon Power is a private label brand offering high-performance power tools and equipment for India's growing D2C and B2B markets.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">D2C E-commerce Brand Building</h4>
                    <p className="text-purple-200 text-sm">Scaled a direct-to-consumer brand delivering durable, cost-effective tools to end users across India through digital-first channels.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Category Leadership in Tools & Equipment</h4>
                    <p className="text-purple-200 text-sm">Built a portfolio of best-selling products across agricultural tools, construction equipment, and professional-grade power tools.</p>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>

            {/* Shipway */}
            <GlassCard>
              <GlassCardContent>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Angel Investor</h3>
                    <p className="text-cyan-300 text-xl mb-2">Shipway</p>
                  </div>
                  <div className="text-slate-300 text-sm flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <Calendar className="w-4 h-4 mr-2" /> 2021 - Present
                  </div>
                </div>
                <p className="text-slate-100 mb-8 text-lg leading-relaxed">
                  As India's second-largest shipping aggregator, Shipway enables D2C and enterprise brands to streamline fulfillment, automate tracking, and scale their post-order operations with confidence. Recently acquired by Unicommerce.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Shipping Aggregation & Fulfillment Automation</h4>
                    <p className="text-purple-200 text-sm">Providing a unified interface to access multiple courier partners, automate order fulfillment, and optimize shipping decisions at scale.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Post-Purchase Customer Experience</h4>
                    <p className="text-purple-200 text-sm">Enabling real-time tracking, branded notifications, and proactive communication to reduce delivery anxiety and improve customer retention.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-semibold mb-3 text-white">Returns & RTO Management</h4>
                    <p className="text-purple-200 text-sm">Offering advanced tools to reduce Return-to-Origin (RTO) rates, streamline reverse logistics, and protect margins for e-commerce businesses.</p>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </section>

        {/* Speaking Engagements Section */}
        <section className="max-w-6xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Where I've Shared My Voice
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastTalks.map((talk, index) => (
              <GlassCard key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="w-full h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-800/20 to-black/40 relative">
                  <img
                    src={talk.imageUrl}
                    alt={`${talk.title} at ${talk.event}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <GlassCardContent>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">{talk.title}</h3>
                  <p className="text-cyan-300 mb-3 font-medium">{talk.event}</p>
                  <div className="flex items-center text-gray-300 mb-2 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{talk.location}</span>
                  </div>
                  <p className="text-gray-100 text-sm leading-relaxed">{talk.description}</p>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-200 mb-8">
              Interested in having me speak at your next event? 
              I share insights on B2B innovation, procurement transformation, and entrepreneurship.
            </p>
            <a 
              href="mailto:akshay@shakedeal.com?subject=Speaking Inquiry" 
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold backdrop-blur-xl bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-white-10 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Invite Me to Speak
            </a>
          </div>
        </section>

        {/* Media & Press Coverage Section */}
        <section className="max-w-6xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Media & Press Coverage
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <a href="https://www.forbes.com/30-under-30/2021/asia/retail-ecommerce?profile=shakedeal" target="_blank" rel="noreferrer" className="block group">
              <GlassCard className="h-full hover:scale-105 transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-gray-800/20 to-black/40 overflow-hidden relative">
                  <img 
                    src="https://imageio.forbes.com/specials-images/imageserve/607708432e610417a0aa612a/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds" 
                    alt="Forbes 30 Under 30 Asia 2021 featuring Akshay Hegde" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <GlassCardContent>
                  <div className="text-sm text-cyan-300 mb-2 font-medium">Forbes Asia</div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">Forbes 30 Under 30 Asia 2021: Retail & Ecommerce</h3>
                  <p className="text-gray-100 text-sm italic leading-relaxed">
                    "More than 10,000 companies have become clients of the Bangalore-based B2B platform for office supplies and industrial goods since the Hegde brothers founded it in 2016."
                  </p>
                </GlassCardContent>
              </GlassCard>
            </a>
            
            <a href="https://www.financialexpress.com/business/industry-integration-of-b2b-marketplaces-into-supply-chain-networks-for-increased-efficiency-3224744/" target="_blank" rel="noreferrer" className="block group">
              <GlassCard className="h-full hover:scale-105 transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-gray-800/20 to-black/40 overflow-hidden relative">
                  <img 
                    src="https://www.financialexpress.com/wp-content/uploads/2023/08/logistics.jpg?w=1024" 
                    alt="Financial Express article about B2B marketplace integration" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <GlassCardContent>
                  <div className="text-sm text-cyan-300 mb-2 font-medium">Financial Express</div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">Simplifying P2P</h3>
                  <p className="text-gray-100 text-sm italic leading-relaxed">
                    "Integration of B2B marketplaces into supply chain networks for increased efficiency"
                  </p>
                </GlassCardContent>
              </GlassCard>
            </a>
            
            <a href="https://www.entrepreneur.com/en-in/news-and-trends/procurement-partners/365404" target="_blank" rel="noreferrer" className="block group">
              <GlassCard className="h-full hover:scale-105 transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-gray-800/20 to-black/40 overflow-hidden relative">
                  <img 
                    src="https://assets.entrepreneur.com/content/3x2/2000/1613392515-MyPost36.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380" 
                    alt="Entrepreneur.com article featuring ShakeDeal procurement platform" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <GlassCardContent>
                  <div className="text-sm text-cyan-300 mb-2 font-medium">Entrepreneur.com</div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-200 transition-colors">Procurement Partners</h3>
                  <p className="text-gray-100 text-sm italic leading-relaxed">
                    "In 2016, brothers Akshay and Akash Hegde & Santhosh Reddy came up with the idea of ShakeDeal – a B2B ecommerce platform that solves problems in the procurement and distribution space"
                  </p>
                </GlassCardContent>
              </GlassCard>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://stories.shakedeal.com/news/" 
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold backdrop-blur-xl bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-white-10 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Media Coverage
            </a>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="max-w-6xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <GlassCard className="flex flex-col items-center text-center p-8 hover:scale-105 transition-all duration-300">
              <Award className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Forbes 30 Under 30 Asia</h3>
              <p className="text-gray-300">Class of 2021</p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center p-8 hover:scale-105 transition-all duration-300">
              <Award className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Entrepreneur 35 under 35</h3>
              <p className="text-gray-300">Class of 2021</p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center p-8 hover:scale-105 transition-all duration-300">
              <Award className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Startup of the Year</h3>
              <p className="text-gray-300">2020</p>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center p-8 hover:scale-105 transition-all duration-300">
              <Award className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">CNBC Young Turks</h3>
              <p className="text-gray-300">2021</p>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center p-8 hover:scale-105 transition-all duration-300">
              <Award className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Fastest Growing Small Business</h3>
              <p className="text-gray-300">2020</p>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto py-16 text-center">
          <GlassCard>
            <GlassCardContent>
              <p className="text-gray-200 mb-6">© {new Date().getFullYear()} Akshay Hegde. All rights reserved.</p>
              <div className="flex justify-center gap-6 mb-4">
                <a href="mailto:akshay.0015@gmail.com" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/akshay7hegde/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-gray-400">Version 2.0 - Space Black Glassmorphic</div>
            </GlassCardContent>
          </GlassCard>
        </footer>
      </div>
    </div>
  );
}

export default App;