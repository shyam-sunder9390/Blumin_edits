import React from 'react'
import TimeLine from '../components/TimeLine'
import { Heading } from '@radix-ui/themes'

const Projects = () => {
    return (
        <div className='min-h-screen py-8 px-4'>
            <div className='mb-10'>
                <Heading align='center' weight='bold' size='9'>Projects</Heading>
            </div>
            <div className='mb-5'>
                <Heading align='left' weight='regular'>The Time Line</Heading>
            </div>
            <TimeLine />
        </div>
    )
}

export default Projects
