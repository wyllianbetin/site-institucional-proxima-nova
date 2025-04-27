
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { MessageSquare, Phone, Mail, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contato</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Pronto para começar sua jornada de transformação digital? Entre em contato com nossa equipe.
          </p>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">
                Entre em Contato
              </h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              
              <p className="text-gray-700 mb-8">
                Preencha o formulário abaixo e um de nossos especialistas entrará em contato em breve 
                para discutir como podemos ajudar seu negócio a prosperar no marketplace digital.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4 mt-1">
                    <Mail className="h-5 w-5 text-proximanova-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@proximanova.com" className="text-proximanova-blue hover:underline">
                      contact@proximanova.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4 mt-1">
                    <Phone className="h-5 w-5 text-proximanova-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+551122334455" className="text-proximanova-blue hover:underline">
                      +55 11 2233-4455
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4 mt-1">
                    <MessageSquare className="h-5 w-5 text-proximanova-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/5511999999999" className="text-proximanova-blue hover:underline">
                      +55 11 9999-9999
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Por que nos contatar?</h3>
                <ul className="space-y-3">
                  {[
                    "Orientação especializada em transformação digital",
                    "Soluções personalizadas para seu negócio",
                    "Resultados comprovados com centenas de varejistas",
                    "Abordagem de ecossistema completo",
                    "Especializado em sucesso em marketplace"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-3 w-3 text-proximanova-blue" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-proximanova-blue mb-6">
                Envie uma mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proximanova-blue focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proximanova-blue focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proximanova-blue focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proximanova-blue focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Strategic Consulting">Consultoria Estratégica</option>
                      <option value="Digital Retailer Program">Programa Varejista Digital</option>
                      <option value="Seller Program">Programa Seller</option>
                      <option value="General Inquiry">Dúvida Geral</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proximanova-blue focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-proximanova-blue text-white font-medium rounded-md shadow-sm transition-all duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
