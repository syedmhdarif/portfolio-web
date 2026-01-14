import { Phone, Mail, MapPin, Linkedin, Github, ExternalLink, PlayStore } from "./icons";
import profileImage from "../assets/syedArif.png";
import hikayatAppIcon from "../assets/hikayatDailyWhiteBg.png";

export function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-primary dark:text-primary-dark">
              SYED ARIF
            </a>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary dark:hover:text-primary-dark transition-colors">About</a>
              <a href="#projects" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Projects</a>
              <a href="#education" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Education</a>
              <a href="#skills" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Experience</a>
              <a href="#reference" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Reference</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full bg-white/20 border-4 border-white/50 flex items-center justify-center overflow-hidden">
              <img

                src={profileImage}
                alt="Syed Mohamad Arif"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">SYED MOHAMAD ARIF</h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">Frontend/Mobile App Developer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="tel:+60145297072" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+60 14-5297072</span>
                </a>
                <a href="mailto:syedarifjr@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>syedarifjr@gmail.com</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Sentul, Kuala Lumpur</span>
                </span>
              </div>
              <div className="flex justify-center md:justify-start gap-2 mt-4">
                <a
                  href="https://linkedin.com/in/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/syedmhdarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://wa.me/60145297072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
       

        {/* Featured Project Section */}
        <section id="projects" className="mb-16 scroll-mt-20">
          {/* <h2 className="section-title">Featured Project</h2> */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={hikayatAppIcon}
                  alt="Hikayat Daily Global"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Hikayat Daily Global</h3>
                <p className="text-primary dark:text-primary-dark font-medium mt-1">Mobile Application</p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  A live mobile application available on Google Play Store. This project showcases my expertise in mobile app development and delivering production-ready applications to end users.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hikayatdailyglobal&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <PlayStore className="w-5 h-5" />
                  <span>View on Play Store</span>
                </a>
              </div>
            </div>
          </div>
        </section>


         {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="section-title">About Me</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              A dedicated Frontend Developer with 4 years of experience specializing in React Native for mobile apps
              and React for web platforms. I work across the full product lifecycle, from UI/UX design and prototyping
              to development, testing, and deployment. Skilled in Git, CI/CD, and Agile practices, I build scalable
              features that enhance user experience and business value. With a strong eye for design and proficiency
              in Figma and Adobe tools, I bridge the gap between design and engineering to deliver intuitive interfaces.
              Passionate about solving problems and creating meaningful digital experiences.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="section-title">Education History</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">Bachelor of Information Technology</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">International Islamic University Malaysia</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">2017 - 2020</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">Foundation in Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">CFS IIUM Petaling Jaya</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">2015 - 2017</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="section-title">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Programming Languages"
              skills={["Javascript", "Typescript", "HTML, CSS", "SQL", "Swift", "Java/Kotlin"]}
            />
            <SkillCard
              title="Framework/Libraries"
              skills={["React Native", "React JS", "Next JS", "Node.js", "Redux", "React Query"]}
            />
            <SkillCard
              title="Design/Dev/Testing"
              skills={["Android Studio", "Xcode", "Maestro Studio", "Postman", "VS Code/Cursor", "Figma/Adobe XD", "Notion"]}
            />
            <SkillCard
              title="Database"
              skills={["PostgreSQL", "MySQL", "MongoDB", "Firebase"]}
            />
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Mobile App Developer"
              company="Paywatch Malaysia"
              period="February 2025 - Present"
              responsibilities={[
                "Build and enhance key features such as health insurance, critical illness insurance, QR payments, and voucher systems. Work closely with UI/UX designers to translate designs into smooth, user-friendly components and ensure consistent performance across both iOS and Android platforms.",
                "Manage TestFlight and Firebase App Distribution for testing and releases, monitor Firebase logs during launches, and use Maestro to test app flows. Assist in MoEngage analytics event setup and support CI/CD processes through Azure Pipeline to ensure efficient builds, deployments, and overall app stability."
              ]}
            />
            <ExperienceCard
              title="Junior Mobile App Developer"
              company="Zonar Malaysia"
              period="September 2023 - January 2025"
              responsibilities={[
                "Specialize in React Native mobile development, using various libraries like Firebase, Redux, and React Navigation to build the mobile app. Also responsible for designing the UI/UX of the Zonar app, ensuring it's user-friendly and very well functional.",
                "Work closely with the team across the full project lifecycle. Using insights from Google Analytics, gather requirements, brainstorm ideas, and create designs in Figma. Follow Agile sprints with regular scrum meetings to track progress and solve challenges."
              ]}
            />
            <ExperienceCard
              title="Junior Mobile App Developer"
              company="Accenture"
              period="August 2022 - September 2023"
              responsibilities={[
                "Maintain, enhance, and build new features for the Unifi mobile prepaid (TM) app using React Native, ensuring smooth performance and timely updates across all app stores. Integrate RESTful APIs, manage state with Redux, implement OneSignal for push notifications, and use Git for efficient version control and team collaboration."
              ]}
            />
          </div>
        </section>

        {/* Reference Section */}
        {/* <section id="reference" className="mb-16 scroll-mt-20">
          <h2 className="section-title">Reference</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Shahid Roger</h3>
            <p className="text-primary dark:text-primary-dark font-medium mt-1">Head of Frontend Engineer</p>
            <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <a href="tel:+60172274192" className="flex items-center gap-2 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Phone className="w-4 h-4" />
                <span>+60 17-2274192</span>
              </a>
              <a href="mailto:shahidrogers@gmail.com" className="flex items-center gap-2 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Mail className="w-4 h-4" />
                <span>shahidrogers@gmail.com</span>
              </a>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">Let's connect and build something amazing together!</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/syedmhdarif"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-dark transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/syedmhdarif"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-dark transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:syedarifjr@gmail.com"
              className="hover:text-primary-dark transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/60145297072"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-dark transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            © 2025 Syed Mohamad Arif. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  responsibilities
}: {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border-l-4 border-primary">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-primary dark:text-primary-dark font-medium">@{company}</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">{period}</span>
      </div>
      <ul className="space-y-3">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
            <span className="text-primary dark:text-primary-dark mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
