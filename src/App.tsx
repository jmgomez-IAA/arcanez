import React, { useState, useEffect } from 'react';
import { Appointment, ArcanezConfig, CommunityPost, Language } from './types';
import { initialCommunityPosts } from './data/communityData';
import { translations } from './data/translations';
import { Navigation } from './components/Navigation';
import { GabrielPortal } from './components/GabrielPortal';
import { CommunityRefuge } from './components/CommunityRefuge';
import { TarotOracle } from './components/TarotOracle';
import { TelekinesisFocus } from './components/TelekinesisFocus';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Sparkles, Heart } from 'lucide-react';

const DEFAULT_CONFIG: ArcanezConfig = {
  appointmentScheduleUrl: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3r9m4z-arcanez-gabriel',
  guideName: 'Gabriel',
  customMeetRoomPrefix: 'arcanez',
  defaultDurationMinutes: 30,
};

const DEFAULT_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-default-1',
    userName: 'Iniciado',
    userEmail: 'contacto@arcanez.app',
    date: '29 septiembre',
    time: '19:00',
    durationMinutes: 30,
    meetUrl: 'https://meet.google.com/arcanez-gabriel-session',
    calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Encuentro+con+Gabriel+(Arcanez)&dates=20260929T170000Z/20260929T173000Z&details=Sesi%C3%B3n+privada+en+el+santuario+Arcanez&location=https%3A%2F%2Fmeet.google.com%2Farcanez-gabriel-session',
    topic: 'Claridad en toma de decisiones y despertar intuitivo',
    status: 'confirmed',
    createdAt: Date.now(),
  }
];

export default function App() {
  // Language State
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('arcanez_lang');
    return (saved as Language) || 'es';
  });

  // Active Tab
  const [currentTab, setCurrentTab] = useState<'portal' | 'refuge' | 'oracle' | 'telekinesis'>('portal');

  // Config State
  const [config, setConfig] = useState<ArcanezConfig>(() => {
    try {
      const saved = localStorage.getItem('arcanez_config');
      return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  // Appointments State
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('arcanez_appointments');
      return saved ? JSON.parse(saved) : DEFAULT_APPOINTMENTS;
    } catch {
      return DEFAULT_APPOINTMENTS;
    }
  });

  // Community Posts State
  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    try {
      const saved = localStorage.getItem('arcanez_posts');
      return saved ? JSON.parse(saved) : initialCommunityPosts;
    } catch {
      return initialCommunityPosts;
    }
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('arcanez_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('arcanez_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('arcanez_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('arcanez_posts', JSON.stringify(posts));
  }, [posts]);

  // Actions
  const handleSaveAppointment = (newApt: Appointment) => {
    setAppointments((prev) => [newApt, ...prev]);
  };

  const handleDeleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleUpdateConfig = (newConfig: ArcanezConfig) => {
    setConfig(newConfig);
  };

  const handleAddPost = (newPost: CommunityPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleAddReply = (postId: string, content: string, author: string) => {
    const newReply = {
      id: `rep-${Date.now()}`,
      author,
      content,
      date: 'Ahora mismo',
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            replies: [...p.replies, newReply],
          };
        }
        return p;
      })
    );
  };

  const handleToggleSupport = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isCurrentlySupported = p.userSupported;
          return {
            ...p,
            userSupported: !isCurrentlySupported,
            supportCount: isCurrentlySupported ? p.supportCount - 1 : p.supportCount + 1,
          };
        }
        return p;
      })
    );
  };

  const handleAttachSpreadToAppointment = (summary: string) => {
    // Attach to earliest upcoming appointment
    setAppointments((prev) => {
      if (prev.length === 0) return prev;
      const sorted = [...prev];
      sorted[0] = {
        ...sorted[0],
        tarotSpreadSummary: summary,
      };
      return sorted;
    });
  };

  const handleOpenBookingWithTopic = (_topic: string) => {
    setCurrentTab('portal');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#07050f] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Offline Status Bar */}
      <OfflineIndicator
        message={t.offlineMessage}
      />

      {/* Main Header & Navigation */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 pb-20 md:pb-12">
        {currentTab === 'portal' && (
          <GabrielPortal
            config={config}
            appointments={appointments}
            language={language}
            onSaveAppointment={handleSaveAppointment}
            onDeleteAppointment={handleDeleteAppointment}
            onUpdateConfig={handleUpdateConfig}
            onNavigateTab={setCurrentTab}
          />
        )}

        {currentTab === 'refuge' && (
          <CommunityRefuge
            posts={posts}
            language={language}
            onAddPost={handleAddPost}
            onAddReply={handleAddReply}
            onToggleSupport={handleToggleSupport}
          />
        )}

        {currentTab === 'oracle' && (
          <TarotOracle
            language={language}
            onAttachSpreadToAppointment={handleAttachSpreadToAppointment}
            onOpenBookingWithTopic={handleOpenBookingWithTopic}
          />
        )}

        {currentTab === 'telekinesis' && (
          <TelekinesisFocus language={language} />
        )}
      </main>

      {/* Arcane Sanctuary Footer */}
      <footer className="border-t border-purple-500/15 bg-[#06040d] py-6 px-4 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-4xl flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2 text-amber-300 font-arcane tracking-wider text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ARCANEZ · Círculo de Gabriel</span>
          </div>
          <p className="text-[11px] text-purple-300/70 italic max-w-md">
            "En la quietud del arcano, la distancia entre dos mentes desaparece."
          </p>
          <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
            <span>Diseñado como PWA independiente sin servidor · Integrado con Google Meet</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
