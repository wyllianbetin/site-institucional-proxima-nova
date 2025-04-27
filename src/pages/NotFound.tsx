
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import WhatsAppButton from '@/components/common/WhatsAppButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Erro: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-proximanova-blue mb-6">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Ops! Página não encontrada</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
          </p>
          <Button asChild className="bg-proximanova-blue hover:opacity-90">
            <Link to="/">Voltar para Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default NotFound;
