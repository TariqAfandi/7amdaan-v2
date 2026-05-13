// import comicCon1 from "../assets/img/comic_con_1.avif";
// import comicCon2 from "../assets/img/comic_con_2.avif";
import { motion } from 'framer-motion';
import oasis1 from "../assets/img/oasis_1.avif";
import oasis2 from "../assets/img/oasis_2.avif";
import oasis3 from "../assets/img/oasis_3.avif";
import sequence from "../assets/vid/sequence_1_cut.mp4";

const projects = [
    { 
        id: 1, 
        title: "7amdaan Robot", 
        // Takes 2 columns and 4 rows for height
        size: "col-span-1 md:col-span-2 row-span-4", 
        video: sequence 
    },
    { 
        id: 2, 
        title: "Dynamic Advertising", 
        category: "Targeted Marketing", 
        // Fills the top right
        size: "col-span-1 row-span-2", 
        image: oasis1 
    },
    { 
        id: 3, 
        title: "Real-time Insights", 
        category: "Data Analysis", 
        // Fills the middle right
        size: "col-span-1 row-span-2", 
        image: oasis2 
    },
    { 
        id: 4, 
        title: "Remote Control", 
        category: "Telerobotics", 
        // This will now sit below the main robot on the left or stretch the bottom
        size: "col-span-1 md:col-span-3 row-span-3", 
        image: oasis3 
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card
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
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            {/* 1. Wrap the header so it reveals first */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl font-black tracking-tighter mb-4">CATALOGUE OF FEATURES</h2>
                <div className="h-1 w-57 bg-robot-accent" />
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
                        className={`${project.size} group relative bg-robot-gray border border-white/5 rounded-3xl overflow-hidden hover:border-robot-accent/50 transition-all duration-500`}
                    >
                        {/* Media Logic */}
                        <div className="absolute inset-0 z-0">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                                />
                            )}
                        </div>

                        {/* Project Info Overlay */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10">
                            <span className="text-robot-accent text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-2">
                                {project.category || "Autonomous System"}
                            </span>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight leading-none">{project.title}</h3>
                        </div>

                        {/* Visual Placeholder for Project Image/Video */}
                        <div className="absolute inset-0 bg-white/5 group-hover:scale-110 transition-transform duration-700 -z-0" />
                    </motion.div>
                ))}

            </motion.div>
        </section>
    );
};

export default Gallery;