import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    className="text-white/40 hover:text-robot-accent transition-colors duration-300 relative group"
    aria-label={label}
  >
    {icon}
    <div className="absolute inset-0 bg-robot-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const BRAND_ICONS = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  )
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <div className="bg-robot-dark text-white selection:bg-robot-accent selection:text-black">
      <Cursor />

      {/* HUD Corner Accents */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-robot-accent/30" />
        <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-robot-accent/30" />
        <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-robot-accent/30" />
        <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-robot-accent/30" />
      </div>

      <Navbar />

      {/* Each component is a full-height or large-content section */}
      <section id="home"><Hero scrollToSection={scrollToSection} /></section>
      <section id="clients"><Clients /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>

      {/* Persistent Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-robot-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">

          <div className="flex flex-col items-center w-full md:w-auto">
            <span className="font-black tracking-tighter text-robot-accent text-lg mb-2 text-center">
              7AMDAAN.IO
            </span>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase text-center">
              © 2026 Autonomous AdTech Systems
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/company/7amdaan/posts/?feedView=all"
              icon={BRAND_ICONS.linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.instagram.com/7amdaan.io/"
              icon={BRAND_ICONS.instagram}
              label="Instagram"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;