import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Tours from './pages/Tours'
import Quotes from './pages/Quotes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (token) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/tours" /> : 
              <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/tours" 
          element={
            isAuthenticated ? 
              <Tours onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/quotes" 
          element={
            isAuthenticated ? 
              <Quotes onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/tours" : "/login"} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
