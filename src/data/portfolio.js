export const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
];

export const stats = [
  { value: "5+",  label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Satisfied Clients" },
  { value: "3+",  label: "Certifications" },
];

export const services = [
  { title: "Web Application Development", icon: "⬡", description: "Crafting user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Next.js." },
  { title: "Website Design",              icon: "◈", description: "Clean, pixel-perfect website design that communicates your brand and converts visitors into customers." },
  { title: "E-commerce Solutions",        icon: "◉", description: "Scalable shop fronts and payment integrations (Paystack, Flutterwave, Stripe) built for the Nigerian market." },
  { title: "Performance Optimization",    icon: "◎", description: "Diagnosing and fixing slow renders, large bundles, and poor Core Web Vitals across React and Next.js apps." },
  { title: "API & Backend Integration",   icon: "⬢", description: "Connecting your frontend to REST or GraphQL APIs, third-party services, and Laravel or Node.js backends." },
  { title: "AI Integration",              icon: "◇", description: "Embedding AI features — chatbots, content generation, smart search — into your existing web applications." },
];

export const skills = [
  { category: "Front-End",  items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { category: "Back-End",   items: ["Node.js", "Express", "PHP", "Laravel"] },
  { category: "Databases",  items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools",      items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  { category: "Payments",   items: ["Paystack", "Flutterwave", "Stripe"] },
];

export const projects = [
  {
    title: "Maypas Homes",
    category: "Web Development",
    tech: ["React", "Node.js", "MongoDB", "Paystack"],
    image: "https://tobiportfolio-chi.vercel.app/assets/imgs/home-page-2/projects/maypas-homes.png",
    description: "A modern all-in-one property management platform replacing spreadsheets with automated rent collection, maintenance tracking, and secure tenant communication.",
    liveUrl: "https://maypashomes.com",
  },
  {
    title: "DQV Platform",
    category: "React / TypeScript",
    tech: ["React", "TypeScript", "Paystack"],
    image: "https://tobiportfolio-chi.vercel.app/assets/imgs/home-page-2/projects/dqv-platform.png",
    description: "A credential verification system with real-time tracking, authenticated results, and secure payments — reducing qualification fraud for institutions.",
    liveUrl: "https://dqvplatform.com",
  },
  {
    title: "Maypas Space",
    category: "Vue / Django / AWS",
    tech: ["Vue.js", "Django", "AWS", "Flutterwave"],
    image: "https://tobiportfolio-chi.vercel.app/assets/imgs/home-page-2/projects/maypas-space.png",
    description: "A cutting-edge workspace booking platform eliminating double-bookings with customizable layouts, occupancy monitoring, and integrated payment processing.",
    liveUrl: "https://maypaspace.com",
  },
];

export const workProjects = [
  { slug: "ecommerce-redesign",    title: "E-commerce Website Redesign", category: "UI/UX",           image: "https://tobiportfolio-chi.vercel.app/assets/imgs/work/img-1.png", client: "Conceptual JSC", duration: "6 months", tools: "Figma, Sketch, Framer", description: "A full redesign of an e-commerce storefront with intuitive navigation and checkout flows that improve conversion rates and reduce cart abandonment." },
  { slug: "fitness-app",           title: "Fitness App UI/UX",           category: "App Design",      image: "https://tobiportfolio-chi.vercel.app/assets/imgs/work/img-2.png", client: "Conceptual JSC", duration: "6 months", tools: "Figma, Sketch, Framer", description: "A mobile-first fitness app featuring workout tracking, nutrition logging, and personalised goal-setting — built around reducing friction for daily habits." },
  { slug: "travel-platform",       title: "Travel Booking Platform",     category: "Web Development", image: "https://tobiportfolio-chi.vercel.app/assets/imgs/work/img-3.png", client: "Conceptual JSC", duration: "6 months", tools: "Figma, React, Node.js",  description: "An end-to-end travel booking platform for flights, hotels and car rentals with real-time availability, interactive maps, and Stripe payment integration." },
  { slug: "educational-platform",  title: "Educational Platform UI/UX",  category: "Visual Design",   image: "https://tobiportfolio-chi.vercel.app/assets/imgs/work/img-4.png", client: "Conceptual JSC", duration: "6 months", tools: "Figma, Sketch, Framer", description: "An immersive online learning platform with interactive course materials, student dashboards, and instructor analytics to maximise engagement and retention." },
];

export const caseStudy = {
  title: "Travila — Travel Booking App",
  subtitle: "UI/UX Design for a seamless flights, hotels & car rental booking experience.",
  image: "https://tobiportfolio-chi.vercel.app/assets/imgs/work/img-background.png",
  client: "Fushio Company", start: "01 May 2024", complete: "01 June 2024",
  services: "UI/UX Design", website: "fushion.wr",
  description: "Travila is a comprehensive travel booking app designed to give users a seamless and enjoyable booking experience across flights, hotels, and car rentals — all within a single interface.",
  keyFeatures: [
    { title: "User-Centric Interface",     desc: "A clean and intuitive layout that guides users through the booking process with zero friction." },
    { title: "Integrated Search",          desc: "A unified search function that surfaces flights, hotels, and car rentals from a single query." },
    { title: "Personalized Recommendations", desc: "A recommendation engine that suggests destinations based on user preferences and past bookings." },
    { title: "Secure Payment Gateway",     desc: "End-to-end encrypted payment flow ensuring all transactions and user data are fully protected." },
    { title: "Interactive Maps",           desc: "Embedded maps helping users explore destinations, nearby attractions, and navigation routes." },
  ],
  technologies: [
    { label: "Front-End", value: "React Native — cross-platform iOS & Android" },
    { label: "Back-End",  value: "Node.js + Express for server-side logic" },
    { label: "Database",  value: "MongoDB for flexible data storage" },
    { label: "APIs",      value: "Third-party flight, hotel & car rental APIs" },
    { label: "Payments",  value: "Stripe API for secure payment processing" },
  ],
};

export const servicePageServices = [
  { title: "UI/UX Design",        subtitle: "Creative. Unique. Reality.", image: "https://tobiportfolio-chi.vercel.app/assets/imgs/services-list/img-1.png", items: [{ name: "User Research", desc: "Thorough research through surveys, interviews, and usability studies to deeply understand target audiences." }, { name: "Wireframing & Prototyping", desc: "Detailed wireframes and interactive prototypes for testing user flows early with real stakeholder feedback." }, { name: "User Testing", desc: "Comprehensive testing sessions to gather feedback, identify pain points, and make data-driven design decisions." }] },
  { title: "Mobile App Design",   subtitle: "Creative. Unique. Reality.", image: "https://tobiportfolio-chi.vercel.app/assets/imgs/services-list/img-2.png", items: [{ name: "Cross-Platform Design", desc: "Designs that work seamlessly on iOS and Android, ensuring a consistent, high-quality experience on every device." }, { name: "Interactive Prototypes", desc: "High-fidelity prototypes that let stakeholders experience the full app flow before a line of code is written." }, { name: "Consistent Branding", desc: "App designs that align precisely with your brand identity, maintaining recognition across all touchpoints." }] },
  { title: "Brand Identity",      subtitle: "Creative. Unique. Reality.", image: "https://tobiportfolio-chi.vercel.app/assets/imgs/services-list/img-3.png", items: [{ name: "Logo Design", desc: "Memorable and impactful logos that distil your brand's essence into a single visual mark." }, { name: "Brand Guidelines", desc: "Comprehensive systems covering typography, colour palettes, and visual style — keeping every asset cohesive." }, { name: "Visual Assets", desc: "Business cards, letterheads, social kits — every brand touchpoint designed to the same high standard." }] },
  { title: "Web Development",     subtitle: "Creative. Unique. Reality.", image: "https://tobiportfolio-chi.vercel.app/assets/imgs/services-list/img-4.png", items: [{ name: "Front-End Development", desc: "React and TypeScript powering responsive, interactive web pages with exceptional attention to detail." }, { name: "Back-End Development", desc: "Server-side logic and database management via Node.js and Laravel for seamless, scalable performance." }, { name: "CMS Integration", desc: "User-friendly CMS setups so non-technical clients can manage their own content with confidence." }] },
];

export const pricingPlans = [
  { name: "Starter",      price: "₦150k",  period: "one-time", highlight: false, cta: "Get Started",  desc: "Perfect for individuals and small businesses who need a clean, professional web presence.", features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form integration", "2 rounds of revisions", "14-day delivery"] },
  { name: "Professional", price: "₦400k",  period: "one-time", highlight: true,  cta: "Most Popular",  desc: "For growing businesses that need a fully-featured web application with custom functionality.", features: ["Unlimited pages", "Custom web application", "API & payment integration", "Admin dashboard", "5 rounds of revisions", "30-day delivery", "1 month post-launch support"] },
  { name: "Enterprise",   price: "Custom", period: "let's talk", highlight: false, cta: "Contact Me",   desc: "For organisations that need complex, scalable systems built to spec with dedicated ongoing support.", features: ["Full-stack development", "Scalable architecture", "Database design & optimisation", "DevOps & cloud deployment", "Ongoing maintenance retainer", "Priority SLA support"] },
];

export const blogPosts = [
  { slug: "react-performance-tips",    title: "10 React Performance Tips Every Developer Should Know", category: "React",      date: "Mar 15, 2025", readTime: "8 min",  excerpt: "React is fast by default, but as your app grows you'll notice sluggish renders. Here's exactly how to diagnose and fix the most common culprits.", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80", tags: ["React", "Performance"] },
  { slug: "saas-with-laravel",         title: "Building a Multi-Tenant SaaS with Laravel", category: "Laravel",    date: "Feb 28, 2025", readTime: "12 min", excerpt: "Multi-tenancy is one of the most powerful patterns for SaaS products. This guide walks through implementing it cleanly in Laravel 11.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", tags: ["Laravel", "SaaS"] },
  { slug: "tailwind-vs-css",           title: "Tailwind vs. Vanilla CSS: My Honest Take", category: "CSS",        date: "Feb 10, 2025", readTime: "6 min",  excerpt: "After using both on multiple production projects, here's when each approach shines — and when it becomes a liability you'll regret.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", tags: ["CSS", "Tailwind"] },
  { slug: "freelancing-nigeria",       title: "Freelancing as a Dev in Nigeria: 5 Years of Lessons", category: "Career",     date: "Jan 22, 2025", readTime: "10 min", excerpt: "From navigating international payment processors to setting rates in a dual-currency market — here's what I wish I knew when I started.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", tags: ["Career", "Nigeria"] },
  { slug: "typescript-for-react",      title: "TypeScript for React Devs: A Practical Guide", category: "TypeScript", date: "Jan 5, 2025",  readTime: "9 min",  excerpt: "TypeScript can feel intimidating at first. This guide cuts through the noise and shows the patterns you'll actually use day-to-day.", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80", tags: ["TypeScript", "React"] },
  { slug: "design-systems-101",        title: "Design Systems 101: Why Your Project Needs One", category: "Design",     date: "Dec 18, 2024", readTime: "7 min",  excerpt: "A design system is not just a component library — it's a shared language between designers and developers. Here's how to build one that sticks.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", tags: ["Design", "UI"] },
];
