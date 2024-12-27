import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="md:w-1/2 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-75"></div>
                <img
                    src="/path/to/your/image.jpg"
                    alt="About Image"
                    className="w-full h-full object-cover relative z-10"
                />
            </div>
            <div className="md:w-1/2 w-full p-6">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-lg mb-4">
                    We are dedicated to providing the best service possible. Our team is
                    committed to excellence and innovation.
                </p>
                <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default About;