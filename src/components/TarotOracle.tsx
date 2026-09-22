import React, { useState } from 'react';
import { TarotCard, Language } from '../types';
import { majorArcanaList } from '../data/tarotData';
import { translations } from '../data/translations';
import { 
  Sparkles, 
  RotateCcw, 
  Layers, 
  Compass, 
  BookmarkCheck,
  Eye
} from 'lucide-react';

interface Props {
  language: Language;
  onAttachSpreadToAppointment?: (summary: string) => void;
  onOpenBookingWithTopic?: (topic: string) => void;
}

export const TarotOracle: React.FC<Props> = ({
  language,
  onAttachSpreadToAppointment,
  onOpenBookingWithTopic,
}) => {
  const t = translations[language];

  const [spreadType, setSpreadType] = useState<'single' | 'three'>('single');
  const [drawnCards, setDrawnCards] = useState<Array<{ card: TarotCard; isReversed: boolean; positionName: string }>>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [attachedSuccess, setAttachedSuccess] = useState(false);

  // Draw cards from majorArcanaList
  const handleDrawCards = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...majorArcanaList].sort(() => 0.5 - Math.random());
      if (spreadType === 'single') {
        const picked = shuffled[0];
        const isReversed = Math.random() < 0.25;
        setDrawnCards([{ card: picked, isReversed, positionName: 'Arcano de Claridad' }]);
      } else {
        const positions = ['Origen / Pasado', 'Presente / Foco', 'Porvenir / Consejo'];
        const drawn = shuffled.slice(0, 3).map((card, idx) => ({
          card,
          isReversed: Math.random() < 0.25,
          positionName: positions[idx],
        }));
        setDrawnCards(drawn);
      }
      setSelectedCardIndex(0);
      setIsShuffling(false);
      setAttachedSuccess(false);
    }, 500);
  };

  const getSpreadSummary = () => {
    if (drawnCards.length === 0) return '';
    return drawnCards
      .map((d) => `${d.positionName}: ${d.card.name[language] || d.card.name.es} (${d.card.number})${d.isReversed ? ' [Invertida]' : ''}`)
      .join(' · ');
  };

  const handleAttachSpread = () => {
    const summary = getSpreadSummary();
    if (!summary) return;

    if (onAttachSpreadToAppointment) {
      onAttachSpreadToAppointment(summary);
      setAttachedSuccess(true);
      setTimeout(() => setAttachedSuccess(false), 3000);
    } else if (onOpenBookingWithTopic) {
      onOpenBookingWithTopic(`Tirada de Tarot: ${summary}`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
              <Compass className="w-4 h-4" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 font-arcane">
              {t.oracleTitle}
            </h1>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-purple-300/80">
            {t.oracleSubtitle}
          </p>
        </div>

        {/* Spread Selector & Draw Action */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-purple-500/25 bg-[#120d26] p-1">
            <button
              onClick={() => {
                setSpreadType('single');
                setDrawnCards([]);
              }}
              className={`rounded-full px-3 py-1 text-xs font-medium transition cursor-pointer ${
                spreadType === 'single'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1 Arcano
            </button>
            <button
              onClick={() => {
                setSpreadType('three');
                setDrawnCards([]);
              }}
              className={`rounded-full px-3 py-1 text-xs font-medium transition cursor-pointer ${
                spreadType === 'three'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3 Arcanos
            </button>
          </div>

          <button
            id="tarot-draw-btn"
            onClick={handleDrawCards}
            disabled={isShuffling}
            className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/25 to-purple-600/30 px-4 py-1.5 text-xs font-semibold text-amber-200 shadow-md hover:from-amber-500/35 hover:to-purple-600/45 transition cursor-pointer"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isShuffling ? 'animate-spin' : ''}`} />
            <span>{drawnCards.length > 0 ? t.shuffleCardsBtn : t.drawCardBtn}</span>
          </button>
        </div>
      </div>

      {/* Cards Table */}
      {drawnCards.length === 0 ? (
        <div className="mt-12 text-center py-12 rounded-3xl border border-dashed border-purple-500/25 bg-[#100b24]/40">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-4">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-arcane">
            El Mazo de los 22 Arcanos Mayores
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Respira hondo, formula mentalmente tu pregunta o dilema y pulsa el botón para revelar la guía que necesitas hoy.
          </p>
          <button
            onClick={handleDrawCards}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition cursor-pointer font-arcane"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Comenzar Tirada</span>
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-8 animate-fade-in">
          {/* Card Presentation Row */}
          <div className={`grid gap-4 ${spreadType === 'single' ? 'grid-cols-1 max-w-sm mx-auto' : 'grid-cols-1 sm:grid-cols-3'}`}>
            {drawnCards.map((drawn, index) => {
              const isSelected = selectedCardIndex === index;
              const cardName = drawn.card.name[language] || drawn.card.name.es;
              const meaning = drawn.isReversed
                ? (drawn.card.shadowMeaning[language] || drawn.card.shadowMeaning.es)
                : (drawn.card.lightMeaning[language] || drawn.card.lightMeaning.es);

              return (
                <div
                  key={drawn.card.id + '-' + index}
                  onClick={() => setSelectedCardIndex(index)}
                  className={`group relative flex flex-col items-center rounded-2xl border p-5 backdrop-blur-md transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-gradient-to-b from-[#1c143a] to-[#0f0b24] shadow-xl shadow-amber-500/15 scale-[1.02]'
                      : 'border-purple-500/25 bg-[#110d24]/70 hover:border-amber-500/30 hover:bg-[#161030]'
                  }`}
                >
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-2 font-arcane">
                    {drawn.positionName}
                  </span>

                  {/* Visual Card representation */}
                  <div className="relative flex h-52 w-32 flex-col items-center justify-between rounded-xl border border-amber-500/40 bg-gradient-to-b from-[#181135] via-[#100a26] to-[#090615] p-3 text-center shadow-md">
                    <span className="text-xs font-bold text-amber-400 font-arcane">
                      {drawn.card.number}
                    </span>

                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-1.5">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-100 font-arcane leading-tight">
                        {cardName}
                      </h4>
                      {drawn.isReversed && (
                        <span className="mt-1 rounded-full bg-rose-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-rose-300 border border-rose-500/30">
                          Invertida
                        </span>
                      )}
                    </div>

                    <span className="text-[9px] text-purple-300/70 font-mono tracking-wider">
                      ARCANEZ
                    </span>
                  </div>

                  <p className="mt-3 text-center text-[11px] text-slate-300 line-clamp-2">
                    {meaning}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Card Deep Insight */}
          {selectedCardIndex !== null && drawnCards[selectedCardIndex] && (
            <div className="rounded-2xl border border-amber-500/30 bg-[#120d28] p-6 shadow-2xl text-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-purple-500/20">
                <div>
                  <h3 className="text-xl font-bold text-amber-200 font-arcane flex items-center gap-2">
                    <span>{drawnCards[selectedCardIndex].card.name[language] || drawnCards[selectedCardIndex].card.name.es}</span>
                    <span className="text-xs font-normal text-amber-400/80">({drawnCards[selectedCardIndex].card.number})</span>
                  </h3>
                  <p className="text-xs text-purple-300">
                    Posición: <span className="font-semibold text-amber-300">{drawnCards[selectedCardIndex].positionName}</span>
                    {drawnCards[selectedCardIndex].isReversed ? ' · Arcano Invertido' : ' · Arcano Directo'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 bg-black/30 px-3 py-1 rounded-full border border-purple-500/15">
                    Elemento: {drawnCards[selectedCardIndex].card.element}
                  </span>
                </div>
              </div>

              {/* Guidance & Meaning */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-black/30 p-4 border border-purple-500/15">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5 font-arcane">
                    {drawnCards[selectedCardIndex].isReversed ? t.shadowAspect : t.lightAspect}
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {drawnCards[selectedCardIndex].isReversed
                      ? (drawnCards[selectedCardIndex].card.shadowMeaning[language] || drawnCards[selectedCardIndex].card.shadowMeaning.es)
                      : (drawnCards[selectedCardIndex].card.lightMeaning[language] || drawnCards[selectedCardIndex].card.lightMeaning.es)}
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-amber-500/10 to-purple-500/10 p-4 border border-amber-500/30">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5 font-arcane flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {t.guidanceAspect} (Gabriel)
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {drawnCards[selectedCardIndex].card.guidance[language] || drawnCards[selectedCardIndex].card.guidance.es}
                  </p>
                </div>
              </div>

              {/* Symbolism */}
              <div className="mt-4 rounded-xl border border-purple-500/20 bg-[#161033] p-3 text-center">
                <p className="text-xs italic text-purple-200">
                  "{drawnCards[selectedCardIndex].card.symbolism[language] || drawnCards[selectedCardIndex].card.symbolism.es}"
                </p>
              </div>

              {/* Action: Bring this spread into session with Gabriel */}
              <div className="mt-5 pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-slate-400">
                  Puedes anexar esta tirada para profundizar en ella durante tu cita con Gabriel.
                </p>

                <button
                  id="attach-spread-to-meeting-btn"
                  onClick={handleAttachSpread}
                  className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/20 px-4 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-500/30 transition cursor-pointer"
                >
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {attachedSuccess ? '¡Tirada vinculada a tu cita!' : t.bringToGabrielCall}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
