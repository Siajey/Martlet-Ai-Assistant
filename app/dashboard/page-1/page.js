'use client'
import Image from 'next/image'

//components we need for this page
import DashboardNavbar from '@/components/dashboard-navbar/DashboardNavbar'
import DashboardFooter from '@/components/dashboard-footer/DashboardFooter'
import RadarChartComponent from '@/components/radar-chart-component/RadarChartComponent'
import SimpleLineChart from '@/components/simple-line-chart-component/SimpleLineChart'

//assets we need for this page
import CalculatorIcon from '@/public/assets/icons/CalculatorIcon.svg'
import PurpleWebsiteIcon from '@/public/assets/icons/PurpleWebsiteIcon.svg'
import OrangeStoreIcon from '@/public/assets/icons/OrangeStoreIcon.svg'
import GreenTreasuryIcon from '@/public/assets/icons/GreenTreasuryIcon.svg'
import SecondRadarChart from '@/components/radar-chart-2-componenet/SecondRadarChart'

function page() {
  return (
    <div
      id='dashboard-page-1-fully-container'
      className='h-[100vh] overflow-hidden'
    >
      <DashboardNavbar />
      <section className='dashboard-page-1-section-container'>
        <div className='flex justify-center items-center gap-[70px] mt-[70px] mb-16'>
          {/* left-side-charts-LineChart and BarChart */}
          <SimpleLineChart />
          {/* Second-Radar-Chart */}
          <SecondRadarChart />
          {/* Cards */}
          <div className='flex flex-col items-center gap-[20px]'>
            {/* right section of the dashboard - Cards */}
            <div
              id='dashboard-page-1-cards-1'
              className='flex justify-around items-center flex-row-reverse w-[385px] h-[104px] rounded-[30px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              {/* Icon */}
              <div className='w-[75px] h-[75px] rounded-[20px] mr-5'>
                <Image src={CalculatorIcon} />
              </div>
              {/* texts */}
              <div className='ml-20'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  حسابداری
                </p>
              </div>
              <div className='flex justify-center items-center w-[122px] h-[50px] rounded-[15px] bg-[rgba(246,78,96,0.1)] ml-5'>
                <p className='font-medium text-[14px] text-[#F64E60] leading-[28px]'>
                  10 حساب جدید
                </p>
              </div>
            </div>

            <div
              id='dashboard-page-1-cards-2'
              className='flex justify-around items-center flex-row-reverse w-[385px] h-[104px] rounded-[30px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              {/* Icon */}
              <div className='w-[75px] h-[75px] rounded-[20px] mr-5'>
                <Image src={PurpleWebsiteIcon} />
              </div>
              {/* texts */}
              <div className='ml-20'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  وبسایت
                </p>
              </div>
              <div className='flex justify-center items-center w-[122px] h-[50px] rounded-[15px] bg-[rgba(144,64,221,0.1)] ml-5'>
                <p className='font-medium text-[14px] text-[#9040DD] leading-[28px]'>
                  10 حساب جدید
                </p>
              </div>
            </div>

            <div
              id='dashboard-page-1-cards-3'
              className='flex justify-around items-center flex-row-reverse w-[385px] h-[104px] rounded-[30px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              {/* Icon */}
              <div className='w-[75px] h-[75px] rounded-[20px] mr-5'>
                <Image src={OrangeStoreIcon} />
              </div>
              {/* texts */}
              <div className='ml-20'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  انبار داری
                </p>
              </div>
              <div className='flex justify-center items-center w-[122px] h-[50px] rounded-[15px] bg-[rgba(240,113,64,0.1)] ml-5'>
                <p className='font-medium text-[14px] text-[#F07140] leading-[28px]'>
                  10 حساب جدید
                </p>
              </div>
            </div>

            <div
              id='dashboard-page-1-cards-4'
              className='flex justify-around items-center flex-row-reverse w-[385px] h-[104px] rounded-[30px]'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow:
                  '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
              }}
            >
              {/* Icon */}
              <div className='w-[75px] h-[75px] rounded-[20px] mr-5'>
                <Image src={GreenTreasuryIcon} />
              </div>
              {/* texts */}
              <div className='ml-20'>
                <p className='font-bold text-[16px] text-[#151D48] leading-[28px]'>
                  خزانه داری
                </p>
              </div>
              <div className='flex justify-center items-center w-[122px] h-[50px] rounded-[15px] bg-[rgba(74,181,142,0.1)] ml-5'>
                <p className='font-medium text-[14px] text-[#4AB58E] leading-[28px]'>
                  10 حساب جدید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DashboardFooter />
    </div>
  )
}

export default page
