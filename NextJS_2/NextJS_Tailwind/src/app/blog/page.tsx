import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 1',
            description: 'This is a short description of blog post 1.',
            link: '#'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 2',
            description: 'This is a short description of blog post 2.',
            link: '#'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 3',
            description: 'This is a short description of blog post 3.',
            link: '#'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 4',
            description: 'This is a short description of blog post 4.',
            link: '#'
        },
        {
            id: 5, 
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 5',
            description: 'This is a short description of blog post 5.',
            link: '#'
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 6',
            description: 'This is a short description of blog post 6.',
            link: '#'
        }, 
        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-700 mb-4">{post.description}</p>
                            <a href={post.link} className="text-blue-500 hover:underline">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Previous</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 transition-colors duration-300">Next</button>
            </div>
        </div>
    );
};

export default Blog;