"use client";

import Link from "next/link";
import { useEffect, useState } from 'react';
import Heading from "../common/Heading";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  img: string;
}

export default function BlogList() {
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
    <section className="relative overflow-hidden lg:mr-0 mr-5" style={{ backgroundColor: "#F1EEFC" }}>
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
            <h2 className="text-sm text-gray-600 mb-2 font-semibold">News & Blogs</h2>
            <Heading
            title="Boost Your Children's Brain & Skills"
            bgColor="bg-[#FCCDDA]"
            />
          </div>
          <Link
            href="#"
            className="text-[#ff5d5d] hover:text-[#ff4444] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
