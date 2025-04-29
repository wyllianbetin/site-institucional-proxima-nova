import React from 'react';
import { Check, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FeatureItem {
  text: string;
}
interface SolutionSectionProps {
  id: string;
  title: string;
  description: string[];
  features: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
  innerRef?: React.RefObject<HTMLDivElement>;
}
const SolutionSection = ({
  id,
  title,
  description,
  features,
  buttonText,
  imageSrc,
  imageAlt,
  reverseLayout = false,
  innerRef
}: SolutionSectionProps) => {
  const [imageError, setImageError] = React.useState(false);
  const handleImageError = () => {
    console.log(`Failed to load image: ${imageSrc}`);
    setImageError(true);
  };
  const ImageComponent = () => <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
      {!imageError ? <img src={imageSrc} alt={imageAlt} className="absolute w-full h-full object-cover" onError={handleImageError} /> : <div className="absolute w-full h-full bg-gray-200 flex items-center justify-center">
          <Image className="h-16 w-16 text-gray-400" />
          <p className="text-gray-500 mt-4">Image not available</p>
        </div>}
    </div>;
  const ContentComponent = () => <div>
      <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">{title}</h2>
      <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
      <div className="space-y-4 text-gray-700 mb-6">
        {description.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
      </div>
      
      <div className="space-y-3 mb-8">
        <h3 className="font-semibold text-lg text-proximanova-blue">O que está incluso:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {features.map((item, index) => <div key={index} className="flex items-start">
              <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                <Check className="h-3 w-3 text-proximanova-blue" />
              </div>
              <p className="text-sm text-gray-700">{item}</p>
            </div>)}
        </div>
      </div>
      
      <Link to="/contact" className="primary-btn">
        {buttonText}
      </Link>
    </div>;
  return <section id={id} ref={innerRef} className={`section ${reverseLayout ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={reverseLayout ? 'order-2 lg:order-1' : ''}>
            {!reverseLayout ? <ContentComponent /> : <ImageComponent />}
          </div>
          
          <div className={reverseLayout ? 'order-1 lg:order-2' : ''}>
            {reverseLayout ? <ContentComponent /> : <ImageComponent />}
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;