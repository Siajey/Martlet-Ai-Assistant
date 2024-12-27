'use client'
//context data
import { useAppContext } from '@/context'
import Image from 'next/image'

//assets
import CloseModalButton from '@/public/assets/icons/close-modal-button.svg'
import ProductImagePurpleIcon from '@/public/assets/icons/product-image-purple-icon.svg'
import CategoryPurpleArrowDownIcon from '@/public/assets/icons/CategoryPurpleArrowDownIcon.svg'

function ProductCreationModalStage2() {
  const { isSecondModalOpen, closeSecondModal, openThirdModal } =
    useAppContext()
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isSecondModalOpen ? 'block' : 'hidden'
      }`}
      style={{
        zIndex: 9999, // Ensure modal appears on top of other elements
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
      }}
    >
      <div
        className='w-[695px] h-[498px] rounded-[30px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        {/* heading-text & close-button */}
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center ml-[290px] mt-10'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px]'>
              افزودن محصول
            </p>
          </div>
          <div className='flex justify-center items-center mr-10 mt-10'>
            <button onClick={closeSecondModal}>
              <Image src={CloseModalButton} />
            </button>
          </div>
        </div>

        {/* progress-bar-section */}
        <div className='relative flex justify-center items-center mt-10'>
          <div className='w-[603px] h-[3px] bg-[#1E1E1E] opacity-[10%]' />
          <div className='absolute right-[40px] w-[299px] h-[5px] rounded-[4px] bg-[#5D5FEF]' />
        </div>
        {/* product-name & product-category inputs-section */}
        <div className='flex justify-center items-center gap-5 mt-10'>
          <div id='category-input-container' className='relative'>
            <input
              dir='rtl'
              className='w-[301px] h-[60px] rounded-[30px] p-5 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal'
              style={{
                backgroundColor: 'rgba(93, 95, 239, 0.1)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
              placeholder='دسته بندی'
            />
            {/* category-icon */}
            <div className='absolute top-5 left-5'>
              <Image src={CategoryPurpleArrowDownIcon} />
            </div>
          </div>
          <input
            dir='rtl'
            className='w-[301px] h-[60px] rounded-[30px] p-5 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal'
            style={{
              background: 'rgba(93, 95, 239, 0.1)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
            placeholder='نام محصول'
          />
        </div>

        {/* images and videos of the product container */}
        <div className='flex justify-center items-center mt-10'>
          <div
            className='flex justify-center items-center w-[626px] h-[185px] rounded-[30px]'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 0.1)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <div className='flex flex-col justify-center items-center align-middle'>
              <Image src={ProductImagePurpleIcon} />

              <p className='font-normal text-[18px] text-[#5D5FEF] leading-[30px]'>
                عکس‌ها و ویدیوهای محصول
              </p>
            </div>
          </div>
        </div>

        {/* buttons-section */}
        <div className='flex flex-row-reverse justify-around items-center mt-5'>
          <button
            className='w-[193px] h-[57px] rounded-[31px] border-[3px] border-[#5D5FEF]'
            onClick={closeSecondModal}
          >
            <p className='font-bold text-[16px] text-[#5D5FEF] leading-[24px]'>
              انصراف
            </p>
          </button>
          <button
            className='w-[193px] h-[57px] bg-[#5D5FEF] rounded-[31px]'
            onClick={openThirdModal}
          >
            <p className='font-bold text-[16px] text-[#FFFFFF] leading-[24px]'>
              مرحله بعد
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCreationModalStage2

