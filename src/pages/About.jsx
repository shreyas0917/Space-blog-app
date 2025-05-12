function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-title">About Us</h2>
        <div className="gradient-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-avatar">
          <img 
            src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740" 
            alt="Profile" 
            className="avatar-image"
          />
          <div className="avatar-overlay">
            <h3 className="avatar-name">Shreyas Wani</h3>
            <p className="avatar-role">Space Enthusiast & Software Developer</p>
          </div>
        </div>
        
        <div className="about-text">
          <p>Welcome to our blog platform! We're passionate about delivering high-quality content about space exploration and technology. Our platform integrates with the SpaceflightNews API to bring you the latest updates and fascinating stories from the space industry.</p>
          <p>Stay informed about the latest developments in space exploration, technology innovations, and scientific discoveries through our carefully curated articles.</p>
        </div>
      </div>
    </div>
  )
}

export default About