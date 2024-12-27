'use client'

import { useState } from 'react'
import Image from 'next/image'

//assets for chat-box
import moduleChatBoxSendIcon from '@/public/assets/icons/module-chatbox-send-icon.svg'

const page = () => {
  // we store the messages from user and server inside the messages state
  const [messages, setMessages] = useState([])
  //but this state is just for the message that user is currently typing ... in the input
  const [message, setMessage] = useState('')
  //and this is acting like an API req delay
  const [loading, setLoading] = useState(false)

  //at first we check if the message that came from user is not empty-
  const sendMessage = async () => {
    if (!message.trim()) return alert('Please do not send empty messages') //user can not send empty messages
    setLoading(true)

    // Simulating server delay (replace with actual backend call)
    setTimeout(() => {
      const newUserMessage = {
        type: 'user',
        content: message,
        timestamp: new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
          .replace(/\s[AaPp][Mm]$/, ''),
      }

      // Add user message to messages state
      setMessages((prevMessages) => [...prevMessages, newUserMessage])

      // Clear input field and scroll to bottom
      setMessage('')
      setLoading(false)
      scrollToBottom()

      // Simulate server response after a fake delay (replace with actual backend response)
      setTimeout(() => {
        const newServerMessage = {
          type: 'server',
          content: 'خوش آمدید. نام کسب و کار شما چیست؟',
          timestamp: new Date()
            .toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
            .replace(/\s[AaPp][Mm]$/, ''),
        }

        // Add server message to messages state
        setMessages((prevMessages) => [...prevMessages, newServerMessage])

        // Scroll to bottom after adding server message
        scrollToBottom()
      }, 2000)
    }, 1000)
  }

  //when ever the program detect an enter key press from user it automatically do the sending message process
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  //the function below do the automatically scrolling for the chat box
  // It's important to ensure that this code is only executed on the client-side to avoid potential issues during server-side rendering
  // in this case since the code is manipulating the DOM after the initial rendering (e.g., after a user action like sending a message),
  // it's generally safe to use document.getElementById because at that point and i have to add we can easily remove this function because users can scroll manually too
  const scrollToBottom = () => {
    const chatContainer = document.getElementById('chatContainer')
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }

  return (
    <div className='flex justify-center items-center h-[100vh] overflow-hidden ' id='business-modules-selection-page-1'>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
        className='flex flex-col overflow-hidden overflow-y-auto w-[929px] h-[534px] rounded-[30px]'
        id='chatContainer'
      >
        {/* we will show user and server messages down below */}

        <div className='w-full h-full overflow-y-auto'>
          {' '}
          {messages.map((msg, index) => (
            <div
              className='flex justify-between items-center p-10'
              id='user-server-inside-messages-container'
            >
              {/* user-messages */}
              <div key={index} className='flex justify-start items-start'>
                {msg.type === 'user' && (
                  <div className='relative'>
                    <div className='flex justify-center items-center bg-[#FFFFFF] rounded-[25px] p-5'>
                      <p className='font-normal text-[20px] text-[#303030] leading-[33.91px] pr-5 pl-5'>
                        {msg.content}
                      </p>
                    </div>
                    <div className='flex justify-start items-center'>
                      <div className='w-[15px] h-[15px] bg-[#FFFFFF] rounded-[50%] mt-2 absolute bottom-[20px] left-[-20px]' />
                      <div className='flex justify-start items-center text-xs text-gray-500 mt-5'>
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <br /> <br />
              {/* server-messages */}
              <div key={index} className='flex justify-end items-end'>
                {msg.type === 'server' && (
                  <div className='relative'>
                    <div className='flex justify-center items-center bg-[#5D5FEF] rounded-[25px] p-4'>
                      <p className='font-normal text-[20px] text-[#FFFFFF] leading-[33.91px] pr-5 pl-5'>
                        {msg.content}
                      </p>
                    </div>
                    <div className='flex justify-end items-center'>
                      <div className='w-[15px] h-[15px] bg-[#5D5FEF] rounded-[50%] mt-2 absolute bottom-[20px] right-[-20px]' />
                      <div className='flex justify-center items-center text-xs text-gray-500 mt-2'>
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* preloader-section */}
        {loading && (
          <div className='flex justify-center items-center p-3'>
            <div className='w-4 h-4 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'></div>
          </div>
        )}

        {/* input and button section */}
        <div className='flex justify-center items-center w-[100%] mb-10'>
          <input
            type='text'
            dir='rtl'
            placeholder='پیام خود را بنویسید...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className='w-[768px] h-[79px] rounded-[25px] bg-[#EFF6FCF] p-5'
          />
          <button
            className='flex justify-center items-center w-[78px] h-[78px] rounded-[20px] bg-[#5D5FEF] ml-5'
            onClick={sendMessage}
            disabled={loading}
          >
            {/* conditional-rendering-icon */}
            <div
              id='conditional-chat-box-rendering-icon'
              className='w-[38px] h-[38px]'
            >
              <Image src={moduleChatBoxSendIcon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page




