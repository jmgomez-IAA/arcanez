import React from 'react';
import { Appointment, Language } from '../types';
import { translations } from '../data/translations';
import { 
  X, 
  Video, 
  Calendar as CalendarIcon, 
  Clock, 
  Trash2, 
  ExternalLink,
  Sparkles,
  CalendarCheck
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  language: Language;
  onDeleteAppointment: (id: string) => void;
}

export const AppointmentsListModal: React.FC<Props> = ({
  isOpen,
  onClose,
  appointments,
  language,
  onDeleteAppointment,
}) => {
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overflow-y-auto">
      <div 
        id="appointments-list-card"
        className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#0f0c20] p-6 shadow-2xl text-slate-100 my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-purple-500/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-200 font-arcane">
              {t.appointmentsHistoryTitle}
            </h3>
            <p className="text-xs text-purple-300/80">
              {appointments.length} {appointments.length === 1 ? 'cita registrada' : 'citas registradas'}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {appointments.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              <CalendarIcon className="w-8 h-8 mx-auto mb-2 text-purple-400/50" />
              <p>{t.noAppointmentsYet}</p>
            </div>
          ) : (
            appointments.map((apt) => (
              <div
                key={apt.id}
                className="rounded-xl border border-purple-500/20 bg-[#16102e]/70 p-4 text-xs transition hover:border-amber-500/30"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">
                      <Sparkles className="w-2.5 h-2.5" />
                      {t.confirmedBadge}
                    </span>
                    <h4 className="mt-2 text-sm font-semibold text-slate-100 flex items-center gap-2">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                      {apt.date} · {apt.time}
                    </h4>
                  </div>
                  <button
                    onClick={() => onDeleteAppointment(apt.id)}
                    className="rounded-lg p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                    title={t.deleteBtn}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {apt.topic && (
                  <p className="mt-2 text-slate-300 text-[11px] bg-black/30 p-2 rounded-lg border border-purple-500/10">
                    <span className="text-purple-300 font-medium">Tema: </span>
                    {apt.topic}
                  </p>
                )}

                {apt.tarotSpreadSummary && (
                  <p className="mt-1.5 text-amber-200/90 text-[10px] bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                    <span className="font-semibold">Tirada adjunta: </span>
                    {apt.tarotSpreadSummary}
                  </p>
                )}

                <div className="mt-3.5 pt-3 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-purple-300">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>30 min con Gabriel</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {apt.calendarUrl && (
                      <a
                        href={apt.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-purple-500/30 bg-purple-900/30 px-2.5 py-1 text-[11px] font-medium text-purple-200 hover:bg-purple-800/40 transition cursor-pointer"
                      >
                        <CalendarIcon className="w-3 h-3" />
                        <span>Google Cal</span>
                      </a>
                    )}

                    <a
                      href={apt.meetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-500/30 transition cursor-pointer shadow-sm"
                    >
                      <Video className="w-3 h-3 text-emerald-400" />
                      <span>{t.enterMeetBtn}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
