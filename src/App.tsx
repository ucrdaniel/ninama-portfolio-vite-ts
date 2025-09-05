import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Download, ArrowRight, ChevronRight, Award, Building2, Ruler, Hammer, LayoutGrid, SquareGanttChart, Sparkles } from "lucide-react";

// ====== Content (RU / EN) ======
const CONTENT = {
  ru: {
    brand: "ninama",
    nav: { about: "Обо мне", projects: "Проекты", skills: "Навыки", awards: "Награды", contact: "Контакты" },
    hero: {
      pre: "Архитектор • Интерьеры • Рабочая документация",
      title: "Нина Масликова",
      subtitle: "Создаю архитектуру, у которой есть логика, масштаб и эмоция. От концепции до рабочих чертежей.",
      ctaPrimary: "Скачать портфолио (PDF)",
      ctaSecondary: "Написать мне"
    },
    about: {
      title: "Обо мне",
      text: `Архитектор и дизайнер интерьеров. Уверенно работаю на стыке концептуального проектирования и рабочей документации: от идеи и визуализаций — до схем, спецификаций и чертежей по ГОСТ и СП. \n\nОпыт включает жилые комплексы, исторические интерьеры Санкт‑Петербурга, модели и макеты, а также участие в конкурсах и финалах профильных премий. Билингв — русский/английский. Бренд‑адрес: «ninama».`,
      stats: [
        { label: "Проектов и кейсов", value: "20+" },
        { label: "Конкурсы и финалы", value: "6" },
        { label: "Рабочих листов", value: "70+" },
      ]
    },
    projects: {
      title: "Ключевые проекты",
      items: [
        {
          id: "sectional",
          tag: "Архитектура",
          name: "Секционный жилой комплекс",
          year: "2023",
          blurb: "11 секций на стилобате, 4–5 этажей, дворы‑террасы над подземным паркингом, коммерция на 1 этаже.",
          details: [
            "Площадь участка: 18 227 м²",
            "Материалы: красный кирпич (жилые этажи), фельзит (первый этаж и стилобат)",
            "Ритм фасада формируется чередованием секций и связующих мостов",
          ],
        },
        {
          id: "apartment-interior",
          tag: "Интерьеры",
          name: "Квартира — проект интерьера",
          year: "2024",
          blurb: "Планировочные решения, визуализации, ведомости отделки, схемы освещения и расстановка мебели.",
          details: [
            "Экспликации, планы после переустройства",
            "Планы света и потолков, ведомости материалов",
            "Формат рабочих листов: A3, 70+ листов",
          ],
        },
        {
          id: "work-project",
          tag: "Рабочая документация",
          name: "Квартира в Доме Бенуа (1914)",
          year: "2024",
          blurb: "Проект в историческом памятнике Санкт‑Петербурга. Выполнение чертежей совместно с бюро.",
          details: [
            "Схемы возводимых конструкций и отделки стен",
            "Привязка и спецификация осветительного оборудования",
            "Согласование решений с производителями",
          ],
        },
        {
          id: "models",
          tag: "Макеты",
          name: "Архитектурные макеты",
          year: "2022–2024",
          blurb: "Изготовление макетов и прототипов для демонстрации объемно‑пространственных решений.",
          details: [
            "Ручная графика и САПР",
            "Точное масштабирование, аккуратные стыки и фактуры",
          ],
        },
      ]
    },
    skills: {
      title: "Навыки",
      list: [
        "Проектирование по ГОСТ и СП",
        "Рабочая документация (планы, узлы, спецификации)",
        "Интерьеры (планировки, свет, отделка)",
        "3D‑моделирование и визуализация",
        "Ручная и компьютерная графика",
        "Макетирование",
      ],
    },
    awards: {
      title: "Конкурсы и достижения",
      items: [
        { title: "II Международный конкурс Arch Debut 2023", note: "Диплом II степени (категория «Архитектура») — секционный жилой комплекс" },
        { title: "VI Всероссийский конкурс проектов зелёных крыш 2023", note: "Диплом II степени (категория «Студенческий проект») — Центр детского досуга" },
        { title: "Archseasons 2024", note: "Финалист (категория «Жилой интерьер»)" },
        { title: "II Международный конкурс Arch Debut 2024", note: "Диплом II степени (категория «Архитектура») — террасный жилой дом" },
        { title: "Проект «Экспертиза будущего» 2023–2024", note: "Система автоматизации запросов по МКД — в разработке" },
      ]
    },
    contact: {
      title: "Контакты",
      subtitle: "Открыта к сотрудничеству и проектам",
      address: "Санкт‑Петербург, Россия",
      brandAddress: "Адрес бренда: ninama",
      labels: { phone: "Телефон", email: "Почта", location: "Локация", instagram: "Instagram" },
      sayHello: "Написать в Telegram / Email",
      legal: "© 2025 ninama — Нина Масликова. Все права защищены.",
    },
    pdf: { text: "Портфолио (PDF)" }
  },
  en: {
    brand: "ninama",
    nav: { about: "About", projects: "Projects", skills: "Skills", awards: "Awards", contact: "Contact" },
    hero: {
      pre: "Architect • Interiors • Working drawings",
      title: "Nina Maslikova",
      subtitle: "Architecture with logic, scale, and emotion — from concept to detailed drawings.",
      ctaPrimary: "Download Portfolio (PDF)",
      ctaSecondary: "Get in touch"
    },
    about: {
      title: "About",
      text: `Architect & interior designer. Confident across the full stack — concept, visuals, models, and production‑ready drawings per GOST/SP. \n\nExperience spans residential complexes, historical St. Petersburg interiors, models, and award shortlists. Bilingual RU/EN. Brand address: “ninama”.`,
      stats: [
        { label: "Projects & cases", value: "20+" },
        { label: "Awards & finals", value: "6" },
        { label: "Working sheets", value: "70+" },
      ]
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          id: "sectional",
          tag: "Architecture",
          name: "Sectional Residential Complex",
          year: "2023",
          blurb: "11 sections on a stylobate, 4–5 floors, courtyards over underground parking, ground‑floor retail.",
          details: [
            "Site area: 18,227 m²",
            "Materials: red brick (residential), felsite (ground floor/stylobate)",
            "Façade rhythm via alternating sections and bridges",
          ],
        },
        {
          id: "apartment-interior",
          tag: "Interiors",
          name: "Apartment — Interior Design",
          year: "2024",
          blurb: "Layouts, visualisations, finish schedules, lighting schemes, and furniture plans.",
          details: [
            "Room schedules, post‑renovation plans",
            "Ceiling & lighting layouts; material schedules",
            "Working format: A3; 70+ sheets",
          ],
        },
        {
          id: "work-project",
          tag: "Working docs",
          name: "Apartment — Benois House (1914)",
          year: "2024",
          blurb: "Project in a listed historical monument in St. Petersburg. Drawings executed with a partner office.",
          details: [
            "New partitions & wall finishes schemes",
            "Lighting equipment positioning & spec",
            "Coordination with manufacturers",
          ],
        },
        {
          id: "models",
          tag: "Models",
          name: "Architectural Models",
          year: "2022–2024",
          blurb: "Physical models and prototypes to communicate volumetric and spatial ideas.",
          details: [
            "Hand & CAD graphics",
            "Accurate scaling, clean joints and textures",
          ],
        },
      ]
    },
    skills: {
      title: "Skills",
      list: [
        "Drawings per GOST & SP",
        "Working documentation (plans, details, specs)",
        "Interiors (layouts, lighting, finishes)",
        "3D modeling & visualization",
        "Hand & computer graphics",
        "Model making",
      ],
    },
    awards: {
      title: "Competitions & Achievements",
      items: [
        { title: "II International Competition Arch Debut 2023", note: "2nd Degree Diploma (Architecture) — sectional residential complex" },
        { title: "VI All‑Russian Green Roof Design Competition 2023", note: "2nd Degree Diploma (Student Project) — Children’s Leisure Center" },
        { title: "Archseasons 2024", note: "Finalist (Residential Interior)" },
        { title: "II International Competition Arch Debut 2024", note: "2nd Degree Diploma (Architecture) — terraced residential house" },
        { title: "‘Expertise of the Future’ 2023–2024", note: "Automation system for CH sites — in development" },
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Open to collaborations and projects",
      address: "St. Petersburg, Russia",
      brandAddress: "Brand address: ninama",
      labels: { phone: "Phone", email: "Email", location: "Location", instagram: "Instagram" },
      sayHello: "Say hello on Telegram / Email",
      legal: "© 2025 ninama — Nina Maslikova. All rights reserved.",
    },
    pdf: { text: "Portfolio (PDF)" }
  }
} as const;

const GOOGLE_DRIVE_PDF = "https://drive.google.com/file/d/1pwVLYcPHJS2FO3Y3oYkaTwirQjMiBqWy/view?usp=sharing";
const DRIVE_ID = "1pwVLYcPHJS2FO3Y3oYkaTwirQjMiBqWy";
const DRIVE_THUMB = (w=1600) => `https://drive.google.com/thumbnail?id=${DRIVE_ID}&sz=w${w}`;

const IMAGES: Record<string, any> = {
  hero: DRIVE_THUMB(1600),
  sectional: [DRIVE_THUMB(1200), DRIVE_THUMB(900), DRIVE_THUMB(700)],
  "apartment-interior": [DRIVE_THUMB(1200), DRIVE_THUMB(900), DRIVE_THUMB(700)],
  "work-project": [DRIVE_THUMB(1200), DRIVE_THUMB(900), DRIVE_THUMB(700)],
  models: [DRIVE_THUMB(1200), DRIVE_THUMB(900)]
};

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const glass = "bg-white/6 dark:bg-white/5 backdrop-blur-md border border-white/10";

// Scrollspy hook — renamed to avoid collisions
export function useActiveSection(sectionIds:string[], offset = 100){
  const [active, setActive] = useState<string>(sectionIds[0] || "");
  useEffect(()=>{
    const handler = () => {
      let current = active;
      for(const id of sectionIds){
        const el = document.getElementById(id);
        if(!el) continue;
        const rect = el.getBoundingClientRect();
        if(rect.top <= offset && rect.bottom - 120 > offset){
          current = id; break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true as any });
    window.addEventListener('resize', handler);
    return ()=>{ window.removeEventListener('scroll', handler); window.removeEventListener('resize', handler); };
  }, [sectionIds.join(','), offset]);
  return active;
}

// Smooth anchor helper
export function enableSmoothAnchors(headerOffset = 72){
  const onClick = (e: Event) => {
    const t = e.target as HTMLElement;
    if(!t) return;
    const link = t.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if(!link) return;
    const hash = link.getAttribute('href') || '';
    if(hash.length < 2) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    const top = window.scrollY + el.getBoundingClientRect().top - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}

function MediaStrip({images}:{images:({src:string, alt?:string}|string)[]}){
  const normalized = images.map((img:any, i:number)=> typeof img === 'string' ? {src: img, alt: `image-${i+1}`} : img);
  return (
    <div className="mt-6 overflow-x-auto">
      <div className="flex gap-3 min-w-full">
        {normalized.map((img, i)=> (
          <motion.div key={i} whileHover={{scale:1.02}} className="relative aspect-[16/10] w-[22rem] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
            <img src={img.src} alt={img.alt || 'Project image'} loading="lazy" className="h-full w-full object-cover" onError={(e)=>{(e.target as HTMLImageElement).style.display='none';}}/>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.07),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.07),transparent_55%)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ParallaxBackdrop(){
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, 60]);
  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-3xl" />
    </div>
  );
}

function Chip({children}:{children: React.ReactNode}){
  return <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/90 dark:text-white/90">{children}</span>;
}

function SectionTitle({pre, title}:{pre?: string, title: string}){
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="mb-8">
      {pre ? <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60">{pre}</div> : null}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
    </motion.div>
  );
}

function Stat({value, label}:{value:string,label:string}){
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className={`rounded-2xl ${glass} p-5`}>
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}

function ProjectCard({item, lang}:{item:any, lang:'ru'|'en'}){
  const iconMap:any = { Architecture: <Building2 size={18}/>, "Архитектура": <Building2 size={18}/>, Интерьеры: <LayoutGrid size={18}/>, Interiors: <LayoutGrid size={18}/>, Models: <SquareGanttChart size={18}/>, Макеты: <SquareGanttChart size={18}/>, "Рабочая документация": <Hammer size={18}/>, "Working docs": <Hammer size={18}/> };
  return (
    <motion.a
      href={`#${item.id}`}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`group relative block overflow-hidden rounded-3xl ${glass} p-6 transition-transform will-change-transform hover:-translate-y-1`}
    >
      <div className="flex items-center gap-2 text-xs text-white/70">
        <Chip>{iconMap[item.tag] || <Sparkles size={16}/>}<span>{item.tag}</span></Chip>
        <span>•</span>
        <span>{item.year}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
      <p className="mt-2 line-clamp-3 text-white/75">{item.blurb}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
        <span className="opacity-0 translate-x-[-6px] transition-all group-hover:opacity-100 group-hover:translate-x-0">Подробнее</span>
        <ChevronRight className="opacity-0 transition-opacity group-hover:opacity-100" size={16}/>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5"/>
    </motion.a>
  );
}

function ProjectDetail({item}:{item:any}){
  const imgs = (IMAGES[item.id] || [IMAGES.hero, DRIVE_THUMB(1200), DRIVE_THUMB(900)]);
  return (
    <section id={item.id} className="scroll-mt-24">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className={`rounded-3xl ${glass} p-6 md:p-8`}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
          <Chip>{item.tag}</Chip>
          <Chip>{item.year}</Chip>
        </div>
        <h3 className="mt-3 text-2xl font-semibold">{item.name}</h3>
        <p className="mt-3 text-white/80">{item.blurb}</p>
        <ul className="mt-5 grid gap-2 text-sm text-white/80 list-disc pl-5">
          {item.details?.map((d:string, i:number)=> <li key={i}>{d}</li>)}
        </ul>
        <MediaStrip images={imgs}/>
      </motion.div>
    </section>
  );
}

export default function App(){
  const [lang, setLang] = useState<'ru'|'en'>('ru');
  const T = CONTENT[lang];

  useEffect(()=>{
    const saved = localStorage.getItem('ninama-lang') as 'ru'|'en'|null;
    if(saved) setLang(saved);
  }, []);

  useEffect(()=>{
    localStorage.setItem('ninama-lang', lang);
  }, [lang]);

  useEffect(()=>{
    const disable = enableSmoothAnchors(76);
    return disable;
  }, []);

  const sectionIds = ['about','projects','skills','awards','contact'];
  const active = useActiveSection(sectionIds, 100);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 text-white">
      <ParallaxBackdrop/>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="group inline-flex items-center gap-2 text-sm font-semibold">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400"/>
            <span className="tracking-wide">{T.brand}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {sectionIds.map(id => (
              <a key={id} href={`#${id}`} className={`hover:text-white transition-colors ${active===id? 'text-white after:block after:h-[2px] after:bg-white after:mt-1' : ''}`}>
                {id==='about'? T.nav.about : id==='projects'? T.nav.projects : id==='skills'? T.nav.skills : id==='awards'? T.nav.awards : T.nav.contact}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className={`relative inline-flex items-center overflow-hidden rounded-full ${glass}`}>
              <button onClick={()=>setLang('ru')} className={`px-3 py-1 text-xs ${lang==='ru'?'text-white':'text-white/70'}`}>RU</button>
              <div className="h-5 w-px bg-white/10"/>
              <button onClick={()=>setLang('en')} className={`px-3 py-1 text-xs ${lang==='en'?'text-white':'text-white/70'}`}>EN</button>
            </div>
            <a href={GOOGLE_DRIVE_PDF} target="_blank" rel="noreferrer" className={`hidden md:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-white/15 hover:ring-white/25 ${glass}`}>
              <Download size={14}/> {T.pdf.text}
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease:[0.22,1,0.36,1]}}>
            <div className="text-xs uppercase tracking-[0.25em] text-white/60">{T.hero.pre}</div>
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl">{T.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-white/80 md:text-lg">{T.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={GOOGLE_DRIVE_PDF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white">
                <Download size={18}/> {T.hero.ctaPrimary}
              </a>
              <a href="#contact" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:ring-white/40 ${glass}`}>
                <ArrowRight size={18}/> {T.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.15, duration:0.9}} className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-black/20">
            <img src={IMAGES.hero} alt={lang==='ru' ? 'Обложка портфолио' : 'Portfolio cover'} className="w-full h-full object-cover aspect-[16/8]" loading="eager"/>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/0 to-neutral-950/30" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle title={T.about.title}/>
          <div className="grid gap-6 md:grid-cols-12">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className={`md:col-span-7 rounded-3xl ${glass} p-6 md:p-8 leading-relaxed whitespace-pre-line`}>{T.about.text}</motion.div>
            <div className="md:col-span-5 grid gap-4">
              {T.about.stats.map((s, i)=> <Stat key={i} value={s.value} label={s.label}/>)}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle title={T.projects.title}/>
          <div className="grid gap-5 sm:grid-cols-2">
            {T.projects.items.map((item:any)=> <ProjectCard key={item.id} item={item} lang={lang}/>) }
          </div>
          <div className="mt-12 grid gap-8">
            {T.projects.items.map((item:any)=> <ProjectDetail key={item.id} item={item}/>) }
          </div>
        </div>
      </section>

      <section id="skills" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle title={T.skills.title}/>
          <motion.ul variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {T.skills.list.map((s, i)=> (
              <li key={i} className={`flex items-center gap-3 rounded-2xl ${glass} p-4`}>
                <Ruler size={16}/><span>{s}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section id="awards" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle title={T.awards.title}/>
          <div className="grid gap-4">
            {T.awards.items.map((a, i)=> (
              <motion.div key={i} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className={`flex items-start gap-3 rounded-2xl ${glass} p-5`}>
                <Award className="mt-0.5" size={18}/>
                <div>
                  <div className="font-medium">{a.title}</div>
                  <div className="text-sm text-white/75">{a.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionTitle title={T.contact.title}/>
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className={`rounded-3xl ${glass} p-6 md:p-8`}>
            <div className="text-white/80">{T.contact.subtitle}</div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <a href="tel:+79147756681" className="flex items-center gap-3 hover:opacity-90">
                  <Phone size={18}/>
                  <div>
                    <div className="text-xs text-white/60">{T.contact.labels.phone}</div>
                    <div className="font-medium">+7 (914) 775‑66‑81</div>
                  </div>
                </a>
                <a href="mailto:ninamaslikova211003@gmail.com" className="flex items-center gap-3 hover:opacity-90">
                  <Mail size={18}/>
                  <div>
                    <div className="text-xs text-white/60">{T.contact.labels.email}</div>
                    <div className="font-medium">ninamaslikova211003@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={18}/>
                  <div>
                    <div className="text-xs text-white/60">{T.contact.labels.location}</div>
                    <div className="font-medium">{T.contact.address}</div>
                  </div>
                </div>
                <a href="https://instagram.com/mm_ninama" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-90">
                  <Instagram size={18}/>
                  <div>
                    <div className="text-xs text-white/60">{T.contact.labels.instagram}</div>
                    <div className="font-medium">@mm_ninama</div>
                  </div>
                </a>
              </div>
              <div className={`rounded-2xl ${glass} p-5`}>
                <div className="text-sm text-white/70">{T.contact.brandAddress}</div>
                <div className="mt-2 text-3xl font-semibold">ninama</div>
                <div className="mt-4 text-sm text-white/75">
                  {lang==='ru' ? (
                    <>Нужен проект, авторский надзор или рабочие чертежи? Напишите — отвечу в течение дня.</>
                  ) : (
                    <>Need a concept, author’s supervision, or full working docs? Write me — I usually reply within a day.</>
                  )}
                </div>
                <a href="mailto:ninamaslikova211003@gmail.com" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-semibold text-neutral-900 hover:bg-white">
                  <Mail size={16}/> {lang==='ru' ? 'Отправить письмо' : 'Send an email'}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="text-sm text-white/60">{T.contact.legal}</div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href={GOOGLE_DRIVE_PDF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white"><Download size={14}/> {T.pdf.text}</a>
            <span>•</span>
            <a href="#top" className="hover:text-white">{lang==='ru' ? 'Наверх' : 'Back to top'}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export content for testing
export { CONTENT, IMAGES };
