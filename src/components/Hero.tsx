import React from 'react';
import { Send, ShieldCheck, Lock, Globe, ArrowRight } from 'lucide-react';
import MitadDelMundoLogo from './MitadDelMundoLogo';

interface HeroProps {
  onSimulateClick: () => void;
  onConversion: () => void;
  conversionCount: number;
}

export default function Hero({ onSimulateClick, onConversion, conversionCount }: HeroProps) {
  return (
    <section 
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFC]"
    >
      {/* Premium Background Grid Graphic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-ec-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-[450px] h-[450px] bg-ec-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Mitad del Mundo Emblem Icon directly on Hero - Now larger as a visual anchor */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="relative p-3 sm:p-4 bg-white rounded-full border border-neutral-200/80 shadow-md transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[76px] md:h-[76px] flex items-center justify-center">
              <MitadDelMundoLogo className="transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-4">
          Resolución Técnica de <br className="hidden sm:inline" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0E3572] via-neutral-900 to-[#0E3572]">
            Obligaciones ex-SENESCYT
          </span>
        </h1>

        {/* High-visibility Core Focus Callout - Placed prominently below the title */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3.5 bg-amber-50/80 border border-amber-200/80 text-neutral-900 px-5 py-4 sm:px-6 sm:py-3.5 rounded-2xl shadow-xs mb-8 max-w-2xl mx-auto text-left sm:text-center">
          <div className="p-1 px-3 bg-[#E6B51E] text-neutral-900 rounded-lg justify-center flex items-center font-mono text-[9px] min-[370px]:text-[10px] font-extrabold tracking-wider uppercase shrink-0 select-none">
            EFICIENCIA TÉCNICA
          </div>
          <p className="text-xs sm:text-sm font-sans font-medium text-neutral-800 leading-relaxed">
            El <strong className="font-extrabold text-[#0E3572] text-[13px] sm:text-base">90%</strong> de los trámites se soluciona rápido por la vía administrativa y <strong className="font-bold text-neutral-900">no requiere abogados ni juicios eternos</strong>.
          </p>
        </div>

        {/* Subtext describing high-end, discreet academic/administrative advice without lawsuit clutter */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-neutral-600 font-sans font-light leading-relaxed mb-8 px-2 sm:px-0">
          Te guiamos para que demuestres tu <strong className="font-semibold text-neutral-800">compensación laboral</strong>, logres la <strong className="font-semibold text-neutral-800">liquidación académica o financiera de tu contrato </strong> o prepares la documentación <strong className="font-semibold text-neutral-800">para el registro de tu título extranjero</strong> de forma sencilla y directa.
        </p>

        {/* CTA Actions Panel - Highly polished touch targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14 max-w-sm sm:max-w-none mx-auto px-4 sm:px-0">
          <button
            id="hero-primary-cta"
            onClick={onSimulateClick}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white active:scale-[0.99] transition-all duration-300 px-6 py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg cursor-pointer select-none border border-white/10"
            style={{ minHeight: '44px' }}
          >
            <span>Ver paso a paso</span>
            <ArrowRight size={13} className="text-neutral-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            id="hero-secondary-cta"
            href="https://t.me/asesordebecas_bot"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onConversion}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-6 py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5"
            style={{ minHeight: '44px' }}
          >
            <Send size={12} className="text-sky-300 fill-sky-300 shrink-0" />
            <span>Consultar en Telegram</span>
          </a>
        </div>

        {/* Credibility Anchors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200/60 max-w-4xl mx-auto">
          
          <div className="flex items-start text-left space-x-3.5">
            <div className="flex-shrink-0 p-2.5 bg-neutral-50 rounded-lg border border-neutral-100">
              <Lock size={16} className="text-ec-blue" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-neutral-800 text-xs uppercase tracking-wider">
                Absoluta Privacidad
              </h3>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">
                Su historial de becario y documentación personal están protegidos por anonimato absoluto frente a terceros.
              </p>
            </div>
          </div>

          <div className="flex items-start text-left space-x-3.5">
            <div className="flex-shrink-0 p-2.5 bg-neutral-50 rounded-lg border border-neutral-100">
              <ShieldCheck size={16} className="text-ec-blue" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-neutral-800 text-xs uppercase tracking-wider">
                Optimización de Costos
              </h3>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">
                No patrocinamos juicios interminables. Actuamos directamente por la vía administrativa más económica y rápida.
              </p>
            </div>
          </div>

          <div className="flex items-start text-left space-x-3.5">
            <div className="flex-shrink-0 p-2.5 bg-neutral-50 rounded-lg border border-neutral-100">
              <Globe size={16} className="text-ec-yellow" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-neutral-800 text-xs uppercase tracking-wider">
                Soporte Centralizado
              </h3>
              <p className="text-xs text-neutral-500 mt-1 leading-normal">
                Atención ágil para ecuatorianos en todo el mundo, sincronizada según la zona horaria del Ecuador (UTC-5).
              </p>
            </div>
          </div>

        </div>

        {/* Live Conversion Notice / Signal */}
        <div className="mt-8 inline-flex items-center space-x-2 text-xs text-neutral-400 font-mono">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6B51E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6B51E]"></span>
          </span>
          <span>
            Búsquedas resueltas hoy: <strong className="text-neutral-700 font-semibold">{conversionCount + 147} becarios asistidos</strong>
          </span>
        </div>

      </div>

      {/* Decorative Modern Tri-color border edge - elegant tricolor line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-ec-yellow" />
        <div className="flex-1 bg-ec-blue" />
        <div className="flex-1 bg-ec-red" />
      </div>

    </section>
  );
}
