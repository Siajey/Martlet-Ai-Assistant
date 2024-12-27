'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

function DashboardFooter() {
  //handle the dashboard profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)

  return (
    <div
      className='flex justify-evenly flex-row-reverse items-center mt-[110px]'
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
      <div
        className={`${
          profileCollapse
            ? 'flex flex-col justify-center items-center h-[382px] rounded-[30px] mb-[300px] ml-10'
            : 'rounded-[30px] ml-10'
        }`}
        style={{
          boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
        }}
      >
        <ul className=''>
          <li
            id='profile-collapse-list-item-1'
            className={`flex justify-end items-center w-[224px] h-[63px]  ${
              profileCollapse ? '' : 'hidden'
            }`}
          >
            <div className='flex justify-end items-end mr-5'>
              <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                خروج
              </p>
              <Image src={RedExitProfileICon} />
            </div>
          </li>
          <li
            id='profile-collapse-list-item-2'
            className={`flex justify-end items-center w-[224px] h-[63px] border-t border-gray-200 ${
              profileCollapse ? '' : 'hidden'
            }`}
          >
            <div className='flex justify-end items-end mr-5'>
              <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                کدهای تخفیف
              </p>
              <Image src={PurpleDiscountCode} />
            </div>
          </li>
          <li
            id='profile-collapse-list-item-3'
            className={`flex justify-end items-center  w-[224px] h-[63px] border-t border-gray-200 ${
              profileCollapse ? '' : 'hidden'
            }`}
          >
            <div className='flex justify-end items-end mr-5'>
              <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                سطح عضویت
              </p>
              <Image src={PurpleMembershipLevel} />
            </div>
          </li>
          <li
            id='profile-collapse-list-item-4'
            className={`flex justify-end items-center w-[224px] h-[63px] border-t border-gray-200 ${
              profileCollapse ? '' : 'hidden'
            }`}
          >
            <div className='flex justify-end items-end mr-5'>
              <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                تراکنش ها
              </p>
              <Image src={PurpleTransactions} />
            </div>
          </li>
          <li
            id='profile-collapse-list-item-5'
            className={`flex justify-end items-center  w-[224px] h-[63px] border-t border-gray-200 ${
              profileCollapse ? '' : 'hidden'
            }`}
          >
            <div className='flex justify-end items-end mr-5'>
              <p className='font-medium text-[14px] text-[#151D48] leading-[24px] mr-5'>
                اطلاعات حساب
              </p>
              <Image src={AccountInfoIcon} />
            </div>
          </li>
        </ul>

        <div
          className={`${
            profileCollapse
              ? 'flex-none flex justify-evenly items-center w-[224px] h-[63px] rounded-b-[30px] border-t border-gray-200'
              : 'flex-none flex justify-evenly items-center w-[224px] h-[63px] rounded-[31.5px]'
          }`}
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
      </div>
    </div>
  )
}

export default DashboardFooter



