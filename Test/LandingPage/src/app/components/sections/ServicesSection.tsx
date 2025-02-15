import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-quality websites.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines.',
    icon: '🔍',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4">We offer a wide range of services to meet your needs.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};