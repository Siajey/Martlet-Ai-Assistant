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

//plan card assets and icons
import RedPeopleIcon from '@/public/assets/icons/RedPeople-Plan-Card-Icon.svg'
import PurpleCrownIcon from '@/public/assets/icons/purple-crown-icon.svg'
import OrangeDiamondIcon from '@/public/assets/icons/orange-diamond-icon.svg'
import PurpleCircleListItem from '@/public/assets/icons/Purple-Circle-List-Item.svg'
import PurpleCheckListIcon from '@/public/assets/icons/Purple-Check-List-Icon.svg'

//components we need to work with this page
import DashboardFooter from '@/components/dashboard-footer/DashboardFooter'

function page() {
  //handle the dropdwon toggle in this state
  const [dropdownToggle, setDropdownToggle] = useState(false)
  return (
    <div
      id='dashboard-page-2-fully-container'
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
              سطوح عضویت
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

      <section className='flex flex-row-reverse gap-20 justify-center items-center dashboard-page-2-fully-container'>
        <div
          id='dashboard-page-2-plan-card-1'
          className='flex justify-center  flex-col items-center w-[359px] h-[586px] rounded-[30px] mt-5'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* Heading-Icon */}
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center w-[75px] h-[75px] rounded-[20px] bg-[#F64E60] mt-5'>
              <Image src={RedPeopleIcon} />
            </div>
          </div>
          {/* Heading text */}
          <div className='flex justify-center items-center mt-10'>
            <p className='font-bold text-[20px] text-[#151D48] leading-[28px]'>
              سطح یک
            </p>
          </div>
          <div className='w-[300px] h-[360px]'>
            {/* top-section of the plan card */}
            <div id='plan-card-top-section' className='mt-10'>
              <div className='flex justify-end items-center mr-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  اطلاعات مورد نیاز
                </p>
              </div>
              {/* List-Item-Icons and text */}
              <div className='flex justify-end items-center mr-10 mt-5'>
                <ul className='flex flex-col'>
                  <li
                    id='top-section-list-item-1'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      ثبت شماره تلفن
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-2'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      وارد کردن اطلاعات جغرافیایی
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-3'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      پر کردن اطلاعات شخصی و شرکتی
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* bottom-section of the plan card*/}
            <div id='plan-card-bottom-section'>
              <div className='flex justify-end items-center mr-10 mt-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  امکانات
                </p>
              </div>

              <div className=''>
                <ul>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id='dashboard-page-2-plan-card-2'
          className='flex justify-center  flex-col items-center w-[359px] h-[586px] rounded-[30px] mt-10 relative'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* Heading-Icon */}
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center w-[75px] h-[75px] rounded-[20px] bg-[#9040DD] mt-5'>
              <Image src={PurpleCrownIcon} />
            </div>
          </div>
          {/* Heading text */}
          <div className='flex justify-center items-center mt-10'>
            <p className='font-bold text-[20px] text-[#151D48] leading-[28px]'>
              سطح یک
            </p>
          </div>
          <div className='w-[300px] h-[360px]'>
            {/* top-section of the plan card */}
            <div id='plan-card-top-section' className='mt-10'>
              <div className='flex justify-end items-center mr-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  اطلاعات مورد نیاز
                </p>
              </div>
              {/* List-Item-Icons and text */}
              <div className='flex justify-end items-center mr-10 mt-5'>
                <ul className='flex flex-col'>
                  <li
                    id='top-section-list-item-1'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      ثبت شماره تلفن
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-2'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      وارد کردن اطلاعات جغرافیایی
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-3'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      پر کردن اطلاعات شخصی و شرکتی
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* bottom-section of the plan card*/}
            <div id='plan-card-bottom-section'>
              <div className='flex justify-end items-center mr-10 mt-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  امکانات
                </p>
              </div>

              <div className=''>
                <ul>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='flex justify-center items-center w-[158px] h-[47px] bg-[#5D5FEF]  absolute top-[585px] bottom-0'
            style={{
              borderRadius: '0px 0px 15px 15px',
            }}
          >
            <p className='font-bold text-[14px] text-[#FFFFFF] leading-[28px]'>
              ارتقا سطح
            </p>
          </div>
        </div>

        <div
          id='dashboard-page-2-plan-card-3'
          className='flex justify-center  flex-col items-center w-[359px] h-[586px] rounded-[30px] mt-10 relative'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow:
              '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* Heading-Icon */}
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center w-[75px] h-[75px] rounded-[20px] bg-[#F07140] mt-5'>
              <Image src={OrangeDiamondIcon} />
            </div>
          </div>
          {/* Heading text */}
          <div className='flex justify-center items-center mt-10'>
            <p className='font-bold text-[20px] text-[#151D48] leading-[28px]'>
              سطح یک
            </p>
          </div>
          <div className='w-[300px] h-[360px]'>
            {/* top-section of the plan card */}
            <div id='plan-card-top-section' className='mt-10'>
              <div className='flex justify-end items-center mr-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  اطلاعات مورد نیاز
                </p>
              </div>
              {/* List-Item-Icons and text */}
              <div className='flex justify-end items-center mr-10 mt-5'>
                <ul className='flex flex-col'>
                  <li
                    id='top-section-list-item-1'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      ثبت شماره تلفن
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-2'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      وارد کردن اطلاعات جغرافیایی
                    </p>
                  </li>
                  <li
                    id='top-section-list-item-3'
                    className='flex items-center flex-row-reverse'
                  >
                    <div className='w-[17px] h-[17px]'>
                      <Image src={PurpleCircleListItem} />
                    </div>
                    <p className='font-normal text-[14px] text-[#151D48] leading-[28px] mr-2'>
                      پر کردن اطلاعات شخصی و شرکتی
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* bottom-section of the plan card*/}
            <div id='plan-card-bottom-section'>
              <div className='flex justify-end items-center mr-10 mt-10'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  امکانات
                </p>
              </div>

              <div className=''>
                <ul>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>{' '}
                  <li
                    id='bottom-section-list-item-1'
                    className='flex justify-between flex-row-reverse items-center mr-10 ml-10'
                  >
                    <div className='flex flex-row-reverse justify-center items-center'>
                      <div className='w-[17px h-[17px]'>
                        <Image src={PurpleCheckListIcon} />
                      </div>
                      <p className='font-normal text-[12px] text-[#151D48] leading-[28px] mr-2'>
                        سیستم حسابداری
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className='font-medium text-[12px] text-[#151D48] leading-[28px] mr-1'>
                        سفارش
                      </p>
                      <span>120</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='flex justify-center items-center w-[158px] h-[47px] bg-[#5D5FEF]  absolute top-[585px] bottom-0'
            style={{
              borderRadius: '0px 0px 15px 15px',
            }}
          >
            <p className='font-bold text-[14px] text-[#FFFFFF] leading-[28px]'>
              ارتقا سطح
            </p>
          </div>
        </div>
      </section>

      <DashboardFooter />
    </div>
  )
}

export default page




