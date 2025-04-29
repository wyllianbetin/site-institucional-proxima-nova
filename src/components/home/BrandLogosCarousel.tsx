
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const BrandLogosCarousel = () => {
  const isMobile = useIsMobile();

  // Array of 32 brand logos with actual image paths
  const brandLogos = Array.from({
    length: 32
  }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    image: `/marca${i + 1}-logo.png`
  }));

  return (
    <div className="w-full overflow-hidden bg-white rounded-xl p-6">
      <h3 className="text-xl font-semibold text-center mb-6">Clientes que confiaram em nós!</h3>
      
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-12">
        <Carousel opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true
        }} className="w-full">
          <CarouselContent>
            {brandLogos.map(brand => (
              <CarouselItem key={brand.id} className={`${isMobile ? 'basis-1/3' : 'basis-1/8'} pl-4`}>
                <div className="relative aspect-square overflow-hidden rounded-full border border-gray-200 hover:border-gray-300 transition-colors max-w-[100px] md:max-w-[80px] mx-auto">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 transform scale-75 md:scale-100" />
          <CarouselNext className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 transform scale-75 md:scale-100" />
        </Carousel>
      </div>
    </div>
  );
};

export default BrandLogosCarousel;
