"use client";

import Link from "next/link";
import React, { useEffect, useState } from 'react';
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  img: string;
}

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const res = await fetch('https://kidstick-server.vercel.app/blogs');
      const data = await res.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="relative" style={{ backgroundColor: "#F1EEFC" }}>
      {/* Background Images */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat"
        style={{ backgroundImage: "url('/images/blogs/pink-rainbow.png')" }}
      ></div>
      <div
        className="absolute bottom-0 -right-24 w-96 h-64 bg-no-repeat"
        style={{ backgroundImage: "url('/images/blogs/apple-live.png')" }}
      ></div>
      <div
        className="w-full max-w-7xl mx-auto px-4 py-8 relative"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-sm text-gray-600 mb-2">News & Blogs</h2>
            <h1 className="text-2xl md:text-3xl font-bold">Boost Your Children's Brain & Skills</h1>
          </div>
          <Link
            href="#"
            className="text-[#ff5d5d] hover:text-[#ff4444] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
