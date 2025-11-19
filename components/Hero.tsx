import React from 'react';
import { ArrowRight, Monitor, BarChart, PenTool, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Yeni Nesil Dijital Ajans</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            Markanız İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">Dijital Gelecek</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Videm olarak; Web Tasarım, SEO, Markalaşma ve İçerik Üretiminde yenilikçi çözümlerle işletmenizi dijital dünyada zirveye taşıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#ai-wizard" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-videm-dark font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10"
            >
              <Monitor className="w-5 h-5" />
              AI ile Strateji Oluştur
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Hizmetlerimizi Keşfet
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Floating Badges */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
             <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <BarChart className="w-4 h-4 text-blue-400" /> Veri Odaklı
             </div>
             <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <PenTool className="w-4 h-4 text-blue-400" /> Özgün Tasarım
             </div>
             <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Monitor className="w-4 h-4 text-blue-400" /> %100 Responsive
             </div>
             <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Zap className="w-4 h-4 text-blue-400" /> Yüksek Hız
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};