import { motion } from 'framer-motion';

const Hero = ({ scrollToSection = () => {} }) => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center pt-20">
            {/* High-Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10"
            >
                <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-robot-accent/30 bg-robot-accent/5 text-robot-accent rounded-full">
                    Systems: Operational
                </span>

                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 uppercase">
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="block"
                        >
                        </motion.span>
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-robot-accent to-robot-accent/20"></span>
                    ROBOTS OF THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">FUTURE.</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <button 
                        onClick={() => scrollToSection('gallery')}
                        className="px-8 py-3 bg-robot-accent text-black font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-transform cursor-pointer"
                    >
                        View Features
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all cursor-pointer"
                    >
                        Contact
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;