import { Link } from 'react-router-dom'

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img src={blog.image_url} alt={blog.title} className="blog-image" />
        <div className="blog-overlay">
          <span className="blog-date">{new Date(blog.published_at).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-summary">{blog.summary.slice(0, 150)}...</p>
        <div className="blog-footer">
          <Link to={`/blogs/${blog.id}`} className="read-more-btn">
            Read More
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard