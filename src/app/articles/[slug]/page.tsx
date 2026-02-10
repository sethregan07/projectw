import { getArticleBySlug, articles } from '@/lib/articles';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // Get related articles (same topic, excluding current article)
  const sameTopicArticles = articles.filter(a => a.topic === article?.topic && a.slug !== slug);
  // Get other articles (different topics)
  const otherArticles = articles.filter(a => a.topic !== article?.topic && a.slug !== slug);
  // Combine and limit to 6 total
  const relatedArticles = [...sameTopicArticles, ...otherArticles].slice(0, 6);

  if (!article) {
    return (
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link href="/articles">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link href="/articles" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">{article.topic}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            {article.description}
          </p>
          <p className="text-sm text-muted-foreground">
            Published on {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* YouTube Links */}
        {article.youtubeLinks && article.youtubeLinks.length > 0 && (
          <div className="mb-8 p-6 bg-muted/30 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Related Videos
            </h2>
            <div className="space-y-3">
              {article.youtubeLinks.map((link, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary font-medium transition-colors"
                    >
                      {link.title}
                    </a>
                    {link.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split('\n')
                .map(line => {
                  // Convert markdown-style headers to HTML
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-semibold mt-6 mb-3">${line.substring(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-medium mt-4 mb-2">${line.substring(4)}</h3>`;
                  }

                  // Convert markdown-style lists
                  if (line.startsWith('- ')) {
                    return `<li class="ml-4">${line.substring(2)}</li>`;
                  }

                  // Convert bold text
                  line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                  // Convert empty lines to paragraph breaks
                  if (line.trim() === '') {
                    return '<br>';
                  }

                  // Regular paragraphs
                  return `<p class="mb-4">${line}</p>`;
                })
                .join('')
                .replace(/<li class="ml-4">(.*?)<\/li>/g, '<ul class="list-disc ml-6 mb-4"><li>$1</li></ul>')
                .replace(/<\/ul>\s*<ul class="list-disc ml-6 mb-4">/g, '')
            }}
          />
        </div>

        {/* Further Resources */}
        {(article.youtubeLinks && article.youtubeLinks.length > 0) || (article.books && article.books.length > 0) ? (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Further Resources</h2>

            {/* YouTube Videos */}
            {article.youtubeLinks && article.youtubeLinks.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Videos
                </h3>
                <div className="space-y-3">
                  {article.youtubeLinks.map((link, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary font-medium transition-colors"
                        >
                          {link.title}
                        </a>
                        {link.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Books */}
            {article.books && article.books.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Recommended Reading
                </h3>
                <div className="space-y-3">
                  {article.books.map((book, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <a
                              href={book.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground hover:text-primary font-medium transition-colors"
                            >
                              {book.title}
                            </a>
                            {book.author && (
                              <p className="text-sm text-muted-foreground">
                                by {book.author}
                              </p>
                            )}
                          </div>
                        </div>
                        {book.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {book.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <p className="text-muted-foreground mb-2">Found this article helpful?</p>
              <p className="text-sm text-muted-foreground">
                Share it with others who might be interested in {article.topic.toLowerCase()}.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/articles">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Articles
                </Button>
              </Link>
              <Link href="/learn">
                <Button>
                  Explore Topics
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Articles to Explore</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/articles/${relatedArticle.slug}`}>
                  <article className="group cursor-pointer border border-border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                    <Badge variant="outline" className="mb-3">{relatedArticle.topic}</Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                      {relatedArticle.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(relatedArticle.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
