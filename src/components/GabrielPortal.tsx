import React, { useState } from 'react';
import { Appointment, ArcanezConfig, Language } from '../types';
import { translations } from '../data/translations';
import { BookingModal } from './BookingModal';
import { AppointmentsListModal } from './AppointmentsListModal';
import { GabrielConfigModal } from './GabrielConfigModal';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  Video, 
  Clock, 
  ExternalLink, 
  Settings, 
  Compass, 
  Eye, 
  ShieldCheck,
  ChevronRight,
  Flame
} from 'lucide-react';

interface Props {
  config: ArcanezConfig;
  appointments: Appointment[];
  language: Language;
  onSaveAppointment: (apt: Appointment) => void;
  onDeleteAppointment: (id: string) => void;
  onUpdateConfig: (newConfig: ArcanezConfig) => void;
  onNavigateTab: (tab: 'refuge' | 'oracle' | 'telekinesis') => void;
}

export const GabrielPortal: React.FC<Props> = ({
  config,
  appointments,
  language,
  onSaveAppointment,
  onDeleteAppointment,
  onUpdateConfig,
  onNavigateTab,
}) => {
  const t = translations[language];

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Find the next upcoming confirmed appointment
  const upcomingAppointment = appointments
    .filter((a) => a.status === 'confirmed')
    .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())[0];

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Background ethereal radial aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-900/20 via-amber-500/10 to-indigo-900/20 blur-3xl pointer-events-none -z-10" />

      {/* Main Portal Section (Strictly adhering to Section 7 & 8) */}
      <div className="flex flex-col items-center text-center">
        {/* Sacred Seal Emblem */}
        <div className="relative mb-6 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl border border-amber-500/40 bg-gradient-to-b from-[#1c1538] to-[#0c091d] p-3 shadow-2xl shadow-purple-950/60">
          <img 
            src="/icon.svg" 
            alt="Arcanez Seal" 
            className="h-full w-full object-contain filter drop-shadow-lg" 
          />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 to-purple-500/20 blur-sm pointer-events-none" />
        </div>

        {/* Title & Identity */}
        <h1 
          id="portal-main-title" 
          className="text-4xl sm:text-5xl font-extrabold tracking-widest text-slate-100 font-arcane uppercase"
        >
          ARCANEZ
        </h1>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.portalSubtitle}</span>
        </div>

        {/* Introduction */}
        <p className="mt-4 max-w-md text-sm sm:text-base text-slate-300/90 leading-relaxed">
          {t.portalDescription}
        </p>

        {/* Primary CTA: [ RESERVAR UNA CITA ] */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center">
          <button
            id="book-appointment-primary-btn"
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 rounded-full border-2 border-amber-400/80 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-8 py-3.5 text-sm font-bold tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-[1.02] hover:shadow-amber-500/30 active:scale-[0.99] transition-all cursor-pointer font-arcane"
          >
            <CalendarIcon className="w-4 h-4 text-slate-950" />
            <span>{t.bookAppointmentBtn}</span>
          </button>

          <button
            id="open-my-appointments-btn"
            onClick={() => setIsHistoryOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-[#150f2b]/80 px-6 py-3.5 text-xs font-semibold text-purple-200 hover:border-amber-500/40 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
          >
            <span>{t.myAppointmentsBtn}</span>
            {appointments.length > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/30 text-[10px] font-bold text-amber-300 border border-amber-500/40">
                {appointments.length}
              </span>
            )}
          </button>
        </div>

        {/* Google Calendar Direct Booking Page Badge */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-purple-300/80">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Sincronizado con Google Calendar & Google Meet</span>
          <button
            onClick={() => setIsConfigOpen(true)}
            className="text-amber-400 hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
            title="Configurar URL de Agenda de Gabriel"
          >
            <Settings className="w-3 h-3" />
            <span>Configurar</span>
          </button>
        </div>
      </div>

      {/* Próxima Cita Card (Section 7) */}
      <div className="mt-12 w-full max-w-xl mx-auto">
        <div 
          id="upcoming-appointment-card"
          className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#150f2c] via-[#0f0b20] to-[#0a0717] p-6 shadow-2xl text-slate-100"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

          {upcomingAppointment ? (
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-300/90 tracking-wide uppercase flex items-center gap-1.5 font-arcane">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {t.nextAppointmentTitle}
                </span>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                  {t.confirmedBadge}
                </span>
              </div>

              {/* Big bold highlight: 29 septiembre · 19:00 */}
              <div className="mt-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-arcane flex items-center gap-3">
                  <span>{upcomingAppointment.date}</span>
                  <span className="text-amber-400">·</span>
                  <span className="text-amber-300">{upcomingAppointment.time}</span>
                </h2>
                <p className="mt-1 text-xs text-purple-300/80 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>30 minutos de conversación con Gabriel</span>
                </p>
              </div>

              {upcomingAppointment.topic && (
                <div className="mt-3.5 rounded-xl border border-purple-500/20 bg-black/30 p-2.5 text-xs text-slate-300">
                  <span className="text-purple-300 font-medium">Tema: </span>
                  {upcomingAppointment.topic}
                </div>
              )}

              {/* [ ENTRAR EN MEET ] Primary Action */}
              <div className="mt-5 pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="enter-meet-btn"
                  href={upcomingAppointment.meetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 px-6 py-2.5 text-xs font-bold text-emerald-200 hover:bg-emerald-600/40 hover:border-emerald-300 transition-all shadow-lg shadow-emerald-950/40 cursor-pointer font-arcane"
                >
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>{t.enterMeetBtn}</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>

                {upcomingAppointment.calendarUrl && (
                  <a
                    id="add-to-calendar-btn"
                    href={upcomingAppointment.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-4 py-2.5 text-xs font-medium text-purple-200 hover:bg-purple-900/50 transition cursor-pointer"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>{t.addToCalendarBtn}</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 mb-3">
                <CalendarIcon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 font-arcane">
                {t.noUpcomingAppointment}
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                {t.noUpcomingDesc}
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/20 px-5 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-500/30 transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.bookAppointmentBtn}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sanctuary Pillars (Tarot, Refuge, Telekinesis) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* El Refugio */}
        <div 
          onClick={() => onNavigateTab('refuge')}
          className="group relative rounded-2xl border border-purple-500/20 bg-[#110d24]/60 p-5 backdrop-blur-sm transition-all hover:border-amber-500/40 hover:bg-[#161030]/80 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300">
              <Flame className="w-4 h-4" />
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-200 transition-colors font-arcane">
            El Refugio
          </h3>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
            Comparte tus problemas, dudas y vivencias íntimas con amigos de otros países en un espacio seguro.
          </p>
        </div>

        {/* El Oráculo de Tarot */}
        <div 
          onClick={() => onNavigateTab('oracle')}
          className="group relative rounded-2xl border border-purple-500/20 bg-[#110d24]/60 p-5 backdrop-blur-sm transition-all hover:border-amber-500/40 hover:bg-[#161030]/80 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
              <Compass className="w-4 h-4" />
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-200 transition-colors font-arcane">
            Tiradas de Tarot
          </h3>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
            Consulta los 22 Arcanos Mayores para recibir orientación y lleva tus conclusiones a la cita con Gabriel.
          </p>
        </div>

        {/* Telequinesis & Concentración */}
        <div 
          onClick={() => onNavigateTab('telekinesis')}
          className="group relative rounded-2xl border border-purple-500/20 bg-[#110d24]/60 p-5 backdrop-blur-sm transition-all hover:border-amber-500/40 hover:bg-[#161030]/80 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300">
              <Eye className="w-4 h-4" />
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-200 transition-colors font-arcane">
            Telequinesis & Mente
          </h3>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
            Aquieta la mente con la esfera cuántica y afina tu foco intuitivo antes de conectar en Meet.
          </p>
        </div>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={config}
        language={language}
        onSaveAppointment={onSaveAppointment}
      />

      <AppointmentsListModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        appointments={appointments}
        language={language}
        onDeleteAppointment={onDeleteAppointment}
      />

      <GabrielConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        language={language}
        onSaveConfig={onUpdateConfig}
      />
    </div>
  );
};
