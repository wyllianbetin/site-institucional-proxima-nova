
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessCases = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechStore",
      text: "With Próxima Nova's help, we increased our online sales by 300% in just 6 months. Their ecosystem approach made all the difference.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      stars: 5,
    },
    {
      name: "João Mendes",
      company: "Home Decor Shop",
      text: "The Digital Retailer Program gave us exactly what we needed to start selling professionally on marketplaces. Highly recommended!",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      stars: 5,
    },
    {
      name: "Ana Costa",
      company: "Fashion Outlet",
      text: "The strategic consulting was eye-opening. Their team identified opportunities we never thought of, and now we're growing faster than ever.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      stars: 5,
    },
  ];

  const clientLogos = [
    "TechStore", "HomeDecor", "FashionOutlet", "SportGoods", "KitchenPlus", "PetShop"
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Star className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Success Cases
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            See how businesses like yours have achieved remarkable results with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-10">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by retailers across Brazil</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-gray-100 h-12 px-6 rounded flex items-center justify-center"
              >
                <span className="font-medium text-gray-700">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/success-cases" 
            className="inline-flex items-center gap-2 primary-btn"
          >
            View All Success Cases
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
