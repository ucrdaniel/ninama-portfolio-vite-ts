import { copy, type Lang } from '../i18n';

interface CTAProps {
  lang: Lang;
}

export default function CTA({ lang }: CTAProps) {
  const t = copy[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main CTA */}
          <div className="space-y-6">
            <h2 className="heading-lg text-text">
              {t.cta.title}
            </h2>
            
            <p className="text-body text-muted">
              {t.cta.subtitle}
            </p>
            
            <button className="btn-primary text-lg px-8 py-4">
              {t.cta.button}
            </button>
            
            <div className="text-sm text-muted">
              {t.cta.contact}
            </div>
          </div>
          
          {/* Right column - Contact info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent" />
                <div className="font-bold text-text uppercase tracking-wide">
                  {lang === 'ru' ? 'СВЯЗАТЬСЯ С НАМИ' : 'CONTACT US'}
                </div>
              </div>
              
              <div className="space-y-3 text-body text-text">
                <div>
                  <div className="text-sm text-muted uppercase tracking-wide">
                    {lang === 'ru' ? 'ТЕЛЕФОН' : 'PHONE'}
                  </div>
                  <div className="font-medium">+7 (914) 775‑66‑81</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted uppercase tracking-wide">
                    {lang === 'ru' ? 'ПОЧТА' : 'EMAIL'}
                  </div>
                  <div className="font-medium">ninamaslikova211003@gmail.com</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted uppercase tracking-wide">
                    {lang === 'ru' ? 'ЛОКАЦИЯ' : 'LOCATION'}
                  </div>
                  <div className="font-medium">
                    {lang === 'ru' ? 'Санкт‑Петербург, Россия' : 'St. Petersburg, Russia'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-line">
              <div className="text-sm text-muted uppercase tracking-wide mb-2">
                {lang === 'ru' ? 'АДРЕС БРЕНДА' : 'BRAND ADDRESS'}
              </div>
              <div className="text-2xl font-bold text-accent">
                NINA.MASLIKOVA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
