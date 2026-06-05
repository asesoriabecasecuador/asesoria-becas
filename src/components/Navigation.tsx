import React, { useState, useEffect } from 'react';
import MitadDelMundoLogo from './MitadDelMundoLogo';
import { Send } from 'lucide-react';

interface NavigationProps {
  onSimulateClick: () => void;
  onConversion: () => void;
  conversionCount: number;
}

export default function Navigation({ onSimulateClick, onConversion, conversionCount }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-neutral-200/60 py-3 shadow-xs' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Logo Brand area */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 min-w-0 shrink">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0">
              <MitadDelMundoLogo className="transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <div className="flex items-center">
                <span className="font-sans font-extrabold tracking-tight text-neutral-900 text-[10.5px] min-[370px]:text-xs sm:text-sm md:text-base leading-tight">
                  Ecuador Global <span className="text-[#0E3572] font-bold">Académico</span>
                </span>
              </div>
              <p className="text-[7.5px] min-[370px]:text-[8.5px] sm:text-[9.5px] font-mono font-extrabold text-[#E6B51E] uppercase tracking-wider sm:tracking-widest leading-none mt-0.5 whitespace-nowrap">
                Consultoría ex-SENESCYT
              </p>
            </div>
          </div>

          {/* Desktop Navigation links - Simple & minimal */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#servicios" 
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#como-funciona" 
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Cómo funciona
            </a>
            <a 
              href="#registro-titulo" 
              className="text-xs font-semibold text-[#0E3572] hover:text-neutral-950 transition-colors"
            >
              Registro de Título
            </a>
            <a 
              href="#faqs" 
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Preguntas
            </a>
          </div>

          {/* Minimal Navigation CTA */}
          <div className="flex items-center shrink-0">
            <a 
              id="nav-cta-telegram"
              href="https://t.me/asesordebecas_bot"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onConversion} 
              className="group inline-flex items-center justify-center gap-1 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-2.5 py-2 min-[370px]:px-3.5 min-[370px]:py-2.5 sm:px-4 sm:py-2.5 rounded-lg xs:rounded-xl text-[9px] min-[370px]:text-[10px] sm:text-xs font-bold shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5 whitespace-nowrap"
              style={{ minHeight: '36px' }}
            >
              <Send size={11} className="text-sky-300 fill-sky-300 shrink-0" />
              <span>Consultar en Telegram</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
