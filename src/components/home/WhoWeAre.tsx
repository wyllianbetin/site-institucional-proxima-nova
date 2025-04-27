
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
            Quem Somos
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Especialistas em conectar o varejo físico ao mundo digital. Com mais de 11 anos de experiência 
            em vendas online, desenvolvemos um ecossistema único no Brasil especializado em marketplaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">11+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Anos de Experiência</h3>
            <p className="text-gray-600">Mais de uma década de expertise em marketplace</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">300+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Negócios Transformados</h3>
            <p className="text-gray-600">Varejistas que cresceram com nossas soluções</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">1º</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No Brasil</h3>
            <p className="text-gray-600">Ecossistema único de transformação digital do varejo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
