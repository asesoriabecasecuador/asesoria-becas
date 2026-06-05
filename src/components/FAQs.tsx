import React, { useState } from 'react';
import { FAQ } from '../types';
import { ChevronDown, Search, ArrowRight, ShieldCheck, Scale, AlertTriangle, BookOpen } from 'lucide-react';

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos los Casos' },
    { id: 'compensacion', name: 'Compensación' },
    { id: 'liquidacion', name: 'Liquidaciones' },
    { id: 'registros', name: 'Registro de Títulos' },
    { id: 'coactivas', name: 'Casos Críticos / Coactivas' }
  ];

  const rawFAQs: FAQ[] = [
    {
      id: "faq_1",
      category: "compensacion",
      question: "¿Se puede compensar la beca trabajando de forma remota para Ecuador desde el exterior?",
      answer: "Sí, siempre y cuando la estructura legal de tu contrato de trabajo y tus aportes correspondan a entidades registradas y fiscalmente activas en el Ecuador, o mediante la modalidad de libre ejercicio profesional con la emisión de facturas. Sin embargo, requiere cumplir con la transferencia de conocimientos de acuerdo con la especialidad de tu título financiado. Analizamos esta viabilidad de manera pormenorizada de modo que tu compensación no sea rechazada."
    },
    {
      id: "faq_2",
      category: "compensacion",
      question: "¿Qué ocurre si no retorné al Ecuador dentro del plazo ordinario estipulado en mi contrato de becario?",
      answer: "La reglamentación permite solicitar prórrogas o suspensiones extraordinarias, pero únicamente bajo causales taxativas respaldadas por prueba documental válida (como vinculación a proyectos de investigación de alto nivel en el exterior o fuerza mayor demostrable). Si el plazo venció y no has declarado formalmente tu retorno, el sistema de la ex-SENESCYT genera de forma automática una alerta de incumplimiento que puede llevar a la terminación unilateral del contrato y la devolución del valor total de la beca. Si ya recibiste esta notificación, te asesoramos para que puedas justificar tus posibles incumplimientos."
    },
    {
      id: "faq_3",
      category: "compensacion",
      question: "Si tengo que devolver fondos, ¿el cálculo se realiza sobre todo el dinero desembolsado o es proporcional?",
      answer: "Si el Ministerio de Educación realiza la declaratoria de Incumplimiento Contractual definitivo, el Estado ecuatoriano tiene la potestad de exigir la devolución del 100% de los desembolsos percibidos más intereses de mora de forma solidaria e inmediata. Te asesoramos para que evites llegar a esta etapa."
    },
    {
      id: "faq_4",
      category: "registros",
      question: "¿Por qué el Ministerio de Educación / SENESCYT rechaza el registro directo de Maestrías Propias de España?",
      answer: "Ecuador, a través de la Ley Orgánica de Educación Superior (LOES), únicamente reconoce de forma simplificada los títulos oficiales ('Títulos de Máster Universitario') amparados por el Registro del Ministerio de Universidades de España. Los 'Títulos Propios' o 'No Oficiales' quedan catalogados como educación no formal y requieren de un trámite de homologación mediante análisis de expediente curricular individualizado, requiriendo un syllabus de alta correspondencia técnica. Si el programa cumple estos requisitos, el Ministerio realiza el registro del título."
    },
    {
      id: "faq_5",
      category: "coactivas",
      question: "¿Qué es un Proceso Coactivo y cómo afecta a mis garantes solidarios?",
      answer: "Un proceso coactivo es una vía administrativa especial y expedita mediante la cual el Estado Ecuatoriano ejerce la acción de cobro forzoso sobre deudas líquidas. Se dictan medidas cautelares inmediatas (como retención de cuentas bancarias y prohibiciones de enajenar bienes por el monto total de la beca más los intereses generados y los costos administrativos de cobranza) tanto sobre el becario principal como de forma solidaria sobre sus garantes registrados en los contratos de beca en el Ecuador. Mitigar esto requiere una intervención técnica preventiva y ágil presentando los descargos administrativos correctos. Es importante evitar llegar a esta etapa del proceso."
    },
    {
      id: "faq_6",
      category: "coactivas",
      question: "¿Es factible regularizar los posibles incumplimientos contractuales si ya se ha emitido una resolución de terminación unilateral del contrato?",
      answer: "Es sumamente complejo pero factible. Si se demuestra una vulneración al debido proceso administrativo en las resoluciones oficiales o si existió fuerza mayor no ponderada por la administración, se pueden interponer reclamos formales y revisiones técnicas por la vía administrativa rápida. Agenda tu consulta para revisar tu caso."
    },

    {
      id: "faq_7",
      category: "todos",
      question: "¿Cuál es el costo estimado de la asesoría?",
      answer: "Manejamos precios acordes a tu situación. Previo a la revisión exhaustiva de tu caso, realizamos una verificación de viabilidad. Si consideramos que no podemos obtener éxito en tu trámite, solo cobramos la consulta inicial. Para los casos de compensación, cobramos en relación al monto total de tu beca y de la complejidad de los posibles incumplimientos incurridos. Sin embargo, nuestros precios son mucho menores a nuestra compentencia ya que evitamos recurrir a la vía judicial en la mayoría de los casos."
    },
    {
      id: "faq_8",
      category: "liquidacion",
      question: "¿Cómo puedo saber si mi beca ya fue liquidada?",
      answer: "Si la SENESCYT o el IFTH te emitieron el 'Certificado de No Adeudar' o la 'Resolución de Liquidación Académica' tu beca ya está liquidada. Ten en cuenta que si debes compensar, la liquidación no significa que ya has cumplido con esta obligación. Si tu beca aún no ha sido liquidada, te asesoramos para que el Ministerio de Educación procese tu caso de manera más rápida."
    },
    {
      id: "faq_9",
      category: "compensacion",
      question: "Recibí una notificación de terminación unilateral, ¿significa que debo devolver el monto total de la beca inmediatamente?",
      answer: "Dentro del proceso de beca te van a llegar diferentes notificaciones. Una notificación de terminación unilateral no siempre significa que debes devolver de inmediato el monto de la beca. Nosotros verificamos que tipo de notificación es, y si es posible evitar una posible coactiva por parte del Ministerio de Educación. Debido a que el plazo para justificar posible incumplimientos es limitado, es importante actuar inmediatamente. Agenda tu consulta ya."
    }

  ];

  const filteredFAQs = rawFAQs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'compensacion': return <ShieldCheck size={14} className="text-emerald-500 mr-2" />;
      case 'liquidacion': return <Scale size={14} className="text-ec-blue mr-2" />;
      case 'registros': return <BookOpen size={14} className="text-ec-yellow mr-2" />;
      default: return <AlertTriangle size={14} className="text-ec-red mr-2" />;
    }
  };

  return (
    <section id="faqs" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#94A3B8] px-3 py-1 bg-neutral-150 bg-neutral-100 rounded-full">
            Resolución de Dudas Normativas
          </span>
          <h2 className="text-3xl font-sans font-extrabold text-neutral-900 mt-4 tracking-tight">
            Consultas Frecuentes y Casos Críticos
          </h2>
          <p className="text-neutral-500 font-light mt-3 leading-relaxed text-sm sm:text-base">
            Analice las respuestas técnicas formuladas por nuestro equipo técnico frente a las coyunturas más recurrentes de la ex-SENESCYT.
          </p>
        </div>

        {/* Search Bar & Categories Panel */}
        <div className="mb-10 space-y-4">
          
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Escriba su duda relevante (ej. coactiva, España, compensación)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 pl-11 pr-4 py-3.5 rounded-xl outline-none focus:bg-white focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all font-sans"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setExpandedId(null); // Collapse all on category switch
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white border-transparent'
                    : 'bg-white text-neutral-600 border-neutral-200/60 hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-3.5">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'border-neutral-900 bg-neutral-50/20 shadow-xs' 
                      : 'border-neutral-200/60 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => {
                      setExpandedId(isExpanded ? null : faq.id);
                    }}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center text-left">
                      <span className="shrink-0 hidden sm:inline-block">
                        {getCategoryIcon(faq.category)}
                      </span>
                      <h4 className="text-xs sm:text-sm font-sans font-bold text-neutral-800 tracking-tight leading-snug">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`text-neutral-400 shrink-0 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-neutral-800' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[300px] border-t border-neutral-100 p-5' : 'max-h-0'
                    } overflow-hidden bg-neutral-50/50`}
                  >
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-neutral-100/60 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-neutral-400 font-medium">Categoría: {faq.category.toUpperCase()}</span>
                      <a href="#como-funciona" className="text-emerald-700 font-bold hover:underline flex items-center space-x-1">
                        <span>Ver cómo iniciar consulta de este caso</span>
                        <ArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-neutral-50 border rounded-xl">
              <p className="text-sm text-neutral-500 font-light">No encontramos coincidencias para "{searchTerm}"</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('todos'); }}
                className="mt-2 text-xs font-bold text-ec-blue hover:underline"
              >
                Limpiar filtros de búsqueda
              </button>
            </div>
          )}
        </div>

        {/* Interactive CTA to Bot at footer of FAQs */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 mt-12 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
          <h3 className="text-lg sm:text-xl font-sans font-extrabold tracking-tight mb-2">
            ¿Tiene una situación particular o dudas no descritas?
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Nuestro equipo de consultores y asesores monitorea continuamente las circulares de la ex-SENESCYT para actualizar de forma semanal nuestra guía de asesoría.
          </p>
          <a
            href="#como-funciona"
            className="inline-flex items-center space-x-2 bg-white text-neutral-900 hover:bg-neutral-50 transition-all font-bold text-xs px-5 py-3.5 rounded-xl shadow-xs"
          >
            <span>Ver cómo iniciar mi consulta</span>
            <ArrowRight size={12} className="text-neutral-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
