import { useState } from 'react';
import { copy, type Lang } from '../i18n';

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-50 bg-bg">
      {/* Static orange line - temporary fallback */}
      <div className="h-1 bg-accent w-full" />
      
      <div className="flex items-center justify-between py-6 px-5 md:px-10">
        {/* Logo */}
        <div className="font-extrabold text-[20px] text-accent uppercase tracking-tightest">
          NINA.MASLIKOVA
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-[14px] font-bold uppercase tracking-wide">
          {t.nav.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Right side - City tag and language switcher */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block font-bold uppercase text-[12px] tracking-wide">
            {t.cityTag}
          </div>
          <button
            className="border-2 border-line px-3 py-1 uppercase text-[12px] font-bold tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
