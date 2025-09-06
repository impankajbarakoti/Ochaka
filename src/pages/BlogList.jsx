import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using React Router for navigation

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt:
        "Web development is evolving at a rapid pace. From front-end to back-end, here’s what the future holds...",
      date: "April 1, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-13.jpg", // Image URL
    },
    {
      id: 2,
      title: "Understanding React.js",
      excerpt:
        "React is a popular JavaScript library used for building user interfaces. Let’s dive deep into how it works...",
      date: "March 22, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-14.jpg", // Image URL
    },
    {
      id: 3,
      title: "Top 10 JavaScript Frameworks",
      excerpt:
        "JavaScript frameworks are essential for building scalable applications. Here are the top 10 frameworks you should know about...",
      date: "March 15, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-15.jpg", // Image URL
    },
    {
      id: 4,
      title: "Web Accessibility Best Practices",
      excerpt:
        "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
      date: "March 12, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-16.jpg", // Image URL
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt:
        "Learn the differences between CSS Grid and Flexbox, and how to use both to create complex layouts with ease.",
      date: "March 10, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-17.jpg", // Image URL
    },
    {
      id: 6,
      title: "The Evolution of JavaScript",
      excerpt:
        "JavaScript has evolved significantly over the years. Explore the key changes and improvements made to the language.",
      date: "March 8, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-18.jpg", // Image URL
    },
    {
      id: 7,
      title: "The Rise of Node.js",
      excerpt:
        "Node.js has become a powerful tool for backend development. Understand how Node.js is changing server-side development.",
      date: "March 5, 2025",
      image: "https://ochaka.vercel.app/images/products/book/product-10.jpg", // Image URL
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // Number of blogs to display per page
  const totalBlogs = blogs.length;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Latest Blog Posts
      </h2>
      <div className="space-y-8">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row"
          >
            {/* Left - Blog Image */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-36 lg:h-56 object-contain rounded-md"
              />
            </div>
            {/* Right - Blog Content */}
            <div className="sm:w-2/3 sm:pl-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className="mx-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
