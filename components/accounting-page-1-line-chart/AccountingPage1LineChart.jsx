import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: Math.random() },
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
      { category: 'E', value: Math.random() },
    ],
  },
]

function AccountingPage1LineChart() {
  return (
    <div
      className='w-[337px] h-[357px] rounded-[30px]'
      style={{
        backgroundColor: ' rgba(255, 255, 255, 0.3)',
        boxShadow: '6px 4px 40.2px 0px rgba(226, 226, 226, 0.5)',
      }}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='category'
            type='category'
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey='value' />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey='value' data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AccountingPage1LineChart
