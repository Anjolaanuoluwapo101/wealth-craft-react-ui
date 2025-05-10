
import React from 'react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  return (
    <section className="w3-container w3-padding-64 w3-light-grey">
      <div className="w3-container">
        <div className="w3-row w3-padding-16">
          <div className="w3-col m8">
            <h2 className="w3-xxlarge">Latest Insights</h2>
            <p className="w3-text-grey">Stay updated with expert financial knowledge and market trends</p>
          </div>
          <div className="w3-col m4 w3-right-align w3-hide-small">
            <Link to="/blog">
              <button className="w3-button w3-border w3-round w3-hover-light-grey">
                View All Articles <i className="fa fa-arrow-right w3-margin-left"></i>
              </button>
            </Link>
          </div>
        </div>
        
        <div className="w3-row-padding">
          {blogPosts.map((post) => (
            <div key={post.id} className="w3-col l4 m6 s12 w3-padding-16">
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="w3-center w3-padding-16 w3-hide-medium w3-hide-large">
          <Link to="/blog">
            <button className="w3-button w3-border w3-round w3-hover-light-grey">
              View All Articles <i className="fa fa-arrow-right w3-margin-left"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="w3-card w3-round w3-white w3-hover-shadow" style={{height: '100%'}}>
      <div className="w3-display-container" style={{height: '200px'}}>
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w3-image"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </div>
      <div className="w3-container w3-padding">
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6">
            <span className="w3-tag w3-theme-l4 w3-round w3-small">{post.category}</span>
          </div>
          <div className="w3-col m6 w3-right-align">
            <span className="w3-small w3-text-grey">{post.date}</span>
          </div>
        </div>
        <h3 className="w3-large w3-text-dark-grey">{post.title}</h3>
        <p className="w3-small w3-text-grey">By {post.author}</p>
        <p className="w3-text-grey">{post.excerpt}</p>
      </div>
      <div className="w3-container w3-padding-16">
        <Link to={`/blog/${post.id}`} className="w3-text-theme w3-hover-text-theme-d2">
          Read More <i className="fa fa-arrow-right w3-small w3-margin-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
