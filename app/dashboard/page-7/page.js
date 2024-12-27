'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets we need for the Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import BusinessLitsItem1Logo from '@/public/assets/icons/BusinessLitsItem1Logo.svg'
import BusinessLitsItem2Logo from '@/public/assets/icons/BusinessLitsItem2Logo.svg'
import BusinessLitsItem3Logo from '@/public/assets/icons/BusinessLitsItem3Logo.svg'
import BusinessLitsItem4Logo from '@/public/assets/icons/BusinessLitsItem4Logo.svg'
import DashboardDropdwonIcon from '@/public/assets/icons/navbar-dropdown-arrowdown-icon.svg'
import PurplePlusIcon from '@/public/assets/icons/purple-plus-icon.svg'

//assets for Footer menu
import SupportIcon from '@/public/assets/icons/supporticon.svg'
import MaskLogo from '@/public/assets/icons/masklogo.svg'
import ShoppingCartIcon from '@/public/assets/icons/shopping-cart.svg'
import ShoppingBagIcon from '@/public/assets/icons/shopping-bag.svg'
import LineChartIcon from '@/public/assets/icons/chart-line.svg'
import MessagesIcon from '@/public/assets/icons/messages-icon.svg'
import SettingsIcon from '@/public/assets/icons/settings-icon.svg'
import UserIcon from '@/public/assets/icons/user-icon.svg'
import ArrowUpIcon from '@/public/assets/icons/little-arrow-up-icon.svg'

//assets for profile collapse
import RedExitProfileICon from '@/public/assets/icons/RedExitProfileICon.svg'
import PurpleDiscountCode from '@/public/assets/icons/PurpleDiscountCode.svg'
import PurpleMembershipLevel from '@/public/assets/icons/PurpleMembershipLevel.svg'
import PurpleTransactions from '@/public/assets/icons/PurpleTransactions.svg'
import AccountInfoIcon from '@/public/assets/icons/AccountInfo.svg'

//assets for custom chat-box
import moduleChatBoxSendIcon from '@/public/assets/icons/module-chatbox-send-icon.svg'
import CameraIconInsideInput from '@/public/assets/icons/camera-icon-inside-input.svg'

const page = () => {
  //footer related state
  const [profileCollapse, setProfileCollapse] = useState(false)

  //handle the dropdown toggle in this state (related to the navbar)
  const [dropdownToggle, setDropdownToggle] = useState(false)

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
    <div
      className='h-[100vh] overflow-hidden'
      id='dashboard-page-7-fully-container'
    >
      {/* Navbar-section */}
      <nav
        className='flex justify-between items-center flex-row-reverse  mr-[19px] ml-[19px] h-[92px] mt-[17px] rounded-[46px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0px 0px 12px 4px rgba(227, 227, 227, 0.5)',
        }}
        id='dashboard-navbar-container'
      >
        {/* right section of the menu */}
        <div className='flex items-center'>
          <div className='flex justify-center items-center mr-3'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px] mr-3'>
              چت با پشتیبانی
            </p>
            <div className='rounded-[50%] bg-[#151D48] w-[5px] h-[5px]'></div>
          </div>
          <div className='w-[130px] h-[41px] mr-[5px]'>
            <p className='font-bold text-[27px]  leading-[40.5px] text-[#151D48]'>
              لکسا پلاس
            </p>
          </div>

          <Link href='/' className='mr-5'>
            <Image src={LogoIcon} />
          </Link>
        </div>

        {/* left-side-of-the-navbar*/}
        <div className='flex items-center cursor-pointer'>
          {/* Yellow notification icon */}
          <div className='ml-5 mr-[14px]'>
            <Image src={YellowNotificationIcon} />
          </div>
          {/*the-dropdown-section-of-the-navbar*/}
          <div
            className='flex relative justify-evenly flex-row-reverse items-center w-[299px] h-[63px]  rounded-[31.5px] dropdown'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            }}
          >
            <div
              className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
              style={{
                backgroundColor: ' rgba(255, 255, 255, 1)',
              }}
            >
              <div className='w-[22.18px] h-[22.17px]'>
                <Image src={BusinessLitsItem1Logo} />
              </div>
            </div>
            {/* Text section of the dropdown */}
            <div className='text-center'>
              <div className='w-[115px] h-[24px] '>
                <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                  شرکت کیان تجهیز
                </p>
                <div className='w-[146px] h-[20px] '>
                  <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                    کسب و کار پیشرفته
                  </p>
                </div>
              </div>
            </div>
            {/* dropdown-list-notification-icon */}
            <div
              className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
              }}
            >
              <div
                className='flex  justify-center items-center w-[24px] h-[24px]'
                onClick={() => setDropdownToggle((prev) => !prev)}
              >
                <div className='w-[10px] h-[5px]'>
                  <Image src={DashboardDropdwonIcon} />
                </div>
              </div>
            </div>
            {/* dropdown-toggle */}
            {dropdownToggle ? (
              <div
                className='absolute top-20'
                style={{
                  backgroundColor: '#FFFFFFCC',
                  boxShadow: '3px 3px 13.199999809265137px 4px #E1E1E180',
                }}
              >
                <ul>
                  <li id='business-lits-item-1'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem2Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id='business-lits-item-2'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem3Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>{' '}
                  <li id='business-lits-item-3'>
                    <div
                      className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <div
                        className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                        style={{
                          backgroundColor: ' rgba(255, 255, 255, 1)',
                        }}
                      >
                        <div className='w-[22.18px] h-[22.17px]'>
                          <Image src={BusinessLitsItem4Logo} />
                        </div>
                      </div>
                      {/* Text section of the dropdown */}
                      <div className='text-center'>
                        <div className='w-[115px] h-[24px] '>
                          <p className='font-medium text-[16px] leading-6 text-[#151D48]'>
                            شرکت کیان تجهیز
                          </p>
                          <div className='w-[146px] h-[20px] '>
                            <p className='font-normal text[14px] leading-[20px] text[#737791] mr-5'>
                              کسب و کار پیشرفته
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* dropdown-list-notification-icon */}
                      <div
                        className='flex justify-center items-center w-[38px] h-[38px]  rounded-[24px]'
                        style={{
                          backgroundColor: 'rgba(93, 95, 239, 0.1)',
                        }}
                      >
                        <div className='flex  justify-center items-center w-[24px] h-[24px]'>
                          <div className='w-[10px] h-[5px]'>
                            <Image src={DashboardDropdwonIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* adding a business logic will be applied through this button */}
                  <li id='business-lits-item-add-button'>
                    <div
                      className='flex justify-center  items-center w-[299px] h-[63px] border-t-[2px]'
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                      }}
                    >
                      <p className='font-bold text-[14px] text-[#5D5FEF] leading-[24px]'>
                        افزودن کسب و کار
                      </p>
                      <button>
                        <Image src={PurplePlusIcon} />
                      </button>
                      <div className='text-center'></div>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {/* chatbox-section */}
      <section
        className='flex justify-center items-center mt-32'
        id='dashboard-page-7-section-container'
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
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
              className='w-[768px] h-[79px] rounded-[25px] bg-[#EFF6FCF] p-5 relative'
            />
            <button
              className='flex justify-center items-center w-[78px] h-[78px] rounded-[20px] bg-[#5D5FEF] ml-5'
              onClick={sendMessage}
              disabled={loading}
            >
              {/* conditional-rendering-icon */}
              <div
                id='conditional-chat-box-rendering-send-icon'
                className='w-[38px] h-[38px]'
              >
                <Image src={moduleChatBoxSendIcon} />
              </div>
            </button>
            {/* camera-button */}
            <div className='flex justify-center items-center  absolute left-[550px]'>
              <label htmlFor='upload-input-with-camera-icon'>
                <input
                  accept='.jpg,.jpeg,.png'
                  type='file'
                  className='hidden'
                  id='upload-input-with-camera-icon'
                />
                <div className='w-[38px] h-[38px]'>
                  <Image
                    src={CameraIconInsideInput}
                    className='cursor-pointer'
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* Footer-section -couldn't do the for the footer in this componenet reusability */}
      <div
        className='flex justify-evenly flex-row-reverse items-center mt-[80px]'
        id='footer-menu-full-container'
      >
        {/* right section of the menu*/}
        <div
          className='flex-none flex justify-evenly items-center flex-row-reverse w-[224px] h-[63px] top-[777px] rounded-[31.5px] mr-10'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            cursor: 'pointer',
          }}
        >
          {/* icon */}
          <div
            className='flex justify-center items-center w-[45px] h-[45px] top-[786px] rounded-[50%]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              boxShadow:
                '0px 0px 14.800000190734863px 0px rgba(225, 225, 225, 0.5)',
            }}
          >
            <div className='flex justify-center items-center w-[24px] h-[24px] top-[797px]'>
              <Image src={SupportIcon} />
            </div>
          </div>
          <div className='flex justify-center items-center w-[127px] h-[24px] top-[797px] ml-[35px]'>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              چت با پشتیبانی آنلاین
            </p>
          </div>
        </div>
        {/* main section of the menu*/}
        <div
          className='flex-grow flex justify-between  ml-6 mr-6 items-center  flex-row-reverse w-[888px] h-[76px] top-[767px] rounded-[38px]'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0px 0px 12px 4px rgba(227, 227, 227, 0.5)',
          }}
        >
          {/* button-section of the main menu */}
          <div
            className='flex justify-evenly items-center  w-[151px] h-[58px] top[767px] rounded-[38px]  mr-[13px] text-[#FFFFFF]'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 1)',
              boxShadow: '0px 18px 45px 0px rgba(55, 69, 87, 0.1)',
              cursor: 'pointer',
            }}
          >
            <div className='w-[48px] h-[27px] ml-[38px]'>
              <p className=' font-medium text-[16.2px] leading-[27.47px]'>
                داشبورد
              </p>
            </div>
            <div className='flex justify-center items-center w-[28.8px] h-[28.8px] top-[14.4px]'>
              <Image src={MaskLogo} />
            </div>
          </div>
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-1'
          >
            <div className='w-[60px] h-[27px] '>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                سفارشات
              </p>
            </div>
            <Image src={ShoppingCartIcon} />
          </div>
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-2'
          >
            <div className='w-[64px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                محصولات
              </p>
            </div>
            <Image src={ShoppingBagIcon} />
          </div>{' '}
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-3'
          >
            <div className='w-[53px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                گزارشات
              </p>
            </div>
            <Image src={LineChartIcon} />
          </div>{' '}
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-4'
          >
            <div className='w-[41px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                پیام‌ها
              </p>
            </div>
            <Image src={MessagesIcon} />
          </div>{' '}
          <div
            className='flex justify-center items-center gap-2 ml-[13px]'
            id='footer-menu-icon-5'
          >
            <div className='w-[55px] h-[27px] ml-[13px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                تنظیمات
              </p>
            </div>
            <Image src={SettingsIcon} />
          </div>
        </div>
        {/* left section of the menu */}
        <div className='relative'>
          <div
            className='flex-none flex justify-evenly items-center w-[224px] h-[63px] top-[777px] left-[26px] rounded-[31.5px] ml-10'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              cursor: 'pointer',
            }}
            onClick={() => setProfileCollapse((prev) => !prev)}
          >
            <div className='w-[12px] h-[6px] ml-[10px]'>
              <Image src={ArrowUpIcon} />
            </div>
            <p className='font-medium text-[14px] leading-6 text-[#151D48] ml-[20px]'>
              مرتضی شیرین زاده
            </p>
            <div className='w-[48px] h-[48px] mt-[5px] mb-[5px]'>
              <Image src={UserIcon} />
            </div>
          </div>
          {/* Profile-Collapse-down-below */}
          {profileCollapse && (
            <div
              className='flex justify-center items-center absolute bottom-[50px] left-[30px]  w-[224px] h-[329px] rounded-[31.5px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
            >
              <ul>
                <li id='profile-collapse-list-item-1'>
                  <div className='flex justify-end items-center'>
                    <Image src={RedExitProfileICon} />
                    <p className='font-medium text-[14px] text-[#151D48] leading-[24px]'>
                      خروج
                    </p>
                  </div>
                </li>
                <li
                  id='profile-collapse-list-item-2'
                  className='border-t border-gray-200'
                >
                  <div className='flex justify-end items-center'>
                    <Image src={PurpleDiscountCode} />
                    <p className='font-medium text-[14px] text-[#151D48] leading-[24px]'>
                      کدهای تخفیف
                    </p>
                  </div>
                </li>
                <li
                  id='profile-collapse-list-item-3'
                  className='border-t border-gray-200'
                >
                  <div className='flex justify-end items-center'>
                    <Image src={PurpleMembershipLevel} />
                    <p className='font-medium text-[14px] text-[#151D48] leading-[24px]'>
                      سطح عضویت
                    </p>
                  </div>
                </li>
                <li
                  id='profile-collapse-list-item-4'
                  className='border-t border-gray-200'
                >
                  <div className='flex justify-end items-center'>
                    <Image src={PurpleTransactions} />
                    <p className='font-medium text-[14px] text-[#151D48] leading-[24px]'>
                      تراکنش ها
                    </p>
                  </div>
                </li>
                <li
                  id='profile-collapse-list-item-5'
                  className='border-t border-gray-200'
                >
                  <div className='flex justify-end items-center'>
                    <Image src={AccountInfoIcon} />
                    <p className='font-medium text-[14px] text-[#151D48] leading-[24px]'>
                      اطلاعات حساب
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page