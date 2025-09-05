# 🔧 ТЗ для Cursor: Поменять тему и верстку под стиль **sempre.group**

## Цели (обязательно)

-   Отказ от тёмной темы/градиентов/блюров/неоморфизма.
-   Светлый тёплый фон `#F1F0EA`, текст почти чёрный `#0E0E0E`,
    акцент-оранжевый `#FF3B00`.
-   Крупная **CAPS**-типографика (как у sempre.group),
    разделители-линии, кнопки-рамки.
-   Шапка: логотип слева, меню по центру (uppercase), справа --- «ST.
    PETERSBURG & WORLD» + RU/EN переключатель.
-   Hero: большой многострочный заголовок + три карточки-направления.
-   Блок «О проекте» (заголовок слева, текст справа) + «Наши ценности».
-   Сетка «Ключевые проекты»: 3 карточки в ряд с подписями вида
    `01 / …`.
-   CTA «Давайте начинать работу» с оранжевой рамочной кнопкой.
-   FAQ-аккордеон, строгое построение линиями.
-   Футер: слева логотип+описание, центр --- меню, справа ---
    политика/оферта.
-   Сохранить RU/EN (переключатель в шапке, тексты --- из простого
    словаря).

------------------------------------------------------------------------

## 1) Tailwind: цвета/типографика

**Изменить `tailwind.config.js`:**

``` ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F1F0EA',
        text: '#0E0E0E',
        muted: '#6B6B6B',
        accent: '#FF3B00',
        line: '#0E0E0E',
      },
      letterSpacing: { tightest: '-0.02em' },
    },
  },
  plugins: [],
}
```

**Обновить `src/index.css` (минимум, без градиентов/теней):**

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light; }
html, body, #root { height: 100%; background: #F1F0EA; color: #0E0E0E; }
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```

------------------------------------------------------------------------

## 2) Простая i18n-прослойка

**Создать `src/i18n.ts`:**

``` ts
export type Lang = 'ru' | 'en';

export const copy = {
  ru: {
    nav: ['ГЛАВНАЯ','НАШИ ПРОЕКТЫ','FAQ','НАША КОМАНДА','СВЯЗАТЬСЯ'],
    cityTag: 'ST. PETERSBURG & WORLD',
    hero: {
      title: 'АРХИТЕКТУРА И ВИЗУАЛИЗАЦИЯ,\nКОТОРЫЕ ВЛЮБЛЯЮТ В ПРОЕКТ.',
      ctas: ['01 / ПРОЕКТЫ','02 / ВИЗУАЛИЗАЦИЯ','03 / ИНТЕРЬЕРЫ']
    },
    aboutTitle: 'О НЕДАВНЕМ ПРОЕКТЕ',
    valuesTitle: 'НАШИ ЦЕННОСТИ',
    startWork: 'ДАВАЙТЕ НАЧИНАТЬ РАБОТУ',
    calcCost: 'РАССЧИТАТЬ СТОИМОСТЬ',
  },
  en: {
    nav: ['HOME','PROJECTS','FAQ','TEAM','CONTACT'],
    cityTag: 'ST. PETERSBURG & WORLD',
    hero: {
      title: 'ARCHITECTURE & VISUALIZATION\nTHAT MAKE CLIENTS FALL IN LOVE.',
      ctas: ['01 / PROJECTS','02 / VISUAL','03 / INTERIORS']
    },
    aboutTitle: 'ABOUT A RECENT PROJECT',
    valuesTitle: 'OUR VALUES',
    startWork: "LET'S START WORK",
    calcCost: 'GET A QUOTE',
  }
} as const;
```

------------------------------------------------------------------------

## 3) Шапка (с полосой, меню и RU/EN)

**Создать `src/components/common/Header.tsx`:**

``` tsx
import { useState } from 'react';
import { copy, type Lang } from '../../i18n';

export default function Header() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-50">
      <div className="h-2 bg-accent w-full" />
      <div className="flex items-center justify-between py-6 px-5 md:px-10">
        <div className="font-extrabold text-[20px] text-accent uppercase">NINA.MASLIKOVA</div>
        <nav className="hidden md:flex gap-8 text-[14px] font-bold uppercase">
          {t.nav.map((item) => (
            <a key={item} href={`#${item}`} className="hover:underline underline-offset-8">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block font-bold uppercase">{t.cityTag}</div>
          <button
            className="border px-3 py-1 uppercase text-[12px]"
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
```

------------------------------------------------------------------------

## 4) Секции (Hero, About+Values, Projects, FAQ, CTA, Footer)

*(код секций см. выше --- Hero.tsx, About.tsx, Projects.tsx, FAQ.tsx,
StartWork.tsx, Footer.tsx, App.tsx)*

------------------------------------------------------------------------

## 5) Что удалить/заменить

-   Убрать все тёмные фоны, градиенты, блюры, большие скругления и
    стеклянные карточки.
-   Сократить тени до нуля/минимума.
-   Все заголовки **UPPERCASE**, крупнее, плотный трекинг
    `tracking-tightest`.
-   Кнопки заменить на «рамочные» (оранжевая рамка, при hover ---
    оранжевый фон и белый текст).
-   Разделители между крупными блоками --- тонкие чёрные линии.

------------------------------------------------------------------------

## 6) Контент

-   Вместо заглушек `bg-[#d9d6ce]` подставить реальные превью из твоих
    проектов `src/assets/...` с `object-cover`.
-   Подписи карточек как у sempre: `01 / …`.

------------------------------------------------------------------------

## 7) Анимации (легкие)

-   Hover-масштаб карточек: `group-hover:scale-[1.02]`.
-   Аккордеон FAQ --- как в примере (grid-rows + opacity).
-   Плавные переходы `transition-all duration-300`.

------------------------------------------------------------------------

## 8) Критерии приёма

-   Фон страницы светлый `#F1F0EA`.
-   В шапке --- тонкая **оранжевая верхняя полоса**.
-   Крупный геро-заголовок CAPS и три карточки-направления.
-   Разделители-линии между секциями.
-   Сетка проектов 3-в-ряд на десктопе (1-в-ряд на мобильном).
-   Кнопки-рамки с корректным hover.
-   RU/EN переключатель работает (простая замена строк).

------------------------------------------------------------------------

## Команды для коммита

``` bash
git add .
git commit -m "feat(theme): switch to SEMPRE-like light theme, caps type, orange outline buttons, section layout"
git push
```
