'use client'

import Image from 'next/image'

//assets we need
import depositIcon from '@/public/assets/icons/deposit-icon.svg'
import harvestMoneyIcon from '@/public/assets/icons/harvest-money-icon.svg'

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

//we need some fake product data to show on them on the chart
const data = [
  {
    /* subject: 'Math', */
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    /* subject: 'Chinese', */
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    /* subject: 'English', */
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    /* subject: 'Geography', */
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    /* subject: 'Physics', */
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    /* subject: 'History', */
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

//we can show users alerts or other functionality when they click on the Radar chart
const chartMessageForUsers = () => {
  alert('hey this is just a message')
}

function RadarChartComponent() {
  return (
    <div className='w-[462.95px] h-[462.95px] rounded-[18.4px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          cx='50%'
          cy='50%'
          data={data}
          className='border rounded-full'
          desc="Radar chart to manage your business"
          onMouseDown={chartMessageForUsers}
          style={{cursor:'pointer'}}
          innerRadius={'15%'}
          outerRadius={'94%'}
          role='Lexa team'
          stackOffset='wiggle'
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' innerRadius={'50%'} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='Awake 28%'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Radar
            name='Quality 87%'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />
          <Radar
            name='Deep 45%'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />{' '}
          <Radar
            name='Light 32%'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />{' '}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      {/* buttons we need */}
      <div className='flex justify-center items-center gap-6 mt-6'>
        <button
          className='flex justify-center items-center w-[179px] h-[54px] border-[3px] rounded-[31.5px] border-[#5D5FEF]'
          style={{
            boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
          }}
        >
          <div className='flex justify-center items-center w-[49px] h-[27px] mr-2'>
            <p className='font-medium text-[16px] leading-[27.13px] text-[#5D5FEF]'>
              برداشت
            </p>
          </div>
          <div className='flex justify-center items-center w-[24px] h-[24px]'>
            <Image src={harvestMoneyIcon} />
          </div>
        </button>

        <button
          className='flex justify-center items-center w-[179px] h-[54px] rounded-[31.5px] bg-[#5D5FEF]'
          style={{
            boxShadow: '0px 0px 12px 4px rgba(225, 225, 225, 0.25)',
          }}
          onClick={() => alert('deposit')}
        >
          <div className='flex justify-center items-center w-[28px] h-[27px] mr-2'>
            <p className='font-medium text-[16px] leading-[27.13px] text-[#FFFFFF]'>
              واریز
            </p>
          </div>
          <div className='flex justify-center items-center w-[24px] h-[24px]'>
            <Image src={depositIcon} />
          </div>
        </button>
      </div>
    </div>
  )
}
export default RadarChartComponent

