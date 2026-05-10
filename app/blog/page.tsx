"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <AnimatedBackground />

      {/* Header */}
      <div className="text-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Newsroom
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Insights & <span className="text-primary">Guides</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest IPTV trends, technical guides, and FIFA World Cup 2026 updates.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col rounded-2xl bg-[#0d1117] border border-white/[0.06] overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.08)]"
          >
            {/* Cover Image */}
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="relative h-52 bg-slate-800 overflow-hidden">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <span className="text-4xl opacity-20">📺</span>
                  </div>
                )}
                {/* subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent" />
              </div>
            </Link>

            {/* Card Body */}
            <div className="flex flex-col flex-grow p-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-white text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
              </Link>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow mb-6">
                {post.description}
              </p>

              {/* Read Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
