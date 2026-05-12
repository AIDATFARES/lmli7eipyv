"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Link from 'next/link';

interface BlogClientProps {
  post: {
    title: string;
    content: string;
    category: string;
    author: string;
    date: string;
    coverImage?: string;
  };
}

interface ContentItem {
  type: 'paragraph' | 'image' | 'table' | 'faq' | 'subtitle' | 'list-item' | 'step-item' | 'button' | 'toc';
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  data?: string[][];
  question?: string;
  answer?: string;
  href?: string;
}

interface ContentSection {
  type: 'intro' | 'section';
  title?: string;
  items: ContentItem[];
}

// --- Custom Components for Premium UI ---

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group ${className}`}
  >
    {children}
  </motion.div>
);

const StepCard = ({ number, title, text, delay = 0 }: { number: string, title: string, text: string, delay?: number }) => (
  <GlassCard delay={delay} className="relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-5">
      <span className="text-8xl font-black">{number}</span>
    </div>
    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold mb-6 border border-primary/30">
      {number}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-slate-400 leading-relaxed text-sm">{text}</p>
  </GlassCard>
);

const ComparisonTable = ({ data }: { data: string[][] }) => (
  <div className="my-12 overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/10 bg-white/5">
          {data[0].map((header, i) => (
            <th key={i} className="p-6 text-sm font-bold uppercase tracking-widest text-primary">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`p-6 text-sm ${j === 0 ? 'font-bold text-white' : 'text-slate-400'}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="mb-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all">
    <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary" />
      {question}
    </h4>
    <div className="text-slate-400 text-sm leading-relaxed pl-5">
      {parseMarkdown(answer)}
    </div>
  </div>
);

const PremiumImage = ({ src, alt, caption }: { src: string, alt: string, caption?: string }) => (
  <div className="my-16 group">
    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover max-h-[500px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-primary/5 mix-blend-overlay z-20 pointer-events-none"
      />
    </div>
    {caption && (
      <p className="mt-4 text-center text-slate-500 text-sm italic font-medium">
        {caption}
      </p>
    )}
  </div>
);

const parseMarkdown = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

  return parts.map((part: string, i: number) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <Link
          key={i}
          href={linkMatch[2]}
          className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-colors font-semibold"
        >
          {linkMatch[1]}
        </Link>
      );
    }
    return part;
  });
};

export default function BlogClient({ post }: BlogClientProps) {
  // Parse content into logical sections for the premium renderer
  const lines = post.content.split('\n');
  const sections: ContentSection[] = [];
  let currentSection: ContentSection = { type: 'intro', items: [] };
  let currentTable: string[][] = [];

  lines.forEach((line: string) => {
    if (line.startsWith('|')) {
      const row = line.split('|').filter((c: string) => c.trim() !== '' || line.includes('||')).map((c: string) => c.trim());
      if (row.length > 0 && !line.includes('---')) {
        currentTable.push(row);
      }
      return;
    } else if (currentTable.length > 0) {
      currentSection.items.push({ type: 'table', data: currentTable });
      currentTable = [];
    }

    if (line.startsWith('## ')) {
      if (currentSection.items.length > 0) sections.push(currentSection);
      currentSection = { type: 'section', title: line.replace('## ', ''), items: [] };
    } else if (line.startsWith('### ')) {
      currentSection.items.push({ type: 'subtitle', text: line.replace('### ', '') });
    } else if (line.startsWith('**Q:**')) {
      currentSection.items.push({ type: 'faq', question: line.replace('**Q:** ', ''), answer: "" });
    } else if (line.startsWith('**A:**')) {
      const lastItem = currentSection.items[currentSection.items.length - 1];
      if (lastItem && lastItem.type === 'faq') {
        lastItem.answer = line.replace('**A:** ', '');
      }
    } else if (line.startsWith('- ')) {
      currentSection.items.push({ type: 'list-item', text: line.replace('- ', '') });
    } else if (line.startsWith('![')) {
      const match = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        currentSection.items.push({ type: 'image', alt: match[1], src: match[2] });
      }
    } else if (line.startsWith('**Caption :**')) {
      const lastItem = currentSection.items[currentSection.items.length - 1];
      if (lastItem && lastItem.type === 'image') {
        lastItem.caption = line.replace('**Caption :** ', '');
      }
    } else if (line.match(/^\d\./)) {
      currentSection.items.push({ type: 'step-item', text: line });
    } else if (line.startsWith('[BUTTON]')) {
      const match = line.match(/\[BUTTON\]\((.*?)\)\s+(.*)/);
      if (match) {
        currentSection.items.push({ type: 'button', href: match[1], text: match[2] });
      }
    } else if (line.trim() === '[TOC]') {
      currentSection.items.push({ type: 'toc' });
    } else if (line.trim() !== '' && !line.startsWith('⚡') && !line.startsWith('# ')) {
      currentSection.items.push({ type: 'paragraph', text: line });
    }
  });
  if (currentTable.length > 0) currentSection.items.push({ type: 'table', data: currentTable });
  if (currentSection.items.length > 0) sections.push(currentSection);

  return (
    <main className="min-h-screen bg-[#030711] text-white overflow-x-hidden">
      <AnimatedBackground />

      <section className="pt-36 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-medium transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-500 text-sm border-b border-white/5 pb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-[10px] font-bold text-white">
                  NA
                </div>
                <span className="text-slate-300 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0d1117] shadow-2xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent" />
              </div>
            </motion.div>
          )}

          {sections.map((section, idx) => {
            if (section.type === 'intro') {
              return (
                <div key={idx} className="mb-16">
                  {section.items.map((item: ContentItem, i: number) => {
                    if (item.type === 'paragraph') return <p key={i} className="text-lg text-slate-400 mb-8 leading-relaxed">{item.text}</p>;
                    if (item.type === 'image' && item.src && item.alt) return <PremiumImage key={i} src={item.src} alt={item.alt} caption={item.caption} />;
                    if (item.type === 'toc') return (
                      <div key={i} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 mb-12">
                        <h3 className="text-xl font-bold mb-4 text-white">Table of Contents</h3>
                        <ul className="space-y-3">
                          {sections.filter((s: ContentSection) => s.title).map((s: ContentSection, idx: number) => (
                            <li key={idx}>
                              <Link href={`#${s.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-primary hover:text-primary/80 transition-colors font-medium text-sm flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                    return null;
                  })}
                </div>
              );
            }

            const listItems = section.items.filter((it: ContentItem) => it.type === 'list-item');
            const avgLength = listItems.length > 0
              ? listItems.reduce((sum: number, it: ContentItem) => sum + (it.text?.length || 0), 0) / listItems.length
              : 0;
            const isFeatures = listItems.length >= 3 && avgLength < 100;
            const isSteps = section.items.filter((it: ContentItem) => it.type === 'step-item').length >= 3;

            return (
              <div key={idx} className="mb-20">
                {section.title && (
                  <h2 id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="text-3xl font-bold mb-10 text-white flex items-center gap-4 scroll-mt-32">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    {section.title}
                  </h2>
                )}

                {isSteps ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.filter((it: ContentItem) => it.type === 'step-item').map((item: ContentItem, i: number) => (
                      <StepCard
                        key={i}
                        number={(i + 1).toString()}
                        title={item.text?.split(':')[0].replace(/^\d\.\s*/, '') || ""}
                        text={item.text?.split(':')[1] || ""}
                        delay={i * 0.1}
                      />
                    ))}
                  </div>
                ) : isFeatures ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item: ContentItem, i: number) => {
                      if (item.type === 'list-item') {
                        return (
                          <GlassCard key={i} delay={i * 0.05} className="flex flex-col h-full p-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold mb-4 text-white">
                              {item.text?.includes(':') ? item.text.split(':')[0] : item.text}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {parseMarkdown(item.text?.includes(':') ? item.text.split(':')[1] : "")}
                            </p>
                          </GlassCard>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {section.items.map((item: ContentItem, i: number) => {
                      if (item.type === 'paragraph' && item.text) return <div key={i} className="text-lg text-slate-400 mb-8 leading-relaxed">{parseMarkdown(item.text)}</div>;
                      if (item.type === 'image' && item.src && item.alt) return <PremiumImage key={i} src={item.src} alt={item.alt} caption={item.caption} />;
                      if (item.type === 'table' && item.data) return <ComparisonTable key={i} data={item.data} />;
                      if (item.type === 'faq' && item.question && item.answer) return <FAQItem key={i} question={item.question} answer={item.answer} />;
                      if (item.type === 'subtitle' && item.text) return <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-white">{item.text}</h3>;
                      if (item.type === 'list-item') return (
                        <div key={i} className="flex gap-4 mb-4 items-start">
                          <div className="mt-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /></div>
                          <p className="text-slate-400">{item.text}</p>
                        </div>
                      );
                      if (item.type === 'button' && item.href && item.text) return (
                        <Link key={i} href={item.href} className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-8 mr-4 tracking-widest text-[13px]">
                          {item.text}
                        </Link>
                      );
                      return null;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tight">
                Start Watching Now
              </h2>
              <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
                Join 50,000+ happy users and experience premium 4K IPTV.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                  GET STARTED
                </Link>
                <Link
                  href="/plans"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl transition-all hover:bg-white/10"
                >
                  VIEW PLANS
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                <span>✓ Instant activation</span>
                <span>✓ 50K+ channels</span>
                <span>✓ 4K streaming</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors group font-bold tracking-widest text-xs uppercase"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>
      </div>
    </main>
  );
}
