'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

//assets for Footer menu
import SupportIcon from '@/public/assets/icons/supporticon.svg'
import SecondFooterDashboardIcon from '@/public/assets/icons/second-footer-dashboard-icon.svg'
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

function SecondDashboard() {
  //handle the dashboard profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)

  return (
    <div
      className='flex justify-evenly flex-row-reverse items-center mt-[50px] mb-10'
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
        <div className='flex justify-evenly items-center  w-[151px] h-[58px]  rounded-[38px]  mr-[13px] cursor-pointer'>
          <div className='w-[48px] h-[27px] ml-[38px]'>
            <p className=' font-medium text-[16.2px] text-[#737791] leading-[27.47px] hover:text-[#5D5FEF]'>
              داشبورد
            </p>
          </div>
          <div className='flex justify-center items-center w-[28.8px] h-[28.8px] top-[14.4px]'>
            <Image src={SecondFooterDashboardIcon} />
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
  )
}

export default SecondDashboard
