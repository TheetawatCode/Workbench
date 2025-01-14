import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-white text-lg md:text-2xl mb-8">We provide the best services to help you grow your business.</p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};