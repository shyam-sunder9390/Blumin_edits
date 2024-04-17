import React from 'react';
import { Card, Heading, Text } from '@radix-ui/themes';

const Academia = () => {
    const points = [
        'Problem Presentation',
        'Timeline for Selection Process',
        'Selection Criteria based on Project Proposal',
        'Positions based on Project Proposal Form',
        'Review and Selection Process',
        'Application Submission',
        'Governing Body Positions and Selection',
        'Invitation for Solution Applicants'
    ];

    return (
        <div className="min-h-screen py-8 px-4">
            <div className='mb-8'>
                <Heading align='center' weight='bold' size='8'>Academia</Heading>
            </div>
            <div className='mb-5'>
                <Heading align='center' weight='medium'>Aim: Problem Problem-Solving Mechanism</Heading>
            </div>
            <div className='mb-5'>
                <Heading align='center' weight='medium'>Objective: Engaging Universities for Industry Solutions</Heading>
            </div>
            <p className='text-center text-gray-600'>
                Graduates of 2nd, 3rd, 4th, and beyond apply for diverse roles, while professors serve as Academic Representatives, offering academic insights alongside Industry Requirements.
            </p>
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {points.map((point, index) => (
                        <Card key={index} size="2" className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                            <div className="p-4">
                                <Text as="div" className="font-medium text-center text-gray-800">
                                    {point}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Academia;
