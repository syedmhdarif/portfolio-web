import { Phone, Mail, MapPin, Linkedin, Github, PlayStore, Code, Briefcase, GraduationCap, Sparkles } from "./icons";
import profileImage from "../assets/syedArif.png";
import hikayatAppIcon from "../assets/hikayatDailyWhiteBg.png";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
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
            href="#skills"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            Experience
          </a>
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
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
                <span className="text-sm text-text-secondary">Available for opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text">Syed Arif</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-xl">
                  Mobile & Frontend Developer crafting beautiful, performant applications with{" "}
                  <span className="text-accent">React Native</span> &{" "}
                  <span className="text-gradient-mid">React</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated border border-border hover:border-accent text-text-primary font-medium rounded-xl transition-all hover:scale-105"
                >
                  <Sparkles className="w-5 h-5" />
                  View Projects
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://linkedin.com/in/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:syedarifjr@gmail.com"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/60145297072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-gradient-mid to-gradient-end rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-surface-elevated glow">
                  <img
                    src={profileImage}
                    alt="Syed Mohamad Arif - Mobile & Frontend Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -right-4 top-1/4 glass-card px-4 py-2 flex items-center gap-2 float">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm font-medium">4+ Years</span>
                </div>
                <div className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 flex items-center gap-2 float-delayed">
                  <span className="text-2xl">📱</span>
                  <span className="text-sm font-medium">React Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-text-muted rounded-full animate-bounce"></div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* About Section */}
        <section id="about" className="py-24 scroll-mt-20" aria-labelledby="about-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="about-title" className="section-title">About Me</h2>
              <p className="section-subtitle">Get to know me better</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main About Card */}
              <div className="lg:col-span-2 glass-card p-8 hover-lift" itemScope itemType="https://schema.org/Person">
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

        {/* Featured Project Section */}
        <section id="projects" className="py-24 gradient-bg scroll-mt-20" aria-labelledby="projects-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="projects-title" className="section-title">Featured Project</h2>
              <p className="section-subtitle">Personal project available on Play Store</p>
            </div>

            <article className="glass-card p-8 glow hover-lift" itemScope itemType="https://schema.org/MobileApplication">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
                    Live on Play Store
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3" itemProp="name">
                    Hikayat Daily Global
                  </h3>
                  <p className="text-accent font-medium mb-4" itemProp="applicationCategory">Mobile Application</p>
                  <p className="text-text-secondary leading-relaxed mb-6" itemProp="description">
                    A live mobile application showcasing end-to-end mobile development skills from UI/UX design to deployment.
                    Built with React Native and modern mobile development practices, demonstrating expertise in delivering
                    production-ready, user-friendly applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React Native", "TypeScript", "Firebase", "Redux"].map((tech) => (
                      <span key={tech} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                  <meta itemProp="operatingSystem" content="Android" />
                  <meta itemProp="author" content="Syed Mohamad Arif" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-105"
                    itemProp="url"
                    aria-label="Download Hikayat Daily Global from Google Play Store"
                  >
                    <PlayStore className="w-5 h-5" />
                    View on Play Store
                  </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-48 h-48 md:w-64 md:h-64 bg-surface-elevated rounded-3xl flex items-center justify-center overflow-hidden border border-border">
                      <img
                        src={hikayatAppIcon}
                        alt="Hikayat Daily Global - Mobile App"
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className="py-24 scroll-mt-20" aria-labelledby="skills-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="skills-title" className="section-title">Skills & Technologies</h2>
              <p className="section-subtitle">Tools and technologies I work with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Experience Section */}
        <section id="experience" className="py-24 gradient-bg scroll-mt-20" aria-labelledby="experience-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
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

        {/* Education Section */}
        <section id="education" className="py-24 scroll-mt-20" aria-labelledby="education-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="education-title" className="section-title">Education</h2>
              <p className="section-subtitle">My academic background</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-8 hover-lift relative overflow-hidden">
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
              <div className="glass-card p-8 hover-lift relative overflow-hidden">
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
        <section id="contact" className="py-24 gradient-bg scroll-mt-20" aria-labelledby="contact-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
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
    <div className="glass-card p-8 hover-lift relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-gradient-mid to-gradient-end"></div>
      <div className="pl-6">
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
