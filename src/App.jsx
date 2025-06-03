import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class='bg-white min-h-screen min-w-screen'>
    <PostList />
    </div>
  )
}

export default App
