export interface Service {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyConcepts: string[];
  subtext?: string;
  statusText: string;
  checklist: string[];
  idealFor: string[];
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface MetricItem {
  label: string;
  value: string | number;
  change: string;
  icon: string;
}

export interface BotState {
  currentStep: string;
  history: ChatMessage[];
  evalData: {
    nivelAcademico?: string;
    tipoSolicitud?: string;
    paisEstudios?: string;
    bcaStatus?: string;
    interes?: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  actionType?: 'eval_nivel' | 'eval_beca' | 'eval_pais' | 'eval_status' | 'final_doc';
}
