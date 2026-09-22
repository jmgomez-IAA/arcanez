import React, { useState } from 'react';
import { Appointment, ArcanezConfig, Language } from '../types';
import { translations } from '../data/translations';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Video, 
  Sparkles,
  User,
  Mail,
  FileText
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: ArcanezConfig;
  language: Language;
  onSaveAppointment: (appointment: Appointment) => void;
}

export const BookingModal: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
  language,
  onSaveAppointment,
}) => {
  const t = translations[language];

  // Form state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [date, setDate] = useState('2026-09-29');
  const [time, setTime] = useState('19:00');
  const [topic, setTopic] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) return;

    // Generate clean Google Meet room code
    const randomHash = Math.random().toString(36).substring(2, 6) + '-' + Math.random().toString(36).substring(2, 6);
    const meetUrl = `https://meet.google.com/${config.customMeetRoomPrefix || 'arcanez'}-${randomHash}`;

    // Google Calendar template link
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + config.defaultDurationMinutes * 60000);
    const formatDate = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Conversación con Gabriel (Arcanez)`
    )}&dates=${formatDate(startDateTime)}/${formatDate(endDateTime)}&details=${encodeURIComponent(
      `Encuentro privado en el santuario de Arcanez.\nGoogle Meet: ${meetUrl}\nTema: ${topic || 'Conversación personal'}`
    )}&location=${encodeURIComponent(meetUrl)}`;

    const newAppointment: Appointment = {
      id: `apt-${Date.now()}`,
      userName: userName.trim(),
      userEmail: userEmail.trim(),
      date,
      time,
      durationMinutes: config.defaultDurationMinutes,
      meetUrl,
      calendarUrl: gcalUrl,
      topic: topic.trim(),
      status: 'confirmed',
      createdAt: Date.now(),
    };

    onSaveAppointment(newAppointment);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overflow-y-auto">
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#0f0c20] p-6 shadow-2xl text-slate-100 my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
          aria-label={t.cancelBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-purple-500/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-200 font-arcane">
              {t.confirmBookingTitle}
            </h3>
            <p className="text-xs text-purple-300/80">
              {t.scheduleDetails}
            </p>
          </div>
        </div>

        {/* Direct Google Calendar Appointment Schedule Link Option */}
        <div className="mt-4 rounded-xl border border-purple-500/25 bg-[#171131]/60 p-3.5 text-xs">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                {t.openGoogleCalendarBooking}
              </span>
              <p className="mt-1 text-slate-300 leading-relaxed">
                Google Calendar gestiona la disponibilidad en tiempo real, bloquea horas ocupadas y genera automáticamente el enlace de Google Meet.
              </p>
            </div>
            <a
              id="open-google-calendar-schedule-link"
              href={config.appointmentScheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/20 px-3 py-1.5 font-medium text-amber-200 hover:bg-amber-500/30 transition cursor-pointer"
            >
              <span>Abrir</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Or Record / Confirm Appointment inside Arcanez */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <span className="h-px flex-1 bg-purple-500/20" />
            <span>{t.registerSavedAppointment}</span>
            <span className="h-px flex-1 bg-purple-500/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-amber-400" />
                {t.inputName}
              </label>
              <input
                id="booking-input-name"
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ej. Martín"
                className="w-full rounded-lg border border-purple-500/25 bg-[#120e24] px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-400" />
                {t.inputEmail}
              </label>
              <input
                id="booking-input-email"
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-purple-500/25 bg-[#120e24] px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1">
                <CalendarIcon className="w-3 h-3 text-amber-400" />
                {t.inputDate}
              </label>
              <input
                id="booking-input-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-purple-500/25 bg-[#120e24] px-3 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                {t.inputTime}
              </label>
              <input
                id="booking-input-time"
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-purple-500/25 bg-[#120e24] px-3 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1">
              <FileText className="w-3 h-3 text-amber-400" />
              {t.inputTopic}
            </label>
            <input
              id="booking-input-topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={t.topicPlaceholder}
              className="w-full rounded-lg border border-purple-500/25 bg-[#120e24] px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Details recap */}
          <div className="rounded-lg bg-black/40 border border-purple-500/15 p-2.5 flex items-center justify-between text-[11px] text-purple-300">
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Meet (Cámara / Audio)</span>
            </div>
            <span>30 min</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition cursor-pointer"
            >
              {t.cancelBtn}
            </button>
            <button
              id="booking-confirm-save-btn"
              type="submit"
              disabled={savedSuccess}
              className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/30 to-purple-600/30 px-5 py-2 text-xs font-semibold text-amber-200 shadow-lg hover:border-amber-400 hover:from-amber-500/40 hover:to-purple-600/40 transition cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.confirmedBadge}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.saveAppointmentBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
