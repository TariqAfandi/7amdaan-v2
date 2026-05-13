import { motion } from 'framer-motion';

import ACEES from '../assets/clients/ACEES.webp';
import AICS from '../assets/clients/AICS.webp';
import ARG from '../assets/clients/ARG.webp';
import AUBH from '../assets/clients/AUBH.webp';
import FUDDRUCKERS from '../assets/clients/FUDDRUCKERS.webp';
import IEEE from '../assets/clients/IEEE.webp';
import UNIDO from '../assets/clients/UNIDO.webp';

const clientLogos = [ACEES, AICS, ARG, AUBH, FUDDRUCKERS, IEEE, UNIDO];

const Clients = () => {
    return (
        <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 text-center">
                    Trusted by Industry Leaders
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="flex w-full">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex flex-nowrap gap-20 items-center whitespace-nowrap"
                >
                    {/* Sixfold the list to create the loop effect */}
                    {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Client Partner"
                            className="h-30 md:h-35 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;