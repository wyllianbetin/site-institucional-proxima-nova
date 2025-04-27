
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  style?: "primary" | "secondary";
  className?: string;
}

const CallToAction = ({
  title,
  buttonText,
  buttonLink,
  style = "primary",
  className = "",
}: CallToActionProps) => {
  return (
    <div className={`py-16 ${style === "primary" ? "bg-proximanova-blue text-white" : "bg-white text-proximanova-blue"} ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <Link
          to={buttonLink}
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold transition-all duration-300 ${
            style === "primary" 
              ? "bg-proximanova-yellow text-proximanova-blue hover:opacity-90" 
              : "bg-proximanova-blue text-white hover:opacity-90"
          }`}
        >
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
