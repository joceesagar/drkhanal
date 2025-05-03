import Link from 'next/link';
import React from 'react';

function NavBar() {
    return (
        <nav className='hidden lg:flex flex-wrap gap-10 font-inter'>
            <Link href='/about' className='font-bold text-base'>About Me</Link>
            <Link href='/family' className='font-bold text-base'>Family</Link>
            <Link href='' className='font-bold text-base'>CV</Link>
            <Link href='' className='font-bold text-base'>Certifications</Link>
            <Link href='/FAQs' className='font-bold text-base'>FAQ</Link>
            <Link href='/contact' className='font-bold text-base'>Contact</Link>
        </nav>
    );
}

export default NavBar;
