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

//other assets for this page
import TextEditorIcon from '@/public/assets/icons/GA-page-3-nav-selector-text-edit-icon.svg'
import UploadImageIcon from '@/public/assets/icons/GA-page-3-nav-selector-img-upload-icon.svg'
import OtherDetailsIcon from '@/public/assets/icons/GA-page-3-nav-selector-other-details-icon.svg'
import GApage3SelectedProductPreviewImgLayer1 from '@/public/assets/images/GA-page-3-selected-product-preview-layer-1-img.svg'
import GApage3SelectedProductPreviewImgLayer2 from '@/public/assets/images/GA-page-3-selected-product-preview-layer-2-img.svg'
import GAPlanPreviewFrontImg from '@/public/assets/images/GA-plan-preview-front-img.svg'
import GAPlanPreviewBackImg from '@/public/assets/images/GA-plan-preview-back-img.svg'

function page() {
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
    <div id='ga-page-3-fully-container' className='h-[100vh] overflow-scroll'>
      {/* Navbar-section */}
      <div id='ga-page-3-section-container'>
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
              <div className='flex flex-row-reverse justify-center items-center'>
                <p className='font-medium text-[20px] text-[#151D48] leading-[30px] mr-3'>
                  - سربرگ آ چهار
                </p>
                <p className='font-medium text-[20px] text-[#151D48] leading-[30px] mr-3'>
                  GHD - 456
                </p>
              </div>
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
                          boxShadow:
                            '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
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
                          boxShadow:
                            '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
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
                          boxShadow:
                            '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
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
                          boxShadow:
                            '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
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

        {/* main-section of this page (this section only hold the nav selector menu -> you can add more if needed) */}
        <div id='' className='flex justify-center items-center '>
          {/* ga-page-3-nav-selector */}
          <nav
            className='flex justify-end items-center  w-[1350px] h-[72px] rounded-[20px] mt-20 p-10'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* icons */}
            <div className='flex flex-row-reverse justify-center items-center cursor-pointer gap-[20px]'>
              <Link href='/graphic-assistant/ga-page-3'>
                <div className='flex flex-row-reverse justify-center items-center'>
                  <Image src={TextEditorIcon} />
                  <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px] mr-3'>
                    ویرایش متن
                  </p>
                </div>
              </Link>

              <Link href='/graphic-assistant/ga-page-4'>
                <div className='flex flex-row-reverse justify-center items-center mr-5'>
                  <Image src={UploadImageIcon} />
                  <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px] mr-3'>
                    آپلود تصویر
                  </p>
                </div>
              </Link>

              <Link href=''>
                <div className='flex flex-row-reverse justify-center items-center mr-5'>
                  <Image src={OtherDetailsIcon} />
                  <p className='font-normal text-[14px] text-[#1E1E1E] leading-[20px] mr-3'>
                    سایر جزییات
                  </p>
                </div>
              </Link>
            </div>
          </nav>
        </div>

        {/* inside-section-grid-layout */}
        <div className='flex justify-center items-center'>
          <div
            className='mt-20 ml-[145px]'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
            }}
          >
            {/* GA-page-3-dynamic-customer-details-uploader-left-side-box */}
            <div className='flex justify-center items-center w-[740px] h-[896px] rounded-[20px] bg-[#FFFFFF]'>
              {/* preview-image and image-container */}
              <div className='w-[739px] h-[739px]'>
                <div
                  id='GApage3SelectedProductPreviewImgLayer1-container'
                  className='relative'
                >
                  <Image src={GApage3SelectedProductPreviewImgLayer1} />
                  <div
                    id='GApage3SelectedProductPreviewImgLayer2-container'
                    className='absolute top-0'
                  >
                    <Image src={GApage3SelectedProductPreviewImgLayer2} />
                  </div>
                </div>
              </div>
            </div>

            {/* GA-page-3-right-side-information-inputs-section */}
            <div
              id='GA-page-3-right-side-information-inputs-section-fully-container'
              className='flex flex-col justify-center items-center'
            >
              {/* inputs */}
              <div id='GA-page-3-right-side-information-inputs-input-1-container'>
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-1'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-1'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>

              <div
                id='GA-page-3-right-side-information-inputs-input-2-container'
                className='mt-5'
              >
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-2'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-2'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>

              <div
                id='GA-page-3-right-side-information-inputs-input-3-container'
                className='mt-5'
              >
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-3'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-3'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>

              <div
                id='GA-page-3-right-side-information-inputs-input-4-container'
                className='mt-5'
              >
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-4'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-4'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>

              <div
                id='GA-page-3-right-side-information-inputs-input-5-container'
                className='mt-5'
              >
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-5'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-5'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>

              <div
                id='GA-page-3-right-side-information-inputs-input-6-container'
                className='mt-5'
              >
                <div className='flex justify-end items-end mb-3 mr-2'>
                  <label
                    htmlFor='GA-page-3-right-side-information-inputs-input-6'
                    className='font-normal text-[16px] text-[#696F79] leading-[27px]'
                  >
                    متن بالای صفحه
                  </label>
                </div>
                <input
                  name='GA-page-3-right-side-information-inputs-input-6'
                  dir='rtl'
                  type='text'
                  className='flex justify-center items-center w-[452px] h-[64px] rounded-[18px] p-10 placeholder:font-normal placeholder:text-[16px] placeholder:leading-[27px] placeholder:text-[#303030]'
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  placeholder='نام شرکت یا خدمات'
                />
              </div>
              {/* GA-page-3-details-uploader-form-submit-button */}
              <div className='mt-20'>
                <button
                  className='w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px]'
                  onClick={() => alert('your details submitted')}
                >
                  <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27px]'>
                    تایید طرح
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* front of  the plan & back of the plan section  */}
        <div className='w-[330px] flex flex-row-reverse justify-end items-end mt-10 ml-[510px]'>
          {/* front-of-the-plan-card */}
          <div
            id='GA-page-3-plan-cards-front-of-the-plan'
            className='relative flex flex-col justify-center items-center'
          >
            <Image
              id='GA-plan-preview-front-img-tag'
              src={GAPlanPreviewFrontImg}
              className='mt-5'
            />

            <p className='font-bold text-[14px] text-[#424750] leading-[21px] mt-3'>
              روی طرح
            </p>

            <div className='absolute top-0  right-[89px]  w-[30px] h-[30px] bg-[#4FCCE9] rounded-[50%]' />
          </div>

          {/* back-of-the-plan-card */}
          <div
            id='GA-page-3-plan-cards-front-of-the-plan'
            className='relative flex flex-col justify-center items-center mr-32'
          >
            <Image
              id='GA-plan-preview-front-img-tag'
              src={GAPlanPreviewBackImg}
              className='mt-5'
            />

            <p className='font-normal text-[14px] text-[#424750] leading-[21px] mt-3'>
              پشت طرح
            </p>

            <div className='absolute top-0  right-[89px]  w-[30px] h-[30px] bg-[#4FCCE9] rounded-[50%]' />
          </div>
        </div>
      </div>

      {/* GA-pag3-footer */}
      <div
        className='flex justify-evenly flex-row-reverse items-center mb-[25px] mt-20'
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


