import React from 'react';
import { Users, Award, Globe, Clock, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: "Yıllık Tecrübe", value: "10+", icon: Clock },
    { label: "Tamamlanan Proje", value: "250+", icon: CheckCircle },
    { label: "Mutlu Müşteri", value: "150+", icon: Users },
    { label: "Ödül & Başarı", value: "15+", icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
       {/* Decorative Background */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dijital Dünyada <span className="text-blue-500">Çözüm Ortağınız</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Videm Dijital Ajans olarak, teknolojiyi estetikle birleştiriyoruz. Markaların dijital dönüşüm yolculuğunda onlara rehberlik ediyor, sadece bir hizmet sağlayıcı değil, aynı zamanda güvenilir bir yol arkadaşı oluyoruz.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              İstanbul merkezli ofisimizden tüm dünyaya modern web çözümleri, veri odaklı pazarlama stratejileri ve kullanıcı dostu tasarımlar sunuyoruz. Amacımız, işletmenizi dijital çağın gerekliliklerine uygun, rekabetçi ve görünür kılmak.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual/Image Placeholder */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-8 aspect-video lg:aspect-square flex flex-col justify-center items-center text-center shadow-2xl group hover:border-slate-700 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
               
               <Globe className="w-32 h-32 text-slate-800 mb-6 group-hover:text-blue-500/20 transition-colors duration-500" strokeWidth={0.5} />
               
               <h3 className="text-2xl font-bold text-white mb-2">Global Vizyon</h3>
               <p className="text-slate-500 max-w-xs">Sınırları aşan fikirler ve dünya standartlarında projeler üretiyoruz.</p>
               
               {/* Decorative Elements */}
               <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-blue-500/20 rounded-tr-3xl"></div>
               <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-blue-500/20 rounded-bl-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};