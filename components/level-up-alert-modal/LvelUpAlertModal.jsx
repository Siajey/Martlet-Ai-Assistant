'use client'

//context data
import { useAppContext } from '@/context'

import Image from 'next/image'
//assets
import CloseModalButton from '@/public/assets/icons/close-modal-button.svg'

function LvelUpAlertModal() {
  //context data to handle the lvelup alert modal open and close
  const { isLevelUpModalOpen, LevelUpClose } = useAppContext()
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isLevelUpModalOpen ? 'block' : 'hidden'
      }`}
      style={{
        zIndex: 9999, // Ensure modal appears on top of other elements
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
      }}
    >
      <div
        className='w-[551px] h-[227px] rounded-[30px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        {/* heading-text & close-button */}
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center ml-[210px] mt-10'>
            <p className='font-medium text-[20px] text-[#151D48] leading-[30px]'>
              ارتقا سطح
            </p>
          </div>
          <div className='flex justify-center items-center mr-10 mt-10'>
            <button onClick={LevelUpClose}>
              <Image src={CloseModalButton} />
            </button>
          </div>
        </div>
        {/* main-text */}
        <div className='flex justify-center items-center mt-10'>
          <p className='font-normal text-[16px] text-[#1E1E1E] leading-[32px] opacity-[80%]'>
            برای استفاده از این قابلیت باید سطح عضویت خود را ارتقا دهید
          </p>
        </div>
        {/* button */}
        <div className='flex justify-center items-center mt-10'>
          <button
            className='w-[198px] h-[51px] rounded-[31.5px]'
            style={{
              backgroundColor: 'rgba(93, 95, 239, 1)',
              boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
            }}
            onClick={() => alert('Level up functionality will be implemented')}
          >
            <p className='font-medium text-[16px] text-[#FFFFFF] leading-[27px]'>
              ارتقا سطح عضویت
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LvelUpAlertModal
