import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Using Link and useNavigate for navigation

// Assuming the BlogList data is available directly here
const BlogList = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "April 1, 2025",
    image:
      "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/blogs/how-to-use-a-dishwasher-for-best-washing-of-utensils/417x250_29.png",
    excerpt:
      "Web development is evolving at a rapid pace. From front-end to back-end, here’s what the future holds...",
    content:
      "Web development is evolving at a rapid pace. From front-end to back-end, here’s what the future holds. We’ll explore the latest trends in web development, including the rise of serverless computing, static site generators, and microservices architecture. With advancements in AI, machine learning, and the increasing adoption of cloud computing, web development is becoming more powerful and efficient. Developers are also shifting toward headless CMS solutions to decouple content management from the presentation layer",
  },
  {
    id: 2,
    title: "Understanding React.js",
    date: "March 22, 2025",
    image:
      "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/blogs/10-reasons-to-buy-a-washer-dryer-refresher-this-season/1.png",
    excerpt:
      "React is a popular JavaScript library used for building user interfaces. Let’s dive deep into how it works...",
    content:
      "React is a popular JavaScript library used for building user interfaces. Let’s dive deep into how it works. React uses a component-based architecture, allowing developers to build reusable UI components. It also offers a virtual DOM for improved performance, making it one of the most efficient libraries for building modern web applications.",
  },
  {
    id: 3,
    title: "Top 10 JavaScript Frameworks",
    date: "March 15, 2025",
    image:
      "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/blogs/a-place-for-everything-and-everything-in-its-place/kitchen_1.png",
    excerpt:
      "JavaScript frameworks are essential for building scalable applications. Here are the top 10 frameworks you should know about...",
    content:
      "JavaScript frameworks are essential for building scalable applications. Here are the top 10 frameworks you should know about. These frameworks provide developers with powerful tools to build responsive and high-performance applications. Some of the most popular ones include Angular, Vue, React, and Node.js.",
  },
  {
    id: 4,
    title: "Web Accessibility Best Practices",
    date: "March 12, 2025",
    image:
      "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/blogs/frequently-asked-questions-about-dishwashers/417x250_30.png",
    excerpt:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
    content:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices, including proper contrast, keyboard navigation, and support for screen readers. Accessibility is essential to ensure everyone, regardless of ability, can use and navigate your website.",
  },
  {
    id: 5,
    title: "Web Accessibility Best Practices",
    date: "March 12, 2025",
    image:
      "https://www.ifbappliances.com/content/dam/ifbindustrieslimitedprogram/blogs/how-to-avoid-and-remove-odour-in-clothes/417x250_4.png",
    excerpt:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
    content:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices, including proper contrast, keyboard navigation, and support for screen readers. Accessibility is essential to ensure everyone, regardless of ability, can use and navigate your website.",
  },
  {
    id: 6,
    title: "Web Accessibility Best Practices",
    date: "March 12, 2025",
    image:
      "https://images.pexels.com/photos/33934104/pexels-photo-33934104.jpeg",
    excerpt:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
    content:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices, including proper contrast, keyboard navigation, and support for screen readers. Accessibility is essential to ensure everyone, regardless of ability, can use and navigate your website.",
  },
  {
    id: 7,
    title: "Web Accessibility Best Practices",
    date: "March 12, 2025",
    image:
      "https://images.pexels.com/photos/28479466/pexels-photo-28479466.jpeg",
    excerpt:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
    content:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices, including proper contrast, keyboard navigation, and support for screen readers. Accessibility is essential to ensure everyone, regardless of ability, can use and navigate your website.",
  },
  {
    id: 8,
    title: "Web Accessibility Best Practices",
    date: "March 12, 2025",
    image: "https://ochaka.vercel.app/images/products/book/product-18.jpg",
    excerpt:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices.",
    content:
      "Making websites accessible is more important than ever. Learn about web accessibility and how to implement best practices, including proper contrast, keyboard navigation, and support for screen readers. Accessibility is essential to ensure everyone, regardless of ability, can use and navigate your website.",
  },
];

const SingleBlog = () => {
  const { id } = useParams(); // Get the blog post id from the URL
  const navigate = useNavigate();

  // Find the current blog based on the id from the URL
  const blog = BlogList.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 p-4">
        Blog not found.
      </div>
    );
  }

  // Build a randomized list excluding the current blog
  const randomBlogs = [...BlogList]
    .filter((b) => b.id !== blog.id)
    .sort(() => 0.5 - Math.random()) // Randomizing the list
    .slice(0, 6); // Get first 6 related blogs

  // Safe guards to avoid accessing undefined indexes
  const hasLatest = randomBlogs.length > 0;
  const latestPost = hasLatest ? randomBlogs[0] : null;
  const moreBlogs = hasLatest ? randomBlogs.slice(1) : []; // show all picked ones in "More Blogs"

  return (
    <div className="min-h-screen mt-20 bg-stone-100">
      {/* Header */}
     
      <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Blog Content */}
          <article className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-56 md:h-64 object-contain rounded mb-4 sm:mb-6"
              loading="lazy"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base break-words">
              {blog.content}
            </p>
          </article>

          {/* Random Blogs Sidebar (right) */}
          <aside className="space-y-3 sm:space-y-4 mt-10 lg:mt-0">
            <h2 className="text-lg sm:text-xl font-semibold text-black">
              Random Blogs
            </h2>
            {randomBlogs.map((b) => (
              <div
                key={b.id}
                onClick={() => navigate(`/blog/${b.id}`)}
                className="flex items-center bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:scale-[1.02] transition p-2"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-16 h-12 sm:w-20 sm:h-14 object-contain rounded"
                  loading="lazy"
                />
                <div className="ml-2 sm:ml-3 overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-semibold text-black-900 truncate">
                    {b.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 truncate">
                    {b.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Latest Post and More Blogs Section */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Latest Post */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
              Latest Post
            </h2>
            {hasLatest ? (
              <div
                onClick={() => navigate(`/blog/${latestPost.id}`)}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.03] transition p-4 sm:p-6"
              >
                <img
                  src={latestPost.image}
                  alt={latestPost.title}
                  className="w-full sm:w-36 h-32 sm:h-24 object-contain rounded mb-3 sm:mb-0"
                  loading="lazy"
                />
                <div className="sm:ml-5">
                  <h4 className="text-base sm:text-lg font-semibold text-black break-words">
                    {latestPost.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 break-words">
                    {latestPost.excerpt}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-4 text-gray-600">
                No other posts found.
              </div>
            )}
          </div>

          {/* More Blogs */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
              More Blogs
            </h2>
            {moreBlogs.length > 0 ? (
              moreBlogs.map((b) => (
                <div
                  key={b.id}
                  onClick={() => navigate(`/blog/${b.id}`)}
                  className="flex items-center bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:scale-[1.02] transition p-2 mb-3 sm:mb-4"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-20 h-14 object-cover rounded"
                    loading="lazy"
                  />
                  <div className="ml-2 sm:ml-4 overflow-hidden">
                    <h4 className="text-sm sm:text-base font-semibold text-black truncate">
                      {b.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      {b.excerpt}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-4 text-gray-600">
                No more posts available.
              </div>
            )}
          </div>
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/blogs"
            className="inline-block bg-black text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Back to Blogs ←
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
