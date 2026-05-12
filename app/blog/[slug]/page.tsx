import React from 'react';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import BlogClient from './BlogClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const images = post.coverImage ? [post.coverImage] : [];

  return {
    title: `${post.title} | IPTV WorldCup Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: images,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: images,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogClient post={post} />;
}
