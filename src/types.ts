export type Language = 'es' | 'en' | 'fr' | 'it' | 'pt';

export interface Appointment {
  id: string;
  userName: string;
  userEmail: string;
  date: string; // ISO format or YYYY-MM-DD
  time: string; // e.g. "19:00"
  durationMinutes: number; // 30 mins
  meetUrl: string; // Google Meet URL
  calendarUrl?: string; // Google Calendar Event link
  topic?: string;
  notes?: string;
  tarotSpreadSummary?: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: number;
}

export interface ArcanezConfig {
  guideName: string; // "Gabriel"
  defaultDurationMinutes: number;
  appointmentScheduleUrl: string; // Google Appointment Schedule URL
  customMeetRoomPrefix: string;
}

export interface TarotCard {
  id: number; // 0 to 21
  number: string; // Roman numerals
  name: Record<Language, string>;
  archetype: string;
  element: 'Fuego' | 'Agua' | 'Aire' | 'Tierra' | 'Éter';
  keywords: Record<Language, string[]>;
  lightMeaning: Record<Language, string>;
  shadowMeaning: Record<Language, string>;
  guidance: Record<Language, string>;
  symbolism: Record<Language, string>;
}

export interface TarotSpreadResult {
  id: string;
  date: string;
  spreadType: 'single' | 'trinity' | 'threshold';
  question: string;
  cards: {
    card: TarotCard;
    isReversed: boolean;
    positionLabel: Record<Language, string>;
  }[];
  personalNotes?: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  country: string;
  countryCode: string;
  flag: string;
  topic: 'desahogo' | 'intuicion' | 'suenos' | 'telequinesis' | 'crecimiento';
  title: string;
  content: string;
  date: string;
  supportCount: number; // "Velas encendidas / Apoyo"
  userSupported?: boolean;
  replies: {
    id: string;
    author: string;
    isGuide?: boolean; // Gabriel response
    country?: string;
    content: string;
    date: string;
  }[];
}
