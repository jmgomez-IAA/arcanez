import React, { useState } from 'react';
import { CommunityPost, Language } from '../types';
import { translations } from '../data/translations';
import { 
  Flame, 
  MessageSquareHeart, 
  PlusCircle, 
  Globe2, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Filter,
  Check
} from 'lucide-react';

interface Props {
  posts: CommunityPost[];
  language: Language;
  onAddPost: (post: CommunityPost) => void;
  onAddReply: (postId: string, content: string, author: string) => void;
  onToggleSupport: (postId: string) => void;
}

export const CommunityRefuge: React.FC<Props> = ({
  posts,
  language,
  onAddPost,
  onAddReply,
  onToggleSupport,
}) => {
  const t = translations[language];

  const [activeFilter, setActiveFilter] = useState<'all' | 'desahogo' | 'intuicion' | 'suenos' | 'telequinesis' | 'crecimiento'>('all');
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCountry, setNewCountry] = useState('España');
  const [newTopic, setNewTopic] = useState<'desahogo' | 'intuicion' | 'suenos' | 'telequinesis' | 'crecimiento'>('desahogo');
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  const filteredPosts = posts.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.topic === activeFilter;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    // Pick flag based on country
    const countryFlags: Record<string, string> = {
      'España': '🇪🇸',
      'México': '🇲🇽',
      'Argentina': '🇦🇷',
      'Colombia': '🇨🇴',
      'Chile': '🇨🇱',
      'Francia': '🇫🇷',
      'Italia': '🇮🇹',
      'Portugal': '🇵🇹',
      'Estados Unidos': '🇺🇸',
      'Canadá': '🇨🇦',
      'Reino Unido': '🇬🇧',
      'Japón': '🇯🇵',
    };

    const post: CommunityPost = {
      id: `post-${Date.now()}`,
      author: newAuthor.trim() || t.anonymousLabel,
      country: newCountry,
      countryCode: newCountry.substring(0, 2).toUpperCase(),
      flag: countryFlags[newCountry] || '🌐',
      topic: newTopic,
      title: newTitle.trim(),
      content: newContent.trim(),
      date: 'Ahora mismo',
      supportCount: 1,
      userSupported: true,
      replies: [],
    };

    onAddPost(post);
    setNewTitle('');
    setNewContent('');
    setNewAuthor('');
    setIsCreating(false);
  };

  const handleSendReply = (postId: string) => {
    if (!replyContent.trim()) return;
    onAddReply(postId, replyContent.trim(), replyAuthor.trim() || t.anonymousLabel);
    setReplyContent('');
    setActiveReplyId(null);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300">
              <MessageSquareHeart className="w-4 h-4" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 font-arcane">
              {t.refugeTitle}
            </h1>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-purple-300/80">
            {t.refugeSubtitle}
          </p>
        </div>

        <button
          id="create-community-post-btn"
          onClick={() => setIsCreating(!isCreating)}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-purple-600/30 px-5 py-2 text-xs font-semibold text-amber-200 shadow-md hover:from-amber-500/30 hover:to-purple-600/40 transition cursor-pointer self-start sm:self-auto font-arcane"
        >
          <PlusCircle className="w-4 h-4 text-amber-400" />
          <span>{t.newPostBtn}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="flex items-center gap-1 text-[11px] text-slate-400 mr-1 flex-shrink-0">
          <Filter className="w-3 h-3 text-purple-400" />
        </span>

        {[
          { id: 'all', label: t.filterAll },
          { id: 'desahogo', label: t.filterUnburden },
          { id: 'intuicion', label: t.filterIntuition },
          { id: 'suenos', label: t.filterDreams },
          { id: 'telequinesis', label: t.filterTelekinesis },
          { id: 'crecimiento', label: t.filterGrowth },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
            className={`flex-shrink-0 rounded-full px-3.5 py-1 text-xs font-medium transition cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow-sm'
                : 'bg-[#130f26] text-slate-400 border border-purple-500/15 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Create New Post Form */}
      {isCreating && (
        <form 
          onSubmit={handleCreatePost}
          className="mt-6 rounded-2xl border border-amber-500/30 bg-[#120d26] p-5 shadow-2xl text-slate-100 animate-fade-in"
        >
          <h3 className="text-base font-bold text-amber-200 font-arcane mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.newPostBtn}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div>
              <label className="block text-[11px] text-slate-300 mb-1">{t.postAuthorLabel}</label>
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Ej. Sofía o Anónimo"
                className="w-full rounded-xl border border-purple-500/30 bg-[#0c091a] px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-300 mb-1">{t.postCountryLabel}</label>
              <select
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                className="w-full rounded-xl border border-purple-500/30 bg-[#0c091a] px-3 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="España">🇪🇸 España</option>
                <option value="México">🇲🇽 México</option>
                <option value="Argentina">🇦🇷 Argentina</option>
                <option value="Colombia">🇨🇴 Colombia</option>
                <option value="Chile">🇨🇱 Chile</option>
                <option value="Francia">🇫🇷 Francia</option>
                <option value="Italia">🇮🇹 Italia</option>
                <option value="Portugal">🇵🇹 Portugal</option>
                <option value="Estados Unidos">🇺🇸 Estados Unidos</option>
                <option value="Canadá">🇨🇦 Canadá</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-slate-300 mb-1">{t.postCategoryLabel}</label>
              <select
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value as typeof newTopic)}
                className="w-full rounded-xl border border-purple-500/30 bg-[#0c091a] px-3 py-2 text-xs text-slate-100 focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="desahogo">Desahogo Personal</option>
                <option value="intuicion">Intuición & Misterio</option>
                <option value="suenos">Sueños & Señales</option>
                <option value="telequinesis">Telequinesis & Mente</option>
                <option value="crecimiento">Crecimiento Personal</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-[11px] text-slate-300 mb-1">{t.postTitleLabel}</label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="¿Qué dilema o sentir deseas compartir?"
              className="w-full rounded-xl border border-purple-500/30 bg-[#0c091a] px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[11px] text-slate-300 mb-1">{t.postContentLabel}</label>
            <textarea
              required
              rows={4}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Escribe libremente. Este es un círculo seguro sin juicios..."
              className="w-full rounded-xl border border-purple-500/30 bg-[#0c091a] px-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer"
            >
              {t.cancelBtn}
            </button>
            <button
              type="submit"
              className="rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/30 to-purple-600/30 px-5 py-2 text-xs font-semibold text-amber-200 hover:from-amber-500/40 hover:to-purple-600/40 transition cursor-pointer"
            >
              {t.publishPostBtn}
            </button>
          </div>
        </form>
      )}

      {/* Posts List */}
      <div className="mt-6 space-y-4">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-purple-500/20 bg-[#100c22]/80 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-purple-500/35"
          >
            {/* Author info & country */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base" title={post.country}>{post.flag}</span>
                <span className="text-xs font-semibold text-slate-200">{post.author}</span>
                <span className="text-[10px] text-purple-300/60">· {post.country}</span>
              </div>
              <span className="text-[10px] text-slate-400">{post.date}</span>
            </div>

            {/* Post Title */}
            <h3 className="mt-2 text-base font-bold text-slate-100 font-arcane">
              {post.title}
            </h3>

            {/* Post Content */}
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            {/* Action Bar */}
            <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between gap-3">
              {/* Light Candle / Hold Space */}
              <button
                onClick={() => onToggleSupport(post.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition cursor-pointer ${
                  post.userSupported
                    ? 'bg-amber-500/25 text-amber-200 border border-amber-500/40'
                    : 'bg-black/30 text-slate-400 hover:text-amber-300 border border-purple-500/15'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${post.userSupported ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
                <span>{post.supportCount} {t.candlesLit}</span>
              </button>

              {/* Reply Button */}
              <button
                onClick={() => setActiveReplyId(activeReplyId === post.id ? null : post.id)}
                className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition cursor-pointer"
              >
                <MessageSquareHeart className="w-3.5 h-3.5 text-purple-400" />
                <span>{post.replies.length} respuestas</span>
              </button>
            </div>

            {/* Replies List */}
            {post.replies.length > 0 && (
              <div className="mt-4 space-y-2.5 pt-3 border-t border-purple-500/15 pl-3 sm:pl-5">
                {post.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className={`rounded-xl p-3 text-xs ${
                      reply.isGuide
                        ? 'border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-[#181135] to-[#120d26]'
                        : 'border border-purple-500/15 bg-black/30 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        {reply.isGuide && (
                          <span className="flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[9px] font-bold text-amber-300 border border-amber-400/40">
                            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                            {t.gabrielGuidanceBadge}
                          </span>
                        )}
                        <span className={`font-semibold ${reply.isGuide ? 'text-amber-200' : 'text-slate-200'}`}>
                          {reply.author}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">{reply.date}</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Input Box */}
            {activeReplyId === post.id && (
              <div className="mt-3 pt-3 border-t border-purple-500/15 flex flex-col gap-2">
                <input
                  type="text"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  placeholder="Tu nombre (opcional)"
                  className="rounded-lg border border-purple-500/20 bg-black/40 px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Escribe una palabra de aliento o comprensión..."
                    className="flex-1 rounded-lg border border-purple-500/20 bg-black/40 px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSendReply(post.id);
                      }
                    }}
                  />
                  <button
                    onClick={() => handleSendReply(post.id)}
                    className="flex items-center justify-center rounded-lg bg-amber-500/20 border border-amber-500/40 px-3.5 py-2 text-xs font-medium text-amber-200 hover:bg-amber-500/30 transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
