import Image from 'next/image'

//assets we need to make the transactions box work
import GreenArrowDownIcon from '@/public/assets/icons/green-arrow-down-icon.svg'
import RedArrowupIcon from '@/public/assets/icons/red-arrowup-icon.svg'
import SolarCalendarIcon from '@/public/assets/icons/solar-calendar-icon.svg'
import PurpleTimeIcon from '@/public/assets/icons/purple-time-icon.svg'

function Transactions() {
  return (
    <div
      className='flex justify-center items-center flex-col gap-2 w-[397px] h-[554px] rounded-[20px] '
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
      }}
    >
      {/* heading text */}
      <div className='w-[64px] h-[24px]'>
        <p className='font-normal text-[16px] leading-6 text-[#151D48]'>
          تراکنش‌ها
        </p>
      </div>
      {/* Transactions-boxes */}
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
        id='transaction-box-1'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={GreenArrowDownIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              دریافت هزینه فروش محصول
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
        id='transaction-box-2'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={RedArrowupIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              پرداخت مالیات درگاه{' '}
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>{' '}
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
        id='transaction-box-3'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={RedArrowupIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              خرید از سامانه آنلاین
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>{' '}
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
        id='transaction-box-4'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={GreenArrowDownIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              تخفیف به مشتریان وفادار
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>{' '}
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px] '
        id='transaction-box-5'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={RedArrowupIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              هزینه پیاده سازی سایت
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex justify-evenly content-center items-center flex-row-reverse w-[365px] h-[74px] rounded-[15px]'
        id='transaction-box-6'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            ' 6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
        }}
      >
        <div className='w-[26px] h-[26px] mt-2'>
          <Image src={GreenArrowDownIcon} />
        </div>

        <div
          className='flex justify-center items-center flex-col'
          id='Toman-transaction-text-box'
        >
          <div className='flex justify-end items-center ml-[70px] w-[160px] h-[24px] '>
            <p className='font-medium text-[14px] leading-6 text-[#151D48]'>
              تبلیغات در گوگل
            </p>
          </div>
          <div className='flex justify-end items-center ml-[162px]'>
            <p className='font-normal text-[12px] leading-6 text-[#151D48]'>
              ۱۲۵،۰۰۰ تومان
            </p>
          </div>
        </div>

        <div
          className='flex justify-center items-center flex-row-reverse'
          id='date-time-transaction-box'
        >
          <div className='flex ml-1 flex-col'>
            {/* subtotal texts */}
            <div className='w-[50px] h-[24px]'>
              <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[6px]'>
                ۱۴۰۰/۰۲/۲۵
              </p>
            </div>
            <div>
              <div className='w-[24px] h-[24px]'>
                <p className='font-normal text-[10px] leading-6 text-[#151D48] mt-[4px]'>
                  ۱۴:۲۵
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col gap-3'>
            {/* date and time icons */}
            <div className='w-[13px] h-[13px]'>
              <Image src={SolarCalendarIcon} />
            </div>
            <div className='w-[13px] h-[13px]'>
              <Image src={PurpleTimeIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions

