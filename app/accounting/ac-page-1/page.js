'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets we need for the accounting maker Navbar
import LogoIcon from '@/public/assets/icons/dummylogo.svg'
import YellowNotificationIcon from '@/public/assets/icons/yellownotificationicon.svg'
import StoreMakerNavbarButtonIcon from '@/public/assets/icons/store-maker-navbar-button-icon.svg'

//assets for dashboard footer menu accounting page1
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

//other assets
import NewCustomerIconPurple from '@/public/assets/icons/new-customer-purple-icon.svg'
import ProductsSoldGreenIcon from '@/public/assets/icons/products-sold-green-icon.svg'
import GeneralOrdersOrangeIcon from '@/public/assets/icons/general-orders-orange-icon.svg'
import TotalSalesRedIcon from '@/public/assets/icons/total-sales-red-icon.svg'
import BlackExitIcon from '@/public/assets/icons/black-exit-button-icon.svg'

//charts components we need for accounting page 1
import ThirdRadarChart from '@/components/radar-chart-3-component/ThirdRadarChart'
import SimpleSecondLineChart from '@/components/simple-line-chart-2-component/SimpleSecondLineChart'

//transactions component assets
//assets we need to make the transactions box work
import SolarCalendarIcon from '@/public/assets/icons/solar-calendar-icon.svg'
import PurpleTimeIcon from '@/public/assets/icons/purple-time-icon.svg'
import AccountingPage1LineChart from '@/components/accounting-page-1-line-chart/AccountingPage1LineChart'
import AccountingPage1RadarChart from '@/components/accounting-page-1-radar-chart/AccountingPage1RadarChart'

function page() {
  //handle the dashboard profile collapse
  const [profileCollapse, setProfileCollapse] = useState(false)
  return (
    <div id='accounting-page-1-fully-container'>
      <div>
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
                حسابداری
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
      </div>
      {/* main-section for this page */}
      <div
        className='flex justify-center items-center mt-20'
        id='accounting-page-1-section-container'
        style={{
          marginRight: '300px',
          marginLeft: '300px',
        }}
      >
        <div
          className=''
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
          }}
        >
          {/* transactions-section */}
          <div
            className='flex justify-evenly items-center flex-col gap-2 w-[397px] h-[703px] rounded-[20px]'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* heading text and exit button*/}
            <div className='flex flex-row-reverse justify-between items-center w-[395px] p-5'>
              <div className='flex justify-center items-center w-[90px] h-[30px]'>
                <p className='font-medium text-[19px] leading-[29.43px] text-[#05004E]'>
                  فروش امروز
                </p>
              </div>
              <div className='flex flex-row-reverse justify-center items-center w-[91.98px] h-[36.79px] rounded-[7.36px] border-[1px] border-[#C3D3E2] cursor-pointer'>
                <div className='w-[14.72px] h-[14.72px]'>
                  <Image src={BlackExitIcon} />
                </div>
                <p className='font-medium text-[12.88px] text-[#0F3659] leading-[18.4px] mr-2'>
                  خروجی
                </p>
              </div>
            </div>

            {/* Transactions-boxes */}
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
              id='transaction-box-1'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
              id='transaction-box-2'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
              id='transaction-box-3'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
              id='transaction-box-4'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
              id='transaction-box-5'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
              id='transaction-box-6'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
              id='transaction-box-7'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              <div
                className='flex justify-center items-center flex-col'
                id='Toman-transaction-text-box'
              >
                <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
                  <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
                    مرتضی شیرین زاده
                  </p>
                </div>
                <div className='flex justify-end items-center ml-[162px]'>
                  <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
                    ۱۲۵،۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div
                className='flex justify-center items-center flex-row-reverse'
                id='date-time-transaction-box'
              >
                <div className='flex ml-1 flex-col'>
                  {/* subtotal texts */}
                  <div className='w-[50px] h-[24px]'>
                    <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                      ۱۴۰۰/۰۲/۲۵
                    </p>
                  </div>
                  <div>
                    <div className='w-[24px] h-[24px]'>
                      <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                        ۱۴:۲۵
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center flex-col gap-3'>
                  {/* date and time icons */}
                  <div className='w-[13px] h-[13px]'>
                    <Image src={SolarCalendarIcon} />
                  </div>
                  <div className='w-[13px] h-[13px]'>
                    <Image src={PurpleTimeIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* charts-and-summary-box-section */}
          <div className=''>
            {/* sales-summary-container-section */}
            <div
              className='flex flex-col justify-center items-center w-[799px] h-[315px] rounded-[30px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              {/* heading-text and exit-button section */}
              <div className='flex flex-row-reverse justify-between items-center w-[790px] p-5'>
                <div className='flex flex-col justify-end items-end'>
                  <p className='font-medium text-[18.4px] text-[#05004E] leading-[29.43px]'>
                    آمار امروز
                  </p>
                  <p className='font-medium text-[18.4px] text-[#737791] leading-[29.43px]'>
                    خلاصه فروش
                  </p>
                </div>
                <div className='flex flex-row-reverse justify-center items-center w-[91.98px] h-[36.79px] rounded-[7.36px] border-[1px] border-[#C3D3E2] cursor-pointer'>
                  <div className='w-[14.72px] h-[14.72px]'>
                    <Image src={BlackExitIcon} />
                  </div>
                  <p className='font-medium text-[12.88px] text-[#0F3659] leading-[18.4px] mr-2'>
                    خروجی
                  </p>
                </div>
              </div>
              {/* cards-section */}
              <div
                id='accounting-page-1-cards-container'
                className='flex flex-row-reverse justify-center items-center gap-5 mt-5'
              >
                {/* new-customer-purple-card */}
                <div
                  className='flex flex-col justify-center items-end w-[165.56px] h-[169.24px] rounded-[14.72px] gap-5 pr-5'
                  style={{
                    backgroundColor: 'rgba(144, 64, 221, 0.1)',
                  }}
                >
                  {/* icon */}
                  <div className='w-[36.79px] h-[36.79px]'>
                    <Image src={NewCustomerIconPurple} />
                  </div>
                  <p className='font-medium text-[22.8px] text-[#151D48] leading-[28.43px]'>
                    8
                  </p>
                  <p className='font-medium text-[14.72px] text-[#425166] leading-[22.8px]'>
                    مشتری جدید
                  </p>
                  <div className='flex justify-center items-center'>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px] mr-[1px]'>
                      بیشتر از دیروز
                    </p>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px]'>
                      1.2%
                    </p>
                  </div>
                </div>
                {/* new-customer-green-card */}
                <div
                  className='flex flex-col justify-center items-end w-[165.56px] h-[169.24px] rounded-[14.72px] gap-5 pr-5'
                  style={{
                    backgroundColor: 'rgba(74, 181, 142, 0.1)',
                  }}
                >
                  {/* icon */}
                  <div className='w-[36.79px] h-[36.79px]'>
                    <Image src={ProductsSoldGreenIcon} />
                  </div>
                  <p className='font-medium text-[22.8px] text-[#151D48] leading-[28.43px]'>
                    5
                  </p>
                  <p className='font-medium text-[14.72px] text-[#425166] leading-[22.8px]'>
                    محصولات فروخته شده
                  </p>
                  <div className='flex justify-center items-center'>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px] mr-[1px]'>
                      بیشتر از دیروز
                    </p>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px]'>
                      1.2%
                    </p>
                  </div>
                </div>
                {/* new-customer-orange-card */}
                <div
                  className='flex flex-col justify-center items-end w-[165.56px] h-[169.24px] rounded-[14.72px] gap-5 pr-5'
                  style={{
                    backgroundColor: 'rgba(240, 113, 64, 0.1)',
                  }}
                >
                  {/* icon */}
                  <div className='w-[36.79px] h-[36.79px]'>
                    <Image src={GeneralOrdersOrangeIcon} />
                  </div>
                  <p className='font-medium text-[22.8px] text-[#151D48] leading-[28.43px]'>
                    300
                  </p>
                  <p className='font-medium text-[14.72px] text-[#425166] leading-[22.8px]'>
                    سفارشات کلی
                  </p>
                  <div className='flex justify-center items-center'>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px] mr-[1px]'>
                      بیشتر از دیروز
                    </p>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px]'>
                      1.2%
                    </p>
                  </div>
                </div>
                {/* new-customer-red-card */}
                <div
                  className='flex flex-col justify-center items-end w-[165.56px] h-[169.24px] rounded-[14.72px] gap-5 pr-5'
                  style={{
                    backgroundColor: 'rgba(246, 78, 96, 0.1)',
                  }}
                >
                  {/* icon */}
                  <div className='w-[36.79px] h-[36.79px]'>
                    <Image src={TotalSalesRedIcon} />
                  </div>

                  <div className='flex flex-row-reverse justify-center items-center'>
                    <p className='font-medium text-[22.8px] text-[#151D48] text- leading-[28.43px]'>
                      2،500،000
                    </p>
                    <p className='font-medium text-[15px] text-[#151D48] text- leading-[28.43px] mr-2'>
                      ریال
                    </p>
                  </div>
                  <p className='font-medium text-[14.72px] text-[#425166] leading-[22.8px]'>
                    فروش کلی
                  </p>
                  <div className='flex justify-center items-center'>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px] mr-[1px]'>
                      بیشتر از دیروز
                    </p>
                    <p className='font-medium text-[11.04px] text-[#4079ED] leading-[14.72px]'>
                      1.2%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* accounting-page-1-charts */}
            <div className='flex justify-center items-center gap-10 mt-10'>
              <AccountingPage1RadarChart />
              <AccountingPage1LineChart />
            </div>
          </div>
        </div>
      </div>
      {/* accounting-page-1-footer-nav-menu */}
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

