import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { UserAuth } from '../context/AuthContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../Firebase'
import Swal from 'sweetalert2'

const SendMessage = () => {
  const [value, setValue] = useState('')
  const { currentUser } = UserAuth()

  const handleSubmit = async e => {
    e.preventDefault()

    if(value.trim() === ""){
      Swal.fire({
        icon: 'error',
        title: 'Message not sent...',
        text: 'Enter a message to send',
        
      })
      return
    }

    try {
      const { uid, displayName, photoURL } = currentUser
      await addDoc(collection(db, 'messages'), {
        text: value,
        name: displayName,
        avatar: photoURL,
        uid,
        createdAt: serverTimestamp()
      })
    } catch (error) {
      console.log(error)
    }
    console.log(value)
    setValue('')
  }

  return (
    <div className='bg-gray-200 fixed bottom-0 py-10 w-full'>
      <form onSubmit={handleSubmit} className='constainerWrapper flex px-2 '>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className='input w-full focus:outline-none bg-gray-100 rounded-r-none text-gray-600'
          type='text'
        />
        <button
          type='submit'
          className='w-auto bg-gray-500 text-white rounded-r-lg px-4 text-lg'
        >
          <IoMdSend />
        </button>
      </form>
    </div>
  )
}

export default SendMessage
