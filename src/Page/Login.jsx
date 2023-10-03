import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { currentUser, signInWithGoogle } = UserAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(currentUser)

  useEffect(() =>{
    if(currentUser){
      navigate('/chat')
    }

  }, [currentUser])

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Hello there</h1>
            <p className='py-6'>
              Join the conversation, meet new peopel, and make connection in one
              chared room
            </p>
            <button onClick={handleLogin} className='btn btn-primary'>
              Login with Goodle
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
