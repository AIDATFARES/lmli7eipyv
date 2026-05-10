"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Zap, Trophy, Activity } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const CATEGORIES = ['All News', 'Football', 'Tennis', 'Basketball', 'Golf'];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'All News': <Activity className="w-4 h-4" />,
  'Football': <Trophy className="w-4 h-4" />,
  'Tennis': <Zap className="w-4 h-4" />,
  'Basketball': <Activity className="w-4 h-4" />,
  'Golf': <Zap className="w-4 h-4" />,
};

// Extended articles list including static news cards for categories without real posts
const STATIC_ARTICLES = [
  {
    id: 's1',
    slug: 'world-cup-2026-countdown-days-until-fifa',
    title: 'World Cup 2026 Countdown – How Many Days Until FIFA World Cup',
    description: 'The clock is ticking. 48 teams. 3 nations. The biggest World Cup in history starts June 11, 2026.',
    date: 'May 10, 2026',
    category: 'Football',
    coverImage: '/blog/world-cup-2026-stadium-1-1024x731.webp',
    featured: true,
  },
  {
    id: 's2',
    slug: 'world-cup-2026-biggest-football-tournament-history',
    title: 'World Cup 2026 | The Biggest Football Tournament in History',
    description: '104 matches, 3 countries, 6 billion viewers. Here\'s why 2026 will be unlike any World Cup ever staged.',
    date: 'May 10, 2026',
    category: 'Football',
    coverImage: '/blog/d364de8d-384d-4e6f-b85d-cae505675813.webp',
    featured: true,
  },
  {
    id: 's3',
    slug: 'firestick-iptv-world-cup-guide-2026',
    title: 'IPTV to Firestick: Complete Guide to Streaming Football',
    description: 'How to watch World Cup 2026 on Firestick in 4K. Step-by-step setup guide for the ultimate streaming experience.',
    date: 'May 10, 2026',
    category: 'Football',
    coverImage: '/blog/IPTV-to-Firestick-Complete-Guide-to-Streaming-Football-and-World-Cup-Matches.webp',
    featured: false,
  },
  {
    id: 's4',
    slug: 'iptv-smarters-plus-guide-2026',
    title: 'IPTV Smarters Plus: The Ultimate Expert Guide for 2026',
    description: 'The definitive guide to IPTV Smarters Plus. Installation, advanced config, and expert tips for 4K streaming.',
    date: 'May 9, 2026',
    category: 'Football',
    coverImage: '/blog/high-quality-iptv-service.webp',
    featured: false,
  },
  {
    id: 's5',
    slug: '#',
    title: 'Wimbledon 2026: Djokovic Eyes Record-Breaking 25th Grand Slam',
    description: 'As the grass court season approaches, all eyes are on Centre Court and the man who has redefined tennis greatness.',
    date: 'May 9, 2026',
    category: 'Tennis',
    coverImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 's6',
    slug: '#',
    title: 'NBA Finals 2026: Who Will Claim the Larry O\'Brien Trophy?',
    description: 'The Eastern and Western Conference Finals are set. Here\'s our deep-dive analysis on who will cut down the nets.',
    date: 'May 8, 2026',
    category: 'Basketball',
    coverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 's7',
    slug: '#',
    title: 'The Masters 2026: Rory McIlroy Completes Career Grand Slam',
    description: 'A stunning final round at Augusta National. After 12 years of trying, Rory finally slips on the Green Jacket.',
    date: 'May 7, 2026',
    category: 'Golf',
    coverImage: 'https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 's8',
    slug: '#',
    title: 'World Cup 2026 Stadiums: A Complete Guide to Every Venue',
    description: '16 iconic stadiums across USA, Mexico, and Canada. Your complete guide to the venues that will host football history.',
    date: 'May 7, 2026',
    category: 'Football',
    coverImage: '/blog/world-cup-clubes.webp',
    featured: false,
  },
];

export default function SportsNewsPage() {
  const [activeCategory, setActiveCategory] = useState('All News');

  const filtered = activeCategory === 'All News'
    ? STATIC_ARTICLES
    : STATIC_ARTICLES.filter(a => a.category === activeCategory);

  const featuredArticles = STATIC_ARTICLES.filter(a => a.featured);
  const restArticles = filtered.filter(a => !a.featured);

  return (
    <main className="min-h-screen bg-[#060814] text-white overflow-x-hidden">
      <AnimatedBackground />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              World Cup 2026 + Sports Hub
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              <span className="text-white">Sports News</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Around the World
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Latest updates, insights, and guides covering football, tennis, basketball, golf, and global sports.
            </p>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Your premier destination for World Cup 2026 coverage, IPTV streaming guides, and breaking sports news from every corner of the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORY FILTER BAR ─── */}
      <section className="sticky top-16 z-40 py-4 px-4 backdrop-blur-xl border-y border-white/5 bg-[#060814]/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-purple-500 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {CATEGORY_ICONS[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLES (shown only when All News) ─── */}
      <AnimatePresence mode="wait">
        {activeCategory === 'All News' && (
          <motion.section
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="py-16 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-8 h-[2px] bg-purple-500" />
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Featured Stories</h2>
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-[10px] font-bold rounded-full border border-purple-500/30 uppercase tracking-widest">World Cup</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article, i) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.1)]"
                  >
                    <Link href={`/blog/${article.slug}`} className="block">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {article.category} • Featured
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </div>
                        <h3 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-5">
                          {article.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm group-hover:gap-3 transition-all duration-300">
                          Read Full Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ─── BROWSE LATEST NEWS ─── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-[2px] bg-indigo-500" />
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Browse Latest News</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === 'All News' ? restArticles : filtered).map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-[#0d1117] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.07)]"
                >
                  <Link href={article.slug.startsWith('#') ? '#' : `/blog/${article.slug}`} className="block overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#0d1117]/80 backdrop-blur-md text-purple-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-purple-500/20">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-medium mb-3">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <Link href={article.slug.startsWith('#') ? '#' : `/blog/${article.slug}`}>
                      <h3 className="text-white text-base font-bold leading-snug mb-3 group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-grow mb-4">
                      {article.description}
                    </p>
                    <Link
                      href={article.slug.startsWith('#') ? '#' : `/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all duration-200 mt-auto"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-3 py-20 text-center text-slate-600">
                  <p className="text-lg font-bold">No articles yet in this category.</p>
                  <p className="text-sm mt-2">Check back soon for the latest sports news.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── LIVE STATS BANNER ─── */}
      <section className="py-8 px-4 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Days to Kickoff', value: '32', icon: '⏱' },
              { label: 'Total Matches', value: '104', icon: '⚽' },
              { label: 'Nations Competing', value: '48', icon: '🌍' },
              { label: 'Host Cities', value: '16', icon: '🏟' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-[#0d1117] border border-white/[0.06] rounded-2xl px-5 py-4 hover:border-purple-500/20 transition-colors"
              >
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-[#0d1117]" />
            <div className="absolute inset-0 bg-[url('/blog/world-cup-2026-stadium-1-1024x731.webp')] bg-cover bg-center opacity-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full" />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Limited Time Offer
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                Subscribe Today for the<br />
                <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Ultimate World Cup Experience
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Watch all 104 World Cup 2026 matches in 4K HDR. Access 50,000+ channels across football, tennis, basketball, golf, and every sport on the planet.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/pricing"
                  className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="relative">Subscribe Now</span>
                </Link>
                <Link
                  href="/blog"
                  className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Browse More News
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-white/5 pt-8">
                <span className="flex items-center gap-1.5">✓ All 104 Matches</span>
                <span className="flex items-center gap-1.5">✓ 50,000+ Live Channels</span>
                <span className="flex items-center gap-1.5">✓ 4K Ultra HD</span>
                <span className="flex items-center gap-1.5">✓ Instant Activation</span>
                <span className="flex items-center gap-1.5">✓ Zero Buffering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
