function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Connect</h2>
      <form className="contact-form">
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="form-input" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="form-input" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Subject" 
            className="form-input" 
            required 
          />
        </div>
        <div className="form-group">
          <textarea 
            placeholder="Your Message" 
            rows="6" 
            className="form-input" 
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact