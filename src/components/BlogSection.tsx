
import React from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-gray-600">Stay updated with expert financial knowledge and market trends</p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="hidden md:flex">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog">
            <Button variant="outline">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
        <CardDescription className="text-sm">By {post.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:text-primary-hover flex items-center">
          Read More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogSection;
