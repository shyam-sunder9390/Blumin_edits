import React from 'react';
import { ImageTextContainer, TextFadeUpAnimation } from '../components/Animation';
import FeatureCard from '../components/FeatureCard'; // Updated component name
import { Heading } from '@radix-ui/themes';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className='space-y-10'>
            <h1>Welcome to BLUMIN!</h1>
            <p>This is the home page of our website.</p>

            {/* Ensure proper formatting for the text content */}
            <ImageTextContainer
                imageSrc="./image1.png"
                textContent="Welcome to BLUMIN Bridging Innovations Between Industry and Academia"
            />


            {/* Ensure proper image paths and provide meaningful text content */}
            <ImageTextContainer
                imageSrc="./vite.svg"
                textContent="Discover our latest projects"
            />
            <div className='space-y-32'>
                <div>
                    <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Heading align='center' weight='bold' size='9'>Who We Are</Heading>
                    </motion.div>
                    <motion.div className='mb-15 ml-10 mr-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Heading align='left' weight='light' size='6'>BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.</Heading>
                    </motion.div>
                </div>

                <motion.div className='mb-10' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Heading align='center' weight='bold' size='9'>Who We Offer</Heading>
                </motion.div>
            </div>

            <div className='flex space-x-10 px-5'>
                {/* Update component name to enhance clarity */}
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
    );
}

export default Home;
