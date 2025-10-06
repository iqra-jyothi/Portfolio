# Design Guidelines for Portfolio Application

## Design Approach: Reference-Based (Modern Portfolio/Creative Industry)

Drawing inspiration from leading portfolio platforms (Dribbble, Behance, Linear) and modern developer portfolios, creating a professional yet personal showcase that emphasizes visual hierarchy and seamless user experience.

## Core Design Principles
- **Visual Storytelling**: Each section should progressively reveal your professional narrative
- **Clarity Over Complexity**: Clean, focused layouts that highlight content without distraction
- **Professional Polish**: Enterprise-grade quality with personal warmth

## Color Palette

### Light Mode
- **Background**: 0 0% 100% (pure white)
- **Surface**: 210 20% 98% (soft gray-white)
- **Primary**: 220 90% 56% (professional blue)
- **Text Primary**: 220 13% 18% (deep charcoal)
- **Text Secondary**: 220 9% 46% (medium gray)
- **Border**: 220 13% 91% (light gray)

### Dark Mode
- **Background**: 222 47% 11% (rich dark blue-gray)
- **Surface**: 217 33% 17% (elevated dark surface)
- **Primary**: 217 91% 60% (bright blue, slightly lighter for dark mode)
- **Text Primary**: 210 40% 98% (soft white)
- **Text Secondary**: 215 20% 65% (muted gray)
- **Border**: 215 28% 25% (subtle dark border)

### Accent Colors
- **Success/Active**: 142 76% 36% (professional green)
- **Warning/Highlight**: 38 92% 50% (warm amber - use sparingly for CTAs)

## Typography

**Primary Font**: 'Inter' (Google Fonts) - Clean, modern sans-serif
**Display Font**: 'Cal Sans' or 'Satoshi' fallback to 'Inter' - For hero headlines

### Type Scale
- **Hero Display**: text-6xl lg:text-7xl, font-bold (Display font)
- **Section Headers**: text-3xl lg:text-4xl, font-bold
- **Subsection Headers**: text-xl lg:text-2xl, font-semibold
- **Body Text**: text-base lg:text-lg, font-normal, leading-relaxed
- **Captions/Meta**: text-sm, font-medium, text-secondary

## Layout System

**Spacing Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24, 32 (Tailwind units)
**Container**: max-w-7xl mx-auto px-6 lg:px-8
**Section Padding**: py-20 lg:py-32 (generous breathing room)
**Card Spacing**: gap-8 lg:gap-12

## Component Library

### Navigation
- Fixed transparent navbar with blur backdrop (backdrop-blur-xl)
- Smooth scroll behavior with active section highlighting
- Theme toggle switch (sun/moon icon) in top-right
- Mobile: Hamburger menu with full-screen overlay

### Hero Section (100vh)
- **Layout**: Centered content with large profile image (circular, 200-250px)
- **Profile Photo**: Subtle ring border (ring-4 ring-primary/20), gentle shadow
- **Name**: Hero display typography, gradient text effect (optional)
- **Tagline**: Text-xl, text-secondary, mb-8
- **CTA Row**: Flex row with primary "View Work" button + secondary "Contact" button (gap-4)
- **Social Links**: Horizontal icon row below CTAs (LinkedIn, GitHub, Twitter)
- **Background**: Subtle gradient mesh or geometric pattern overlay

### About Section
- **Two-column layout** (lg:grid-cols-2 gap-12)
- Left: Personal story text (max-w-prose)
- Right: Secondary photo or illustration with rounded corners (rounded-2xl)
- Downloadable resume link as outlined button

### Skills Section
- **Grid Layout**: grid-cols-3 md:grid-cols-4 lg:grid-cols-6
- Icon cards with technology logos (80x80px)
- Subtle hover effect: scale-105 transition
- Use DevIcons or Simple Icons via CDN
- Cards: bg-surface, rounded-xl, p-6, border

### Work Experience
- **Timeline Design**: Vertical line (border-l-2) with dot markers
- Cards offset from timeline (ml-8 lg:ml-12)
- Each entry: Company logo (48x48), role title, date range, bullet points
- Alternating card backgrounds for visual rhythm

### Projects Showcase
- **Masonry/Grid Layout**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project cards with hover lift effect (hover:translate-y-[-4px])
- Card structure: Image thumbnail, title, tech stack tags, brief description, "View Project" link
- Tags: Inline pills with bg-primary/10, text-primary, rounded-full

### Contact Section
- **Two-column**: Form (lg:col-span-2) + Contact info sidebar (lg:col-span-1)
- Form fields: Name, Email, Message (textarea)
- Floating label pattern for modern feel
- Submit button: Primary, full-width on mobile
- Sidebar: Email link, phone link (with icons), social media repeater

### Footer
- **Simple centered layout**
- Copyright text, navigation links, social icons
- Subtle top border (border-t)

## Visitor Notification Indicator
- Small badge in navbar: "X visitors today" (dismissible)
- Toast notification on admin dashboard when visitor arrives

## Images
- **Hero Background**: Subtle abstract gradient or geometric pattern (NOT a photo)
- **Profile Photo**: Professional headshot, circular mask, 200-250px
- **About Section Photo**: Candid or workspace photo, rounded corners
- **Project Thumbnails**: 16:9 ratio screenshots or mockups

## Animations (Minimal & Purposeful)
- **Page Load**: Fade-up stagger for hero elements (0.1s delay between)
- **Scroll Reveals**: Intersection Observer for section fade-ins (once)
- **Hover States**: Subtle scale/translate transforms (transition-all duration-300)
- **NO** parallax, NO continuous animations

## Accessibility
- Consistent focus states: ring-2 ring-primary ring-offset-2
- All inputs have visible focus indicators in both themes
- Color contrast ratios meet WCAG AA standards
- Theme toggle preserves user preference in localStorage

## Mobile Responsiveness
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- Stack all multi-column layouts on mobile
- Reduce section padding on mobile (py-12 instead of py-20)
- Hamburger menu for mobile navigation
- Touch-friendly tap targets (min 44x44px)

This portfolio balances professional credibility with personal warmth, ensuring your work stands out while maintaining excellent usability across all devices and themes.