'use client'
import Image from 'next/image'

import { Collapse } from 'react-collapse'

//icons we need
import OpenAccordionIcon from '@/public/assets/icons/open-accordion-button-icon.svg'
import CloseAccordionIcon from '@/public/assets/icons/close-accordion-button-icon.svg'

function AccordionItem({ open, toggle, title, description }) {
  //Define dynamic class names based on isActive handlers
  const dynamicClassNames = `w-[812px]  mt-10 ${
    open ? 'rounded-[30px]' : 'rounded-[76px]'
  }`
  return (
    <div
      className='flex justify-center items-center'
      id='accordion-items-full-container'
    >
      <div
        className={`${dynamicClassNames}`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div
          className='flex flex-row-reverse justify-between items-center h-[86px] mr-10 ml-10'
          onClick={toggle}
        >
          <p className=''>{title}</p>
          <div className='text-[30px] flex justify-center items-center flex-row-reverse'>
            {open ? (
              <button>
                <Image src={CloseAccordionIcon} />
              </button>
            ) : (
              <button>
                <Image src={OpenAccordionIcon} />
              </button>
            )}
          </div>
        </div>

        <Collapse isOpened={open}>
          <div className={`${dynamicClassNames} p-5`}>
            <p className='text-end'>{description}</p>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default AccordionItem




