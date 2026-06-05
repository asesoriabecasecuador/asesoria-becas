import React from 'react';
import { Send, Lock } from 'lucide-react';

interface CTASectionProps {
  onConversion: () => void;
}

export default function CTASection({ onConversion }: CTASectionProps) {
  return (
    <section 
      id="cta-section"
      className="py-16 bg-[#FAFAFC] border-b border-neutral-100 relative overflow-hidden font-sans"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight text-neutral-900 mb-3">
          ¿Listo para resolver tu trámite?
        </h2>

        <p className="max-w-xl mx-auto text-neutral-500 font-light text-xs sm:text-sm leading-relaxed mb-8">
          Inicia tu consulta rápida directamente por Telegram. Un especialista estudiará tu caso para guiarte de forma sencilla, confidencial y sin complicaciones.
        </p>

        {/* Telegram Action Button - Simple, clear, consistent with navigation/hero */}
        <div className="max-w-xs mx-auto">
          <a
            id="final-telegram-cta"
            href="https://t.me/asesordebecas_bot"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onConversion}
            className="group w-full inline-flex items-center justify-center gap-2 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-6 py-4 rounded-xl font-bold text-xs shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5"
            style={{ minHeight: '44px' }}
          >
            <Send size={12} className="text-sky-300 fill-sky-300 shrink-0" />
            <span>Consultar en Telegram</span>
          </a>
        </div>

        {/* Simple inline trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-[11px] text-neutral-500 font-medium">
          <span className="flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Asesoría directa</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Absoluta privacidad</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>10 años de experiencia</span>
          </span>
        </div>

        
      </div>
    </section>
  );
}
