
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="whatsapp-btn"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
