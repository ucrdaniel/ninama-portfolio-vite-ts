import { copy, type Lang } from '../i18n';

interface ProjectsProps {
  lang: Lang;
}

export default function Projects({ lang }: ProjectsProps) {
  const t = copy[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="heading-lg text-text mb-12 text-center">
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer border-2 border-line p-6 hover:border-accent transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project image placeholder */}
              <div className="aspect-[4/3] bg-muted/20 mb-6 flex items-center justify-center">
                <div className="text-muted text-sm uppercase tracking-wide">
                  {project.number} / {lang === 'ru' ? 'ИЗОБРАЖЕНИЕ' : 'IMAGE'}
                </div>
              </div>
              
              {/* Project info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-accent">
                    {project.number}
                  </div>
                  <div className="text-sm text-muted">
                    {project.year}
                  </div>
                </div>
                
                <h3 className="heading-sm text-text">
                  {project.title}
                </h3>
                
                <p className="text-small text-muted">
                  {project.description}
                </p>
                
                <div className="h-0.5 bg-line group-hover:bg-accent transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            {lang === 'ru' ? 'ПОСМОТРЕТЬ ВСЕ ПРОЕКТЫ' : 'VIEW ALL PROJECTS'}
          </button>
        </div>
      </div>
    </section>
  );
}
