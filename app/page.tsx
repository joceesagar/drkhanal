import Body from '@/components/Body'
import Hero from '@/components/Hero'
import Topbar from '@/components/Topbar'
import React from 'react'

function HomePage() {
  return (
    <div className='h-[100vh] w-[100vw] bg-white'>
      <Topbar />
      <Hero />
      <Body />
    </div>
  )
}

export default HomePage