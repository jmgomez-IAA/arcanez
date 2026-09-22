import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check } from 'lucide-react';

interface Props {
  className?: string;
  labels: {
    install: string;
    installOnIOS: string;
    iosTitle: string;
    iosStep1: string;
    iosStep2: string;
    close: string;
  };
}

export const PWAInstallButton: React.FC<Props> = ({ className = '', labels }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleInstall = async () => {
    const success = await install();
    if (success) {
      setJustInstalled(true);
      setTimeout(() => setJustInstalled(false), 3000);
    }
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <>
        <button
          id="pwa-install-btn"
          onClick={handleInstall}
          className={`flex items-center gap-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-purple-600/20 px-3.5 py-1.5 text-xs font-medium text-amber-200 shadow-md backdrop-blur-sm transition-all hover:border-amber-400 hover:from-amber-500/30 hover:to-purple-600/30 hover:shadow-amber-500/10 cursor-pointer ${className}`}
          title="Instalar Arcanez como App"
        >
          {justInstalled ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instalada</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>{labels.install}</span>
            </>
          )}
        </button>
      </>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-ios-install-btn"
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-3.5 py-1.5 text-xs font-medium text-purple-200 backdrop-blur-sm hover:border-purple-400 hover:bg-purple-900/50 transition cursor-pointer ${className}`}
        >
          <Smartphone className="w-3.5 h-3.5 text-purple-400" />
          <span>{labels.installOnIOS}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-sm rounded-2xl border border-amber-500/30 bg-[#120e24] p-6 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <h3 className="text-base font-semibold text-amber-200 font-arcane">{labels.iosTitle}</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1 text-slate-400 hover:text-white hover:bg-purple-900/40 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/30">1</span>
                  <p>{labels.iosStep1}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/30">2</span>
                  <p>{labels.iosStep2}</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl border border-purple-500/30 bg-purple-900/40 py-2.5 text-xs font-medium text-slate-200 hover:bg-purple-800/50 transition cursor-pointer"
              >
                {labels.close}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
