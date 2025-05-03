import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Topbar from '@/components/Topbar'
import React from 'react'

function HomePage() {
  return (
    <div className='bg-white w-full overflow-x-hidden'>
      <Topbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default HomePage