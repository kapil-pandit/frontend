// src/pages/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-12 gap-6">
                {/* Text Content - Left 6 Columns */}
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Our Platform
                    </h1>
                    <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
                        This is a sample text that introduces the platform. It provides users with a brief overview of the services and features available. When you expand the text, you can see more detailed information about what the platform has to offer. This could include detailed descriptions, unique value propositions, or other highlights of your platform that are worth exploring further.
                    </p>
                    <div className="mt-4 flex space-x-4">
                        {/* View More Button */}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => navigate('/about')} // Navigate to About page
                        >
                            View More
                        </button>
                        {/* Expand Button */}
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={() => setIsExpanded(!isExpanded)} // Toggle expanded state
                        >
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                </div>

                {/* Image Content - Right 6 Columns */}
                <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                    <img
                        src="https://img.freepik.com/free-photo/glowing-spaceship-orbits-sphere-deep-space-generated-by-ai_188544-9658.jpg?t=st=1733677719~exp=1733681319~hmac=3d1dbe4f24cf57405556c902a4ec2c62127ea4f0f7a3f142f92c3e63538ec323&w=1060"
                        alt="Sample Image"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
            <span> <br></br></span>
            <div className="grid grid-cols-12 gap-6">
                {/* Text Content - Left 6 Columns */}
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Our Platform
                    </h1>
                    <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
                        This is a sample text that introduces the platform. It provides users with a brief overview of the services and features available. When you expand the text, you can see more detailed information about what the platform has to offer. This could include detailed descriptions, unique value propositions, or other highlights of your platform that are worth exploring further.
                    </p>
                    <div className="mt-4 flex space-x-4">
                        {/* View More Button */}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => navigate('/about')} // Navigate to About page
                        >
                            View More
                        </button>
                        {/* Expand Button */}
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={() => setIsExpanded(!isExpanded)} // Toggle expanded state
                        >
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                </div>

                {/* Image Content - Right 6 Columns */}
                <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                    <img
                        src="https://img.freepik.com/premium-photo/stunning-realistic-wallpaper-planet-starry-astrophotography-universe-cosmus-space-background-generative-ai_742252-11509.jpg?w=1060"
                        alt="Sample Image"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
