'use client'
import Image from 'next/image'
import Link from 'next/link'

import '@/styles/auth.css'

//assets for this page
import loginPageImg from '@/public/assets/images/login-page-img.svg'

function page() {
  return (
    <div className='completion-of-information-full-container h-full w-full'>
      <div>
        <Image src={loginPageImg} />
      </div>
      {/* text-button and input-section */}
      <div className='flex flex-col justify-center items-center'>
        {/* heading-texts and input container*/}
        <div className='flex flex-col justify-end items-end'>
          <div className='flex flex-col justify-end items-end'>
            <p className='font-bold text-[30px] text-[#000000] leading-[50.87px]'>
              ورود
            </p>

            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </p>
            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              . صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          {/* label-and-login-input-section */}
          <div className='flex flex-col mt-20'>
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5'
              htmlFor='auth-mobile-number-input'
            >
              رمز عبور
            </label>
            <div className='relative'>
              <input
                dir='rtl'
                className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
                name='auth-mobile-number-input'
              />
              <button
                className='flex justify-center items-center w-[81px] h-[27px] ml-2'
                onClick={() => alert('redirection functionality')}
              >
                <Link
                  href='/auth/forget-password-phonenumber-check'
                  className='absolute top-[25px] font-bold text-[16px] text-[#5D5FEF] leading-[27.13px] ml-3'
                >
                  فراموشی
                </Link>
              </button>
            </div>
          </div>
          {/* remember-me-section */}
          <div className='flex justify-center items-center'>
            <p className='font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-3'>
              مرا به خاطر داشته باش
            </p>
            <input
              type='checkbox'
              id='Terms-and-Conditions-check-box'
              className='cursor-pointer'
              style={{
                accentColor: '#5D5FEF',
              }}
            />
          </div>
          {/* button */}
          <button className='w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px] mt-20'>
            <Link href='/auth/login'>
              <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                ورود به سامانه
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

