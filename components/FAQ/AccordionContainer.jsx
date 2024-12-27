'use client'
import { useState } from 'react'

//components we need
import AccordionItem from './AccordionItem'
//accordions-data
const Qtitle1 = (
  <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است؟
  </p>
)

const desc1 = (
  <p className='font-normal text-[16px] text-[#1E1E1E] leading-[35px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است.
  </p>
)

const Qtitle2 = (
  <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است؟
  </p>
)

const desc2 = (
  <p className='font-normal text-[16px] text-[#1E1E1E] leading-[35px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است.
  </p>
)

const Qtitle3 = (
  <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است؟
  </p>
)

const desc3 = (
  <p className='font-normal text-[16px] text-[#1E1E1E] leading-[35px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است.
  </p>
)

const Qtitle4 = (
  <p className='font-bold text-[20px] text-[#5D5FEF] leading-[28px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است؟
  </p>
)

const desc4 = (
  <p className='font-normal text-[16px] text-[#1E1E1E] leading-[35px]'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است.
  </p>
)

const accordionsData = [
  {
    id: 1,
    Qtitle: Qtitle1,
    description: desc1,
  },
  {
    id: 2,
    Qtitle: Qtitle2,
    description: desc2,
  },
  {
    id: 3,
    Qtitle: Qtitle3,
    description: desc3,
  },
  {
    id: 4,
    Qtitle: Qtitle4,
    description: desc4,
  },
]

function AccordionContainer() {
  //using state to control the accordion open and close actions and also we will have control on witch index is active now
  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if (open === index) {
      return setOpen((prev) => !prev)
    } else {
      setOpen(index)
    }
  }

  return (
    <div>
      {accordionsData.map((data, index) => {
        return (
          <AccordionItem
            key={index}
            open={open === index}
            toggle={() => toggle(index)}
            title={data.Qtitle}
            description={data.description}
          />
        )
      })}
    </div>
  )
}

export default AccordionContainer
