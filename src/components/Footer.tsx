import { copy, type Lang } from '../i18n';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = copy[lang];

  return (
    <footer className="py-12 border-t border-line">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Brand */}
          <div className="space-y-4">
            <div className="font-extrabold text-2xl text-accent uppercase tracking-tightest">
              {t.footer.brand}
            </div>
            <p className="text-small text-muted max-w-sm">
              {t.footer.description}
            </p>
          </div>
          
          {/* Center column - Navigation */}
          <div className="space-y-4">
            <div className="font-bold text-text uppercase tracking-wide text-sm">
              {lang === 'ru' ? 'НАВИГАЦИЯ' : 'NAVIGATION'}
            </div>
            <nav className="space-y-2">
              {t.nav.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-small text-muted hover:text-accent transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Right column - Legal */}
          <div className="space-y-4">
            <div className="font-bold text-text uppercase tracking-wide text-sm">
              {lang === 'ru' ? 'ПРАВОВАЯ ИНФОРМАЦИЯ' : 'LEGAL'}
            </div>
            <div className="space-y-2">
              {t.footer.links.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-small text-muted hover:text-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-xs text-muted pt-4">
              {t.footer.legal}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
