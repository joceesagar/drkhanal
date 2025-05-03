import Link from 'next/link';
import React from 'react';
import { FaLocationDot, FaFacebook } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdLocalPhone } from 'react-icons/md';

function Topbar() {
    return (
        <div className='h-[auto] md:h-[60px] bg-[#364049] flex flex-col md:flex-row items-center justify-between p-4 md:px-8'>
            <div className='flex items-center mb-2 md:mb-0 md:ml-0 gap-3'>
                <div className='text-white text-xl'>
                    <FaLocationDot />
                </div>
                <div className='text-white font-bold font-inter text-sm md:text-base'>
                    Kamalpokhari, Kathmandu, Nepal
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center md:mr-0 gap-4 md:gap-10'>
                <div className='flex items-center gap-3'>
                    <div className='text-white'>
                        <MdLocalPhone fill='white' className='text-xl md:text-2xl' />
                    </div>
                    <div className='text-white font-bold font-inter text-sm md:text-base'>
                        (905)-848-2929
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <Link href={''}>
                        <FaFacebook fill='white' className='text-xl md:text-2xl' />
                    </Link>
                    <Link href={''}>
                        <AiFillTwitterCircle fill='white' className='text-2xl md:text-3xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Topbar;