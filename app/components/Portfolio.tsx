import { Phone, Mail, MapPin, Linkedin, Github, PlayStore, Code, Briefcase, GraduationCap, Sparkles, ExternalLink, BookOpen } from "./icons";
import { Link } from "react-router";
import { MobileNav } from "./MobileNav";
import profileImage from "../assets/syedArif.png";
import hikayatAppIcon from "../assets/hikayatDailyWhiteBg.png";
import citysageImage from "../assets/citysage.png";
import interactiveRoomImage from "../assets/Interactive-room.png";
import hikayatDiriImage from "../assets/Hikayat-diri-logo.png";
import lokalgigIcon from "../assets/Lokalgig-icon.png";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Mobile Navigation (hamburger + drawer) */}
      <MobileNav />

      {/* Desktop Floating Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card px-2 py-2 flex items-center gap-1">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a
            href="#services"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Services
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Skills
          </a>
          <Link
            to="/learn"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Learn
          </Link>
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-xl hover:bg-accent-dark transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mesh-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Right on desktop, top on mobile - Profile image first for visual hook */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-gradient-mid to-gradient-end rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-surface-elevated glow">
                  <img
                    src={profileImage}
                    alt="Syed Mohamad Arif - Mobile & Frontend Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Floating badges - positioned safely inside on mobile */}
                <div className="absolute right-0 sm:-right-4 top-2 sm:top-1/4 glass-card px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 float">
                  <span className="text-lg sm:text-2xl">🚀</span>
                  <span className="text-xs sm:text-sm font-medium">4+ Years</span>
                </div>
                <div className="absolute left-0 sm:-left-4 bottom-2 sm:bottom-1/4 glass-card px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 float-delayed">
                  <span className="text-lg sm:text-2xl">📱</span>
                  <span className="text-xs sm:text-sm font-medium">React Native</span>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
                <span className="text-xs sm:text-sm text-text-secondary">Available for opportunities</span>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  Hi, I'm{" "}
                  <span className="gradient-text">Syed Arif</span>
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Mobile & Frontend Developer crafting beautiful, performant applications with{" "}
                  <span className="text-accent">React Native</span> &{" "}
                  <span className="text-gradient-mid">React</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-surface-elevated border border-border hover:border-accent text-text-primary font-medium rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <Sparkles className="w-5 h-5" />
                  View Projects
                </a>
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-surface-elevated border border-border hover:border-accent text-text-primary font-medium rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <BookOpen className="w-5 h-5" />
                  Learning Space
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 md:pt-4">
                <a
                  href="https://linkedin.com/in/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors p-2 -m-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors p-2 -m-2"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:syedarifjr@gmail.com"
                  className="text-text-muted hover:text-accent transition-colors p-2 -m-2"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/60145297072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors p-2 -m-2"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator (desktop only — clutters small screens) */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-text-muted rounded-full animate-bounce"></div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="about-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="about-title" className="section-title">About Me</h2>
              <p className="section-subtitle">Get to know me better</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main About Card */}
              <div className="lg:col-span-2 glass-card p-6 md:p-8 hover-lift" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Syed Mohamad Arif" />
                <meta itemProp="jobTitle" content="Frontend & Mobile Developer" />
                <meta itemProp="address" content="Kuala Lumpur, Malaysia" />
                <p className="text-lg leading-relaxed text-text-secondary" itemProp="description">
                  I'm <span className="text-text-primary font-medium">Syed Mohamad Arif</span>, a dedicated Frontend Developer based in{" "}
                  <span className="text-accent">Kuala Lumpur, Malaysia</span> with 4+ years of experience specializing in{" "}
                  <span className="text-text-primary font-medium">React Native</span> for mobile apps and{" "}
                  <span className="text-text-primary font-medium">React</span> for web platforms.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary mt-4">
                  I work across the full product lifecycle, from UI/UX design and prototyping to development, testing, and deployment.
                  Skilled in Git, CI/CD, and Agile practices, I build scalable features that enhance user experience and business value.
                  With a strong eye for design and proficiency in Figma and Adobe tools, I bridge the gap between design and engineering
                  to deliver intuitive interfaces.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="space-y-6">
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text-primary">4+</p>
                      <p className="text-text-muted text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-mid/20 flex items-center justify-center">
                      <Code className="w-6 h-6 text-gradient-mid" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text-primary">4</p>
                      <p className="text-text-muted text-sm">Companies Worked</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-end/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-gradient-end" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text-primary">B.IT</p>
                      <p className="text-text-muted text-sm">IIUM Graduate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 md:py-24 gradient-bg scroll-mt-20" aria-labelledby="projects-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="projects-title" className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Personal projects and side builds</p>
            </div>

            {/* LokalGig - Main Featured */}
            <article className="glass-card p-6 md:p-8 glow hover-lift mb-8" itemScope itemType="https://schema.org/WebApplication">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
                    Live on the Web
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3" itemProp="name">
                    LokalGig
                  </h3>
                  <p className="text-accent font-medium mb-4" itemProp="applicationCategory">Web Platform · Marketplace</p>
                  <p className="text-text-secondary leading-relaxed mb-6" itemProp="description">
                    A Malaysian local services marketplace connecting freelancers with clients for everyday gigs and side projects.
                    Built end-to-end with a modern React stack, Supabase for auth and data, and shipped on Vercel — covering
                    discovery, booking, and the full client–freelancer workflow.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "TypeScript", "Tailwind", "Supabase", "Vercel"].map((tech) => (
                      <span key={tech} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                  <meta itemProp="author" content="Syed Mohamad Arif" />
                  <a
                    href="https://lokalgig.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-105"
                    itemProp="url"
                    aria-label="Visit LokalGig"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit lokalgig.my
                  </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl flex items-center justify-center overflow-hidden border border-border bg-gradient-to-br from-accent/15 via-gradient-mid/15 to-gradient-end/15">
                      {/* <div className="text-center px-6">
                        <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">LokalGig</p>
                        <p className="text-sm text-text-muted tracking-[0.3em] mb-6">.MY</p>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">Local services, simplified</p>
                      </div> */}
                      <img
                        src={lokalgigIcon}
                        alt="LokalGig - Web Platform"
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hikayat Daily Global */}
              <article
                className="glass-card overflow-hidden hover-lift group"
                itemScope
                itemType="https://schema.org/MobileApplication"
              >
                <div className="relative h-48 bg-surface-elevated flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors"></div>
                  <img
                    src={hikayatAppIcon}
                    alt="Hikayat Daily Global - Mobile App"
                    className="w-24 h-24 object-contain relative z-10"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot"></span>
                    Live on Play Store
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2" itemProp="name">
                    Hikayat Daily Global
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3" itemProp="applicationCategory">
                    Mobile Application
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4" itemProp="description">
                    A daily storytelling Android app showcasing end-to-end mobile work — from UI/UX design to production release.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["React Native", "TypeScript", "Firebase", "Redux"].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  <meta itemProp="operatingSystem" content="Android" />
                  <meta itemProp="author" content="Syed Mohamad Arif" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                    itemProp="url"
                    aria-label="Download Hikayat Daily Global from Google Play Store"
                  >
                    <PlayStore className="w-4 h-4" />
                    View on Play Store
                  </a>
                </div>
              </article>

              {/* Hikayat Diri Mobile */}
              <article
                className="glass-card overflow-hidden hover-lift group"
                itemScope
                itemType="https://schema.org/MobileApplication"
              >
                <div className="relative h-48 bg-surface-elevated flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors"></div>
                  <img
                    src={hikayatDiriImage}
                    alt="Hikayat Diri Mobile - Personal storytelling Android app"
                    className="w-24 h-24 object-contain relative z-10"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot"></span>
                    Live on Play Store
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2" itemProp="name">
                    Hikayat Diri (Mobile)
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3" itemProp="applicationCategory">
                    Mobile Application
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4" itemProp="description">
                    The Android companion to Hikayat Diri — journal and revisit personal stories anywhere, with a calm, focused reading experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["React Native", "Expo", "TypeScript"].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  <meta itemProp="operatingSystem" content="Android" />
                  <meta itemProp="author" content="Syed Mohamad Arif" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.syedmhdarif.hikayatdiri&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                    itemProp="url"
                    aria-label="Download Hikayat Diri Mobile from Google Play Store"
                  >
                    <PlayStore className="w-4 h-4" />
                    View on Play Store
                  </a>
                </div>
              </article>

              {/* Hikayat Diri Web */}
              <article className="glass-card overflow-hidden hover-lift group">
                <div className="relative h-48 bg-surface-elevated flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-end/10 group-hover:bg-gradient-end/20 transition-colors"></div>
                  <img
                    src={hikayatDiriImage}
                    alt="Hikayat Diri - Personal Story Web App"
                    className="w-24 h-24 object-contain relative z-10"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Hikayat Diri (Web)</h3>
                  <p className="text-gradient-end font-medium text-sm mb-3">Web Application</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    A personal storytelling web app that brings narratives to life with a clean, elegant reading experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["React", "TypeScript", "Vercel"].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  <a
                    href="https://hikayat-diri-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </article>

              {/* CitySage */}
              <article className="glass-card overflow-hidden hover-lift group">
                <div className="relative h-48 bg-surface-elevated flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors"></div>
                  <img
                    src={citysageImage}
                    alt="CitySage - Web Project"
                    className="w-24 h-24 object-contain relative z-10"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">CitySage</h3>
                  <p className="text-accent font-medium text-sm mb-3">Web Application</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    A city guide web application providing smart insights and recommendations for urban exploration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  <a
                    href="https://syedmhdarif.github.io/citysage-web-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </article>

              {/* Interactive Room */}
              <article className="glass-card overflow-hidden hover-lift group">
                <div className="relative h-48 bg-surface-elevated overflow-hidden">
                  <img
                    src={interactiveRoomImage}
                    alt="Interactive Room - 3D Web Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Interactive Room</h3>
                  <p className="text-gradient-mid font-medium text-sm mb-3">3D Web Experience</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    An interactive 3D portfolio world built with Three.js, featuring explorable environments and immersive navigation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Three.js", "React", "3D", "WebGL"].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  <a
                    href="https://interactive-room-wine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="services-title" className="section-title">Services I Offer</h2>
              <p className="section-subtitle">From design to deployment — built, shipped, and supported</p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard
                icon="🌐"
                accent="accent"
                title="Website Development"
                tagline="Marketing sites, dashboards & full-stack web apps"
                description="From a fast landing page to a multi-tenant SaaS dashboard. Built with React, React Router, and Next.js — typed, tested, and tuned for SEO and Core Web Vitals."
                deliverables={[
                  "Responsive UI in React + Tailwind",
                  "Auth, payments & dashboards",
                  "SEO, sitemap & analytics",
                  "Domain, hosting & email setup"
                ]}
                stack={["React", "React Router", "Next.js", "Tailwind", "Supabase", "Vercel"]}
              />
              <ServiceCard
                icon="📱"
                accent="gradient-mid"
                title="Mobile App Development"
                tagline="Cross-platform iOS & Android, ready for the stores"
                description="One codebase, two stores. React Native + Expo for fast iteration, native modules where it counts, and full release pipelines through EAS or Codemagic."
                deliverables={[
                  "iOS & Android from one codebase",
                  "Push notifications & deep links",
                  "OTA updates & crash reporting",
                  "App Store & Play Store submission"
                ]}
                stack={["React Native", "Expo", "TypeScript", "Firebase", "EAS", "Codemagic"]}
              />
            </div>

            {/* Process Timeline */}
            <div className="glass-card p-8 md:p-12 mb-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">My Process</h3>
                <p className="text-text-muted">A clear path from idea to production — collaborative, transparent, and shippable at every step</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 relative">
                <ProcessStep
                  step="01"
                  icon="🎨"
                  title="Design"
                  description="Wireframes and high-fidelity prototypes in Figma. Clarify the problem, validate the flow, and lock in the visual language before a single line of code."
                  tools={["Figma", "Adobe XD", "User Flows", "Prototypes"]}
                />
                <ProcessStep
                  step="02"
                  icon="⚙️"
                  title="Development"
                  description="Typed, modular, version-controlled code with Git-based reviews and preview deployments. Frequent demos so you see progress every sprint."
                  tools={["TypeScript", "React / RN", "Git", "CI/CD"]}
                />
                <ProcessStep
                  step="03"
                  icon="🚀"
                  title="Production & Deployment"
                  description="Custom domain, SSL, analytics, and store submissions handled. Monitoring and OTA updates so the product keeps improving after launch."
                  tools={["Vercel", "Expo EAS", "Codemagic", "Firebase"]}
                />
              </div>
            </div>

            {/* Stack & Tooling */}
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">What You'll Need</h3>
              <p className="text-text-muted max-w-2xl mx-auto">
                Every project ships with its own stack of services. Here's what I set up — and what it costs you to run — across domain, hosting, database, and mobile build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StackCard
                icon="🌍"
                title="Domain"
                description="Your name on the web. I help register, configure DNS, set up SSL, and wire up email forwarding."
                items={["Cloudflare", "Namecheap", "Google Domains"]}
              />
              <StackCard
                icon="☁️"
                title="Web Hosting"
                description="Global edge delivery with preview URLs on every commit. Vercel is my default for React and Next.js."
                items={["Vercel", "Cloudflare Pages", "Netlify"]}
              />
              <StackCard
                icon="🗄️"
                title="Database & Auth"
                description="Postgres, auth, storage, and realtime — Supabase gives you a production backend without the ops overhead."
                items={["Supabase", "Firebase", "PostgreSQL"]}
              />
              <StackCard
                icon="📦"
                title="Mobile Build & Release"
                description="Automated iOS & Android builds, signing, and store submissions through Expo EAS or Codemagic."
                items={["Expo EAS", "Codemagic", "App Store", "Play Store"]}
              />
            </div>

            {/* CTA */}
            <div className="glass-card p-8 md:p-10 glow text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Have a project in mind?
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto mb-6">
                Whether it's a landing page, a full product, or a mobile app — let's talk through scope, stack, and timeline. No obligation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 gradient-bg scroll-mt-20" aria-labelledby="experience-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="experience-title" className="section-title">Work Experience</h2>
              <p className="section-subtitle">My professional journey</p>
            </div>

            <div className="space-y-8">
              <ExperienceCard
                title="Mobile App Developer"
                company="Paywatch Malaysia"
                period="Feb 2025 - Present"
                isCurrent={true}
                responsibilities={[
                  "Build and enhance key features such as health insurance, critical illness insurance, QR payments, and voucher systems",
                  "Work closely with UI/UX designers to translate designs into smooth, user-friendly components",
                  "Manage TestFlight and Firebase App Distribution for testing and releases",
                  "Support CI/CD processes through Azure Pipeline to ensure efficient builds and deployments"
                ]}
                technologies={["React Native", "TypeScript", "Firebase", "Azure DevOps", "Maestro"]}
              />
              <ExperienceCard
                title="Junior Mobile App Developer"
                company="Zonar Malaysia"
                period="Sep 2023 - Jan 2025"
                responsibilities={[
                  "Specialize in React Native development using Firebase, Redux, and React Navigation",
                  "Responsible for designing the UI/UX of the Zonar app, ensuring user-friendly functionality",
                  "Work across the full project lifecycle using insights from Google Analytics",
                  "Follow Agile sprints with regular scrum meetings to track progress"
                ]}
                technologies={["React Native", "Firebase", "Redux", "Figma", "Google Analytics"]}
              />
              <ExperienceCard
                title="Junior Mobile App Developer"
                company="Accenture"
                period="Aug 2022 - Sep 2023"
                responsibilities={[
                  "Maintain, enhance, and build new features for the Unifi mobile prepaid (TM) app",
                  "Integrate RESTful APIs and manage state with Redux",
                  "Implement OneSignal for push notifications",
                  "Use Git for efficient version control and team collaboration"
                ]}
                technologies={["React Native", "Redux", "RESTful APIs", "OneSignal", "Git"]}
              />
            </div>
          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="skills-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="skills-title" className="section-title">Skills & Technologies</h2>
              <p className="section-subtitle">Tools and technologies I work with</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <SkillCard
                title="Languages"
                icon="💻"
                skills={["JavaScript", "TypeScript", "HTML/CSS", "SQL", "Swift", "Java/Kotlin"]}
              />
              <SkillCard
                title="Frameworks"
                icon="⚛️"
                skills={["React Native", "React.js", "Next.js", "Node.js", "Redux", "React Query"]}
              />
              <SkillCard
                title="Tools"
                icon="🛠️"
                skills={["Android Studio", "Xcode", "VS Code", "Figma", "Postman", "Maestro"]}
              />
              <SkillCard
                title="Databases"
                icon="🗄️"
                skills={["PostgreSQL", "MySQL", "MongoDB", "Firebase"]}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="education-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="education-title" className="section-title">Education</h2>
              <p className="section-subtitle">My academic background</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6 md:p-8 hover-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Bachelor of Information Technology</h3>
                  <p className="text-accent font-medium mb-2">International Islamic University Malaysia</p>
                  <p className="text-text-muted text-sm">2017 - 2020</p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 hover-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-mid/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-mid/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-gradient-mid" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Foundation in Engineering</h3>
                  <p className="text-gradient-mid font-medium mb-2">CFS IIUM Petaling Jaya</p>
                  <p className="text-text-muted text-sm">2015 - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 gradient-bg scroll-mt-20" aria-labelledby="contact-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="contact-title" className="section-title">Get In Touch</h2>
              <p className="section-subtitle">Let's build something amazing together</p>
            </div>

            <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto glow">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <a
                    href="mailto:syedarifjr@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">Email</p>
                      <p className="text-text-primary font-medium">syedarifjr@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+60145297072"
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-mid/20 flex items-center justify-center group-hover:bg-gradient-mid/30 transition-colors">
                      <Phone className="w-5 h-5 text-gradient-mid" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">Phone</p>
                      <p className="text-text-primary font-medium">+60 14-529 7072</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-border">
                    <div className="w-12 h-12 rounded-xl bg-gradient-end/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gradient-end" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">Location</p>
                      <p className="text-text-primary font-medium">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-end gap-4">
                  <p className="text-text-secondary text-center md:text-right">
                    Ready to collaborate? Let's connect on social media or drop me a message!
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/syedmhdarif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/syedmhdarif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/60145297072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                      aria-label="WhatsApp"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © 2025 Syed Mohamad Arif. All rights reserved.
            </p>
            <p className="text-text-muted text-sm">
              Creator of <span className="text-accent">Hikayat Daily Global</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({
  title,
  icon,
  skills
}: {
  title: string;
  icon: string;
  skills: string[];
}) {
  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  accent,
  title,
  tagline,
  description,
  deliverables,
  stack
}: {
  icon: string;
  accent: "accent" | "gradient-mid" | "gradient-end";
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
}) {
  const accentBg = {
    accent: "bg-accent/20",
    "gradient-mid": "bg-gradient-mid/20",
    "gradient-end": "bg-gradient-end/20"
  }[accent];
  const accentText = {
    accent: "text-accent",
    "gradient-mid": "text-gradient-mid",
    "gradient-end": "text-gradient-end"
  }[accent];

  return (
    <div className="glass-card p-6 md:p-8 hover-lift relative overflow-hidden h-full flex flex-col">
      <div className={`absolute top-0 right-0 w-32 h-32 ${accentBg} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50`}></div>
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl ${accentBg} flex items-center justify-center text-3xl`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary">{title}</h3>
            <p className={`text-sm font-medium ${accentText}`}>{tagline}</p>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-3 text-text-secondary text-sm">
              <span className={`${accentText} mt-1 shrink-0`}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {stack.map((tech) => (
            <span key={tech} className="skill-badge text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  icon,
  title,
  description,
  tools
}: {
  step: string;
  icon: string;
  title: string;
  description: string;
  tools: string[];
}) {
  return (
    <div className="relative">
      <div className="bg-surface-elevated border border-border rounded-2xl p-6 h-full hover:border-accent transition-colors">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{icon}</span>
          <span className="text-sm font-mono text-text-muted">{step}</span>
        </div>
        <h4 className="text-lg font-bold text-text-primary mb-2">{title}</h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="skill-badge text-xs">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackCard({
  icon,
  title,
  description,
  items
}: {
  icon: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="glass-card p-6 hover-lift h-full flex flex-col">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-text-primary mb-2">{title}</h4>
      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
        {items.map((item) => (
          <span key={item} className="skill-badge text-xs">{item}</span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  isCurrent = false,
  responsibilities,
  technologies
}: {
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}) {
  return (
    <div className="glass-card p-6 md:p-8 hover-lift relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-gradient-mid to-gradient-end"></div>
      <div className="pl-4 md:pl-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-text-primary">{title}</h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot"></span>
                  Current
                </span>
              )}
            </div>
            <p className="text-accent font-medium">@{company}</p>
          </div>
          <span className="text-text-muted text-sm bg-surface-elevated px-3 py-1 rounded-lg">{period}</span>
        </div>
        <ul className="space-y-2 mb-4">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex gap-3 text-text-secondary">
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="skill-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
