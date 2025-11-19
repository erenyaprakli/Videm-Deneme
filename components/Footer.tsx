import React from 'react';
import { Zap, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-slate-800 p-1 rounded-md">
               <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Videm</span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Hizmetler</a>
            <a href="#" className="hover:text-white transition-colors">Projeler</a>
            <a href="#" className="hover:text-white transition-colors">Kariyer</a>
            <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Videm Dijital Ajans. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};