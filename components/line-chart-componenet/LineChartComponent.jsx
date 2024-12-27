'use client'

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Customized,
} from 'recharts'

import BarChartComponent from '../bar-chart-component/BarChartComponent'

//we need some fake product data to show on them on the chart
const fakeProductData = [
  {
    name: 'Jan',
    product1: 8000,
    product2: 2310,
    product3: 2600,
  },
  {
    name: 'Feb',
    product1: 3000,
    product2: 2210,
    product3: 2500,
  },
  {
    name: 'Mar',
    product1: 2000,
    product2: 2290,
    product3: 6500,
  },
  {
    name: 'Apr',
    product1: 2780,
    product2: 2000,
    product3: 1500,
  },
  {
    name: 'May',
    product1: 1890,
    product2: 4181,
    product3: 7500,
  },
  {
    name: 'Jun',
    product1: 2390,
    product2: 9500,
    product3: 4500,
  },
]

function LineChartComponent() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div
        className=' w-[386px] h-[265px] rounded-[18.4px]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow:
            '0px 3.679185628890991px 18.395925521850586px 0px rgba(238, 238, 238, 0.502)',
        }}
      >
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={fakeProductData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* grids left and down  */}
            <XAxis dataKey='name' />
            <YAxis dataKey='product1' />
            <CartesianGrid className='bg-[#ECECEC] opacity-[10%]  border-[0.96px]' />
            <Legend align='center' iconType='rect' />
            <Tooltip />
            <Line
              type='linear'
              dataKey='product1'
              stroke='#5D5FEF'
              fill='#5D5FEF'
              stackId='1'
              strokeWidth={2}
              animationDuration={2000}
            />
            <Line
              type='linear'
              dataKey='product2'
              stroke='#DD40D7'
              fill='#DD40D7'
              stackId='1'
              strokeLinejoin='line'
              strokeWidth={2}
              animationDuration={2000}
            />
            <Line
              type='linear'
              dataKey='product3'
              stroke='#9040DD'
              fill='#9040DD'
              stackId='1'
              strokeWidth={2}
              animationDuration={2000}
            />
            <Customized />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <BarChartComponent />
    </div>
  )
}
export default LineChartComponent

/* in case we a custom tooltip all do the work - mr barrati just let me know */
/* usage : just pass the custom tooltip to the Tooltip component above -> the Tooltip component Accept a content property so we can pass our tooltip to it easily */
/* const customTooltip = (active, payload, label) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
        <p className='text-medium text-lg'>{label}</p>
        <p className='text-sm text-blue-400'>
          Product 1: <span className='ml-2'>${payload[0].value}</span>
        </p>
      </div>
    )
  }
}


 */
