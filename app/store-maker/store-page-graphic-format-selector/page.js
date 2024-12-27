import Image from 'next/image'

//assets for this page
import GraphicFormatCardImg1 from '@/public/assets/images/graphic-format-card-img1.svg'
import GraphicFormatCardImg2 from '@/public/assets/images/graphic-format-card-img2.svg'
import GraphicFormatCardImg3 from '@/public/assets/images/graphic-format-card-img3.svg'
import GraphicFormatCardImg4 from '@/public/assets/images/graphic-format-card-img4.svg'
import GraphicFormatCardImg5 from '@/public/assets/images/graphic-format-card-img5.svg'
import GraphicFormatCardImg6 from '@/public/assets/images/graphic-format-card-img6.svg'
import GraphicFormatCardImg7 from '@/public/assets/images/graphic-format-card-img7.svg'

function page() {
  return (
    <div
      id='store-maker-store-page-graphic-format-selector-fully-container'
      className='h-[100vh] overflow-scroll'
    >
      <div className='flex flex-col justify-center items-center'>
        {/* Heading-text */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <p className='font-bold text-[48px] text-[#000000] leading-[81px]'>
            انتخاب قالب گرافیکی
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

        {/* graphic-form-cards */}
        <div className='flex flex-row-reverse justify-center items-center gap-10 mt-20'>
          <div
            id='graphic-form-card-1'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg1} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>

          <div
            id='graphic-form-card-2'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg2} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>

          <div
            id='graphic-form-card-3'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg3} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>

          <div
            id='graphic-form-card-4'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg4} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-row-reverse justify-center items-center gap-10 mt-10'>
          <div
            id='graphic-form-card-5'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg5} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>

          <div
            id='graphic-form-card-6'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg6} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>

          <div
            id='graphic-form-card-7'
            className='flex flex-col justify-center items-center w-[276px] h-[299px] rounded-[20px]'
            style={{
              backgroundColor: ' rgba(255, 255, 255, 0.3)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            {/* image */}
            <div className='flex justify-center items-center'>
              <Image src={GraphicFormatCardImg7} />
            </div>
            {/* button */}
            <div className='flex flex-row-reverse justify-center items-center mt-5 gap-2'>
              <button className='w-[120px] h-[45px] border-[2px] border-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#5D5FEF]'>
                  پیش نمایش
                </p>
              </button>
              <button className='w-[120px] h-[45px] bg-[#5D5FEF] rounded-[10px]'>
                <p className='font-bold text-[14px] leading-[24px]  text-[#FFFFFF]'>
                  انتخاب قالب
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* format-submit-button */}
        <div className='mt-20 mb-10'>
          <button className='flex justify-center items-center w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px]'>
            <p className='font-bold text-[18px] text-[#FFFFFF] leading-[27px]'>
              تایید
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page


