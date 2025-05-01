import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div className='flex gap-14 font-inter'>
            <Link href={'/about'} className='font-bold'>About Me</Link>
            <Link href={'/family'} className='font-bold'>Family</Link>
            <Link href={''} className='font-bold'>CV</Link>
            <Link href={''} className='font-bold'>Certifications</Link>
            <Link href={'/FAQs'} className='font-bold'>FAQ</Link>
            <Link href={'/contact'} className='font-bold'>Contact</Link>
        </div>
    )
}

export default NavBar