import { Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import CreatePost from './pages/Post/CreatePost'
import Post from './pages/Post/Post'
import ErrorBoundary from './Components/Errors/ErrorBoundary'
import GenericError from './Components/Errors/GenericError'
import Loading from './Components/Loading/Loading'
import Register from './pages/Register/Register'
import Profile from './pages/Users/Profile/Profile'
import './App.css'
import EditAvatar from './pages/Users/Profile/EditAvatar'

function App() {
  const [filtros, setFiltros] = useState("")
  
  console.log('API URL:', import.meta.env.VITE_API_URL)
  return (
    
      
    <div>
    <Header username={import.meta.env.VITE_USERNAME} role={import.meta.env.VITE_ROLE} />
    <>
    <Header setFiltros={setFiltros} />
    <ErrorBoundary key={location.key} fallback={<GenericError />}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home filtros={filtros}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<CreatePost />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile/:id" element={<EditAvatar />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
    </div>
    
  )
}

export default App   
