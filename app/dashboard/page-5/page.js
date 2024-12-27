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

//assets needed
import uploadInputIcon from '@/public/assets/icons/uploadInputIcon.svg'
import SelectOptionArrowDownIcon from '@/public/assets/icons/selectOptionArrowDownIcon.svg'

//footer nav menu
import DashboardFooter from '@/components/dashboard-footer/DashboardFooter'

function page() {
  //handle the dropdown toggle in this state
  const [dropdownToggle, setDropdownToggle] = useState(false)

  //im using the code below and also the state to handle the changing and selecting functionality of the upload input
  //and i do cut or split  the complete files names witch users selecting and just display the first word of that file name
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(getTruncatedFileName(file.name))
    // Do something with the selected file, such as uploading or processing it
  }

  const getTruncatedFileName = (fileName) => {
    const words = fileName.split(' ')
    const firstWord = words[0]
    // Adjust the maximum length as needed, e.g., 20 characters
    const maxLength = 20
    return firstWord.length > maxLength
      ? firstWord.substring(0, maxLength) + '...'
      : firstWord
  }

  return (
    <div
      id='dashboard-page-5-fully-container'
      className='h-[100vh] overflow-hidden'
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
              ارسال تیکت
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

      <section className='flex flex-col justify-center items-center dashboard-page-5-section-container'>
        {/* heading-inputs-(title and messages category) */}
        <div className='flex flex-row-reverse justify-center items-center gap-10 mt-10 '>
          <div
            className='flex justify-center flex-col items-end'
            id='ticket-title-input'
          >
            <div>
              <label
                className='font-normal text-[16px] text-[#696F79] leading-[27.13px]'
                htmlFor='title-input'
              >
                عنوان پیام
              </label>
            </div>

            <div className='mt-5'>
              <input
                type='text'
                className='w-[600px] h-[64px] rounded-[16px] bg-[#FFFFFF]'
                name='title-input'
                style={{
                  direction: 'rtl',
                }}
              />
            </div>
          </div>

          <div
            className='flex justify-center flex-col items-end cursor-pointer'
            id='ticket-title-input'
          >
            <div className='mb-3'>
              <label
                className='font-normal text-[16px] text-[#696F79] leading-[27.13px]'
                htmlFor='category-input'
              >
                دسته بندی پیام
              </label>
            </div>

            {/* select-options-container */}
            <div
              id='category-selection-container'
              className='select-container flex justify-center flex-row-reverse relative w-[600px] h-[64px] cursor-pointer '
            >
              <select
                style={{
                  paddingTop: '0',
                  paddingBottom: '0',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  direction: 'rtl',
                }}
                className='w-[100%] bg-[#FFFFFF] font-normal text-[16px] text-[#303030] leading-[27.13px]  rounded-[16px] border-none appearance-none cursor-pointer'
              >
                <option>ماژول‌های سیستمی</option>
              </select>
              {/* icon */}
              <div
                style={{
                  width: '50px',
                  height: '100%',
                  position: 'absolute',
                  left: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image src={SelectOptionArrowDownIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* ticket-message-container */}
        <div className='flex flex-col justify-center items-end mt-20'>
          <div>
            <label
              className='font-normal text-[16px] text-[#696F79] text-end leading-[27.13px] mb-4'
              htmlFor='ticket-main-text-input'
            >
              متن پیام
            </label>
          </div>
          <div>
            <textarea
              name='ticket-main-text-input'
              className='w-[1227px] h-[159px] bg-[#FFFFFF] rounded-[16px]'
              style={{
                resize: 'none',
                direction: 'rtl',
                padding: '10px',
              }}
            ></textarea>
          </div>
        </div>

        {/* buttons-section */}
        <div className='flex flex-row-reverse justify-between items-center w-[1227px] h-[120px]'>
          {/* upload-input */}
          <div className='flex justify-center items-center w-[255px] h-[64px] rounded-[16px] bg-[#FFFFFF]'>
            <div className='flex justify-center items-center mr-2'>
              <p className='font-normal text-[16px] text-[#1E1E1E] leading-[27.13px]'>
                پیوست فایل
              </p>
            </div>
            <label htmlFor='fileInput' className='custom-file-upload mt-2'>
              <input
                accept='.jpg,.jpeg,.png'
                type='file'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div className='w-[21px] h-[16px]'>
                <Image
                  src={uploadInputIcon}
                  alt='Upload Icon'
                  className='cursor-pointer'
                />
              </div>
            </label>
          </div>
          {/* conditional rendering for the selected files of the upload */}
          {selectedFile ? `${selectedFile} <-فایل  انتخابیه شما ` : ''}

          {/* SEND-Ticket-Button */}
          <div id='send-ticket-button-container'>
            <button
              className='w-[255px] h-[64px] rounded-[16px] bg-[#5D5FEF]'
              onClick={() => alert('Ticket sended successfully')}
            >
              <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px] '>
                ارسال تیکت
              </p>
            </button>
          </div>
        </div>

        <div className='w-[1227px] h-[1px] bg-[#1E1E1E] opacity-[20%] ' />

        {/* Ticket status section */}
        <div
          className='flex justify-center items-center w-[408px] h-[68px] rounded-[16px] mt-10'
          style={{
            backgroundColor: 'rgba(144, 64, 221, 0.1)',
          }}
        >
          {/* This p tag should change depending on the status of the ticket conditionally */}
          <p
            className='font-medium text-[20px] text-[#9040DD] leading-[33.91px]'
            id='ticket-status-text'
          >
            در انتظار پاسخ
          </p>
        </div>
      </section>

      {/* Footer-section */}
      <DashboardFooter />
    </div>
  )
}

export default page


