import { copy, type Lang } from '../i18n';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = copy[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* About section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="heading-lg text-text mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent" />
                <div className="font-bold text-text uppercase tracking-wide">
                  {t.about.project.name}
                </div>
              </div>
              <div className="text-muted text-sm">
                {t.about.project.location}
              </div>
              <p className="text-body text-text">
                {t.about.project.description}
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-body text-text leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="section-divider" />
        
        {/* Values section */}
        <div className="mt-20">
          <h2 className="heading-lg text-text mb-12 text-center">
            {t.values.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.values.items.map((value, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent" />
                  <h3 className="heading-sm text-text">
                    {value.title}
                  </h3>
                </div>
                <p className="text-body text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
