import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-[600px] flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMzYgNTJjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMCA1MmMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi2LjY4NiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Network state for<br />Sustainable Living
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create beautiful, accessible React applications with our comprehensive component library built on modern design principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-base bg-white text-slate-900 hover:bg-slate-100 rounded-sm">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base bg-black text-white hover:bg-gray-800 rounded-sm">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building a Sustainable Future Through Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with sustainable practices to create solutions that benefit both people and the planet.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-md p-6 transition-colors hover:border-primary/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Smart Energy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent energy management systems that optimize consumption and reduce waste through AI-powered insights.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-md p-6 transition-colors hover:border-primary/50">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-md flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Network
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with sustainable communities worldwide and share resources, knowledge, and best practices.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-md p-6 transition-colors hover:border-primary/50">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-md flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Secure & Private
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security with end-to-end encryption ensuring your data remains private and protected.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Highlighted Features Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Solutions for Modern Living
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the future of sustainable technology with our innovative platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-6 text-white hover:bg-white/20 transition-all">
              <div className="text-white mb-3 flex justify-start">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-white/80 text-sm">Sustainable practices at every step</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-6 text-white hover:bg-white/20 transition-all">
              <div className="text-white mb-3 flex justify-start">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-white/80 text-sm">Optimized for peak performance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-6 text-white hover:bg-white/20 transition-all">
              <div className="text-white mb-3 flex justify-start">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-white/80 text-sm">Bank-level security standards</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-6 text-white hover:bg-white/20 transition-all">
              <div className="text-white mb-3 flex justify-start">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-white/80 text-sm">Available worldwide, 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}

<section className="py-24 px-6 bg-background">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Latest Articles & Insights
      </h2>
      <p className="text-lg text-muted-foreground">
        Discover the latest trends and innovations in sustainable technology
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      <Link href="/articles/the-future-of-renewable-energy-networks" passHref>
        <article className="group cursor-pointer" data-slug="the-future-of-renewable-energy-networks">
          <div className="bg-slate-200 dark:bg-slate-800 rounded-md h-48 mb-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop" alt="Renewable Energy" className="w-full h-full object-cover" />
          </div>
          <div className="text-sm text-muted-foreground mb-2">March 15, 2024</div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
            The Future of Renewable Energy Networks
          </h3>
          <p className="text-muted-foreground">
            Exploring how distributed energy systems are transforming our cities and communities.
          </p>
        </article>
      </Link>

      <Link href="/articles/smart-cities-building-tomorrow-today" passHref>
        <article className="group cursor-pointer" data-slug="smart-cities-building-tomorrow-today">
          <div className="bg-slate-200 dark:bg-slate-800 rounded-md h-48 mb-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop" alt="Smart Cities" className="w-full h-full object-cover" />
          </div>
          <div className="text-sm text-muted-foreground mb-2">March 12, 2024</div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
            Smart Cities: Building Tomorrow Today
          </h3>
          <p className="text-muted-foreground">
            How IoT and AI are creating more efficient, livable urban environments worldwide.
          </p>
        </article>
      </Link>

      <Link href="/articles/community-driven-sustainability-initiatives" passHref>
        <article className="group cursor-pointer" data-slug="community-driven-sustainability-initiatives">
          <div className="bg-slate-200 dark:bg-slate-800 rounded-md h-48 mb-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop" alt="Sustainability" className="w-full h-full object-cover" />
          </div>
          <div className="text-sm text-muted-foreground mb-2">March 8, 2024</div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
            Community-Driven Sustainability Initiatives
          </h3>
          <p className="text-muted-foreground">
            Success stories from communities making a real difference in environmental impact.
          </p>
        </article>
      </Link>
    </div>
    
    <div className="text-center mt-12">
      <Link href="/articles">
        <Button variant="outline" size="lg" className="px-8 py-6 rounded-sm">
          View All Articles
        </Button>
      </Link>
    </div>
  </div>
</section>


      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights on sustainable technology delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="px-8 py-4 h-16 bg-blue-600 hover:bg-blue-700 rounded-sm">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}