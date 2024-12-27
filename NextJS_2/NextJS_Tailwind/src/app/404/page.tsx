import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
            <p className="mt-4 text-2xl text-gray-600">Oops! Page not found.</p>
            <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
            <Link href="/">
                <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                    Return to Homepage
                </a>
            </Link>
        </div>
    );
};

export default NotFoundPage;