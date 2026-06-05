import React, { useState } from 'react';
import { Service } from '../types';
import { Sparkles, ArrowRight, HelpCircle, UserCheck, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBot: (serviceName: string) => void;
}

export default function Services({ onSelectServiceForBot }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>('compensacion');

  const services: Service[] = [
    {
      id: "compensacion",
      title: "Compensación de Becas",
      badge: "Tu Trabajo Cuenta",
      description: "Valida los años que has trabajado (o vas a trabajar) para que la ex-SENESCYT de por cumplida la obligación de tu beca de forma definitiva.",
      keyConcepts: [
        "¿Cómo demostrar tus años laborados?",
        "¿Qué tipo de actividades laborales te sirven?",
        "¿Cómo registrar tus actividades si eres independiente o remoto?"
      ],
      subtext: "Te ayudamos con la verificación del  cumplimiento de requisitos de la compensación para que el sistema lo apruebe sin peros.",
      statusText: "Ideal si ya regresaste o sigues trabajando.",
      checklist: [
        "Tus contratos laborales",
        "Tus facturas de servicios o roles de pago",
        "Tu historial de aportaciones"
      ],
      idealFor: [
        "Profesionales trabajando en Ecuador",
        "Docentes, investigadores y empleados públicos o privados",
        "Independientes facturando servicios profesionales"
      ]
    },
    {
      id: "liquidacion",
      title: "Liquidación y Cierre Financiero",
      badge: "Cuentas Claras",
      description: "Comprueba que todos los valores enviados por la institución (manutención, pasajes, matrículas) cuadren a la perfección para cerrar tu expediente.",
      keyConcepts: [
        "Saber si te deben dinero o si hay algún saldo pendiente",
        "Evitar que te pidan reembolsos de forma injusta años después",
        "Cómo cerrar formalmente tu expediente de becario"
      ],
      subtext: "Evita posibles incumplimientos por falta de documentación.",
      statusText: "Recomendado para evitar cobros de coactivas.",
      checklist: [
        "Posibles cobros por diferencias en el tipo de cambio",
        "Comprobantes de tus gastos en el extranjero",
        "Certificados de fin de programa de estudios"
      ],
      idealFor: [
        "Becarios que terminaron estudios hace tiempo y no tienen respuesta",
        "Quienes recibieron cobros o notificaciones de pago",
        "Personas con desembolsos retrasados o incompletos"
      ]
    },
    {
      id: "registro",
      title: "Registro de Títulos Extranjeros",
      badge: "Trámite Rápido",
      description: "Logra que la SENESCYT reconozca tu título de maestría o doctorado obtenido en el exterior sin que rechacen tu expediente por tecnicismos.",
      keyConcepts: [
        "Validar si tu universidad extranjera cumple con los requisitos para validar tu título",
        "Asegurar que la modalidad (online, presencial o híbrida) sea aprobada",
        "Tener estructurado tu Suplemento al Título de manera impecable"
      ],
      subtext: "Preparamos tu expediente para que el registro del título se apruebe sin complicaciones.",
      statusText: "Indispensable para trabajar formalmente en Ecuador.",
      checklist: [
        "Tu título oficial apostillado o legalizado",
        "Tu récord de notas de la universidad",
        "El Suplemento al Título"
      ],
      idealFor: [
        "Graduados en España, Europa u otros continentes",
        "Títulos en modalidades híbridas o semipresenciales",
        "Profesionales que necesitan ejercer su carrera ya mismo en Ecuador"
      ]
    },
    {
      id: "casos",
      title: "Casos Especiales y Extensiones",
      badge: "Apoyo a Medida",
      description: "Si tu situación se salió de las reglas generales (vencimiento de plazos, imposibilidad de retornar o inconvenientes de fuerza mayor), buscamos una vía idónea.",
      keyConcepts: [
        "¿Cómo pedir más tiempo legal si tu tesis se retrasó?",
        "¿Qué opciones tienes si no puedes regresar a Ecuador?",
        "¿Cómo responder formalmente ante notificaciones o alertas críticas?"
      ],
      subtext: "Encontramos salidas viables dentro de la normativa vigente.",
      statusText: "Revisión exhaustiva caso por caso.",
      checklist: [
        "Soportes que se ajusten a la normativa de becas vigente",
        "Cartas o notificaciones previas recibidas",
        "Contratos y adendum de tu beca"
      ],
      idealFor: [
        "Becarios que no pudieron regresar a tiempo a Ecuador",
        "Personas que cambiaron de carrera o universidad a mitad de beca",
        "Becarios que recibieron notificaciones de terminación unilateral que pueden justificar que no han incumplido sus obligaciones"
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="servicios" className="py-20 bg-white border-b border-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E3572] px-3 py-1 bg-[#0E3572]/5 rounded-full">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-neutral-900 mt-4 tracking-tight leading-snug">
            ¿Qué hacemos?
          </h2>
          <p className="text-neutral-500 font-light mt-3 text-base leading-relaxed">
            Aquí tienes una explicación sencilla de los requerimientos más comunes. Olvídate de la terminología legal pesada; te orientamos sobre lo verdaderamente importante.
          </p>
        </div>

        {/* Master Double-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Simple Interactive Tab Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 px-1">
              Seleccione un área de interés:
            </p>
            {services.map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    // Mobile & tablet smooth scroll to detail view
                    if (window.innerWidth < 1024) {
                      const detailMobile = document.getElementById('academic-audit-details');
                      if (detailMobile) {
                        detailMobile.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                      }
                    }
                  }}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group select-none cursor-pointer ${
                    isSelected 
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-md shadow-neutral-900/10 scale-[1.01]' 
                      : 'border-neutral-200/60 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800'
                  }`}
                >
                  {/* Color bar indicator on selected item */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-ec-yellow via-ec-blue to-ec-red" />
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-mono tracking-widest uppercase font-bold py-0.5 px-2 rounded-md ${
                      isSelected ? 'bg-white/10 text-ec-yellow' : 'bg-neutral-200/60 text-neutral-600'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mt-2 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    <span className={isSelected ? 'text-sky-300' : 'text-[#0E3572]'}>
                      Ver de qué se trata
                    </span>
                    <ArrowRight size={12} className="ml-1" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Simplified ELI5 Detail Panel */}
          <div id="academic-audit-details" className="lg:col-span-7 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            
            {/* Active Service Header */}
            <div className="border-b border-neutral-100 pb-5 mb-5">
              <span className="text-[10px] font-mono text-[#E6B51E] font-extrabold uppercase tracking-widest">
                Introducción • {currentService.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-1 tracking-tight">
                {currentService.title}
              </h3>
            </div>

            {/* Friendly general explanation */}
            <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed mb-6">
              {currentService.description}
            </p>

            {/* Simple Bullet Lists */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-1.5">
                  <HelpCircle size={13} className="text-neutral-400" />
                  <span>Lo que resolveremos juntos:</span>
                </h4>
                <div className="space-y-2.5">
                  {currentService.keyConcepts.map((concept, index) => (
                    <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-800">
                      <span className="p-0.5 bg-neutral-100 text-neutral-600 rounded-full mt-0.5 shrink-0 border border-neutral-200">
                        <Check size={11} strokeWidth={2.5} />
                      </span>
                      <span className="font-light">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simplified Guide Message Card */}
            <div className="bg-neutral-50 border border-neutral-150/60 p-4.5 rounded-2xl mt-8">
              <div className="flex items-start space-x-3">
                <div className="p-1.5 bg-white rounded-lg border border-neutral-200 shrink-0 text-ec-yellow">
                  <UserCheck size={16} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-950">
                    Tu especialista se encargará de todo el papeleo
                  </h5>
                  <p className="text-xs text-neutral-500 font-light mt-1 leading-relaxed">
                    No te preocupes por tecnicismos. Tu consultor asignado estudiará tus documentos directamente por WhatsApp o Telegram y diseñará el plan idóneo para ti.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action to check eligibility / consult bot */}
            <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[10px] font-mono text-neutral-400 font-semibold block uppercase">
                  Estado sugerido:
                </span>
                <span className="text-xs text-neutral-800 font-semibold">
                  {currentService.statusText}
                </span>
              </div>
              
              <a
                href="#como-funciona"
                onClick={() => onSelectServiceForBot(currentService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0E3572] hover:bg-[#134084] text-white text-xs font-sans font-bold px-5 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer select-none"
              >
                <span>Iniciar consulta</span>
                <ArrowRight size={13} className="text-sky-300" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
