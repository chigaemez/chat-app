import { Route, Routes } from 'react-router-dom'
import ChatRoom from './Page/ChatRoom'
import Login from './Page/Login'
import Nav from './components/Nav'
import { PrivateRoute } from './Routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider >
  )
}

export default App
