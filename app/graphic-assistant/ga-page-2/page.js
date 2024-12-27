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
import GrayDashboardIcon from '@/public/assets/icons/GA-page-2-footer-menu-dashboard-gray-icon.svg'
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

//assets for this page
import GAPage2PurpleSearchIcon from '@/public/assets/icons/GA-page-2-purple-search-icon.svg'
import PurpleArrowDownIcon from '@/public/assets/icons/GA-page-2-purple-arrow-down-icon.svg'
import GAPage2FilterBoxBlackArrowIcon from '@/public/assets/icons/GA-page-2-filter-box-black-arrow-icon.svg'

//fake assets for our  static cards
import GAPage2ProductsCard1Img from '@/public/assets/images/GA-page-2-products-card1-img.svg'
import GAPage2ProductsCard2Img from '@/public/assets/images/GA-page-2-products-card2-img.svg'
import GAPage2ProductsCard3Img from '@/public/assets/images/GA-page-2-products-card3-img.svg'
import GAPage2ProductsCard4Img from '@/public/assets/images/GA-page-2-products-card4-img.svg'
import GAPage2ProductsCard5Img from '@/public/assets/images/GA-page-2-products-card5-img.svg'
import GAPage2ProductsCard6Img from '@/public/assets/images/GA-page-2-products-card6-img.svg'

function page() {
  // State to manage the active accordion item in the filter box
  const [activeItem, setActiveItem] = useState(null)
  // Function to toggle accordion item visibility
  const toggleAccordion = (index) => {
    setActiveItem(index === activeItem ? null : index)
  }

  //handle the dropdwon toggle in this state (navbar-menu & footer-menu)
  const [dropdownToggle, setDropdownToggle] = useState(false)
  //handle the dashboard footer profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)

  const onShow = `${
    profileCollapse
      ? 'h-[303px]'
      : 'relative flex-none flex justify-evenly items-center max-w-[224px] max-h-[63px] rounded-[31.5px] ml-10 overflow-hidden'
  }`

  return (
    <div
      id='ga-page-2-fully-container'
      className='h-[100vh] overflow-scroll'
      style={{
        backgroundColor: 'whitesmoke',
      }}
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
              سربرگ آ چهار
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
          {/* collapse-menu */}
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
      {/* main-section of the GA page-2 */}
      <div id='graphic-assistant-page-2-main-section-container'>
        {/* Products-Search-input */}
        <div
          id='graphic-assistant-page-2-main-inside-section-container'
          className='flex flex-row-reverse justify-between items-center mr-32 ml-32 mt-10'
        >
          <div className='flex flex-row-reverse justify-center items-center'>
            <div
              className='relative flex  justify-center items-center'
              id='ga-page-2-search-input-container'
            >
              <input
                id='ga-page-2-search-input'
                type='search'
                dir='rtl'
                className='flex justify-center items-center w-[452px] h-[60px] rounded-[30px] p-5 placeholder:font-normal placeholder:text-[16px] placeholder:text-[#5D5FEF] placeholder:leading-[27px]'
                style={{
                  backgroundColor: 'rgba(93, 95, 239, 0.1)',
                  boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                }}
                placeholder='جستجوی محصول'
              />
              {/* search-icon */}
              <div className='absolute top-5 left-5'>
                <Image src={GAPage2PurpleSearchIcon} />
              </div>
            </div>
            {/* search-result-heading-text */}
            <div className='flex justify-center items-center mr-10'>
              <Image src={PurpleArrowDownIcon} className='mr-5' />
              <p className='font-bold text-[16px] text-[#5D5FEF] leading-[27px]'>
                جدیدترین
              </p>
            </div>
          </div>

          {/* search-result-text */}
          <div className='flex flex-row-reverse justify-center items-center'>
            <p className='font-normal text-[16px] text-[#1E1E1E] leading-[27px]'>
              250
            </p>
            <p className='font-normal text-[16px] text-[#1E1E1E] leading-[27px] mr-3'>
              نمونه یافت شد
            </p>
          </div>
        </div>

        {/* search-result-products-cards-grid-layout-container */}
        <div className='flex flex-col justify-items-center items-center mr-32 ml-[150px] mt-20'>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
            }}
          >
            {/* search-result-products-cards-grid-layout-left-section-filter-box */}
            <div className='flex flex-col justify-center items-center gap-20 mb-20'>
              {/* Products-Cards */}
              <div className='flex flex-row-reverse justify-center items-center gap-20'>
                <div
                  id='GA-page-2-search-result-products-card1'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard1Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>

                <div
                  id='GA-page-2-search-result-products-card2'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard2Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>

                <div
                  id='GA-page-2-search-result-products-card3'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard3Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center items-center gap-20'>
                <div
                  id='GA-page-2-search-result-products-card4'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard4Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>

                <div
                  id='GA-page-2-search-result-products-card5'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard5Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>

                <div
                  id='GA-page-2-search-result-products-card6'
                  className='flex flex-col justify-center items-center w-[291px] h-[387px] rounded-[30px]'
                  style={{
                    backgroundColor: ' rgba(255, 255, 255, 0.3)',
                    boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
                  }}
                >
                  <div className='relative'>
                    <Image src={GAPage2ProductsCard6Img} />
                    {/* color-filter-for-this-card-container */}
                    <div className='flex justify-center items-center gap-2 absolute bottom-3 left-5'>
                      <div className='w-[18px] h-[18px] bg-[#2D8B7D] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#F64E60] rounded-[50%] cursor-pointer'></div>
                      <div className='w-[18px] h-[18px] bg-[#5D5FEF] rounded-[50%] cursor-pointer'></div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
                      GHD - 546
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* search-result-products-cards-grid-layout-right-section-filter-box */}
            <div
              id='GA-page-2-filter-box-container'
              className='w-[291px] h-[290px] rounded-[25px] border-[3px] border-[#5D5FEF] ml-[100px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {/* select-options-section */}
              <ul id='GA-page-2-filter-box-ul'>
                {[0, 1, 2].map(
                  (
                    index // Assuming you have 3 accordion items, you can adjust this based on your actual data
                  ) => (
                    <li
                      key={index}
                      id={`GA-page-2-dimensions-li-${index}`}
                      className='mt-3'
                    >
                      <div className='flex flex-row-reverse justify-between items-center p-5'>
                        <p className='font-medium text-[16px] text-[#1E1E1E] leading-[20px]'>
                          ابعاد
                        </p>
                        <button onClick={() => toggleAccordion(index)}>
                          {/* You can change the icon based on accordion state */}
                          <Image src={GAPage2FilterBoxBlackArrowIcon} />
                        </button>
                      </div>

                      <div
                        id={`GA-page-2-dimensions-options-content-${index}`}
                        className={`flex flex-col p-5 gap-2 ${
                          activeItem === index ? '' : 'hidden'
                        }`}
                        style={{
                          maxHeight: activeItem === index ? 'none' : 0,
                          overflow: 'hidden',
                        }}
                      >
                        {/* Options content */}
                        <div className='flex flex-row-reverse justify-between items-center'>
                          <div>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px]'>
                              مربعی (25*25)
                            </p>
                          </div>
                          <div className='flex justify-center items-center w-[21px] h-[21px] bg-[#D9D9D9] border-none rounded-[3px]'>
                            <input
                              type='checkbox'
                              style={{
                                cursor: 'pointer',
                              }}
                            />
                          </div>
                        </div>

                        <div className='flex flex-row-reverse justify-between items-center'>
                          <div>
                            <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px]'>
                              مستطیل (25*35)
                            </p>
                          </div>
                          <div className='flex justify-center items-center w-[21px] h-[21px] bg-[#D9D9D9] rounded-[3px]'>
                            <input
                              type='checkbox'
                              style={{
                                cursor: 'pointer',
                              }}
                            />
                          </div>
                        </div>

                        <div className='flex flex-row-reverse justify-between items-center'>
                          <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px]'>
                            مستطیل (25*45)
                          </p>
                          <div className='flex justify-center items-center w-[21px] h-[21px] bg-[#D9D9D9] rounded-[3px]'>
                            <input
                              type='checkbox'
                              style={{
                                cursor: 'pointer',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GA-pag2-footer */}
      <div
        className='flex justify-evenly flex-row-reverse items-center mb-[25px]'
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
            className='flex justify-evenly items-center w-[151px] h-[58px] text-[#737791] hover:text-[#5D5FEF] rounded-[38px] mr-[13px]'
            style={{
              cursor: 'pointer',
            }}
          >
            <div className='w-[48px] h-[27px] ml-[38px]'>
              <p className=' font-medium text-[16.2px] leading-[27.47px]'>
                داشبورد
              </p>
            </div>
            <div className='flex justify-center items-center w-[28.8px] h-[28.8px] top-[14.4px]'>
              <Image src={GrayDashboardIcon} />
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
            {/* Profile-Collapse-down-below */}
            {profileCollapse && (
              <div
                className='flex justify-center items-center absolute bottom-[50px] left-[30px]  w-[224px] h-[329px] rounded-[31.5px]'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
                }}
              >
                <ul className=''>
                  <li id='profile-collapse-list-item-1'>
                    <div className='flex  justify-end items-center'>
                      <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                        خروج
                      </p>
                      <Image src={RedExitProfileICon} />
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
    </div>
  )
}

export default page




