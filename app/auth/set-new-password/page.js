'use client'
import Image from 'next/image'
import Link from 'next/link'

import '@/styles/auth.css'

//assets for this page
import forgetPassPageImg from '@/public/assets/images/forget-pass-page-img.svg'

function page() {
  return (
    <div className='set-new-password-full-container h-full w-full'>
      <div>
        <Image src={forgetPassPageImg} />
      </div>
      {/* text-button and input-section */}
      <div className='flex flex-col justify-center items-center'>
        {/* heading-texts and input container*/}
        <div className='flex flex-col justify-end items-end'>
          <div className='flex flex-col justify-end items-end'>
            <p className='font-bold text-[30px] text-[#000000] leading-[50.87px]'>
              رمز عبور جدید
            </p>

            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </p>
            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              . صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          {/* label-and-forget-password-input-section */}
          <div className='flex flex-col mt-20'>
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5'
              htmlFor='auth-mobile-number-input'
            >
              رمز عبور جدید
            </label>

            <input
              dir='rtl'
              className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
              name='auth-mobile-number-input'
            />
            {/* redeclare-the-pass-section */}
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5 mt-10'
              htmlFor='auth-mobile-number-input'
            >
              تکرار رمز عبور جدید
            </label>

            <input
              dir='rtl'
              className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
              name='auth-mobile-number-input'
            />
          </div>

          {/* button */}
          <button className='w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px] mt-20'>
            <Link href='/auth/'>
              <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27.13px]'>
                تایید
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



