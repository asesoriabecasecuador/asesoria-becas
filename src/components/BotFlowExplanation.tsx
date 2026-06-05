import React, { useState } from 'react';
import { Send, MessageSquare, UserCheck, ShieldCheck, Sparkles, User, Cpu, ChevronRight } from 'lucide-react';

interface BotFlowExplanationProps {
  initialService?: string | null;
  onConversion: () => void;
}

export default function BotFlowExplanation({ initialService, onConversion }: BotFlowExplanationProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Pre-evaluación rápida",
      subtitle: "Diagnóstico inicial",
      shortDesc: "En el bot de Telegram puedes realizar preguntas clave sobre tu beca.",
      explanation: "Inicias el bot de Telegram y detallas rápidamente los aspectos clave de tu caso: qué estudiaste, el país y el estado actual de tu beca (sea para registrar tu título, compensar tus años trabajados o liquidar cuentas financieras). Es de acceso inmediato, no requiere logins engorrosos ni te pide información privada.",
      icon: MessageSquare,
      userPart: "Contestas las preguntas rápidas sobre el situación y en qué fase del proceso te encuentras.",
      expertPart: "Un consultor analiza tu caso y verifica la normativa aplicable para evaluar tu viabilidad administrativa."
    },
    {
      id: 2,
      number: "02",
      title: "Contacto con especialista",
      subtitle: "Sin rodeos ni esperas",
      shortDesc: "Un analista real de nuestro equipo se conecta contigo directamente por chat.",
      explanation: "Un profesional de nuestro equipo con experiencia directa en las normativas del ex-SENESCYT estudia tu caso. Se contactará contigo para entender los pormenores y asesorarte de forma personalizada, clara y oportuna.",
      icon: UserCheck,
      userPart: "Aclaras tus dudas de forma directa con el analista asignado en un espacio seguro y confidencial.",
      expertPart: "El consultor revisa los detalles de tu caso y diseña un diagnóstico preliminar adaptado a tus circunstancias."
    },
    {
      id: 3,
      number: "03",
      title: "Pactar la consultoría técnica",
      subtitle: "Estrategia individual definitiva",
      shortDesc: "Estructuramos la hoja de ruta procedimental definitiva para cerrar tu caso.",
      explanation: "Luego de la revisión inicial, determinamos el valor de la asesoría y definimos contigo el plan estratégico definitivo. Agendamos tu consultoría para preparar tu documentación y resolver el trámite.",
      icon: ShieldCheck,
      userPart: "Recopilas tus documentos, descargos y esperas la resolución del trámite con éxito.",
      expertPart: "Verificamos que los documentos cumplan los parámetros requeridos por la ex-SENESCYT de modo que cumplas tus obligaciones contractuales."
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const currentStepData = steps.find(s => s.id === activeStep) || steps[0];
  const StepIcon = currentStepData.icon;

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white border-b border-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E3572] bg-[#0E3572]/5 px-3.5 py-1.5 rounded-full inline-block">
            Cómo lo resolvemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-neutral-900 mt-4 tracking-tight leading-tight">
            Descubre nuestro método de acompañamiento
          </h2>
          <p className="text-neutral-500 font-light mt-3 text-sm sm:text-base leading-relaxed px-1">
            Olvídate de procesos burocráticos engorrosos. Así es como resolvemos tu trámite de forma sencilla:
          </p>
        </div>

        {/* Master Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-neutral-50/50 border border-neutral-200/50 rounded-3xl p-4 sm:p-8 lg:p-10">
          
          {/* Left panel: Compact Touch-Friendly Step Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-2 px-1">
              <span className="text-[10px] font-mono text-[#0E3572] uppercase tracking-widest font-extrabold block">
                Fases del Acompañamiento
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0E3572] tracking-tight">
                El camino para cerrar tu trámite ex-SENESCYT
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Cada expediente es un mundo. Haz clic en cada fase para comprender cómo funciona nuestro servicio antes de iniciar tu consultoría individual:
              </p>
            </div>

            {/* Stepper Buttons list - highly polished & responsive touch targets */}
            <div className="space-y-3">
              {steps.map((step) => {
                const isSelected = activeStep === step.id;
                const IconComp = step.icon;
                return (
                  <button
                    key={step.id}
                    id={`step-selector-button-${step.id}`}
                    onClick={() => handleStepClick(step.id)}
                    className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left border transition-all duration-300 relative select-none cursor-pointer ${
                      isSelected 
                        ? 'bg-[#0E3572] text-white border-transparent shadow-lg shadow-[#0E3572]/15 scale-[1.01]' 
                        : 'bg-white hover:bg-neutral-50 border-neutral-200/60 text-neutral-700'
                    }`}
                    style={{ minHeight: '52px' }}
                  >
                    {/* Left color bar for active indicator */}
                    {isSelected && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#E6B51E]" />
                    )}

                    <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                      isSelected ? 'bg-white/10 text-ec-yellow' : 'bg-neutral-100 text-[#0E3572]'
                    }`}>
                      <IconComp size={16} />
                    </div>
                    
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-bold tracking-tight truncate">
                          {step.title}
                        </h4>
                        <span className={`font-mono text-[10px] font-semibold ${isSelected ? 'text-white/40' : 'text-neutral-400'}`}>
                          {step.number}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 font-light leading-snug line-clamp-1 ${
                        isSelected ? 'text-neutral-200' : 'text-neutral-500'
                      }`}>
                        {step.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right panel: Polished Deep Explanation Card with visual diagrams (No phone, wider text layout) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-xs">
            
            {/* Soft background decor icon */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none">
              <StepIcon size={140} className="text-[#0E3572]" />
            </div>

            {/* Step Meta info */}
            <div>
              <div className="flex items-center space-x-1.5 mb-2.5">
                <Sparkles size={13} className="text-[#E6B51E]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6B51E] font-extrabold">
                  FASE {currentStepData.number} • {currentStepData.subtitle}
                </span>
              </div>
              
              <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight mb-4">
                {currentStepData.title}
              </h4>
              
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                {currentStepData.explanation}
              </p>

              {/* Dynamic Action Diagram (User Action / Spec Action) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-100 pt-6">
                
                {/* User column */}
                <div className="bg-neutral-50 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-1 bg-[#0E3572]/5 text-[#0E3572] rounded-md shrink-0">
                        <User size={13} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-extrabold">
                        Cómo participas tú
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 font-normal leading-relaxed">
                      {currentStepData.userPart}
                    </p>
                  </div>
                </div>

                {/* System / Expert column */}
                <div className="bg-neutral-50 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-1 bg-[#E6B51E]/10 text-[#E6B51E] rounded-md shrink-0">
                        <Cpu size={13} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-extrabold">
                        Nuestro soporte
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 font-normal leading-relaxed">
                      {currentStepData.expertPart}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation Stepper indicator & Instant Access CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Simple Step forward tracker */}
              <div className="flex items-center space-x-1.5">
                {steps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(s.id)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStep === s.id ? 'w-6 bg-[#0E3572]' : 'w-2 bg-neutral-200 hover:bg-neutral-300'
                    }`}
                    title={`Paso ${s.number}`}
                  />
                ))}
              </div>

              {/* Unified Telegram Primary Trigger */}
              <a
                href="https://t.me/asesordebecas_bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onConversion}
                className="inline-flex items-center justify-center gap-2 bg-[#0E3572] hover:bg-[#134084] text-white active:scale-[0.99] transition-all duration-300 px-6 py-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg shadow-[#0E3572]/10 hover:shadow-[#0E3572]/15 cursor-pointer select-none border border-white/5"
                style={{ minHeight: '44px' }}
                id="interactive-bot-flow-cta"
              >
                <Send size={12} className="text-sky-300 fill-sky-300 shrink-0" />
                <span>Consultar en Telegram</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
