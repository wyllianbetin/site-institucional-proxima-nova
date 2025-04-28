import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '@/config/testimonials';
import BrandLogosCarousel from './BrandLogosCarousel';
const SuccessCases = () => {
  const clientLogos = ["TechStore", "HomeDecor", "FashionOutlet", "SportGoods", "KitchenPlus", "PetShop"];
  return <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Star className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">Casos de Sucesso</h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">Veja como essas empresas escalaram as vendas através das nossas soluções!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              
              <p className="text-gray-700">"{testimonial.text}"</p>
            </div>)}
        </div>

        <BrandLogosCarousel />

        <div className="text-center mt-10">
          <Link to="/success-cases" className="inline-flex items-center gap-2 primary-btn">
            Confira os Casos de Sucesso
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default SuccessCases;