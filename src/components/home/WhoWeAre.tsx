
import React from 'react';
import { Users } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Users className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Who We Are
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Experts in connecting physical retail to the digital world. With over 11 years of online sales expertise, 
            we've developed a unique ecosystem in Brazil specialized in marketplaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">11+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-gray-600">Over a decade of marketplace expertise</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">300+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Businesses Transformed</h3>
            <p className="text-gray-600">Retailers that grew with our solutions</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">1st</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">In Brazil</h3>
            <p className="text-gray-600">Unique retail digital transformation ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
