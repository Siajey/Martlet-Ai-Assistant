'use client'
//context data import
import { useAppContext } from '@/context'
import Image from 'next/image'

//assets
import CloseModalButton from '@/public/assets/icons/close-modal-button.svg'
import PhysicalProductPurpleIcon from '@/public/assets/icons/physical-product-purple-icon.svg'
import GreenDownloadIcon from '@/public/assets/icons/green-download-icon.svg'
import OrangeServicesIcon from '@/public/assets/icons/orange-people-services-icon.svg'

//components we need
import ProductCreationModalStage2 from '../product-creation-modal-stage-2/ProductCreationModalStage2'

function ProductCreationModalStage1() {
  const { isModalOpen, closeModal, openSecondModal } = useAppContext()

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isModalOpen ? 'block' : 'hidden'
      }`}
      style={{
        zIndex: 9999, // Ensure modal appears on top of other elements
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
      }}
    >
      <div
        className='flex flex-col justify-center items-center w-[695px] h-[439px] rounded-[30px] gap-5'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        {/* heading-text & close-button */}
        <div className='flex justify-between items-center w-[680px]'>
          <div className='ml-[290px]'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px]'>
              افزودن محصول
            </p>
          </div>
          <div className='mr-10'>
            <button onClick={closeModal}>
              <Image src={CloseModalButton} />
            </button>
          </div>
        </div>

        {/* select-product-type-boxes */}

        <button onClick={openSecondModal}>
          <div
            id='physical-product-box'
            className='flex flex-row-reverse justify-start items-center w-[624px] h-[95px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div
              className='flex justify-center items-center w-[63px] h-[64px] rounded-[15px]'
              style={{
                background: 'rgba(144, 64, 221, 0.1)',
              }}
            >
              <Image src={PhysicalProductPurpleIcon} />
            </div>

            <div className='flex flex-col justify-end items-end mr-5'>
              <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30.52px]'>
                کالا فیزیکی
              </p>

              <p className='font-normal text-[14px] text-[#303030] leading-[28px]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
              </p>
            </div>
          </div>
        </button>

        <button onClick={openSecondModal}>
          <div
            id='digital-product-box'
            className='flex flex-row-reverse justify-start items-center w-[624px] h-[95px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div
              className='flex justify-center items-center w-[63px] h-[64px] rounded-[15px]'
              style={{
                background: 'rgba(74, 181, 142, 0.1)',
              }}
            >
              <Image src={GreenDownloadIcon} />
            </div>

            <div className='flex flex-col justify-end items-end mr-5'>
              <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30.52px]'>
                کالای دیجیتال
              </p>

              <p className='font-normal text-[14px] text-[#303030] leading-[28px]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
              </p>
            </div>
          </div>
        </button>

        <button onClick={openSecondModal}>
          <div
            id='services-box'
            className='flex flex-row-reverse justify-start items-center w-[624px] h-[95px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div
              className='flex justify-center items-center w-[63px] h-[64px] rounded-[15px]'
              style={{
                background: 'rgba(240, 113, 64, 0.1)',
              }}
            >
              <Image src={OrangeServicesIcon} />
            </div>

            <div className='flex flex-col justify-end items-end mr-5'>
              <p className='font-medium text-[18px] text-[#1E1E1E] leading-[30.52px]'>
                خدمات
              </p>

              <p className='font-normal text-[14px] text-[#303030] leading-[28px]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
              </p>
            </div>
          </div>
        </button>
        <ProductCreationModalStage2/>
      </div>
    </div>
  )
}

export default ProductCreationModalStage1
