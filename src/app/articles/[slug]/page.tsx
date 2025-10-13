export default function ArticleDetailPage() {
  // Workaround for Next.js 15 async params - simplified for now
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Article Coming Soon
        </h1>
        <p className="text-muted-foreground">
          This article page is under development. Check back later!
        </p>
        <a href="/articles" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Articles
        </a>
      </div>
    </section>
  );
}
