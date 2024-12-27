'use client'
import { useAppContext } from '@/context'
import Image from 'next/image'

//assets we need
import CloseModalButton from '@/public/assets/icons/close-modal-button.svg'

function ProductCreationModalStage3() {
  const { isThirdModalOpen, closeThirdModal } = useAppContext()
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isThirdModalOpen ? 'block' : 'hidden'
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
            <button onClick={closeThirdModal}>
              <Image src={CloseModalButton} />
            </button>
          </div>
        </div>
        {/* progress-bar-section */}
        <div className=' flex justify-center items-center mt-10'>
          <div className=' w-[603px] h-[5px] rounded-[4px] bg-[#5D5FEF]' />
        </div>

        {/* heading-input-section */}
        <div className='flex justify-center items-center'>
          <input
            className='flex justify-center items-center w-[625px] h-[60px] rounded-[30px] mt-10 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal placeholder:opacity-70'
            type='text'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 0.1)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              direction: 'rtl',
              padding: '20px',
            }}
            placeholder='برچسب‌های محصول'
          />
        </div>
        {/* textarea-section */}
        <div className='flex justify-center items-center'>
          <textarea
            className='w-[625px] h-[191px] rounded-[30px] mt-10 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal placeholder:opacity-70'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 0.1)',
              boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
              resize: 'none',
              direction: 'rtl',
              padding: '20px',
            }}
            placeholder='توضیحات محصول'
          ></textarea>
        </div>

        {/* buttons-section */}
        <div className='flex flex-row-reverse justify-around items-center mt-5'>
          <button
            className='w-[193px] h-[57px] rounded-[31px] border-[3px] border-[#5D5FEF]'
            onClick={closeThirdModal}
          >
            <p className='font-bold text-[16px] text-[#5D5FEF] leading-[24px]'>
              مرحله قبل
            </p>
          </button>
          <button className='w-[193px] h-[57px] bg-[#5D5FEF] rounded-[31px]'>
            <p className='font-bold text-[16px] text-[#FFFFFF] leading-[24px]'>
              افزودن محصول
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCreationModalStage3