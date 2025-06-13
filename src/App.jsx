import './App.css'
import Header from './Header'
import Post from './Post'
import TopPage from './TopPage'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
