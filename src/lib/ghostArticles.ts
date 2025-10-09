import ghost from './ghost';
import { GhostPost, toValidGhostPost } from './types';

export async function getArticles(): Promise<GhostPost[]> {
  try {
    console.log('Attempting to fetch articles from Ghost API...');
    
    const posts = await ghost.posts.browse({
      limit: 'all',
      include: ['tags', 'authors'],
      fields: [
        'slug', 
        'title', 
        'published_at', 
        'feature_image', 
        'excerpt', 
        'reading_time'
      ]
    });
    
    console.log(`Fetched ${posts.length} posts from Ghost API`);
    
    // Convert posts to valid GhostPosts
    const validPosts = posts
      .map(toValidGhostPost)
      .filter((post): post is GhostPost => post !== null);
    
    console.log(`Found ${validPosts.length} valid posts`);
    
    return validPosts;
  } catch (error) {
    console.error('Error fetching articles:', error);
    
    // Provide more detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<GhostPost | null> {
  try {
    console.log(`Attempting to fetch article with slug: ${slug}`);
    
    const post = await ghost.posts.read(
      { slug: slug },
      { 
        include: ['tags', 'authors'],
        fields: [
          'slug', 
          'title', 
          'published_at', 
          'feature_image', 
          'excerpt', 
          'html', 
          'reading_time'
        ]
      }
    );
    
    const processedPost = toValidGhostPost(post);
    
    if (processedPost) {
      console.log(`Successfully fetched article with slug: ${slug}`);
      return processedPost;
    } else {
      console.warn(`Article with slug ${slug} failed validation`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    
    // Provide more detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    
    return null;
  }
}