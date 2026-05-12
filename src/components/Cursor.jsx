import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    // Spring settings for that "premium" lag/smoothness
    const springConfig = { damping: 25, stiffness: 150 };
    const dotX = useSpring(0, springConfig);
    const dotY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            dotX.set(e.clientX - 4); // Center the 8px dot
            dotY.set(e.clientY - 4);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [dotX, dotY]);

    useEffect(() => {
        const handleDown = () => setIsClicked(true);
        const handleUp = () => setIsClicked(false);

        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);
        return () => {
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
        };
    }, []);

    return (
        <motion.div
            style={{
                translateX: dotX,
                translateY: dotY,
            }}
            className="fixed top-0 left-0 w-2 h-2 bg-robot-accent rounded-full pointer-events-none z-[100] shadow-[0_0_15px_#00d1ff]"

            animate={{
                scale: isClicked ? 2 : 1,
                opacity: isClicked ? 0.5 : 1,
            }}
        />
    );
};

export default Cursor;