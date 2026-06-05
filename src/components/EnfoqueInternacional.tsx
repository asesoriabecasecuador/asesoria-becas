import React, { useState } from 'react';
import { Shield, Check, Compass, Award, Send, HelpCircle } from 'lucide-react';

interface EnfoqueInternacionalProps {
  onConversion: () => void;
}

export default function EnfoqueInternacional({ onConversion }: EnfoqueInternacionalProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "1. Validez de tu título",
      subtitle: "Verificación del cumplimiento de la normativa vigente",
      description: "Revisamos de manera sencilla que las horas de clases o los créditos académicos extranjeros coincidan con lo que exige la SENESCYT según tu tipo de título nacional o internacional.",
      checks: [
        "Suma correcta de horas o créditos mínimos para Ecuador",
        "Confirmación de que la modalidad es compatible"
      ]
    },
    {
      id: 2,
      title: "2. Estructura de tu récord de notas",
      subtitle: "Revisión del Suplemento o Certificado",
      description: "El Suplemento al Título o tu récord oficial de calificaciones detalla cómo estudiaste. Nos aseguramos de que no existan datos erróneos que confundan al evaluador.",
      checks: [
        "Lectura correcta de la escala de calificaciones",
        "Confirmamos que tu universidad proporcione toda la información solicitada",
        "Detección de errores comunes de escritura o traducción original"
      ]
    },
    {
      id: 3,
      title: "3. Guía de ingreso a la plataforma SIAU",
      subtitle: "Ingreso sin tropiezos",
      description: "Te guiamos para que sepas exactamente cómo organizar tus PDFs y cómo llenar tu solicitud. Así previenes que rechacen tu trámite por un error en el portal electrónico.",
      checks: [
        "Orden ideal de tus documentos en formato digital",
        "Preparación rápida para contestar cualquier aviso del sistema",
        "Acompañamiento básico hasta que el título quede registrado"
      ]
    }
  ];

  return (
    <section id="registro-titulo" className="py-20 bg-[#FAFAFC] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E3572] px-3 py-1 bg-[#0E3572]/5 rounded-full">
            Revisión de requisitos
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-900 mt-4 tracking-tight">
            Revisión de documentación previo al registro de títulos internacionales
          </h2>
          <p className="text-neutral-500 font-light mt-3 leading-relaxed text-sm sm:text-base">
            Registrar tu título extranjero no tiene por qué ser complicado ni confuso. Te ayudamos a revisar que tu expediente esté completo y sin vacíos antes de que lo ingreses oficialmente al sistema.
          </p>
        </div>

        {/* High-fidelity layout centered on the document validation workflow prior to registration */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12" id="preparacion-set-banner">
          
          {/* Left panel: Vertical Steps Tracker */}
          <div className="lg:col-span-4 border-r border-neutral-150/80 bg-neutral-50/50 p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6B51E] font-extrabold">
                Ruta Técnica Preventiva
              </span>
              <h3 className="text-lg font-sans font-extrabold text-[#0E3572] mt-1 tracking-tight leading-snug">
                Pasos previos al registro
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                Haz clic en cada paso de la lista para conocer de forma simple lo que analizaremos en tus documentos antes de que hagas tu solicitud.
              </p>
            </div>

            <div className="space-y-2 text-neutral-800">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setActiveStep(step.id);
                      // Smooth scroll on mobile/tablet viewports to detailed view
                      if (window.innerWidth < 1024) {
                        const setDetails = document.getElementById('set-audit-details');
                        if (setDetails) {
                          setDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      }
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl cursor-pointer text-left text-xs font-semibold border transition-all select-none ${
                      isActive
                        ? 'bg-[#0E3572] text-white border-transparent shadow-xs'
                        : 'bg-white text-neutral-700 border-neutral-200/60 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{step.title}</span>
                      <span className={`text-[9px] font-normal mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>
                        {step.subtitle}
                      </span>
                    </div>
                    <Compass size={14} className={isActive ? 'text-ec-yellow' : 'text-[#0E3572]/70'} />
                  </button>
                );
              })}
            </div>

            <div className="bg-white border border-neutral-150/50 p-4 rounded-xl">
              <p className="text-[10px] text-neutral-500 leading-relaxed font-mono">
                🕒 Asistencia sincronizada bajo la zona horaria del Ecuador (UTC-5). Soporte ágil para residentes en el exterior.
              </p>
            </div>
          </div>

          {/* Right panel: Active Step Detailed View */}
          <div id="set-audit-details" className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-white relative">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#0E3572] font-extrabold uppercase tracking-widest">
                    Auditoría Académica Activa ({activeStep}/3)
                  </span>
                  <h4 className="text-xl font-sans font-extrabold text-neutral-900 mt-1 tracking-tight">
                    {steps[activeStep - 1].title}
                  </h4>
                </div>
                <div className="flex items-center space-x-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100 text-xs text-neutral-600">
                  <Award size={12} className="text-[#E6B51E]" />
                  <span className="font-mono text-[11px] font-bold">Estándar de Calidad</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
                {steps[activeStep - 1].description}
              </p>

              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                  Puntos clave evaluados de forma sencilla:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {steps[activeStep - 1].checks.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2 text-xs text-neutral-700">
                      <span className="p-0.5 bg-emerald-50 text-emerald-600 rounded-full mt-0.5 shrink-0 border border-emerald-200">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support notice at bottom of panel */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="bg-neutral-50 border border-neutral-200/60 p-4 rounded-xl flex-1 text-left w-full">
                <div className="flex items-center space-x-1.5 mb-1">
                  <Shield size={13} className="text-[#0E3572]" />
                  <span className="text-[10px] font-mono font-bold text-neutral-700 uppercase tracking-wider">
                    Soporte Administrativo y Operativo
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Te guiamos directamente para estructurar y subir tu trámite, entregándote tu expediente bien revisado. Si el sistema te hace consultas adicionales, te indicamos rápido cómo contestar de forma puntual.
                </p>
              </div>

              <div className="w-full md:w-auto self-stretch md:self-auto flex items-end">
                <a 
                  href="https://t.me/asesordebecas_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onConversion}
                  className="w-full md:w-auto group inline-flex items-center justify-center gap-2 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-6 py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5"
                  style={{ minHeight: '44px' }}
                >
                  <Send size={12} className="text-sky-300 fill-sky-300 shrink-0" />
                  <span>Consultar en Telegram</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
