"use client"

import { getArticleBySlug } from '@/lib/ghostArticles';
import { GhostPost } from '@/lib/types';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = use(fetchArticle(params.slug));

  async function fetchArticle(slug: string): Promise<GhostPost | null> {
    try {
      const fetchedArticle = await getArticleBySlug(slug);
      
      if (!fetchedArticle) {
        throw new Error('Article not found');
      }
      
      return fetchedArticle;
    } catch (error) {
      console.error('Failed to fetch article:', error);
      return null;
    }
  }

  if (!article) {
    return (
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-red-500">Article not found</p>
          <Link href="/articles" passHref>
            <Button variant="outline" className="mt-4">Back to Articles</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {article.feature_image && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={article.feature_image} 
              alt={article.title || 'Article Image'} 
              width={1200} 
              height={600} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          <div className="text-muted-foreground">
            Published on {new Date(article.published_at || '').toLocaleDateString()}
          </div>
        </header>

        {article.excerpt && (
          <div className="prose dark:prose-invert max-w-none mb-12 text-center text-xl text-muted-foreground">
            {article.excerpt}
          </div>
        )}

        {article.html && (
          <div 
            className="prose dark:prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        )}

        <div className="mt-12 text-center">
          <Link href="/articles" passHref>
            <Button variant="outline">Back to Articles</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}