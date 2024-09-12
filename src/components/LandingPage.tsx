import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-400 to-indigo-600 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[80vh]">
                <div className="p-6 flex-shrink-0">
                    <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Welcome to Glam!</h1>
                </div>
                <div className="flex-grow relative">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src="https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="p-6 flex-shrink-0">
                    <Link
                        to="/onboarding/1"
                        className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 hover:subpixel-antialiased"
                    >
                        <span className="text-base">Get Started</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;