import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Flame, Check, HelpCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  university: string;
  studyCountry: string;
  topic: string;
  badge: string;
  text: string;
  outcome: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list: Testimonial[] = [
    {
      id: 1,
      name: "Andrea M.",
      location: "Guayaquil",
      university: "Universidad de Barcelona",
      studyCountry: "España",
      topic: "Compensación de Beca de Maestría",
      badge: "Compensación Laboral",
      text: "Tenía dudas sobre cómo reportar mis horas como consultora externa. En la SENESCYT no me daban respuestas claras sobre los justificativos y temía que me rechazaran. El especialista de Ecuador Global Académico me indicó cómo organizar mis facturas de servicios y el informe de actividades de forma correcta. Presenté todo y mi formulario fue aprobado sin peros en menos de un mes.",
      outcome: "Becaria declarada como CUMPLIDO satisfactoriamente."
    },
    {
      id: 2,
      name: "Carlos T.",
      location: "Quito",
      university: "University of Manchester",
      studyCountry: "Reino Unido",
      topic: "Registro de Título de Doctorado",
      badge: "Registro de Título",
      text: "Mi programa era híbrido y en SENESCYT la primera vez me rechazaron porque exigían un Suplemento Europeo al Título con un desglose específico de horas presenciales que mi universidad no emitía así. Me ayudaron a revisar mi documentación técnica previa, redactamos un descargo sustentado en la normativa vigente y el título fue registrado luego de reingresar la solicitud.",
      outcome: "Título de Doctor (PhD) registrado exitosamente en el portal oficial."
    },
    {
      id: 3,
      name: "Gabriela S",
      location: "Cuenca",
      university: "Sorbonne Université",
      studyCountry: "Francia",
      topic: "Liquidación Financiera y Cierre",
      badge: "Liquidación y Cierre",
      text: "Llevaba dos años con el expediente abierto. Había discrepancias de valores entre la manutención depositada. Me sentía angustiada por posibles cobros del Estado. El consultor revisó mi caso y al cabo de algunas semanas, el Ministrio cerró mi expediente con deuda cero.",
      outcome: "Resolución de Liquidación Financiera emitida con saldo final 0.00 USD."
    },
    {
      id: 4,
      name: "Mateo P.",
      location: "Ambato",
      university: "University of Melbourne",
      studyCountry: "Australia",
      topic: "Casos Especiales y Prórroga Extraordinaria",
      badge: "Exceso de Plazos",
      text: "Por la pandemia mi tesis de doctorado se retrasó seis meses. Me notificaron con una alerta de incumplimiento de plazos que conllevaba coactivas gigantescas. Estaba desorientado. Al conversar aquí, mi especialista técnico diseñó una hoja de ruta con descargos médicos y académicos muy sólidos. Logramos justificar el retraso administrativo sin multas de ningún tipo.",
      outcome: "Prórroga aprobada por fuerza mayor y expediente regularizado."
    },
    {
      id: 5,
      name: "Valeria J.",
      location: "Loja",
      university: "Universidad de Chile",
      studyCountry: "Chile",
      topic: "Compensación como Docente",
      badge: "Compensación",
      text: "Trabajo como docente a tiempo parcial en una universidad y tengo facturas por servicios profesionales de investigación en otra. El proceso de compensación combinando ambas actividades me parecía un laberinto legal irresoluble. El analista me entregó la estructura exacta de cómo debía declarar mis horas híbridas. El trámite fluyó impecable y ya tengo la tranquilidad de remitir mi compensación sin incertidumbre.",
      outcome: "Compensación al día."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const current = list[activeIndex];

  return (
    <section id="testimonios" className="py-20 bg-white border-b border-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E3572] px-3 py-1 bg-[#0E3572]/5 rounded-full">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-900 mt-4 tracking-tight leading-snug">
            Becarios que lograron cerrar su expediente
          </h2>
          <p className="text-neutral-500 font-light mt-3 text-base leading-relaxed">
            Te compartimos algunos casos de becarios que encontraron en nuestro acompañamiento la claridad que necesitaban.
          </p>
        </div>

        {/* Premium Testimonials Frame */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative bg-[#FAFAFC] border border-neutral-200/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs transition-all duration-300">
            
            {/* Background design accents */}
            <div className="absolute top-6 right-8 text-neutral-200/50 pointer-events-none">
              <Quote size={80} strokeWidth={1} />
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-8">
              
              {/* Left Column: Author card (responsive sizing, min touch size) */}
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center space-x-3 md:flex-col md:items-start md:space-x-0 md:space-y-4">
                  
                  {/* Decorative Initials Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0E3572] flex items-center justify-center text-white font-extrabold text-lg shadow-sm border border-white/10 shrink-0">
                    {current.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-neutral-900 tracking-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      Desde {current.location}, Ecuador
                    </p>
                    <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                      {current.university} <br/> ({current.studyCountry})
                    </p>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/50 hidden md:block">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    Trámite resuelto
                  </span>
                  <span className="text-xs font-semibold text-[#0E3572]">
                    {current.topic}
                  </span>
                </div>
              </div>

              {/* Right Column: Testimony Core */}
              <div className="flex-1">
                
                {/* Visual Label */}
                <span className="inline-flex items-center gap-1.5 bg-[#E6B51E]/10 text-neutral-900 px-2.5 py-1 rounded-md text-[10px] font-mono font-extrabold tracking-uppercase mb-4 select-none">
                  <Flame size={10} className="text-[#E6B51E]" />
                  <span>{current.badge}</span>
                </span>

                {/* Text excerpt */}
                <p className="text-[#333333] font-light text-sm sm:text-base leading-relaxed italic mb-6">
                  "{current.text}"
                </p>

                {/* Outcome notification bar */}
                <div className="bg-emerald-50 border border-emerald-100/60 rounded-xl p-4 flex items-start gap-2.5">
                  <span className="p-0.5 bg-emerald-500 text-white rounded-full mt-0.5 shrink-0">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-emerald-800 uppercase tracking-wider block">
                      Resultado de consultoría
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {current.outcome}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Carousel navigation triggers (touch size min 44px) */}
            <div className="mt-8 pt-6 border-t border-neutral-200/50 flex items-center justify-between">
              
              {/* Selector dots with touch feedback */}
              <div className="flex items-center space-x-1.5">
                {list.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-[#0E3572]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Ver testimonio de ${item.name}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Anterior testimonio"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
