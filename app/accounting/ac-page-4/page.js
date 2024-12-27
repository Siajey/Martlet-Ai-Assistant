'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets we need for the accounting Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import StoreMakerNavbarButtonIcon from '@/public/assets/icons/store-maker-navbar-button-icon.svg'

//assets for dashboard footer menu accounting  page1
import SupportIcon from '@/public/assets/icons/supporticon.svg'
import AccountingIcon from '@/public/assets/icons/accounting-pag-1-accounting-icon.svg'
import DefinitionsIcon from '@/public/assets/icons/accounting-pag-1-definitions-icon.svg'
import DataIcon from '@/public/assets/icons/accounting-pag-1-dataicon.svg'
import OperationIcon from '@/public/assets/icons/accounting-page-1-operation-icon.svg'
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

//search input section assets
import SearchInputSearchPurpleIcon from '@/public/assets/icons/search-input-search-purple-icon.svg'
import SearchResultPurpleArrowDownIcon from '@/public/assets/icons/purple-arrow-down-search-result-icon.svg'
import PurpleAddUserTableIcon from '@/public/assets/icons/purple-add-user-table-icon.svg'

//search results item boxes assets
import WhiteEditPencilIcon from '@/public/assets/icons/white-edit-pencil-icon.svg'
import TrashBInIcon from '@/public/assets/icons/trash-bin-icon.svg'
import ViewIcon from '@/public/assets/icons/accounting-page-2-view-icon.svg'

function page() {
  //state to control the footer profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)
  return (
    <div id='accounting-page-4-fully-container'>
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
              حسابداری - گروه‌های کاری
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

      <div id='accounting-page-3-section-container' className='h-[100vh]'>
        {/* search-input-section & result-section*/}
        <div
          id='search-input-search-result-container'
          className='flex flex-row-reverse justify-between items-center '
          style={{
            marginTop: '50px',
            marginRight: '200px',
            marginLeft: '200px',
          }}
        >
          {/* purple-search-input-section */}
          <div className='flex flex-row-reverse justify-center items-center'>
            {/* purple-search-input-section */}
            <div className='' style={{ position: 'relative' }}>
              <input
                type='search'
                dir='rtl'
                className='w-[452px] h-[60px] rounded-[30px] text-[16px] leading-[27.13px] placeholder:text-[#5D5FEF] p-10 pl-14'
                style={{
                  backgroundColor: 'rgba(93, 95, 239, 0.1)',
                  boxShadow:
                    '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
                }}
                placeholder='جستجوی ردیف'
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                }}
              >
                <button
                  type='submit'
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={SearchInputSearchPurpleIcon} />
                </button>
              </div>
            </div>

            {/* show-result-purple-heading-text */}
            <div className='flex justify-center items-center mr-10'>
              <Image src={SearchResultPurpleArrowDownIcon} className='mr-2' />
              <p className='font-bold text-[16px] text-[#5D5FEF] leading-[27px] '>
                نمایش 10 مورد
              </p>
            </div>
          </div>
        </div>
        {/* table-heading-texts */}
        <div className='flex justify-center items-center mt-20'>
          <div className='flex flex-row-reverse justify-between items-center w-[1130px]'>
            <div className='flex justify-center items-center'>
              <p className='font-light text-[16px] text-[#1E1E1E] leading-[24px]'>
                ردیف
              </p>
            </div>

            <div className='flex justify-center items-center'>
              <p className='font-light text-[16px] text-[#1E1E1E] leading-[24px] ml-[90px]'>
                کد گروه کاری
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-light text-[16px] text-[#1E1E1E] leading-[24px] ml-[90px]'>
                نام گروه کاری
              </p>
            </div>

            <div className='flex justify-center items-center ml-24'>
              <p className='font-light text-[16px] text-[#1E1E1E] leading-[24px]'>
                نوع حساب
              </p>
            </div>
            <div className='flex justify-center items-center ml-16'>
              <p className='font-light text-[16px] text-[#1E1E1E] leading-[24px]'>
                عملیات
              </p>
            </div>
          </div>
        </div>

        {/* search-result-items-boxes */}
        <div
          id='search-result-items-boxes-container'
          className='flex flex-col justify-center items-center'
          style={{
            marginTop: '50px',
            marginRight: '200px',
            marginLeft: '200px',
          }}
        >
          <div
            id='search-result-items-boxes-container'
            className='flex flex-col justify-center items-center'
            style={{
              marginTop: '50px',
              marginRight: '200px',
              marginLeft: '200px',
            }}
          >
            <div
              id='accounting-page-4-search-result-item-box-1'
              className='flex flex-row-reverse justify-between items-center w-[1235px] h-[93px] rounded-[30px] p-10'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-normal text-[16px] leading-[24px] text-[#1E1E1E]'>
                1
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[24px]'>
                24515
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[16px] text-[#1E1E1E] leading-[24px]'>
                دارایی های جاری
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/*title-container*/}
              <div className='flex justify-center items-center w-[142px] h-[50px] rounded-[15px]'>
                <p className='font-medium text-[16px] leading-[28px] '>
                  ترازنامه ای
                </p>
              </div>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/* buttons-container */}
              <div className='flex flex-row-reverse justify-center items-center gap-5'>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#4AB58E] rounded-[50%]'>
                  <Image src={ViewIcon} />
                </button>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#F07140] rounded-[50%]'>
                  <Image src={WhiteEditPencilIcon} />
                </button>
              </div>
            </div>

            <div
              id='accounting-page-4-search-result-item-box-2'
              className='flex flex-row-reverse justify-between items-center w-[1235px] h-[93px] rounded-[30px] mt-10 p-10'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-normal text-[16px] leading-[24px] text-[#1E1E1E]'>
                2
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[24px]'>
                24515
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[16px] text-[#1E1E1E] leading-[24px]'>
                دارایی های غیر جاری
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/*title-container*/}
              <div className='flex justify-center items-center w-[142px] h-[50px] rounded-[15px]'>
                <p className='font-medium text-[16px] leading-[28px] '>
                  ترازنامه ای
                </p>
              </div>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/* buttons-container */}
              <div className='flex flex-row-reverse justify-center items-center gap-5'>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#4AB58E] rounded-[50%]'>
                  <Image src={ViewIcon} />
                </button>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#F07140] rounded-[50%]'>
                  <Image src={WhiteEditPencilIcon} />
                </button>
              </div>
            </div>

            <div
              id='accounting-page-4-search-result-item-box-3'
              className='flex flex-row-reverse justify-between items-center w-[1235px] h-[93px] rounded-[30px] mt-10 p-10'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-normal text-[16px] leading-[24px] text-[#1E1E1E]'>
                3
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[24px]'>
                24515
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[16px] text-[#1E1E1E] leading-[24px]'>
                بدهی های جاری
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/*title-container*/}
              <div className='flex justify-center items-center w-[142px] h-[50px] rounded-[15px]'>
                <p className='font-medium text-[16px] leading-[28px] '>
                  ترازنامه ای
                </p>
              </div>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/* buttons-container */}
              <div className='flex flex-row-reverse justify-center items-center gap-5'>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#4AB58E] rounded-[50%]'>
                  <Image src={ViewIcon} />
                </button>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#F07140] rounded-[50%]'>
                  <Image src={WhiteEditPencilIcon} />
                </button>
              </div>
            </div>

            <div
              id='accounting-page-4-search-result-item-box-4'
              className='flex flex-row-reverse justify-between items-center w-[1235px] h-[93px] rounded-[30px] mt-10 p-10'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-normal text-[16px] leading-[24px] text-[#1E1E1E]'>
                4
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[24px]'>
                24515
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[16px] text-[#1E1E1E] leading-[24px]'>
                بدهی های بلند مدت
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/*title-container*/}
              <div className='flex justify-center items-center w-[142px] h-[50px] rounded-[15px]'>
                <p className='font-medium text-[16px] leading-[28px] '>
                  ترازنامه ای
                </p>
              </div>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/* buttons-container */}
              <div className='flex flex-row-reverse justify-center items-center gap-5'>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#4AB58E] rounded-[50%]'>
                  <Image src={ViewIcon} />
                </button>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#F07140] rounded-[50%]'>
                  <Image src={WhiteEditPencilIcon} />
                </button>
              </div>
            </div>

            <div
              id='accounting-page-4-search-result-item-box-5'
              className='flex flex-row-reverse justify-between items-center w-[1235px] h-[93px] rounded-[30px] mt-10 p-10'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <p className='font-normal text-[16px] leading-[24px] text-[#1E1E1E]'>
                5
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[20px] text-[#1E1E1E] leading-[24px]'>
                24515
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              <p className='font-medium text-[16px] text-[#1E1E1E] leading-[24px]'>
                حقوق صاحبان سهام
              </p>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/*title-container*/}
              <div className='flex justify-center items-center w-[142px] h-[50px] rounded-[15px]'>
                <p className='font-medium text-[16px] leading-[28px] '>
                  ترازنامه ای
                </p>
              </div>
              <div className='w-[49px] transfer rotate-90 border-[2px] border-[#1E1E1E] opacity-[10%]' />
              {/* buttons-container */}
              <div className='flex flex-row-reverse justify-center items-center gap-5'>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#4AB58E] rounded-[50%]'>
                  <Image src={ViewIcon} />
                </button>
                <button className='flex justify-center items-center w-[47px] h-[47px] bg-[#F07140] rounded-[50%]'>
                  <Image src={WhiteEditPencilIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* accounting-page-4-footer-nav-menu */}
      <div
        className='flex justify-evenly flex-row-reverse items-center mt-[50px] mb-5'
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
            <div className='w-[48px] h-[27px]'>
              <p className=' font-medium text-[16.2px] leading-[27.47px]'>
                حسابداری
              </p>
            </div>
            <div className='flex justify-center items-center w-[28.8px] h-[28.8px] top-[14.4px]'>
              <Image src={AccountingIcon} />
            </div>
          </div>
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-1'
          >
            <Image src={ArrowUpIcon} className='opacity-[50%]' />
            <div className='w-[60px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                تعاریف
              </p>
            </div>
            <Image src={DefinitionsIcon} />
          </div>
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-2'
          >
            <Image src={ArrowUpIcon} className='opacity-[50%]' />
            <div className='w-[64px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                اطلاعات
              </p>
            </div>
            <Image src={DataIcon} />
          </div>{' '}
          <div
            className='flex justify-center items-center gap-2'
            id='footer-menu-icon-3'
          >
            <Image src={ArrowUpIcon} className='opacity-[50%]' />
            <div className='w-[53px] h-[27px]'>
              <p className='font-normal text-[16.2px] leading-[27.47px] text-[#737791] hover:text-[#5D5FEF] cursor-pointer'>
                عملیات
              </p>
            </div>
            <Image src={OperationIcon} />
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
                : 'flex-none flex justify-evenly items-center w-[224px] h-[63px] rounded-[31.5px] '
            }`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
              cursor: 'pointer',
            }}
            onClick={() => setProfileCollapse((prev) => !prev)}
          >
            <div className='w-[12px] h-[6px] ml-[10px]'>
              <Image src={ArrowUpIcon} className='opacity-[50%]' />
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
    </div>
  )
}

export default page



