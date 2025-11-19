import React from 'react';
import { 
  Search, 
  Code, 
  Megaphone, 
  Palette, 
  Briefcase, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Search,
    title: "SEO Optimizasyonu",
    desc: "Google sıralamalarında üst sıralara çıkın, organik trafiğinizi artırın.",
    color: "text-blue-400"
  },
  {
    id: 2,
    icon: Code,
    title: "Site Yapımı & Yazılım",
    desc: "Hızlı, güvenli ve modern web siteleri ile dijital varlığınızı güçlendirin.",
    color: "text-indigo-400"
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Dijital Reklam",
    desc: "Google Ads ve sosyal medya reklamları ile hedef kitlenize doğrudan ulaşın.",
    color: "text-cyan-400"
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Markalaşma",
    desc: "Güçlü bir marka kimliği ve kurumsal dil ile sektörde fark yaratın.",
    color: "text-sky-400"
  },
  {
    id: 5,
    icon: Palette,
    title: "Tasarım (UI/UX)",
    desc: "Kullanıcı dostu arayüzler ve estetik görsellerle etkileyici deneyimler.",
    color: "text-teal-400"
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Dijital Pazarlama",
    desc: "Bütüncül pazarlama stratejileri ile dönüşüm oranlarınızı katlayın.",
    color: "text-emerald-400"
  },
  {
    id: 7,
    icon: FileText,
    title: "İçerik Üretimi",
    desc: "Blog, sosyal medya ve web için profesyonel, SEO uyumlu içerikler.",
    color: "text-blue-300"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hizmetlerimiz</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Videm Dijital Ajans olarak, markanızın ihtiyaç duyduğu tüm dijital çözümleri tek bir çatı altında sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              className="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mb-6 p-3 rounded-xl bg-slate-900 w-fit border border-slate-700 group-hover:border-slate-600 transition-colors`}>
                <s.icon className={`w-8 h-8 ${s.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};