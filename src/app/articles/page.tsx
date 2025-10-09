"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getArticles } from '@/lib/ghostArticles';
import { GhostPost, toValidGhostPost } from '@/lib/types';
import Image from 'next/image';

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<GhostPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const articlesPerPage = 3;

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const fetchedArticles = await getArticles();
        
        // Transform and validate Ghost articles
        const transformedArticles = fetchedArticles
          .map(toValidGhostPost)
          .filter((article): article is GhostPost => article !== null);

        setArticles(transformedArticles);
        
        if (transformedArticles.length === 0) {
          setError('No articles found');
        }
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchArticles();
  }, []);

  const totalPages = articles.length > 0 
    ? Math.ceil(articles.length / articlesPerPage) 
    : 0;

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  if (isLoading) {
    return (
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-muted-foreground">Loading articles...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the latest trends and innovations in sustainable technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} passHref>
              <article className="group cursor-pointer" data-slug={article.slug}>
                <div className="bg-slate-200 dark:bg-slate-800 rounded-md h-48 mb-4 overflow-hidden">
                  <Image 
                    src={article.feature_image || 'https://via.placeholder.com/400x300'} 
                    alt={article.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(article.published_at).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">
                  {article.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10 h-10 p-0"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
