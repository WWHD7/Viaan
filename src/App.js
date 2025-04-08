import React from 'react';

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

        <footer className="py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Akshay Hegde. All rights reserved.</p>
          <div className="mt-2 text-xs text-gray-400">Version 2.0 - Simplified</div>
        </footer>
      </div>
    </div>
  );
}

export default App; 