import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-videm-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projenizi Birlikte Büyütelim</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Dijital dünyada yerinizi almaya hazırsanız, Videm ekibi olarak size rehberlik etmek için buradayız.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">E-Posta</h4>
                  <p className="text-slate-400">hello@videmajans.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Telefon</h4>
                  <p className="text-slate-400">+90 (212) 555 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Ofis</h4>
                  <p className="text-slate-400">Levent, Büyükdere Cd. No:123, İstanbul</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Hemen İletişime Geçin</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Adınız</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Soyadınız</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">E-Posta Adresi</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Mesajınız</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>
              <button type="button" className="w-full bg-white text-videm-dark font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">
                Gönder
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};