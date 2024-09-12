import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OnboardingStep: React.FC = () => {
    const { step } = useParams<{ step: string }>();
    const navigate = useNavigate();
    const currentStep = parseInt(step || '1', 10);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const stepContent = [
        {
            title: 'Match your Aesthetic',
            videoUrl: 'https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4',
        },
        {
            title: 'Explore 100+ Styles',
            videoUrl: 'https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4',
        },
        {
            title: 'Complete Your Profile',
            content: 'Fill in your details to personalize your experience.',
        },
    ];

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentStep < 3) {
                navigate(`/onboarding/${currentStep + 1}`);
            } else {
                navigate('/dashboard');
            }
        }, 500);
    };

    useEffect(() => {
        setIsTransitioning(false);
    }, [currentStep]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-indigo-600 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[80vh]">
                <div className="p-6 flex-shrink-0">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Step {currentStep}: {stepContent[currentStep - 1].title}</h2>
                </div>
                <div className="flex-grow relative">
                    {stepContent[currentStep - 1].videoUrl ? (
                        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                                <source src={stepContent[currentStep - 1].videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            <p className="text-center text-gray-600 p-6">{stepContent[currentStep - 1].content}</p>
                        </div>
                    )}
                </div>
                <div className="p-6 flex-shrink-0">
                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {currentStep < 3 ? 'Next' : 'Complete'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingStep;