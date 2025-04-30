import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Topbar from '@/components/Topbar'
import React from 'react'

function HomePage() {
  return (
    <div className='bg-white'>
      <Topbar />
      <Hero />
      <Body />
    </div>
  )
}

export default HomePage