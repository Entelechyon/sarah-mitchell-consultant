"use client";

import { useState } from "react";
import Image from "next/image";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleButtonClick = () => {
    setIsChatOpen(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sarah Mitchell Consulting",
    description:
      "Transform your business from chaos to cash flow in 90 days. Professional business consulting for ambitious business owners seeking operational efficiency and profit growth.",
    url: "https://sarahmitchell.online",
    logo: "https://sarahmitchell.online/sarah-mitchell.webp",
    image: "https://sarahmitchell.online/sarah-mitchell.webp",
    telephone: "",
    email: "sarah@sarahmitchellconsulting.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Sarah Mitchell",
      jobTitle: "Business Consultant",
      image: "https://sarahmitchell.online/sarah-mitchell.webp",
      description:
        "Business consultant with 15+ years of experience helping 200+ businesses achieve 25-40% profit improvements through operational optimization and strategic planning.",
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Business Strategy & Planning",
      "Operations Optimization",
      "Growth Consulting",
      "Cash Flow Management",
      "Profit Improvement",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "200",
    },
    knowsAbout: [
      "Business Strategy",
      "Operations Management",
      "Profit Optimization",
      "Cash Flow Management",
      "Business Growth",
      "Process Improvement",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full top-0 z-40" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-navy-700">Sarah Mitchell</span>
                <span className="ml-2 text-sm text-gray-600">Consulting</span>
              </div>
              <button
                onClick={handleButtonClick}
                className="bg-navy-600 text-white px-6 py-2 rounded-lg hover:bg-navy-700 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
                type="button"
                aria-label="Book a consultation with Sarah Mitchell"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-navy-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-semibold mb-6">
                  15+ Years Experience • 200+ Businesses Helped
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
                  Transform Your Business From Chaos to Cash Flow in 90 Days
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  I help ambitious business owners unlock hidden profits, build systems that scale, and reclaim their freedom through proven strategies that deliver measurable results—not theoretical advice.
                </p>
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="bg-navy-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg"
                >
                  Book Free Consultation
                </button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/sarah-mitchell.webp"
                    alt="Sarah Mitchell - Business Consultant"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
              About Sarah
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                With over 15 years of hands-on experience, I've helped 200+ business owners transform their companies from overwhelming obligations into profitable, scalable enterprises. Unlike consultants who've never made payroll, I've been in your shoes—I built and ran my own multi-location retail business for 8 years before becoming a consultant.
              </p>
              <p>
                I specialize in working with established businesses ($500K-$5M revenue) that are successful on paper but struggling with profitability, systems, or growth. My approach is refreshingly practical: no 50-page reports gathering dust, no theoretical frameworks that don't work in the real world. Instead, I provide clear, actionable strategies with step-by-step implementation support.
              </p>
              <p>
                My clients typically see 25-40% profit improvements within 90 days because I focus on what actually moves the needle: operational efficiency, strategic pricing, cash flow optimization, and building systems that work without you. When you work with me, you're not just getting advice—you're getting a partner who understands the daily challenges of running a business and knows exactly how to solve them.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleButtonClick}
                type="button"
                className="bg-navy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
              >
                Let's Talk About Your Business
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              How I Help
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive consulting services designed to drive real, measurable results
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Business Strategy & Planning
                </h3>
                <p className="text-gray-700 mb-6">
                  I create comprehensive yet practical business strategies that align with your goals and market realities. This includes competitive analysis, market positioning, revenue optimization, and growth planning with clear milestones and accountability measures. No theoretical fluff—just actionable plans that drive results.
                </p>
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Operations Optimization
                </h3>
                <p className="text-gray-700 mb-6">
                  I identify and eliminate operational inefficiencies that are silently draining your profits. From workflow optimization and cost reduction to team productivity and process automation, I help you build a business that runs smoothly and profitably—with or without your constant involvement.
                </p>
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Growth Consulting
                </h3>
                <p className="text-gray-700 mb-6">
                  Sustainable growth requires the right foundation. I help you expand strategically by optimizing your business model, improving customer acquisition and retention, developing scalable systems, and ensuring your infrastructure can support increased revenue without proportional increases in stress or overhead.
                </p>
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results/Outcomes Section */}
        <section id="results" className="py-20 bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What You'll Achieve
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Real results from working together
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Increased Profitability</h3>
                <p className="text-gray-300">
                  Average clients see 25-40% profit improvements within 90 days through operational optimization and strategic pricing adjustments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Reclaimed Freedom</h3>
                <p className="text-gray-300">
                  Build systems and processes that allow you to step away from daily operations without everything falling apart—finally take that vacation you've been postponing
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Clear Financial Visibility</h3>
                <p className="text-gray-300">
                  Understand your numbers with confidence, make data-driven decisions, and never be surprised by cash flow issues again
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Scalable Growth</h3>
                <p className="text-gray-300">
                  Create sustainable growth strategies that increase revenue without proportionally increasing your workload or stress levels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="results" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
              Client Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-navy-600">
                <div className="text-4xl font-bold text-navy-600 mb-4">40%</div>
                <p className="text-gray-700 text-lg">
                  Helped retail business increase revenue 40% in 6 months through strategic market positioning and operational improvements
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-navy-600">
                <div className="text-4xl font-bold text-navy-600 mb-4">$200K</div>
                <p className="text-gray-700 text-lg">
                  Streamlined operations for manufacturing company, saving $200K annually while improving delivery times by 30%
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-navy-600">
                <div className="text-4xl font-bold text-navy-600 mb-4">5 to 25</div>
                <p className="text-gray-700 text-lg">
                  Scaled service business team from 5 to 25 employees while improving profit margins and reducing owner involvement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A proven, structured approach to transforming your business
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Discovery & Assessment</h3>
                  <p className="text-gray-700 text-lg">
                    We start with a comprehensive analysis of your business, identifying opportunities, inefficiencies, and growth potential. This includes financial review, operational assessment, and stakeholder interviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Strategic Planning</h3>
                  <p className="text-gray-700 text-lg">
                    Together we create a customized roadmap with clear priorities, milestones, and success metrics. You'll know exactly what needs to happen and when, with realistic timelines that fit your resources.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Implementation Support</h3>
                  <p className="text-gray-700 text-lg">
                    This is where the magic happens. I provide hands-on support as you execute the plan, including regular check-ins, troubleshooting, and adjustments as needed. You're never alone in the implementation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Optimization & Growth</h3>
                  <p className="text-gray-700 text-lg">
                    Once we've achieved your initial goals, we focus on continuous improvement and scaling. We build on your success to create sustainable, long-term growth that doesn't depend on my ongoing involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Stop leaving money on the table and start building the profitable, scalable business you deserve.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">In our complimentary 30-minute Strategy Session, we'll:</h3>
              <ul className="text-left space-y-3 max-w-2xl mx-auto text-lg">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify your biggest profit opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Uncover operational inefficiencies costing you money</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create a clear action plan for your next 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Determine if we're a good fit to work together</span>
                </li>
              </ul>
            </div>
            <button
              onClick={handleButtonClick}
              type="button"
              className="bg-white text-navy-700 px-10 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Schedule Your Free Consultation
            </button>
            <p className="mt-4 text-gray-200">No sales pitch, just valuable insights you can implement immediately.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="text-2xl font-bold mb-2">Sarah Mitchell Consulting</div>
                <p className="text-gray-400">Transforming businesses since 2009</p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p className="mb-2">© {new Date().getFullYear()} Sarah Mitchell Consulting. All rights reserved.</p>
              <p>
                Website by{" "}
                <a
                  href="https://zanepriddle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Zane Priddle
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* ChatBot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
