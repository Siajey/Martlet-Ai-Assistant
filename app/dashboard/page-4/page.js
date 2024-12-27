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

//module-cards-assets
import ModuleCardIcon1 from '@/public/assets/icons/module-card-icon-calculator.svg'
import ModuleCardIcon2 from '@/public/assets/icons/module-card-icon-inventory.svg'
import ModuleCardIcon3 from '@/public/assets/icons/module-card-icon-shopsite.svg'
import ModuleCardIcon4 from '@/public/assets/icons/module-card-icon-corporatesite.svg'
import ModuleCardIcon5 from '@/public/assets/icons/module-card-icon-telegramrobot.svg'
import ModuleCardIcon6 from '@/public/assets/icons/module-card-icon-treasury.svg'

//footer nav menu
import SecondDashboard from '@/components/dashboard-footer-page-4/SecondDashboard'

function page() {
  //handle the dropdown toggle in this state
  const [dropdownToggle, setDropdownToggle] = useState(false)
  return (
    <div
      id='dashboard-page-4-fully-container'
      className='h-[100vh] overflow-scroll overflow-x-hidden'
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
              ماژول های سیستم
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
      <div className='flex justify-center items-center mt-20'>
        <div className='dashboard-page-4-section-container gap-10 mb-16'>
          {/* cards */}
          <div
            id='module-card-3'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon3} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              سایت فروشگاهی
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
          <div
            id='module-card-2'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon2} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              انبار داری
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
          <div
            id='module-card-1'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon1} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              حسابداری
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
          <div
            id='module-card-6'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon6} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              خزانه داری
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
          <div
            id='module-card-5'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon5} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              ربات تلگرام
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
          <div
            id='module-card-4'
            className='flex flex-col justify-evenly items-center w-[344px] h-[363px] rounded-[20px] p-3'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icon */}
            <Image src={ModuleCardIcon4} />
            {/* heading-text and description */}
            <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
              سایت شرکتی
            </p>
            <p className='font-normal text-[14px] leading-[28px] opacity-[70%]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            {/* buttons */}
            <div className='flex flex-row-reverse justify-center items-center gap-2'>
              <button className='w-[145px] h-[50px] rounded-[10px] border-[2px] border-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                  توضیحات
                </span>
              </button>
              <button className='w-[145px] h-[50px] rounded-[10px]  bg-[#5D5FEF]'>
                <span className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                  خرید
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer-section */}
      <SecondDashboard />
    </div>
  )
}

export default page
