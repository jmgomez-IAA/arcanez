import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  Sparkles, 
  MessageSquareHeart, 
  Compass, 
  Eye, 
  Globe2 
} from 'lucide-react';

interface Props {
  currentTab: 'portal' | 'refuge' | 'oracle' | 'telekinesis';
  onSelectTab: (tab: 'portal' | 'refuge' | 'oracle' | 'telekinesis') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
];

export const Navigation: React.FC<Props> = ({
  currentTab,
  onSelectTab,
  language,
  onLanguageChange,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-500/15 bg-[#090714]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Logo */}
        <div 
          onClick={() => onSelectTab('portal')}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/40 bg-gradient-to-br from-[#1d163a] to-[#0c091d] p-1.5 shadow-md shadow-amber-500/10 transition-transform group-hover:scale-105">
            <img 
              src="/icon.svg" 
              alt="Arcanez" 
              className="h-full w-full object-contain filter drop-shadow" 
            />
            <span className="absolute -inset-0.5 rounded-xl bg-amber-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-wider text-slate-100 font-arcane group-hover:text-amber-200 transition-colors">
                ARCANEZ
              </span>
              <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-medium text-amber-300 border border-amber-500/30">
                PWA
              </span>
            </div>
            <p className="text-[10px] text-purple-300/70 tracking-wide hidden sm:block">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#120e24]/70 p-1 rounded-full border border-purple-500/20 shadow-inner">
          <button
            id="nav-tab-portal"
            onClick={() => onSelectTab('portal')}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
              currentTab === 'portal'
                ? 'bg-gradient-to-r from-amber-500/20 to-purple-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.navGabriel}</span>
          </button>

          <button
            id="nav-tab-refuge"
            onClick={() => onSelectTab('refuge')}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
              currentTab === 'refuge'
                ? 'bg-gradient-to-r from-amber-500/20 to-purple-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
            }`}
          >
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-400" />
            <span>{t.navRefuge}</span>
          </button>

          <button
            id="nav-tab-oracle"
            onClick={() => onSelectTab('oracle')}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
              currentTab === 'oracle'
                ? 'bg-gradient-to-r from-amber-500/20 to-purple-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.navOracle}</span>
          </button>

          <button
            id="nav-tab-telekinesis"
            onClick={() => onSelectTab('telekinesis')}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
              currentTab === 'telekinesis'
                ? 'bg-gradient-to-r from-amber-500/20 to-purple-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.navTelekinesis}</span>
          </button>
        </nav>

        {/* Right Action: Language Selector & PWA Install */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector */}
          <div className="relative flex items-center rounded-full border border-purple-500/25 bg-[#140f28] px-2 py-1 shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-purple-400 mr-1.5" />
            <select
              id="language-select"
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label="Seleccionar idioma"
              className="bg-transparent text-xs font-medium text-slate-200 focus:outline-none cursor-pointer pr-1"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code} className="bg-[#120e24] text-slate-200">
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
          </div>

          {/* PWA Install Button */}
          <PWAInstallButton
            labels={{
              install: t.pwaInstall,
              installOnIOS: t.pwaInstallOnIOS,
              iosTitle: t.pwaIosTitle,
              iosStep1: t.pwaIosStep1,
              iosStep2: t.pwaIosStep2,
              close: t.pwaClose,
            }}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-purple-500/20 bg-[#090714]/95 px-2 py-2 backdrop-blur-lg">
        <div className="grid grid-cols-4 gap-1">
          <button
            id="mobile-nav-portal"
            onClick={() => onSelectTab('portal')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl text-[10px] transition-all cursor-pointer ${
              currentTab === 'portal'
                ? 'text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 mb-0.5" />
            <span>Gabriel</span>
          </button>

          <button
            id="mobile-nav-refuge"
            onClick={() => onSelectTab('refuge')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl text-[10px] transition-all cursor-pointer ${
              currentTab === 'refuge'
                ? 'text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquareHeart className="w-4 h-4 mb-0.5" />
            <span>Refugio</span>
          </button>

          <button
            id="mobile-nav-oracle"
            onClick={() => onSelectTab('oracle')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl text-[10px] transition-all cursor-pointer ${
              currentTab === 'oracle'
                ? 'text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4 mb-0.5" />
            <span>Oráculo</span>
          </button>

          <button
            id="mobile-nav-telekinesis"
            onClick={() => onSelectTab('telekinesis')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl text-[10px] transition-all cursor-pointer ${
              currentTab === 'telekinesis'
                ? 'text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-4 h-4 mb-0.5" />
            <span>Foco</span>
          </button>
        </div>
      </div>
    </header>
  );
};
