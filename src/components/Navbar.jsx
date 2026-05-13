import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, FileText, Camera, Zap } from 'lucide-react';

const navItems = [
    { name: 'Home', href: 'home', icon: <Cpu size={16} /> },
    { name: 'About', href: 'about', icon: <Zap size={16} /> },
    { name: 'Clients', href: 'clients', icon: <Bot size={16} /> },
    { name: 'Gallery', href: 'gallery', icon: <Camera size={16} /> },
    { name: 'Contact', href: 'contact', icon: <FileText size={16} /> },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    // Logic to detect which section is in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.href));
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 w-full z-50 flex justify-center p-6"
        >
            <div className="bg-robot-gray/60 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-full flex gap-6 items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <span className="font-black tracking-tighter text-robot-accent text-lg">7AMDAAN.IO</span>

                <div className="h-4 w-[1px] bg-white/10" />

                <ul className="flex gap-4 md:gap-6">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        return (
                            <li
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="relative group p-2 sm:p-0" // Increased padding for mobile touch
                            >
                                <div className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${isActive ? 'text-robot-accent' : 'text-white/40'
                                    }`}>
                                    {/* Icons remain visible on all screens */}
                                    <span className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform`}>
                                        {item.icon}
                                    </span>

                                    {/* Text labels hide on mobile, show on 'sm' screens (640px+) */}
                                    <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest">
                                        {item.name}
                                    </span>
                                </div>

                                {/* Improved Active Indicator for Mobile */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-robot-accent/10 blur-md rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;