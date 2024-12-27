import Image from 'next/image'

//assets
import StoreMakerDefaultLogoSelectorImg1 from '@/public/assets/images/store-maker-default-logo-selector-img-1.svg'
import StoreMakerDefaultLogoSelectorImg2 from '@/public/assets/images/store-maker-default-logo-selector-img-2.svg'
import StoreMakerDefaultLogoSelectorImg3 from '@/public/assets/images/store-maker-default-logo-selector-img-3.svg'
import StoreMakerDefaultLogoSelectorImg4 from '@/public/assets/images/store-maker-default-logo-selector-img-4.svg'
import StoreMakerDefaultLogoSelectorImg5 from '@/public/assets/images/store-maker-default-logo-selector-img-5.svg'
import StoreMakerDefaultLogoSelectorImg6 from '@/public/assets/images/store-maker-default-logo-selector-img-6.svg'
import StoreMakerDefaultLogoSelectorImg7 from '@/public/assets/images/store-maker-default-logo-selector-img-7.svg'
import StoreMakerDefaultLogoSelectorImg8 from '@/public/assets/images/store-maker-default-logo-selector-img-8.svg'
import StoreMakerDefaultLogoSelectorImg9 from '@/public/assets/images/store-maker-default-logo-selector-img-9.svg'
import StoreMakerDefaultLogoSelectorImg10 from '@/public/assets/images/store-maker-default-logo-selector-img-10.svg'
import StoreMakerDefaultLogoSelectorImg11 from '@/public/assets/images/store-maker-default-logo-selector-img-11.svg'
import StoreMakerDefaultLogoSelectorImg12 from '@/public/assets/images/store-maker-default-logo-selector-img-12.svg'
import StoreMakerDefaultLogoSelectorImg13 from '@/public/assets/images/store-maker-default-logo-selector-img-13.svg'
import StoreMakerDefaultLogoSelectorImg14 from '@/public/assets/images/store-maker-default-logo-selector-img-14.svg'
import StoreMakerDefaultLogoSelectorImg15 from '@/public/assets/images/store-maker-default-logo-selector-img-15.svg'

function page() {
  return (
    <div
      id='store-page-select-default-logo-fully-container'
      className='flex flex-col justify-center items-center h-[100vh]  overflow-hidden'
    >
      <div className='flex flex-col  w-full justify-center items-center'>
        {/* Heading-text */}
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-[48px] text-[#000000] leading-[81px]'>
            انتخاب لوگوی پیشفرض
          </p>
          <div className='flex flex-col justify-center items-center mt-10'>
            <p className='font-bold text-[20px] text-[#8692A6] leading-[28px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </p>
            <p className='font-bold text-[20px] text-[#8692A6] leading-[28px]'>
              از طراحان گرافیک است.
            </p>
          </div>
        </div>
        {/* logo-images-container */}
        <div className='flex flex-col justify-center items-center gap-20 mt-10'>
          <div className='flex flex-row-reverse justify-center items-center gap-10'>
            <div id='default-logo-img-1'>
              <Image src={StoreMakerDefaultLogoSelectorImg1} />
            </div>
            <div id='default-logo-img-2'>
              <Image src={StoreMakerDefaultLogoSelectorImg2} />
            </div>{' '}
            <div id='default-logo-img-3'>
              <Image src={StoreMakerDefaultLogoSelectorImg3} />
            </div>{' '}
            <div id='default-logo-img-4'>
              <Image src={StoreMakerDefaultLogoSelectorImg4} />
            </div>{' '}
            <div id='default-logo-img-5'>
              <Image src={StoreMakerDefaultLogoSelectorImg5} />
            </div>{' '}
          </div>
          <div className='flex flex-row-reverse justify-center items-center gap-10'>
            <div id='default-logo-img-6'>
              <Image src={StoreMakerDefaultLogoSelectorImg6} />
            </div>{' '}
            <div id='default-logo-img-7'>
              <Image src={StoreMakerDefaultLogoSelectorImg7} />
            </div>{' '}
            <div id='default-logo-img-8'>
              <Image src={StoreMakerDefaultLogoSelectorImg8} />
            </div>{' '}
            <div id='default-logo-img-9'>
              <Image src={StoreMakerDefaultLogoSelectorImg9} />
            </div>{' '}
            <div id='default-logo-img-10'>
              <Image src={StoreMakerDefaultLogoSelectorImg10} />
            </div>{' '}
          </div>
          <div className='flex flex-row-reverse justify-center items-center gap-10'>
            <div id='default-logo-img-11'>
              <Image src={StoreMakerDefaultLogoSelectorImg11} />
            </div>
            <div id='default-logo-img-12'>
              <Image src={StoreMakerDefaultLogoSelectorImg12} />
            </div>
            <div id='default-logo-img-13'>
              <Image src={StoreMakerDefaultLogoSelectorImg13} />
            </div>
            <div id='default-logo-img-14'>
              <Image src={StoreMakerDefaultLogoSelectorImg14} />
            </div>
            <div id='default-logo-img-15'>
              <Image src={StoreMakerDefaultLogoSelectorImg15} />
            </div>
          </div>
        </div>
        {/* button */}
        <div className='flex justify-center items-center mt-20'>
          <button className='w-[425px] h-[65px] bg-[#5D5FEF] rounded-[15px]'>
            <p className='font-bold text-[16px] text-[#FFFFFF] leading-[27px]'>
              ادامه
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
