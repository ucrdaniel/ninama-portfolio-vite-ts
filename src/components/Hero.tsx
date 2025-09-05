import { copy, type Lang } from '../i18n';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <h1 className="heading-xl text-text leading-tight">
              {t.hero.title.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            
            <p className="text-body text-muted max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                {t.cta.button}
              </button>
              <button className="btn-outline">
                {lang === 'ru' ? 'СВЯЗАТЬСЯ' : 'CONTACT'}
              </button>
            </div>
          </div>
          
          {/* Right column - Direction cards */}
          <div className="space-y-6">
            {t.hero.ctas.map((cta, index) => (
              <div 
                key={index}
                className="group cursor-pointer border-2 border-line p-6 hover:border-accent transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-accent">
                    {cta.split(' / ')[0]}
                  </div>
                  <div className="text-text font-semibold uppercase tracking-wide">
                    {cta.split(' / ')[1]}
                  </div>
                </div>
                <div className="mt-2 h-0.5 bg-line group-hover:bg-accent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
