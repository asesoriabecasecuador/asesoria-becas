import React from 'react';
import MitadDelMundoLogo from './MitadDelMundoLogo';
import { Send, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="bg-[#111112] text-neutral-400 py-12 border-t border-white/5 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/5 gap-6">
          
          {/* Logo brand */}
          <div className="flex items-center space-x-3.5">
            <MitadDelMundoLogo size={36} />
            <div>
              <span className="font-bold tracking-tight text-white text-sm">
                Ecuador Global <span className="text-neutral-400 font-normal">Académico</span>
              </span>
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                Consultoría ex-SENESCYT
              </p>
            </div>
          </div>

          {/* Minimal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#registro-titulo" className="hover:text-white transition-colors">Registro de Títulos</a>
            <a href="#faqs" className="hover:text-white transition-colors">Preguntas</a>
          </div>

          {/* Telegram badge link */}
          <div>
            <a 
              href="https://t.me/asesordebecas_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-4 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5"
            >
              <Send size={11} className="text-sky-300 fill-sky-300 shrink-0" />
              <span>Consultar en Telegram</span>
            </a>
          </div>

        </div>

        {/* Informative disclaimers and privacy notes */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-light leading-relaxed">
          
          <div className="text-left space-y-2">
            <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[10px] font-mono">
              Autonomía
            </h4>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              <strong>Ecuador Global Académico</strong> es una iniciativa autónoma e independiente de consultoría de especialidad administrativa. Nuestros asesores tienen 10 años de experiencia y se actualizan constantemente respecto a la normativa que rige a los procesos de becas y registro de títulos.
            </p>
          </div>

          <div className="text-left space-y-2 md:pl-8">
            <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[10px] font-mono">
              Confidencialidad
            </h4>
            <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <Lock size={13} className="text-[#E6B51E] shrink-0 mt-0.5" />
              <p className="text-neutral-400 text-[11px] leading-normal font-light">
                Este sitio respeta por completo tu privacidad. No recolectamos cookies intrusivas ni guardamos registros personales en bases de datos externas. Toda comunicación a través de Telegram se rige por estrictos estándares profesionales de reserva de datos.
              </p>
            </div>
          </div>

        </div>

        {/* Tricolor structural block strip */}
        <div className="h-[2px] flex mb-6">
          <div className="flex-1 bg-ec-yellow opacity-40" />
          <div className="flex-1 bg-ec-blue opacity-40" />
          <div className="flex-1 bg-ec-red opacity-40" />
        </div>

        {/* Bottom copyright list */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono">
          <p>© {currentYear} Ecuador Global Académico. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <span>Privado & Seguro</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
