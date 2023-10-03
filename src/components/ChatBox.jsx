import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query,   onSnapshot, orderBy, limit } from 'firebase/firestore'
import { db } from '../Firebase'

const ChatBox = () => {
  const messageEndRef = useRef()
  const [messages, setMessages] = useState([])


    const scrollToBottom = () => {
      messageEndRef.current.scrollIntoView({behavior: "smooth"})

    };

    useEffect(scrollToBottom, [messages])

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy("createdAt"),
      limit(50)
      )
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const messages = []
      querySnapshot.forEach(doc => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })
    return () => unsubscribe
  }, [])


  return (
    <div className='pb-44 pt-20 constainerWrapper'>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
    
  )
}

export default ChatBox
