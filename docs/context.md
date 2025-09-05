# Nina Maslikova Architecture Portfolio - Technical Specification

## 🎯 Project Overview
Single-page portfolio website for architect Nina Maslikova, inspired by sempre.group design aesthetic with high-end animations and professional presentation.

## 🛠 Tech Stack
- **Framework**: React 18+
- **Styling**: Tailwind CSS (utility-first)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📱 Responsive Breakpoints
```
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+
```

## 🎨 Design System

### Color Palette
```css
Primary Colors:
- Background: #FAFAFA (warm white)
- Text Primary: #1A1A1A (near black)
- Text Secondary: #666666 (medium gray)
- Accent: #2C2C2C (dark gray)
- Border: #E5E5E5 (light gray)

Interactive Colors:
- Hover: #F5F5F5
- Active: #E0E0E0
- Focus: #007AFF (blue accent)
```

### Typography
```css
Font Family: Inter, system-ui, sans-serif

Headings:
- H1: 3rem (48px) - font-bold
- H2: 2.5rem (40px) - font-bold  
- H3: 2rem (32px) - font-semibold
- H4: 1.5rem (24px) - font-semibold

Body:
- Large: 1.125rem (18px) - font-normal
- Base: 1rem (16px) - font-normal
- Small: 0.875rem (14px) - font-normal
```

### Spacing System
```css
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)
```

## 🌊 Web Flow & User Journey

### Navigation Flow
```
Landing → About → Projects → Skills → Awards → Contact
```

### Scroll Behavior
- Smooth scrolling between sections
- Fixed navigation with active section highlighting
- Progress indicator showing scroll position
- Scroll-to-top button appears after 50vh

## 📋 Detailed Section Breakdown

### 1. Hero Section
**Purpose**: First impression and introduction
**Height**: 100vh (full viewport height)

**Content Structure**:
```
- Background: Subtle architectural image or pattern
- Name: "Nina Maslikova" (Large, prominent)
- Title: "Architect" 
- Tagline: "Creating worlds where every detail carries meaning"
- Location: "St. Petersburg, Russia"
- CTA Button: "View My Work" (smooth scroll to projects)
- Scroll indicator: Animated arrow/icon
```

**Animations**:
- Fade in from bottom: Name (delay: 0ms)
- Fade in from bottom: Title (delay: 200ms)
- Fade in from bottom: Tagline (delay: 400ms)
- Fade in from bottom: CTA button (delay: 600ms)
- Continuous: Scroll indicator pulse animation

### 2. About Section
**Purpose**: Professional background and philosophy

**Layout**: Two-column on desktop, single column on mobile

**Content Structure**:
```
Left Column:
- "About Me" heading
- Professional background paragraph
- Current role at Kozeen+Rueda
- Goals and aspirations
- Philosophy quote in highlighted box

Right Column:
- Professional portrait photo
- Quick facts sidebar:
  - Education: SPbGASU
  - Languages: Russian, English
  - Experience: X years
```

**Animations**:
- Intersection Observer triggers when 30% visible
- Slide in from left: Text content
- Slide in from right: Image and sidebar
- Stagger children animations (100ms delay each)

### 3. Projects Section
**Purpose**: Showcase key architectural works

**Layout**: Masonry-style grid with featured project

**Project Categories**:
1. **Sectional Residential Building** (Featured - Full width)
2. **Apartment Interior Design** 
3. **Historical Renovation Project**
4. **Student Projects**

**Project Card Structure**:
```
- Hero image/render
- Project title
- Project type and location
- Brief description
- Key metrics (area, floors, etc.)
- Award badges (if applicable)
- "View Details" hover overlay
```

**Interactive Features**:
- Hover effects: Image zoom (1.05x scale)
- Click: Opens project modal/lightbox
- Filter buttons: "All", "Residential", "Interior", "Renovation"
- Image galleries with navigation dots

**Modal/Lightbox Content**:
```
- Image carousel with thumbnails
- Project description
- Technical details
- Floor plans/drawings
- Awards and recognition
- Close button (X)
```

### 4. Skills Section
**Purpose**: Technical capabilities and software proficiency

**Layout**: Icon grid with skill categories

**Skill Categories**:
```
Technical Skills:
- GOST & SP Standards Compliance
- Manual & Computer Graphics
- 3D Modeling & Visualization
- Physical Model Making

Software Proficiency:
- AutoCAD
- ArchiCAD
- SketchUp
- 3ds Max
- Photoshop
- InDesign
```

**Visual Treatment**:
- Circular progress indicators for skill levels
- Icon + label + percentage/level
- Hover effects: Icons scale up, show tooltip

### 5. Awards Section
**Purpose**: Competition wins and recognition

**Layout**: Timeline or card-based layout

**Award Structure**:
```
Each Award:
- Year badge
- Competition name
- Achievement level (1st, 2nd place, Finalist)
- Project name
- Award icon/badge
- Brief description
```

**Animations**:
- Stagger reveal as user scrolls
- Award badges with shine/glow effect
- Counter animation for numbers (if showing statistics)

### 6. Contact Section
**Purpose**: Get in touch and social links

**Layout**: Centered contact card with background pattern

**Content Structure**:
```
- "Let's Create Together" heading
- Contact methods:
  - Email: ninamaslikova211003@gmail.com
  - Phone: +7(914)-775-66-81
  - Instagram: @mm_ninama
- Contact form (optional):
  - Name field
  - Email field  
  - Message textarea
  - Submit button
- Location: St. Petersburg, Russia
```

## 🎭 UI Component Specifications (Sempre.Group Style)

### Orange CTA Buttons
```css
Design:
- Border: 2px solid #FF4500 (orange)
- Background: transparent
- Text: #FF4500 (orange), uppercase, bold
- Padding: 16px 32px
- Font size: 16px
- Letter spacing: 1px
- Border radius: 0px (sharp corners)

States:
- Hover: Background #FF4500, Text white
- Transition: all 0.3s ease
- Scale on hover: transform: scale(1.02)
```

### Section Separators
```css
- Thin horizontal lines: 1px solid #000000
- Full width spans
- Margin: 80px 0 (large spacing above/below)
```

### Navigation Bar
```css
Top Orange Bar:
- Height: 8px
- Background: #FF4500
- Full width, no margins

Main Navigation:
- Background: transparent over content
- Logo: "NINA MASLIKOVA" (left, red text, bold)
- Menu items: Centered, uppercase, black text
- Hover: Orange underline animation
- Mobile: Hamburger → full-screen overlay
```

### Typography Hierarchy
```css
Hero Headings:
- Font size: 64px
- Font weight: 700 (bold)
- Text transform: uppercase
- Line height: 1.1
- Letter spacing: -1px

Section Headings:
- Font size: 40px  
- Font weight: 700
- Text transform: uppercase
- Line height: 1.2

Body Text:
- Font size: 18px
- Line height: 1.6
- Font weight: 400
- Color: #333333
```

### Project Grid Cards
```css
Card Structure:
- Aspect ratio: 16:10
- Border radius: 0px
- Overflow hidden for image scaling

Image:
- Object-fit: cover
- Hover scale: 1.05x
- Transition: 0.4s ease

Text Block:
- Padding: 20px 0
- Number/Category: Orange text, bold, small
- Title: Black text, medium size, bold
```

### FAQ Expandable Sections
```css
Question Row:
- Border bottom: 1px solid #000000
- Padding: 30px 0
- Font size: 24px
- Font weight: 600
- Cursor: pointer

Expand Icon:
- Right aligned: + or ×
- Font size: 32px
- Color: #000000
- Rotation: 0deg → 45deg transition

Answer Content:
- Max height: 0 → auto
- Opacity: 0 → 1
- Padding top: 20px
- Font size: 18px
- Line height: 1.6
```

## 📱 Component Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx          // Navigation
│   │   ├── Footer.jsx          // Contact info
│   │   ├── LoadingSpinner.jsx  // Page loading
│   │   └── ScrollToTop.jsx     // Scroll button
│   ├── sections/
│   │   ├── Hero.jsx            // Landing section
│   │   ├── About.jsx           // About section
│   │   ├── Projects.jsx        // Portfolio grid
│   │   ├── ProjectModal.jsx    // Project details
│   │   ├── Skills.jsx          // Skills grid
│   │   ├── Awards.jsx          // Awards timeline
│   │   └── Contact.jsx         // Contact section
│   └── ui/
│       ├── Button.jsx          // Reusable button
│       ├── Card.jsx            // Project cards
│       ├── Modal.jsx           // Modal component
│       └── ProgressBar.jsx     // Skill progress
├── data/
│   ├── projects.js             // Project data
│   ├── skills.js               // Skills data
│   └── awards.js               // Awards data
├── hooks/
│   ├── useIntersectionObserver.js  // Scroll animations
│   └── useScrollProgress.js        // Scroll position
├── utils/
│   └── animations.js           // Animation variants
└── assets/
    ├── images/                 // Project images
    └── icons/                  // Custom icons
```

## 🎯 Key Features Implementation

### 1. Smooth Scrolling Navigation
```javascript
// Navigation with smooth scroll and active highlighting
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
```

### 2. Intersection Observer for Animations
```javascript
// Trigger animations when elements come into view
const useIntersectionObserver = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isVisible];
};
```

### 3. Project Filtering System
```javascript
// Filter projects by category
const [activeFilter, setActiveFilter] = useState('all');
const [filteredProjects, setFilteredProjects] = useState(projects);

const filterProjects = (category) => {
  setActiveFilter(category);
  if (category === 'all') {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(projects.filter(project => 
      project.category === category
    ));
  }
};
```

### 4. Image Lightbox/Modal
```javascript
// Project detail modal with image carousel
const [selectedProject, setSelectedProject] = useState(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openProjectModal = (project) => {
  setSelectedProject(project);
  setCurrentImageIndex(0);
  document.body.style.overflow = 'hidden'; // Prevent background scroll
};
```

## 📊 Performance Requirements

### Loading Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Image Optimization
- WebP format with fallbacks
- Lazy loading for below-fold images
- Responsive images with srcset
- Progressive loading for large images

### Animation Performance
- Use transform and opacity for animations
- Hardware acceleration with will-change
- 60fps target for all animations
- Reduced motion support for accessibility

## 🔧 Development Guidelines for Cursor AI

### File Creation Order
1. Create component structure first
2. Add data files with project information
3. Build individual components
4. Implement animations last
5. Add responsive styles throughout

### Tailwind CSS Approach
- Use utility classes exclusively
- Create custom components only when necessary
- Follow mobile-first responsive design
- Use Tailwind's built-in animations where possible

### Code Organization
- Keep components small and focused
- Extract reusable logic into custom hooks
- Store all content data in separate files
- Use TypeScript interfaces for data structures

### Testing Checklist
- [ ] Mobile responsiveness (320px+)
- [ ] Smooth scrolling works
- [ ] All animations trigger correctly
- [ ] Image loading and optimization
- [ ] Keyboard navigation accessibility
- [ ] Screen reader compatibility

## 📋 Content Integration

All text content, project details, and personal information should be extracted from the provided portfolio PDFs and integrated into the appropriate data files for easy management and updates.

This specification provides everything needed to build a professional, high-performance portfolio website using modern React and Tailwind CSS practices.

Also the page should have the option to be in russian and english