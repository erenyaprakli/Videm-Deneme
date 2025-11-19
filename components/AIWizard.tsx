import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { generateStrategy } from '../services/geminiService';

export const AIWizard: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setStrategy(null);
    
    const result = await generateStrategy(idea);
    
    setStrategy(result);
    setLoading(false);
  };

  return (
    <section id="ai-wizard" className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-300 uppercase">Gemini AI Destekli</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Videm Strateji Sihirbazı</h2>
            <p className="text-slate-300">
              Sadece bir iş fikri girin, yapay zekamız size özel bir dijital yol haritası çıkarsın.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700">
            <form onSubmit={handleGenerate} className="relative">
              <label htmlFor="idea" className="block text-sm font-medium text-slate-400 mb-2">
                İş Fikriniz veya Sektörünüz
              </label>
              <div className="flex gap-4 flex-col md:flex-row">
                <input
                  id="idea"
                  type="text"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Örn: Butik kahve dükkanı açmak istiyorum..."
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !idea.trim()}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-semibold rounded-xl px-8 py-3 transition-all flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Analiz Ediliyor
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" /> Oluştur
                    </>
                  )}
                </button>
              </div>
            </form>

            {strategy && (
              <div className="mt-8 pt-8 border-t border-slate-800 animate-fade-in">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Send className="w-5 h-5 text-green-400" />
                    Önerilen Strateji:
                </h3>
                <div className="bg-slate-800/50 rounded-xl p-6 text-slate-300 leading-relaxed border border-slate-700/50 whitespace-pre-line">
                  {strategy}
                </div>
                <div className="mt-6 text-center">
                    <a href="#contact" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                        Bu stratejiyi hayata geçirmek için bizimle görüşün &rarr;
                    </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};