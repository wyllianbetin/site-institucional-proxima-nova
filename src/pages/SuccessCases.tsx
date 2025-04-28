import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Star, ArrowRight } from 'lucide-react';
const SuccessCases = () => {
  const successCases = [{
    name: "TechStore",
    industry: "Electronics Retail",
    challenge: "A traditional electronics store with declining foot traffic and increasing competition from online retailers.",
    solution: "Digital Retailer Program with full implementation support.",
    results: ["300% increase in total sales within 6 months", "Expanded customer base beyond local market", "Achieved Mercado Livre Gold Seller status in under a year"],
    quote: "Próxima Nova's program transformed our business completely. We're now reaching customers across Brazil and growing every month.",
    person: "Maria Silva, CEO",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }, {
    name: "Home Decor Shop",
    industry: "Home & Decoration",
    challenge: "A home decor business with high-quality products but limited market reach and seasonal sales fluctuations.",
    solution: "Strategic Consulting followed by Seller Program enrollment.",
    results: ["450% year-over-year growth in online revenue", "Smoothed out seasonal sales through strategic planning", "Expanded product catalog from 50 to 200 items"],
    quote: "The strategic insights provided by Próxima Nova helped us identify and capture opportunities we never knew existed.",
    person: "João Mendes, Founder",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  }, {
    name: "Fashion Outlet",
    industry: "Fashion & Apparel",
    challenge: "A fashion retailer struggling with inventory management and high return rates for online sales.",
    solution: "Ecosystem approach with focus on Operations and Technology components.",
    results: ["40% reduction in return rates through improved listings", "Inventory turnover increased by 60%", "Customer satisfaction score improved from 3.2/5 to 4.8/5"],
    quote: "The technological solutions and operational support transformed how we manage our online business, making it much more efficient and profitable.",
    person: "Ana Costa, Operations Manager",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }];
  return <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Casos de Sucesso</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">Resultados reais de empresas que fizeram parceria com a Próxima Nova em sua jornada de transformação digital.</p>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Success Cases Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-proximanova-blue" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Histórias de Sucesso</h2>
            </div>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">Descubra como empresas de diferentes setores alcançaram resultados notáveis ​​implementando nossas soluções de transformação digital.</p>
          </div>
          
          {/* Success Cases */}
          {successCases.map((caseStudy, index) => <div key={index} className={`mb-24 ${index !== successCases.length - 1 ? "border-b border-gray-200 pb-24" : ""}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? "order-2 lg:order-1" : ""}>
                  <div className="bg-proximanova-blue/5 rounded-lg p-1">
                    <div className="relative h-72 md:h-96 rounded overflow-hidden">
                      <img src={caseStudy.image} alt={caseStudy.name} className="absolute w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 !== 0 ? "order-1 lg:order-2" : ""}>
                  <div className="inline-block bg-gray-100 text-proximanova-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">{caseStudy.name}</h3>
                  <div className="h-1 w-12 bg-proximanova-yellow mb-6"></div>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge:</h4>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution:</h4>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Results:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => <li key={i} className="flex items-start">
                            <div className="bg-proximanova-yellow p-1 rounded-full mr-3 mt-1">
                              <div className="h-2 w-2 bg-proximanova-blue rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-proximanova-yellow p-6 rounded-r-lg mb-6">
                    <p className="text-gray-700 italic mb-3">"{caseStudy.quote}"</p>
                    <p className="font-medium text-proximanova-blue">{caseStudy.person}</p>
                  </div>
                  
                  <button className="flex items-center text-proximanova-blue hover:text-proximanova-yellow transition-colors font-medium">
                    Read full case study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-8 text-center">
            Impact Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">300+</div>
              <p className="text-gray-700">Businesses Transformed</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">230%</div>
              <p className="text-gray-700">Average Sales Growth</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">85%</div>
              <p className="text-gray-700">Client Retention Rate</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">4.8/5</div>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction title="Ready to become our next success story?" buttonText="Get started now" buttonLink="/contact" />
      
      <Footer />
      <WhatsAppButton />
    </>;
};
export default SuccessCases;