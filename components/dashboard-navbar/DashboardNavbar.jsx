'use client'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

//assets for Navbar menu
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import BusinessLitsItem1Logo from '@/public/assets/icons/BusinessLitsItem1Logo.svg'
import BusinessLitsItem2Logo from '@/public/assets/icons/BusinessLitsItem2Logo.svg'
import BusinessLitsItem3Logo from '@/public/assets/icons/BusinessLitsItem3Logo.svg'
import BusinessLitsItem4Logo from '@/public/assets/icons/BusinessLitsItem4Logo.svg'
import DashboardDropdwonIcon from '@/public/assets/icons/navbar-dropdown-arrowdown-icon.svg'
import PurplePlusIcon from '@/public/assets/icons/purple-plus-icon.svg'

function DashboardNavbar() {
  //handle the dropdwon toggle in this state
  const [dropdownToggle, setDropdownToggle] = useState(false)

  return (
    <>
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
          <div className='relative ml-5 mr-[14px]'>
            {/* conditional-rendering-red-notification-icon */}
            <div className='absolute top-[5px] right-[8px] w-[7px] h-[7px] rounded-[50%] bg-[#EB5757]' />
            <Image src={YellowNotificationIcon} />
          </div>

          {/* dropdown-menu */}
          <div
            className={
              dropdownToggle
                ? 'flex flex-col justify-center items-center h-[340px] mt-[250px] bg-[rgba(255, 255, 255, 0.2)] shadow-[3px 3px 13.2px 4px rgba(225, 225, 225, 0.5)] rounded-[30px]'
                : ''
            }
          >
            <div
              className={
                dropdownToggle
                  ? 'flex justify-evenly  items-center w-[299px] h-[63px] rounded-t-[30px]'
                  : 'flex justify-evenly  items-center w-[299px] h-[63px] rounded-[31.5px]'
              }
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              }}
              onClick={() => setDropdownToggle((prev) => !prev)}
            >
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
              {/* image-icon of the menu */}
              <div
                className='flex justify-center items-center w-[47px] h-[47px] rounded-[14.4px]  gap-[9px]'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
              >
                <div className='w-[22.18px] h-[22.17px]'>
                  <Image src={BusinessLitsItem1Logo} />
                </div>
              </div>
            </div>

            <ul className=''>
              <li
                id='business-lits-item-1'
                className={`${dropdownToggle ? '' : 'hidden'}`}
                onClick={() => alert('BusinessLits-checked')}
                style={{
                  cursor: 'pointer',
                }}
              >
                <div
                  className='flex justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[1px] border-[rgba(237, 237, 252, 1)]'
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
                        شرکت ایران کهن
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
                        {/* conditional-check-icon-rendering */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                id='business-lits-item-2'
                className={`${dropdownToggle ? '' : 'hidden'}`}
                onClick={() => alert('checked')}
                style={{
                  cursor: 'pointer',
                }}
              >
                <div
                  className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[1px] border-[rgba(237, 237, 252, 1)]'
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
                        شرکت نگارینه
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
                    <div className='flex justify-center items-center w-[24px] h-[24px]'>
                      <div className='w-[10px] h-[5px]'>
                        {/* conditional-check-icon-rendering */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                id='business-lits-item-3'
                className={` ${dropdownToggle ? '' : 'hidden'}`}
              >
                <div
                  className='flex  justify-evenly flex-row-reverse items-center w-[299px] h-[63px] border-t-[1px] border-[rgba(237, 237, 252, 1)]'
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
                        فروشگاه یاسری
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
                  ></div>
                </div>
              </li>

              {/* adding a business logic will be applied through this button */}
              <li
                id='business-lits-item-add-button'
                className={`${dropdownToggle ? '' : 'hidden'}`}
              >
                <div
                  className='flex justify-center  items-center w-[299px] h-[63px] rounded-b-[30px] border-t-[2px] border-[rgba(237, 237, 252, 1)]'
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
        </div>
      </nav>
    </>
  )
}

export default DashboardNavbar

