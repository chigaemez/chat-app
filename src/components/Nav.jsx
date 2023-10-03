import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Nav = () => {
  const { currentUser, logOut } = UserAuth()

  const handleLogOut = async () =>{
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navbar fixed z-20  bg-neutral text-neutral-content'>
      <div className=' constainerWrapper flex justify-between '>
        <a className='btn btn-ghost normal-case text-xl'>Let's Chat</a>
        {currentUser ? <button onClick={handleLogOut}>Login</button> : ""}
      </div>
    </div>
  )
}

export default Nav
