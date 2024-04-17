import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ image, title, data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div ref={ref} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} alt="Feature" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{data}</p>
            </div>
        </motion.div>
    );
}

export default FeatureCard;
