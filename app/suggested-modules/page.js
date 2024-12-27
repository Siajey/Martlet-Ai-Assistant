'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets for suggested modules cards
//data for cards - i do this to be able to select each individual card and do something with it !!!
const suggestedModuleCardsData = [
  {
    id: 1,
    img: '/assets/images/suggested-modules-cards-img-1.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
  {
    id: 2,
    img: '/assets/images/suggested-modules-cards-img-2.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
  {
    id: 3,
    img: '/assets/images/suggested-modules-cards-img-3.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
  {
    id: 4,
    img: '/assets/images/suggested-modules-cards-img-4.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
  {
    id: 5,
    img: '/assets/images/suggested-modules-cards-img-5.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
  {
    id: 6,
    img: '/assets/images/suggested-modules-cards-img-6.svg',
    width: 70,
    height: 69,
    subTitle: 'حسابداری',
    price: '1،250،000 تومان',
  },
]

function page() {
  // handle the selected modules
  const [selectedCardId, setSelectedCardId] = useState(null)

  const handleCardClick = (id) => {
    setSelectedCardId(id === selectedCardId ? null : id)
  }

  return (
    <div
      className='flex flex-col justify-center items-center h-[100vh] overflow-hidden'
      id='suggested-modules-fully-page-container'
    >
      <p className='font-bold text-[48px] text-[#000000] leading-[81.39px]'>
        ماژول‌های پیشنهادی
      </p>
      <p className='font-bold text-[20px] text-[#8692A6] leading-[28px] mt-20'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
      </p>
      <p className='font-bold text-[20px] text-[#8692A6] leading-[28px]'>
        از طراحان گرافیک است.
      </p>

      <hr className='w-[531px] border-[1px] border-[#F5F5F5]' />

      {/* cards */}
      <div className='flex flex-row-reverse justify-center items-center gap-10 mt-5'>
        {suggestedModuleCardsData.map((card) => (
          <div
            key={card.id}
            id={`suggested-modules-card-${card.id}`}
            className='flex flex-col justify-center items-center w-[185px] h-[220px] rounded-[20px] cursor-pointer relative'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow:
                '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              padding: '20px',
            }}
            onClick={() => handleCardClick(card.id)}
          >
            {/* conditional-Selection-div */}
            {selectedCardId === card.id && (
              <div className='absolute top-2 right-2 w-7 h-7 bg-[#5D5FEF] rounded-full' />
            )}
            {selectedCardId !== card.id && (
              <div className='absolute top-2 right-2 w-7 h-7 bg-[#FFFFFF] rounded-full' />
            )}

            {/* card-img */}
            <div className='w-[70px] h-[69px]'>
              <Image src={card.img} width={card.width} height={card.height} />
            </div>

            {/* texts */}
            <p className='font-bold text-[16px] text-[#5D5FEF] leading-[28px]'>
              {card.subTitle}
            </p>
            <p className='font-normal text-[14px] text-[#000000] leading-[28px]'>
              {card.price}
            </p>
          </div>
        ))}
      </div>

      {/* confirmation-button */}
      <button className='w-[426px] h-[64px] bg-[#5D5FEF] rounded-[16px] mt-20'>
        <p className='font-bold text-[16px] text-[#FFFFFF] leading-[27.13px]'>
          تایید
        </p>
      </button>
    </div>
  )
}

export default page

