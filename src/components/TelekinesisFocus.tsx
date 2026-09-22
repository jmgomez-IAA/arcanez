import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  Eye, 
  Sparkles, 
  Flame, 
  Wind, 
  RotateCcw, 
  ShieldCheck, 
  Zap,
  HelpCircle
} from 'lucide-react';

interface Props {
  language: Language;
}

export const TelekinesisFocus: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  const [focusProgress, setFocusProgress] = useState(0);
  const [isFocusing, setIsFocusing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathTimer, setBreathTimer] = useState(4);
  const [levelAchieved, setLevelAchieved] = useState(false);

  const focusTimerRef = useRef<any>(null);

  // Breathing loop guide (4s inhale, 4s hold, 4s exhale)
  useEffect(() => {
    const breathInterval = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev <= 1) {
          setBreathPhase((currentPhase) => {
            if (currentPhase === 'inhale') return 'hold';
            if (currentPhase === 'hold') return 'exhale';
            return 'inhale';
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(breathInterval);
  }, []);

  // Handle focus progress while holding
  useEffect(() => {
    if (isFocusing) {
      focusTimerRef.current = setInterval(() => {
        setFocusProgress((prev) => {
          if (prev >= 100) {
            setLevelAchieved(true);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      if (focusTimerRef.current) clearInterval(focusTimerRef.current);
      // Gentle decay if released before 100
      const decayTimer = setInterval(() => {
        setFocusProgress((prev) => {
          if (prev <= 0) {
            clearInterval(decayTimer);
            return 0;
          }
          return Math.max(0, prev - 3);
        });
      }, 100);
      return () => clearInterval(decayTimer);
    }

    return () => {
      if (focusTimerRef.current) clearInterval(focusTimerRef.current);
    };
  }, [isFocusing]);

  const handleReset = () => {
    setFocusProgress(0);
    setLevelAchieved(false);
  };

  const getPhaseText = () => {
    switch (breathPhase) {
      case 'inhale':
        return 'Inhala profundo y aquieta el diálogo interno';
      case 'hold':
        return 'Sostén el aliento en el centro del pecho';
      case 'exhale':
        return 'Exhala suavemente soltando tensiones';
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="pb-6 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300">
            <Eye className="w-4 h-4" />
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 font-arcane">
            {t.telekinesisTitle}
          </h1>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-purple-300/80">
          {t.telekinesisSubtitle}
        </p>
      </div>

      {/* Main Focus Chamber */}
      <div className="mt-8 rounded-3xl border border-purple-500/25 bg-gradient-to-b from-[#130d2a] via-[#0d091e] to-[#070512] p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
        {/* Subtle arcane circle background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-80 h-80 rounded-full border border-amber-500/30 border-dashed animate-spin-slow" />
          <div className="absolute w-60 h-60 rounded-full border border-purple-400/20" />
        </div>

        {/* Breathing cadence pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1.5 text-xs text-purple-200 mb-6 backdrop-blur-sm">
          <Wind className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-semibold text-amber-300">{breathTimer}s</span>
          <span>·</span>
          <span>{getPhaseText()}</span>
        </div>

        {/* Levitating Arcane Sphere */}
        <div className="relative my-8 flex items-center justify-center h-48 sm:h-56">
          {/* Base pedastal ring */}
          <div className="absolute bottom-2 w-32 h-6 rounded-full border border-amber-500/20 bg-amber-500/5 blur-[1px]" />

          {/* Sphere entity */}
          <div
            className={`relative rounded-full transition-all duration-300 cursor-pointer select-none flex items-center justify-center shadow-2xl ${
              isFocusing
                ? 'scale-110 shadow-amber-500/40 ring-4 ring-amber-400/50'
                : 'shadow-purple-950/80'
            }`}
            style={{
              width: `${90 + focusProgress * 0.4}px`,
              height: `${90 + focusProgress * 0.4}px`,
              background: `radial-gradient(circle at 35% 35%, #fde047 0%, #b45309 40%, #3b0764 75%, #090314 100%)`,
              transform: `translateY(-${15 + (focusProgress / 100) * 35}px)`,
            }}
            onMouseDown={() => setIsFocusing(true)}
            onMouseUp={() => setIsFocusing(false)}
            onTouchStart={() => setIsFocusing(true)}
            onTouchEnd={() => setIsFocusing(false)}
          >
            <div className="text-center">
              <span className="text-lg font-bold text-slate-900 font-arcane">
                {focusProgress}%
              </span>
              <p className="text-[9px] font-semibold text-slate-900/80 uppercase">
                {levelAchieved ? 'Alineado' : 'Foco'}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Hold CTA */}
        <div className="max-w-md mx-auto">
          <button
            id="telekinesis-hold-btn"
            onMouseDown={() => setIsFocusing(true)}
            onMouseUp={() => setIsFocusing(false)}
            onTouchStart={() => setIsFocusing(true)}
            onTouchEnd={() => setIsFocusing(false)}
            className={`w-full py-4 px-6 rounded-2xl border-2 font-bold tracking-wider text-sm transition-all cursor-pointer font-arcane select-none ${
              isFocusing
                ? 'border-amber-400 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 scale-[0.99]'
                : 'border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-purple-600/30 text-amber-200 hover:border-amber-400 hover:from-amber-500/30'
            }`}
          >
            {isFocusing ? 'Mantén la mente quieta...' : 'Mantén pulsado para levitar la esfera'}
          </button>

          <p className="mt-3 text-xs text-slate-400">
            {levelAchieved
              ? '✨ Tu mente ha alcanzado la quietud arquetípica de Arcanez.'
              : 'Presiona y sostén sin soltar. Sincroniza tu intención con el pulso de respiración.'}
          </p>

          {focusProgress > 0 && (
            <button
              onClick={handleReset}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reiniciar foco</span>
            </button>
          )}
        </div>
      </div>

      {/* The Arcanez Principles on Telekinesis & Mind */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-purple-500/20 bg-[#100c22]/70 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2 text-amber-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider font-arcane">
              1. La No-Fuerza
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            La telequinesis intuitiva nunca nace del esfuerzo tenso, sino del silencio donde la mente deja de luchar contra la realidad.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-[#100c22]/70 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2 text-amber-300">
            <Eye className="w-4 h-4 text-purple-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider font-arcane">
              2. El Vacío Fértil
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Al vaciar el ruido de las expectativas y los temores ajenos, despiertas el canal donde la intuición se convierte en certeza directa.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-[#100c22]/70 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2 text-amber-300">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider font-arcane">
              3. Resonancia con Gabriel
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Utiliza este estado de serenidad antes de entrar a tu videollamada para abordar tus dudas personales con máxima claridad.
          </p>
        </div>
      </div>
    </div>
  );
};
