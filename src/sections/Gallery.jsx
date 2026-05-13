import { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion';
import oasis1 from "../assets/img/oasis_1.avif";
import oasis2 from "../assets/img/oasis_2.avif";
import oasis3 from "../assets/img/oasis_3.avif";
import sequence from "../assets/vid/sequence_1_cut.mp4";

const projects = [
    { 
        id: 1, 
        title: "7amdaan Robot", 
        size: "col-span-1 md:col-span-2 row-span-4", 
        video: sequence 
    },
    { 
        id: 2, 
        title: "Dynamic Advertising", 
        category: "Targeted Marketing", 
        size: "col-span-1 row-span-2", 
        image: oasis1 
    },
    { 
        id: 3, 
        title: "Real-time Insights", 
        category: "Data Analysis", 
        size: "col-span-1 row-span-2", 
        image: oasis2 
    },
    { 
        id: 4, 
        title: "Remote Control", 
        category: "Telerobotics", 
        size: "col-span-1 md:col-span-3 row-span-3", 
        image: oasis3 
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const Gallery = () => {
    // State to track if the main video has buffered enough to play
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">Catalogue of Features</h2>
                <div className="h-1 w-32 bg-robot-accent" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        className={`${project.size} group relative bg-robot-dark border border-white/5 rounded-3xl overflow-hidden hover:border-robot-accent/50 transition-all duration-500`}
                    >
                        <div className="absolute inset-0 z-0">
                            {project.video ? (
                                <>
                                    {/* System Loader Overlay */}
                                    <AnimatePresence>
                                        {!videoLoaded && (
                                            <motion.div 
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 z-20 bg-robot-dark flex flex-col items-center justify-center space-y-4"
                                            >
                                                <div className="w-8 h-8 border-2 border-robot-accent/20 border-t-robot-accent rounded-full animate-spin" />
                                                <span className="text-robot-accent font-mono text-[10px] tracking-[0.3em] animate-pulse">
                                                    INITIALIZING_CORE_STREAM...
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        onCanPlayThrough={() => setVideoLoaded(true)}
                                        className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-50 group-hover:opacity-80' : 'opacity-0'}`}
                                    />
                                </>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                                />
                            )}
                        </div>

                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10">
                            <span className="text-robot-accent text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-2">
                                {project.category || "Autonomous System"}
                            </span>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight leading-none uppercase">{project.title}</h3>
                        </div>

                        <div className="absolute inset-0 bg-white/5 group-hover:scale-110 transition-transform duration-700 -z-0" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Gallery;