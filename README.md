# 🚀 Engr. AMARKIN | Immersive Frontend Portfolio

An engineered, high-performance developer portfolio built with **SvelteKit** and **GSAP**. This project is designed as a cinematic storytelling experience, showcasing advanced frontend interaction design and Svelte 5 mastery.

---

## 🛠️ Engineered Architecture

This portfolio is built on a clean, modular architecture using the latest **Svelte 5** features:

- **Svelte 5 Runes:** Leveraged `$state` and `$effect` for granular reactivity in the custom cursor and contact form logic.
- **Component Composition:** Fully decoupled components (`Cursor.svelte`, `ProjectCard.svelte`, `TechMarquee.svelte`) for maximum reusability and clean code structure.
- **TypeScript:** Type-safe development across the entire project to ensure stability and robust data handling.

## 🎭 Animation & Interaction Design (Stage 5b Focus)

Motion in this project is intentional and performant, satisfying the "Cinematic Storytelling" and "Interactive Experience" requirements:

- **Magnetic Cursor System:** A custom-engineered cursor using `svelte/motion` springs. It calculates the bounding box of interactive elements to "snap" and "warp" toward buttons.
- **GSAP ScrollTrigger:** Implemented staggered reveals for the "Selected Works" section, creating a narrative flow that rewards the user for scrolling.
- **Infinite Tech Marquee:** A high-performance CSS-driven infinite loop for the tech stack, ensuring smooth motion without taxing the main thread.
- **Cinematic Entrance:** High-impact typography entrance using Svelte's native `fly` transitions with `backOut` easing for a professional "first-fold" feel.

## 🚀 Performance & Optimization

- **SSR Isolation:** GSAP and window-based logic are strictly isolated within `onMount` to prevent hydration errors and ensure Server-Side Rendering (SSR) stability.
- **Asset Management:** Images are optimized to ensure high performance and fast load times.
- **GPU Acceleration:** Used CSS `transform` properties for all continuous animations to keep the experience at a locked 60fps.

## ♿ Accessibility & UX

- **Semantic HTML:** Used standard landmarks (`<section>`, `<article>`, `<header>`) for screen reader support.
- **Keyboard Navigation:** All interactive elements maintain visible focus states and are accessible via keyboard navigation.
- **Contrast & Hierarchy:** A sleek dark-mode aesthetic with a strong typographic hierarchy to ensure content readability.

## 🔧 Installation & Setup

2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

---

### 📝 Decision Log & Trade-offs

- **Svelte 5 over Svelte 4:** Chose the newest version of Svelte (Runes) to demonstrate the ability to adapt to bleeding-edge tech and more efficient state management.
- **GSAP for Storytelling:** While Svelte transitions are great for simple entrances, GSAP was chosen for its robust `ScrollTrigger` plugin, allowing for precise control over complex, scroll-synced reveals.

---
