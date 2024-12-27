'use client'

//dashboard-Navbar-and-FooterMenu
import DashboardNavbar from '@/components/dashboard-navbar/DashboardNavbar'
import DashboardFooter from '@/components/dashboard-footer/DashboardFooter'

import LineChartComponent from '@/components/line-chart-componenet/LineChartComponent'
import Transactions from '@/components/transactions/Transactions'
import RadarChartComponent from '@/components/radar-chart-component/RadarChartComponent'

export default function Home() {
  return (
    <div id='dashboard-home-page' className='h-[100vh] overflow-hidden'>
      <DashboardNavbar />
      <section className='dashboard-home-page-section-container'>
        <div className='flex justify-center items-center gap-[50px] mt-[40px]'>
          <Transactions />
          <LineChartComponent />
          <RadarChartComponent />
        </div>
      </section>
      <DashboardFooter />
    </div>
  )
}