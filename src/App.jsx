import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogDetails from './pages/BlogDetails'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/sign-in"  element={<SignIn />}  /> 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  )
}

export default App