import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

interface Props {
  message?: string;
}

export const OfflineIndicator: React.FC<Props> = ({ 
  message = "Modo sin conexión — Arcanez funciona en tu dispositivo" 
}) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      id="offline-banner"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-[#160f2e]/95 px-4 py-2 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-pulse"
    >
      <WifiOff className="w-3.5 h-3.5 text-amber-400" />
      <span>{message}</span>
    </div>
  );
};
