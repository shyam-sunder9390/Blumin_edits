import React from 'react';
import { ImageTextContainer, TextFadeUpAnimation } from '../components/Animation';
import FeatureCard from '../components/FeatureCard';
import { Heading } from '@radix-ui/themes';
import { motion } from "framer-motion";
import SwiperComponent from '../components/UseSwiper';

const Home = () => {
    return (
        <div className='space-y-10'>
            <div className='space-y-32'>

                <div className=' mt-24'>
                    <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="relative w-full overflow-hidden h-96"> {/* Adjust height as needed */}
                            <img src='/home-banner.jpg' alt="Banner" className="w-full h-full object-cover" /> {/* Apply object-cover to fill the container */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                <h1 className="text-4xl md:text-6xl font-bold">Welcome to BLUMIN</h1>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <SwiperComponent />
                <div>
                    <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Heading align='center' weight='bold' size='8'>Who We Are</Heading>
                    </motion.div>
                    <motion.div className='mb-15 ml-10 mr-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Heading align='left' weight='light' size='6'>BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.</Heading>
                    </motion.div>
                </div>


            </div>

            <div>
                <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Heading align='center' weight='bold' size='8'>What We Offer</Heading>
                </motion.div>

            </div>
            <div>
                <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Heading align='center' weight='bold' size='8'>Why Choose BLUMIN</Heading>
                </motion.div>
                <div className='flex space-x-10 px-5'>
                    <FeatureCard
                        image='./cardimage1.png'
                        title='Experience'
                        data='With years of experience in facilitating successful collaborations, BLUMIN brings unparalleled expertise to every partnership.'
                    />
                    <FeatureCard
                        image='./cardimage2.png'
                        title='Innovation'
                        data='Our commitment to innovation drives us to continually explore new opportunities and push the boundaries of what’s possible.'
                    />
                    <FeatureCard
                        image='./cardimage3.png'
                        title='Impact'
                        data='Join a community dedicated to making a meaningful impact on society through research-driven solutions and industry partnerships.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
