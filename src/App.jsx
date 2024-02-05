import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import CreatePost from './pages/Posts/CreatePost'
import Posts from './pages/Posts/Posts'
import ErrorBoundary from './Components/Errors/ErrorBoundary'
import GenericError from './Components/Errors/GenericError'
import Loading from './Components/Loading/Loading'
import Register from './pages/Register/Register'
import Profile from './pages/Users/Profile/Profile'
import './App.css'

function App() {
  console.log('API URL:', import.meta.env.VITE_API_URL)
  return (
    <body>
      
    <div>
    <Header username={import.meta.env.VITE_USERNAME} role={import.meta.env.VITE_ROLE} />
    <>
    <Header />
      <ErrorBoundary key={location.key} fallback={<GenericError />}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<CreatePost />} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
    </div>
    </body>
  )
}

export default App   
            
           
          
     
