import React from 'react';

export const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                    <p className="text-lg text-gray-600 mt-4">Learn more about our company and our values.</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-4">
                            Our mission is to provide the best services to help you grow your business. We are committed to delivering high-quality solutions that meet your needs and exceed your expectations.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                        <p className="text-gray-600 mb-4">
                            We believe in integrity, innovation, and customer satisfaction. Our team works tirelessly to ensure that we deliver the best results for our clients.
                        </p>
                        <button className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};