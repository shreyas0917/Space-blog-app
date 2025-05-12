import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Loader from '../components/Loader'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles')
      const data = await response.json()
      setBlogs(data.results)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-heading">Explore The Universe</h1>
        <p className="home-subheading">Discover the latest in space exploration and astronomy</p>
      </div>
      
      {loading ? (
        <Loader />
      ) : (
        <div className="home-content">
          <div className="section-title">
            <h2>Latest Articles</h2>
            <div className="title-underline"></div>
          </div>
          <div className="blog-grid">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home