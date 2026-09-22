import React, { useState } from 'react';
import { ArcanezConfig, Language } from '../types';
import { translations } from '../data/translations';
import { X, Settings, Link, Check, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: ArcanezConfig;
  language: Language;
  onSaveConfig: (newConfig: ArcanezConfig) => void;
}

export const GabrielConfigModal: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
  language,
  onSaveConfig,
}) => {
  const t = translations[language];
  const [scheduleUrl, setScheduleUrl] = useState(config.appointmentScheduleUrl);
  const [guideName, setGuideName] = useState(config.guideName);
  const [duration, setDuration] = useState(config.defaultDurationMinutes);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig({
      ...config,
      appointmentScheduleUrl: scheduleUrl.trim(),
      guideName: guideName.trim(),
      defaultDurationMinutes: Number(duration) || 30,
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div 
        id="gabriel-config-card"
        className="relative w-full max-w-md rounded-2xl border border-amber-500/30 bg-[#0f0c20] p-6 shadow-2xl text-slate-100"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-purple-500/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-200 font-arcane">
              {t.gabrielConfigTitle}
            </h3>
            <p className="text-xs text-purple-300/80">
              Integración nativa con Google Calendar
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-200 mb-1 flex items-center gap-1.5">
              <Link className="w-3.5 h-3.5 text-amber-400" />
              {t.googleBookingUrlLabel}
            </label>
            <input
              id="config-schedule-url-input"
              type="url"
              required
              value={scheduleUrl}
              onChange={(e) => setScheduleUrl(e.target.value)}
              placeholder="https://calendar.google.com/calendar/appointments/schedules/..."
              className="w-full rounded-xl border border-purple-500/30 bg-[#140f28] px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
            <p className="mt-1.5 text-[11px] text-purple-300/70 leading-relaxed">
              {t.googleBookingUrlHelp}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Guía / Referencia
              </label>
              <input
                id="config-guide-name-input"
                type="text"
                value={guideName}
                onChange={(e) => setGuideName(e.target.value)}
                className="w-full rounded-xl border border-purple-500/30 bg-[#140f28] px-3.5 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Duración (min)
              </label>
              <input
                id="config-duration-input"
                type="number"
                min="15"
                max="120"
                step="5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full rounded-xl border border-purple-500/30 bg-[#140f28] px-3.5 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer"
            >
              {t.cancelBtn}
            </button>
            <button
              id="config-save-submit-btn"
              type="submit"
              className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-purple-600/30 px-5 py-2 text-xs font-semibold text-amber-200 shadow-md hover:from-amber-500/30 hover:to-purple-600/40 transition cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Guardado</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.saveConfigBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
