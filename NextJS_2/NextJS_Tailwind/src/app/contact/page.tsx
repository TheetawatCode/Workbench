import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows={4}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                    <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                    <div className="h-64 bg-gray-200 rounded-md shadow-md">
                        {/* Replace with an actual map or contact details */}
                        <p className="text-center text-gray-500 p-6">Map or contact details go here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;