import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

function ThirdRadarChart() {
  return (
    <div
      className='w-[377px] h-[357px] rounded-[30px]'
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '6px 4px 40.20000076293945px 0px rgba(226, 226, 226, 0.5)',
      }}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='product 1'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Radar
            name='product 2'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />

          <Radar
            name='product 3'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ThirdRadarChart
