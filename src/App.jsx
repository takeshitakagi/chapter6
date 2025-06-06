import './App.css'
import Header from './Header'
import Post from './Post'
import TopPage from './TopPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/Posts/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
