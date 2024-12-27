'use client'

import { useState } from 'react'
//context data import
import { useAppContext } from '@/context'

import Image from 'next/image'
import Link from 'next/link'

//assets we need for the store maker Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import StoreMakerNavbarButtonIcon from '@/public/assets/icons/store-maker-navbar-button-icon.svg'
import WhiteLinkIcon from '@/public/assets/icons/white-link-icon.svg'

//assets for dashboard footer menu store maker page1
import SupportIcon from '@/public/assets/icons/supporticon.svg'
import WhiteStoreIcon from '@/public/assets/icons/white-store-icon.svg'
import FooterUsersIcon from '@/public/assets/icons/footer-users-icon.svg'
import ShoppingBagIcon from '@/public/assets/icons/shopping-bag.svg'
import LineChartIcon from '@/public/assets/icons/chart-line.svg'
import MessagesIcon from '@/public/assets/icons/messages-icon.svg'
import SettingsIcon from '@/public/assets/icons/settings-icon.svg'
import UserIcon from '@/public/assets/icons/user-icon.svg'
import ArrowUpIcon from '@/public/assets/icons/little-arrow-up-icon.svg'

//assets for profile collapse of the footer menu
import RedExitProfileICon from '@/public/assets/icons/RedExitProfileICon.svg'
import PurpleDiscountCode from '@/public/assets/icons/PurpleDiscountCode.svg'
import PurpleMembershipLevel from '@/public/assets/icons/PurpleMembershipLevel.svg'
import PurpleTransactions from '@/public/assets/icons/PurpleTransactions.svg'
import AccountInfoIcon from '@/public/assets/icons/AccountInfo.svg'

//card assets
import PurpleSmsIcon from '@/public/assets/icons/purple-sms-card-icon.svg'
import GraySmsIcon from '@/public/assets/icons/gray-sms-card-icon.svg'
import OrangeSmsIcon from '@/public/assets/icons/orange-sms-card-icon.svg'
import RedSmsIcon from '@/public/assets/icons/red-sms-card-icon.svg'
import whiteLockicon from '@/public/assets/icons/white-Lock-icon.svg'
import LvelUpAlertModal from '@/components/level-up-alert-modal/LvelUpAlertModal'

function page() {
  //context data to open level up alert modal
  const { LevelUpOpen } = useAppContext()
  //state to control the footer profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)
  //conditional classNames for the profile collapse of the footer profile menu
  const onShow = `${
    profileCollapse
      ? 'h-[303px]'
      : 'relative flex-none flex justify-evenly items-center max-w-[224px] max-h-[63px] rounded-[31.5px] ml-10 overflow-hidden'
  }`
  return (
    <div
      id='store-maker-page-4-fully-container'
      className='h-[100vh] overflow-scroll'
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
              فروشگاه مرتضی
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
          {/* connect to storage system button */}
          <div className='flex flex-row-reverse justify-center items-center w-[244px] h-[57px] rounded-[31.5px] bg-[#5D5FEF]'>
            <div className='w-[24px] h-[24px]'>
              <Image src={WhiteLinkIcon} />
            </div>
            <p className='font-bold text-[16px] text-[#FFFFFF] leading-[24px] mr-2'>
              اتصال به سیستم انبارداری
            </p>
          </div>
          {/* return to dashboard button section */}
          <div
            className='flex flex-row-reverse justify-center items-center w-[201px] h-[57px] rounded-[31.5px] ml-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            }}
          >
            <div className='w-[28.8px] h-[28.8px]'>
              <Image src={StoreMakerNavbarButtonIcon} />
            </div>
            <p className='font-bold text-[16px] text-[#5D5FEF] leading-[24px] mr-2'>
              بازگشت به داشبورد
            </p>
          </div>
        </div>
      </nav>
      {/* store-maker-page-4-main-section */}
      <div className='flex flex-row-reverse justify-center items-center gap-10 mt-20'>
        {/* SMS-card */}
        <div
          id='sms-card-1'
          className='w-[283px] h-[283px] rounded-[30px] cursor-pointer'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* sms-icon */}
          <div className='flex justify-center items-center mt-5'>
            <Image src={PurpleSmsIcon} />
          </div>
          {/* heading-text and description */}
          <div className='flex flex-col justify-center items-center p-5'>
            <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30px]'>
              ارسال پیامک گروهی
            </p>
            <div className='flex justify-center items-center text-center mt-5'>
              <p className='font-normal text-[14px] text-[#1E1E1E] leading-[28px] opacity-[70%]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>

        <div
          id='sms-card-2'
          className='w-[283px] h-[283px] rounded-[30px] cursor-pointer relative'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
          }}
          onClick={LevelUpOpen}
        >
          {/* sms-icon */}
          <div className='flex justify-center items-center mt-5'>
            <Image src={GraySmsIcon} />
          </div>
          {/* heading-text and description */}
          <div className='flex flex-col justify-center items-center p-5'>
            <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30px]'>
              ارسال پیامک گروهی
            </p>
            <div className='flex justify-center items-center text-center mt-5'>
              <p className='font-normal text-[14px] text-[#1E1E1E] leading-[28px] opacity-[70%]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          {/* Lock-icon*/}
          <div
            id='Lock-icon-container'
            className='flex justify-center items-center w-[39px] h-[39px] bg-[#303030] rounded-[50%]  absolute top-5 right-5'
          >
            <Image src={whiteLockicon} />
          </div>
        </div>

        <div
          id='sms-card-3'
          className='w-[283px] h-[283px] rounded-[30px] cursor-pointer'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* sms-icon */}
          <div className='flex justify-center items-center mt-5'>
            <Image src={OrangeSmsIcon} />
          </div>
          {/* heading-text and description */}
          <div className='flex flex-col justify-center items-center p-5'>
            <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30px]'>
              ارسال پیامک گروهی
            </p>
            <div className='flex justify-center items-center text-center mt-5'>
              <p className='font-normal text-[14px] text-[#1E1E1E] leading-[28px] opacity-[70%]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>

        <div
          id='sms-card-4'
          className='w-[283px] h-[283px] rounded-[30px] cursor-pointer'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
          }}
        >
          {/* sms-icon */}
          <div className='flex justify-center items-center mt-5'>
            <Image src={RedSmsIcon} />
          </div>
          {/* heading-text and description */}
          <div className='flex flex-col justify-center items-center p-5'>
            <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30px]'>
              ارسال پیامک گروهی
            </p>
            <div className='flex justify-center items-center text-center mt-5'>
              <p className='font-normal text-[14px] text-[#1E1E1E] leading-[28px] opacity-[70%]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* store-maker-footer-nav-menu */}
      <div
        className='flex justify-evenly flex-row-reverse items-center mt-[360px] mb-5'
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
                فروشگاه
              </p>
            </div>
            <div className='flex justify-center items-center w-[28.8px] h-[28.8px] top-[14.4px]'>
              <Image src={WhiteStoreIcon} />
            </div>
          </div>
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-1'
          >
            <div className='w-[60px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                کاربران
              </p>
            </div>
            <Image src={FooterUsersIcon} />
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
      <LvelUpAlertModal />
    </div>
  )
}

export default page



