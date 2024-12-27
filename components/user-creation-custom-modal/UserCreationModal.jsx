'use client'
import { useAppContext } from '@/context'
//assets for custom modal
import UserCreationModalCloseButton from '@/public/assets/icons/close-modal-button.svg'
import Image from 'next/image'

function UserCreationModal() {
  const { isModalOpen, closeModal } = useAppContext()
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
        className='flex flex-col justify-center items-center w-[695px] h-[564px] rounded-[30px]'
        style={{
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        {/* add-user-modal-heading-text and close-button */}

        <div className='flex flex-row-reverse justify-between items-center w-[680px]'>
          <div className=' flex justify-center items-center mr-10'>
            <button onClick={closeModal} className=''>
              <Image src={UserCreationModalCloseButton} />
            </button>
          </div>
          <div className='flex justify-center items-center ml-[290px]'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px]'>
              افزودن کاربر
            </p>
          </div>
        </div>
        {/* heading-inputs-section */}
        <div className='flex justify-center items-center gap-5 mt-20'>
          <input
            dir='rtl'
            className='w-[301px] h-[60px] rounded-[30px] p-5 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 0.1)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
            placeholder='ایمیل کاربر'
          />

          <input
            dir='rtl'
            className='w-[301px] h-[60px] rounded-[30px] p-5 placeholder:text-[18px] placeholder:text-[#5D5FEF] placeholder:font-normal'
            style={{
              background: 'rgba(93, 95, 239, 0.1)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
            placeholder='نام کاربر'
          />
        </div>
        {/* options-inputs-section */}
        <div className='mt-10'>
          <div
            id='store-maker-modal-options-input-1'
            className=' flex flex-row-reverse justify-between items-center w-[624px] h-[60px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <p className='font-normal text-[18px] text-[#1E1E1E] leading-[30.52px] '>
              دسترسی به محصولات
            </p>
            <button
              className='flex justify-center items-center w-[166px] h-[43px]  rounded-[21px]'
              style={{
                backgroundColor: 'rgba(246, 78, 96, 0.1)',
              }}
            >
              <p className='font-medium text-[18px] text-[#F84F4F] leading-[30.52px]'>
                غیر فعال
              </p>
            </button>
          </div>
          <br />
          <div
            id='store-maker-modal-options-input-2'
            className=' flex flex-row-reverse justify-between items-center w-[624px] h-[60px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <p className='font-normal text-[18px] text-[#1E1E1E] leading-[30.52px] '>
              دسترسی به حسابداری
            </p>
            <button
              className='flex justify-center items-center w-[166px] h-[43px]  rounded-[21px]'
              style={{
                backgroundColor: 'rgba(74, 181, 142, 1)',
              }}
            >
              <p className='font-medium text-[18px] text-[#FFFFFF] leading-[30.52px]'>
                فعال
              </p>
            </button>
          </div>
          <br />
          <div
            id='store-maker-modal-options-input-2'
            className=' flex flex-row-reverse justify-between items-center w-[624px] h-[60px] rounded-[30px] p-5'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
            }}
          >
            <p className='font-normal text-[18px] text-[#1E1E1E] leading-[30.52px] '>
              دسترسی به گزارشات
            </p>
            <button
              className='flex justify-center items-center w-[166px] h-[43px]  rounded-[21px]'
              style={{
                backgroundColor: 'rgba(74, 181, 142, 1)',
              }}
            >
              <p className='font-medium text-[18px] text-[#FFFFFF] leading-[30.52px]'>
                فعال
              </p>
            </button>
          </div>
        </div>

        {/* add-user-purple-button */}
        <div className='flex justify-center items-center mt-10'>
          <button
            className='w-[244px] h-[57px] rounded-[31.5px]'
            style={{
              background: 'rgba(93, 95, 239, 1)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            }}
          >
            <p className='font-bold text-[16px] text-[#FFFFFF] leading-[24px]'>
              افزودن کاربر
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCreationModal
