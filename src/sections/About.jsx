import { motion } from 'framer-motion';
import { Target, Mic, LayoutDashboard, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-robot-accent/40 transition-all group relative overflow-hidden"
    >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-robot-accent/5 blur-2xl group-hover:bg-robot-accent/15 transition-colors" />

        <Icon className="w-10 h-10 text-robot-accent mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
        <h4 className="text-white font-black text-xl tracking-widest mb-4 uppercase bold">
            {title}
        </h4>
        <p className="text-white/40 text-sm leading-relaxed font-mono">
            {desc}
        </p>
    </motion.div>
);

const About = () => {
    return (
        <section className="py-48 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">

            {/* 1. The Power Headline */}
            <div className="mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl"
                >
                    <div className="flex items-center gap-3 text-robot-accent text-[10px] font-black tracking-[0.6em] uppercase mb-8">
                        <Zap size={14} className="animate-pulse" />
                        <span>CORE_SYSTEM_MANIFEST // Protocol</span>
                    </div>
                    <h2 className="text-6xl md:text-[9rem] font-black tracking-[-0.06em] leading-[0.8] uppercase mb-12">
                        Empowering <br />
                        <span className="text-robot-accent drop-shadow-[0_0_30px_rgba(0,255,65,0.3)]">Brand Connections.</span>
                    </h2>
                </motion.div>

                {/* 2. Expanded Mission Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="lg:col-span-7"
                    >
                        <p className="text-white/80 text-2xl md:text-4xl leading-tight font-medium tracking-tight">
                            At <span className="text-robot-accent font- ">7amdaan.io</span>, we believe in the power of connection. Our autonomous advertising robots bridge the gap between digital precision and human interaction.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="lg:col-span-5 border-l-2 border-robot-accent/20 pl-10"
                    >
                        <p className="text-white/40 text-sm md:text-lg leading-relaxed tracking-wider font-mono">
                            Revolutionizing the DOOH sector with interactive ads and real-time fleet management. We create unforgettable experiences that stand out in malls and events.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 3. High-Impact Capability Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                    icon={Target}
                    title="Targeting"
                    desc="AI audience recognition: Serving the right message to the right demographic instantly."
                    delay={0.1}
                />
                <FeatureCard
                    icon={Mic}
                    title="Voice AI"
                    desc="Seamless Natural Language Processing for interactive customer engagement."
                    delay={0.2}
                />
                <FeatureCard
                    icon={LayoutDashboard}
                    title="Cloud CMS"
                    desc="Remote fleet control and real-time campaign analytics from a secure centralized dashboard."
                    delay={0.3}
                />
            </div>

        </section>
    );
};

export default About;