import Image from 'next/image'

//assets we need
import HeroImg from '@/public/assets/images/hero-img.svg'
import ArrowRightIcon from '@/public/assets/icons/arrow-right-hero-section-icon.svg'
import GoogleLogo from '@/public/assets/images/Google-logo.svg'
import FacebookLogo from '@/public/assets/images/Facebook-logo.svg'
import YoutubeLogo from '@/public/assets/images/Youtube-logo.svg'
import WebflowLogo from '@/public/assets/images/Webflow-logo.svg'

function Hero() {
  return (
    <main id='Hero-section-full-container'>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
        }}
        className=''
        id='full-hero-section-container'
      >
        {/* Image-section */}
        <div className='mt-[100px] ml-[100px]'>
          <Image src={HeroImg} />
        </div>

        {/* text and links section */}
        <div className='flex flex-col justify-center items-center'>
          <div className='' id='heading-texts-buttons'>
            <div className='flex justify-end items-end w-[574px] h-[50px]'>
              <p className='text-[40px] text-[#5D5FEF] font-bold leading-[50px]'>
                سامانه هوشمند لکسا پلاس
              </p>
            </div>
            <div className='flex flex-col justify-end items-end w-[574px] h-[144px] mt-10'>
              <p className='text-[18px] text-[#1E1E1E] font-normal leading-[36px]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان
              </p>
              <p className='text-[18px] text-[#1E1E1E] font-normal leading-[36px]'>
                که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف
              </p>
              <p className='text-[18px] text-[#1E1E1E] font-normal leading-[36px]'>
                .بهبود ابزارهای کاربردی می باشد
              </p>
            </div>

            {/* buttons */}
            <div className='flex justify-start items-start mt-5'>
              <button
                className='flex justify-start items-start w-[195px] h-[54px] rounded-[30px] gap-2 mr-8'
                style={{
                  padding: '18px 24px 18px 24px',
                  backgroundColor: '#5D5FEF',
                }}
              >
                <div className='w-[18px] h-[18px]'>
                  <Image src={ArrowRightIcon} />
                </div>
                <p className='font-bold text-[16px] text-[#FFFFFF] leading-[18px]'>
                  ثبت نام در سامانه
                </p>
              </button>
              <button
                className='flex justify-center items-center w-[94px] h-[54px] rounded-[30px] gap-[8px]'
                style={{
                  padding: '18px 24px 18px 24px',
                  border: '2px solid #5D5FEF',
                }}
              >
                <p className='font-bold text-[16px] text-[#5D5FEF] leading-[18px ]'>
                  خدمات
                </p>
              </button>
            </div>
          </div>

          {/* social-links-section */}
          <div className='flex flex-col justify-end items-end mt-20'>
            <p className='font-medium text-[18px] text-[#5D5FEF] leading-[18px]'>
              :ما با بهترین‌ها کار می‌کنیم
            </p>

            <div className='flex justify-end items-end gap-4 w-[568px] h-[23.07px] mt-5'>
              <div className='flex justify-center items-center gap-[40px]'>
                <Image src={GoogleLogo} />
                <Image src={FacebookLogo} />
                <Image src={YoutubeLogo} />
                <Image src={WebflowLogo} />
                <Image src={GoogleLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards-section-Hero */}
      <p className='font-bold text-[#151D48] text-center text-[24px] leading-[36px] mb-10'>
        نتایج همکاری با ما
      </p>
      <div className='flex justify-center items-center'>
        {/* cards */}
        <div className='flex flex-row-reverse gap-5 justify-center items-center'>
          <div
            id='hero-section-card-1'
            className='flex justify-center items-center w-[289px] h-[185px] rounded-[30px] flex-col'
            style={{
              backgroundColor: '#FFFFFF4D',
              boxShadow: '6px 4px 40.20000076293945px 0px #E2E2E280',
            }}
          >
            <p className='font-bold text-[#5D5FEF] text-[44px] leading-[50px]'>
              240 <span className='text-black'>%</span>
            </p>
            <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
              سود در تولیدات
            </p>
          </div>
          <div
            id='hero-section-card-1'
            className='flex justify-center items-center w-[289px] h-[185px] rounded-[30px] flex-col'
            style={{
              backgroundColor: '#FFFFFF4D',
              boxShadow: '6px 4px 40.20000076293945px 0px #E2E2E280',
            }}
          >
            <p className='font-bold text-[#5D5FEF] text-[44px] leading-[50px]'>
              125 <span className='text-black'>+</span>
            </p>
            <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
              مشتری وفادار
            </p>
          </div>{' '}
          <div
            id='hero-section-card-1'
            className='flex justify-center items-center w-[289px] h-[185px] rounded-[30px] flex-col'
            style={{
              backgroundColor: '#FFFFFF4D',
              boxShadow: '6px 4px 40.20000076293945px 0px #E2E2E280',
            }}
          >
            <p className='font-bold text-[#5D5FEF] text-[44px] leading-[50px]'>
              23 <span className='text-black'>M</span>
            </p>
            <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
              خرید محصول
            </p>
          </div>
          <div
            id='hero-section-card-1'
            className='flex justify-center items-center w-[289px] h-[185px] rounded-[30px] flex-col'
            style={{
              backgroundColor: '#FFFFFF4D',
              boxShadow: '6px 4px 40.20000076293945px 0px #E2E2E280',
            }}
          >
            <p className='font-bold text-[#5D5FEF] text-[44px] leading-[50px]'>
              99 <span className='text-black'>%</span>
            </p>
            <p className='font-medium text-[20px] text-[#1E1E1E] leading-[30px]'>
              سود سازمان
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero


