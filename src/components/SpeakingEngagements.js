import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

// Mock components from existing UI
const Button = ({ children, variant, type, href }) => {
  return (
    <a href={href} target={href?.startsWith('http') ? "_blank" : undefined} rel="noreferrer">
      <button 
        className={`px-4 py-2 rounded-md font-medium ${
          variant === 'outline' 
            ? 'border border-gray-300 bg-transparent hover:bg-gray-50' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};

const Card = ({ children, className }) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className || ''}`}>{children}</div>;
};

const SpeakingEngagements = () => {
  const pastTalks = [
    {
      title: "Taking a company from Seed to Series A",
      event: "StartUp Summit 2019",
      date: "June 2019",
      location: "Bangalore, India",
      description: "Discussing How to Scale with some of the best minds of the ecosystem",
      imageUrl: "https://media.licdn.com/dms/image/v2/C5122AQEBULbfwxrU9g/feedshare-shrink_8192/feedshare-shrink_8192/0/1565692327732?e=1747267200&v=beta&t=Z2VyjqvUU1e2hAe4_ZYzYYqx_36KvelYUF5IlAXGzAk",
      videoLink: null,
      slidesLink: null
    },
    {
      title: "How procurement is no longer about focusing on cost savings only",
      event: "13th Express, Logistics & Supply Chain Conclave",
      date: "Nov 2019",
      location: "Taj Land's End - Mumbai, India",
      description: "Discussion with industry experts from various sectors on how procurement is no longer about focusing on cost savings only, and how does one manage to build long term relationships with suppliers while shifting focus beyond the cost",
      imageUrl: "https://media.licdn.com/dms/image/v2/C5122AQGkX5Xp49LiuA/feedshare-shrink_1280/feedshare-shrink_1280/0/1570180837804?e=1747267200&v=beta&t=t0SEwOTFWTP6h0F4B5rcQ37yMZmkSDb3L0fJntDe2go",
      videoLink: null,
      slidesLink: null
    },
    {
      title: "Unlocking growth for small and medium businesses through digital transformation",
      event: "Digital Bharat Economy Enclave by Financial Express",
      date: "March 2024",
      location: "The Lalit Hotel New Delhi, India",
      description: "Deep dive into the question of whether government-backed digital initiatives like ONDC, GEM, TReDS, OCEN, etc., can drive the adoption of digital technologies within SMEs",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEHLljV2Nmk_w/feedshare-shrink_1280/feedshare-shrink_1280/0/1686740795228?e=1747267200&v=beta&t=Z1W-gpYpu5kyvNso1jHgOlPD1HpxnpnG5USARiVCslw",
      videoLink: null,
      slidesLink: null
    },
    {
      title: "Digital Transformation AI Solutions to Address Common Pain Points in Supply Chain and Procurement",
      event: "NXTGEN ProcureConnect2024 - Delhi Chapter",
      date: "July 2024",
      location: "Sheraton New Delhi, India",
      description: "Shared valuable insights on current global supply chain issues and showcased how AI is transforming enterprise commerce through innovations and intelligence.",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEVL2pJaRLtag/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719569327436?e=1747267200&v=beta&t=Biadx5zDY3W75-Rl-kpXJdMFe7sQxLJTqiup4Yvee28",
      videoLink: null,
      slidesLink: null
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Where I've Shared My Voice</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {pastTalks.map((talk, index) => (
            <Card key={index} className="flex flex-col h-full">
              // Add this import at the top
              import Image from 'next/image';
              
              // Replace the img tag in the Card component with:
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <Image
                  src={talk.imageUrl}
                  alt={talk.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                
                <div className="flex space-x-3 mt-auto">
                  {talk.videoLink && (
                    <a 
                      href={talk.videoLink} 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Watch
                    </a>
                  )}
                  {talk.slidesLink && (
                    <a 
                      href={talk.slidesLink} 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Slides
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in having me speak at your next event? 
            I share insights on B2B innovation, procurement transformation, and entrepreneurship.
          </p>
          <Button 
            href="mailto:akshay@shakedeal.com?subject=Speaking Inquiry" 
            variant="outline"
          >
            Invite Me to Speak
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakingEngagements;