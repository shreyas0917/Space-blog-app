import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

function BlogDetails() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      const data = await response.json()
      setBlog(data)
    }
    fetchBlog()
  }, [id])

  if (!blog) return <Loader />

  return (
    <div className="blog-details">
      <div className="blog-details-header">
        <h1 className="blog-details-title">{blog.title}</h1>
        <div className="blog-meta">
          <span className="blog-date">{new Date(blog.published_at).toLocaleDateString()}</span>
          <span className="blog-source">{blog.news_site}</span>
        </div>
      </div>
      <div className="blog-details-image-container">
        <img src={blog.image_url} alt={blog.title} className="blog-details-image" />
      </div>
      <div className="blog-details-content">
        <p className="blog-details-summary">{blog.summary}</p>
        <a href={blog.url} className="read-more-btn" target="_blank" rel="noreferrer">
          Read Full Article
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default BlogDetails
