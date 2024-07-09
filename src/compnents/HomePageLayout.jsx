import React from 'react'
import Lefsidebar from './Lefsidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () => {
  return (
    <main className="bg-black flex h-screen">
    <div className= "w-full md:flex">
    <Lefsidebar/>
    <div className='w-[650px]'>
        <Outlet/>
        </div>
    {/*right sidebar*/}
    <RightSidebar/>
      
  </div>
  </main>
  )
}

export default HomePageLayout