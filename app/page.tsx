import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Topbar from '@/components/Topbar'
import React from 'react'

function HomePage() {
  return (
    <div className='h-[100vh] w-[100vw] bg-white'>
      <Topbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default HomePage