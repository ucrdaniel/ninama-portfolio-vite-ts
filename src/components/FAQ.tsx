import { useState } from 'react';
import { copy, type Lang } from '../i18n';

interface FAQProps {
  lang: Lang;
}

export default function FAQ({ lang }: FAQProps) {
  const t = copy[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="heading-lg text-text mb-12 text-center">
          {t.faq.title}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {t.faq.items.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left py-6 flex items-center justify-between hover:text-accent transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-text uppercase tracking-wide text-sm">
                  {item.question}
                </span>
                <span className="text-text text-xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6">
                  <p className="text-body text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
              
              {/* Divider line */}
              {index < t.faq.items.length - 1 && (
                <div className="h-px bg-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
