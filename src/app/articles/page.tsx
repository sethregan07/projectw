import { articles, getArticlesByTopic } from '@/lib/articles';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from '@/components/ui/badge';

const topics = [
  'Vision',
  'Technology',
  'Governance',
  'Economics',
  'Society',
  'Spirituality'
];

export default function ArticlesPage() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Articles by Topic
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover insights on network states, governance, and digital sovereignty
          </p>
        </div>

        {topics.map((topic) => {
          const topicArticles = getArticlesByTopic(topic);
          if (topicArticles.length === 0) return null;

          return (
            <div key={topic} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-foreground">
                  {topic}
                </h3>
                <Badge variant="secondary" className="text-sm">
                  {topicArticles.length} article{topicArticles.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicArticles.map((article) => (
                  <Link key={article.slug} href={`/articles/${article.slug}`}>
                    <article className="group cursor-pointer border border-border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                      <div className="text-sm text-muted-foreground mb-2">
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground line-clamp-3">
                        {article.description}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center mt-16">
          <Link href="/learn">
            <Button size="lg">
              Explore Learning Topics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
