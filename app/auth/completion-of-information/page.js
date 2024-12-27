import Image from 'next/image'

import '@/styles/auth.css'

//assets for this page
import completionInformationPageImg from '@/public/assets/images/completion-of-information-page-img.svg'
import Link from 'next/link'

function page() {
  return (
    <div className='completion-of-information-full-container h-full w-full'>
      <div>
        <Image src={completionInformationPageImg} />
      </div>
      {/* text-button and input-section */}
      <div className='flex flex-col justify-center items-center'>
        {/* heading-texts and input container*/}
        <div className='flex flex-col justify-end items-end'>
          <div className='flex flex-col justify-end items-end'>
            <p className='font-bold text-[30px] text-[#000000] leading-[50.87px]'>
              تکمیل اطلاعات
            </p>

            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </p>
            <p className='font-normal text-[18px] text-[#8692A6] leading-[28px]'>
              . صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
          {/* label-and-input-sections */}
          <div className='flex flex-col mt-20'>
            {/* name-input */}
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5'
              htmlFor='username-input'
            >
              نام
            </label>

            <input
              type='text'
              id='username-input'
              dir='rtl'
              className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
              name='username-input'
            />

            {/* lastname-input */}
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5 mt-10'
              htmlFor='username-input'
            >
              نام خانوادگی
            </label>

            <input
              type='text'
              id='username-input'
              dir='rtl'
              className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
              name='username-input'
            />
            {/* business-name-input */}
            <label
              className='text-right font-normal text-[16px] text-[#696F79] leading-[27.13px] mr-5 mt-10'
              htmlFor='username-input'
            >
              نام کسب و کار
            </label>

            <input
              type='text'
              id='username-input'
              dir='rtl'
              className='w-[426px] h-[64px] rounded-[16px] bg-[#EAF0F7] p-5 mt-2 '
              name='username-input'
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



