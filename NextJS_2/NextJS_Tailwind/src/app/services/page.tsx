import React from 'react';

const services = [
    {
        icon: '🔧',
        title: 'Service One',
        description: 'Description for service one.',
    },
    {
        icon: '💡',
        title: 'Service Two',
        description: 'Description for service two.',
    },
    {
        icon: '🚀',
        title: 'Service Three',
        description: 'Description for service three.',
    },
    {
        icon: '🌐',
        title: 'Service Four',
        description: 'Description for service four.',
    },
    // Add more services as needed
];

const Services = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;