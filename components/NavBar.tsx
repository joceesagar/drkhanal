import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

function NavBar() {
    return (
        <nav>
            <div className='hidden md:flex md:mb-4 flex-wrap gap-10 font-inter'>
                <Link href='/about' className='font-bold text-base'>About Me</Link>
                <Link href='/family' className='font-bold text-base'>Family</Link>
                <Link href='' className='font-bold text-base'>CV</Link>
                <Link href='' className='font-bold text-base'>Certifications</Link>
                <Link href='/FAQs' className='font-bold text-base'>FAQ</Link>
                <Link href='/contact' className='font-bold text-base'>Contact</Link>
            </div>
            <div className='md:hidden absolute top-20 right-6'>
                <MobileNav />
            </div>
        </nav>
    );
}

export default NavBar;
