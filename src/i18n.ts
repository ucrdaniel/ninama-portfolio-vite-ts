export type Lang = 'ru' | 'en';

export const copy = {
  ru: {
    nav: ['ГЛАВНАЯ', 'ПРОЕКТЫ', 'FAQ', 'КОМАНДА', 'КОНТАКТЫ'],
    cityTag: 'ST. PETERSBURG & WORLD',
    hero: {
      title: 'АРХИТЕКТУРА И ВИЗУАЛИЗАЦИЯ,\nКОТОРЫЕ ВЛЮБЛЯЮТ В ПРОЕКТ.',
      subtitle: 'Создаю архитектуру, у которой есть логика, масштаб и эмоция. От концепции до рабочих чертежей.',
      ctas: ['01 / ПРОЕКТЫ', '02 / ВИЗУАЛИЗАЦИЯ', '03 / ИНТЕРЬЕРЫ']
    },
    about: {
      title: 'О НЕДАВНЕМ ПРОЕКТЕ',
      description: 'Архитектор и дизайнер интерьеров. Уверенно работаю на стыке концептуального проектирования и рабочей документации: от идеи и визуализаций — до схем, спецификаций и чертежей по ГОСТ и СП.',
      project: {
        name: 'IMPERIUM',
        location: 'рядом с Кремлем',
        description: 'Помогли с анализом целевой аудитории и создали креативное, образное видео, адаптированное под различные цифровые форматы (OLV, HTML5, Digital).'
      }
    },
    values: {
      title: 'НАШИ ЦЕННОСТИ',
      items: [
        {
          title: 'КАЧЕСТВО',
          description: 'Высокие стандарты проектирования и внимательность к деталям в каждом проекте.'
        },
        {
          title: 'СИЛЬНАЯ КОМАНДА',
          description: 'Опытные специалисты с глубоким пониманием архитектуры и дизайна.'
        },
        {
          title: 'КЛИЕНТСКИЙ СЕРВИС',
          description: 'Индивидуальный подход и полное сопровождение от концепции до реализации.'
        },
        {
          title: 'ЭФФЕКТИВНОСТЬ',
          description: 'Оптимальные решения, которые сочетают функциональность и эстетику.'
        }
      ]
    },
    projects: {
      title: 'КЛЮЧЕВЫЕ ПРОЕКТЫ',
      items: [
        {
          id: 'sectional',
          number: '01',
          title: 'СЕКЦИОННЫЙ ЖИЛОЙ КОМПЛЕКС',
          year: '2023',
          description: '11 секций на стилобате, 4–5 этажей, дворы‑террасы над подземным паркингом.'
        },
        {
          id: 'apartment-interior',
          number: '02',
          title: 'КВАРТИРА — ПРОЕКТ ИНТЕРЬЕРА',
          year: '2024',
          description: 'Планировочные решения, визуализации, ведомости отделки, схемы освещения.'
        },
        {
          id: 'work-project',
          number: '03',
          title: 'КВАРТИРА В ДОМЕ БЕНУА (1914)',
          year: '2024',
          description: 'Проект в историческом памятнике Санкт‑Петербурга. Выполнение чертежей совместно с бюро.'
        }
      ]
    },
    faq: {
      title: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
      items: [
        {
          question: 'КАК ДОЛГО ДЛИТСЯ РАБОТА НАД ПРОЕКТОМ?',
          answer: 'Сроки зависят от сложности проекта. Обычно от 2 недель до 3 месяцев.'
        },
        {
          question: 'РАБОТАЕТЕ ЛИ ВЫ С ИНТЕРНЕТ-ЗАКАЗЧИКАМИ?',
          answer: 'Да, работаем с клиентами по всей России и за рубежом.'
        },
        {
          question: 'КАКИЕ ФОРМАТЫ ФАЙЛОВ ВЫ ПРЕДОСТАВЛЯЕТЕ?',
          answer: 'Предоставляем проекты в форматах DWG, PDF, JPG, а также 3D-модели.'
        },
        {
          question: 'ВКЛЮЧАЕТ ЛИ СТОИМОСТЬ АВТОРСКИЙ НАДЗОР?',
          answer: 'Авторский надзор оплачивается отдельно, стоимость обсуждается индивидуально.'
        }
      ]
    },
    cta: {
      title: 'ДАВАЙТЕ НАЧИНАТЬ РАБОТУ',
      subtitle: 'Открыта к сотрудничеству и проектам',
      button: 'РАССЧИТАТЬ СТОИМОСТЬ',
      contact: 'Свяжитесь со мной для обсуждения проекта'
    },
    footer: {
      brand: 'NINA.MASLIKOVA',
      description: 'Архитектор и дизайнер интерьеров. Создаю архитектуру с логикой, масштабом и эмоцией.',
      legal: '© 2025 NINA.MASLIKOVA. Все права защищены.',
      links: ['Политика конфиденциальности', 'Пользовательское соглашение']
    }
  },
  en: {
    nav: ['HOME', 'PROJECTS', 'FAQ', 'TEAM', 'CONTACT'],
    cityTag: 'ST. PETERSBURG & WORLD',
    hero: {
      title: 'ARCHITECTURE & VISUALIZATION\nTHAT MAKE CLIENTS FALL IN LOVE.',
      subtitle: 'Creating architecture with logic, scale, and emotion — from concept to detailed drawings.',
      ctas: ['01 / PROJECTS', '02 / VISUAL', '03 / INTERIORS']
    },
    about: {
      title: 'ABOUT A RECENT PROJECT',
      description: 'Architect & interior designer. Confident across the full stack — concept, visuals, models, and production‑ready drawings per GOST/SP.',
      project: {
        name: 'IMPERIUM',
        location: 'near the Kremlin',
        description: 'Helped with target audience analysis and created a creative, image-driven video, adapted for various digital formats (OLV, HTML5, Digital).'
      }
    },
    values: {
      title: 'OUR VALUES',
      items: [
        {
          title: 'QUALITY',
          description: 'High design standards and attention to detail in every project.'
        },
        {
          title: 'STRONG TEAM',
          description: 'Experienced specialists with deep understanding of architecture and design.'
        },
        {
          title: 'CLIENT SERVICE',
          description: 'Individual approach and full support from concept to implementation.'
        },
        {
          title: 'EFFICIENCY',
          description: 'Optimal solutions that combine functionality and aesthetics.'
        }
      ]
    },
    projects: {
      title: 'KEY PROJECTS',
      items: [
        {
          id: 'sectional',
          number: '01',
          title: 'SECTIONAL RESIDENTIAL COMPLEX',
          year: '2023',
          description: '11 sections on a stylobate, 4–5 floors, courtyards over underground parking.'
        },
        {
          id: 'apartment-interior',
          number: '02',
          title: 'APARTMENT — INTERIOR DESIGN',
          year: '2024',
          description: 'Layouts, visualisations, finish schedules, lighting schemes.'
        },
        {
          id: 'work-project',
          number: '03',
          title: 'APARTMENT — BENOIS HOUSE (1914)',
          year: '2024',
          description: 'Project in a listed historical monument in St. Petersburg. Drawings executed with a partner office.'
        }
      ]
    },
    faq: {
      title: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'HOW LONG DOES A PROJECT TAKE?',
          answer: 'Timeline depends on project complexity. Usually from 2 weeks to 3 months.'
        },
        {
          question: 'DO YOU WORK WITH REMOTE CLIENTS?',
          answer: 'Yes, we work with clients across Russia and internationally.'
        },
        {
          question: 'WHAT FILE FORMATS DO YOU PROVIDE?',
          answer: 'We provide projects in DWG, PDF, JPG formats, as well as 3D models.'
        },
        {
          question: 'DOES THE COST INCLUDE AUTHOR SUPERVISION?',
          answer: 'Author supervision is paid separately, cost is discussed individually.'
        }
      ]
    },
    cta: {
      title: "LET'S START WORK",
      subtitle: 'Open to collaborations and projects',
      button: 'GET A QUOTE',
      contact: 'Contact me to discuss your project'
    },
    footer: {
      brand: 'NINA.MASLIKOVA',
      description: 'Architect & interior designer. Creating architecture with logic, scale, and emotion.',
      legal: '© 2025 NINA.MASLIKOVA. All rights reserved.',
      links: ['Privacy Policy', 'Terms of Service']
    }
  }
} as const;
