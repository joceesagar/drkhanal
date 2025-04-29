import { Righteous } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar';
import { Button } from './ui/button';

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

function Hero() {
    return (
        // bg-center
        <div className='h-[944px] bg-[url(/Hero.png)] bg-cover bg-no-repeat'>
            <div className='flex justify-evenly mx-auto pt-[80px] items-center'>
                <div className='font-righteous text-[31px]'>Dr.Sudhir Khanal</div>
                <div className='flex gap-14 items-center justify-center'>
                    {/* NAVBAR */}
                    <NavBar />
                    <Button className='bg-[#2660e1] font-bold rounded-3xl px-6 py-7'>Book an Appointment</Button>
                </div>
            </div>

        </div>
    )
}

export default Hero