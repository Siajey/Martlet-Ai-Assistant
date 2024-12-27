'use client'
import { useState } from 'react'
import Image from 'next/image'

import '@/styles/auth.css'

//assets for this page
import registerPageImg from '@/public/assets/images/register-page-img.svg'
import Link from 'next/link'

function page() {
  //handle the checkbox on this state
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    // we can have functionality if necessary
  }

  return (
    <div className='register-page-full-container h-full w-full'>
      <div>
        <Image src={registerPageImg} />
      </div>
      {/* text-button and input-section */}
      <div className='flex flex-col justify-center items-center'>
        {/* heading-texts and input container*/}
        <div className='flex flex-col justify-end items-end'>
          <div className='flex flex-col justify-end items-end'>
            <p className='font-bold text-[30px] text-[#000000] leading-[50.87px]'>
              ثبت نام
            </p>

            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          {/* label-input-section */}
          <div className='flex flex-col mt-20'>
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5'
              htmlFor='auth-mobile-number-input'
            >
              کد تایید
            </label>
            <div className='relative'>
              <input
                dir='rtl'
                className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
                name='auth-mobile-number-input'
              />
              <button
                className='flex justify-center items-center w-[81px] h-[27px] ml-2'
                onClick={() => alert('code will send as soon as possible')}
              >
                <span className='absolute top-[25px] font-bold text-[16px] text-[#5D5FEF] leading-[27.13px] ml-3'>
                  ارسال مجدد
                </span>
              </button>
            </div>
          </div>
          {/* Terms and Conditions check box section */}
          <div className='flex justify-center items-center'>
            <p className='font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-3'>
              .
              <span className='font-bold text-[16px] text-[#5D5FEF] leading-[27.13px]'>
                قوانین و مقرارات
              </span>{' '}
              را خوانده و می‌پذیرم
            </p>
            <input
              type='checkbox'
              id='Terms-and-Conditions-check-box'
              className='cursor-pointer'
              onChange={handleCheckboxChange}
              style={{
                accentColor: '#5D5FEF',
              }}
            />
          </div>
          {/* button */}
          <button className='w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px] mt-20'>
            <Link href='/auth/completion-of-information'>
              <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                تایید کد
              </p>
            </Link>
          </button>
        </div>
      </div>
      {/* image-section */}
    </div>
  )
}

export default page
