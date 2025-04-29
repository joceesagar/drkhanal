import Link from 'next/link'
import React from 'react'
import { FaLocationDot, FaFacebook } from "react-icons/fa6"
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";

function Topbar() {
    return (
        <div className='h-[60px] bg-[#364049] flex items-center justify-between'>
            <div className='flex ml-[36px] gap-3'>
                <div color='white' className='text-white text-xl'><FaLocationDot /></div>
                <div className='text-white font-bold font-inter'>Kamalpokhari, Kathmandu, Nepal</div>
            </div>
            <div className='mr-20 flex gap-10'>
                <div className='flex gap-3'>
                    <div className='text-white'><MdLocalPhone fill='white' className='text-2xl' /></div>
                    <div className='text-white font-bold font-inter text-[16px]'>(905)-848-2929</div>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link href={''}><FaFacebook fill='white' className='text-xl' /></Link>
                    <Link href={''}><AiFillTwitterCircle fill='white' className='text-2xl' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar