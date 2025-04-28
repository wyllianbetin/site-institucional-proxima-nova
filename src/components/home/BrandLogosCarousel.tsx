
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BrandLogosCarousel = () => {
  // Temporary array of example brand logos - replace with your actual logos
  const brandLogos = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    // Replace these with your actual logo images
    image: `https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=100&h=100&fit=crop`
  }));

  return (
    <div className="w-full overflow-hidden bg-white rounded-xl p-6">
      <h3 className="text-xl font-semibold text-center mb-6">Marcas que confiam em nós</h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true,
        }}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-3">
          {brandLogos.map((brand) => (
            <CarouselItem key={brand.id} className="pl-2 md:pl-3 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <div className="relative aspect-square overflow-hidden rounded-full border border-gray-200 hover:border-gray-300 transition-colors max-w-[80px] mx-auto">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BrandLogosCarousel;
