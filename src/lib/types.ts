export interface GhostPostTag {
  name: string;
  slug: string;
}

export interface GhostPost {
  slug: string;
  title: string;
  published_at: string;
  feature_image: string;
  excerpt: string;
  html?: string;
  reading_time?: number;
  tags?: GhostPostTag[];
  
  // New properties for display
  date?: string;
  description?: string;
  image?: string;
}

export interface GhostPostResponse extends GhostPost {}

// Type guard to ensure type safety
export function isValidGhostPost(post: any): post is GhostPost {
  return (
    typeof post.slug === 'string' &&
    typeof post.title === 'string' &&
    typeof post.published_at === 'string' &&
    typeof post.feature_image === 'string' &&
    typeof post.excerpt === 'string'
  );
}

// Function to safely convert a potentially incomplete post to a valid GhostPost
export function toValidGhostPost(post: any): GhostPost | null {
  if (
    typeof post.slug === 'string' &&
    typeof post.title === 'string' &&
    typeof post.published_at === 'string' &&
    typeof post.feature_image === 'string' &&
    typeof post.excerpt === 'string'
  ) {
    return {
      slug: post.slug,
      title: post.title,
      published_at: post.published_at,
      feature_image: post.feature_image,
      excerpt: post.excerpt,
      html: post.html,
      reading_time: post.reading_time,
      tags: post.tags?.map((tag: any) => ({
        name: tag.name || '',
        slug: tag.slug
      })),
      
      // Add display properties
      date: new Date(post.published_at).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      description: post.excerpt || 'No description available',
      image: post.feature_image || 'https://via.placeholder.com/400x300'
    };
  }
  return null;
}