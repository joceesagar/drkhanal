import { Righteous } from 'next/font/google';
import React from 'react'
import NavBar from './NavBar';
import { Button } from './ui/button';
import Link from 'next/link';

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

function Hero() {
    return (
        // bg-center
        <div className='h-[944px] bg-[url(/Hero.png)] bg-cover bg-no-repeat flex flex-col items-center justify-between'>
            <div className='flex gap-48 mx-auto pt-[80px] items-center'>
                <div className='font-righteous text-[31px]'>Dr.Sudhir Khanal</div>
                <div className='flex gap-14 items-center justify-center'>
                    {/* NAVBAR */}
                    <NavBar />
                    <Button className='bg-[#2660e1] font-bold rounded-[20px] px-6 py-7'>Book an Appointment</Button>
                </div>
            </div>
            <div className='bg-white rounded-[11px] h-[78px] w-[1161px] flex border-[1px] border-[#d4d4d4] items-center px-5 justify-center gap-3 mb-8'>
                <p className='text-[12px] font-inter font-[400]'>By using this website,you agree to the storing of cookies on your device to enhance site navigation,analyze site usage,and assist in our marketing efforts. View our <Link href={''} className='text-[#2660e1] underline'> Privacy Policy</Link> for more information</p>
                <Button className='bg-[#2660e1] rounded-4xl px-6 font-[600] font-inter'>I agree</Button>
            </div>

        </div>
    )
}

export default Hero