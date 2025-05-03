'use client';
import React from 'react';
import NavBar from './NavBar';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';

function Hero() {
    return (
        <div className='h-[944px] bg-[url(/home/Hero.png)] bg-cover bg-[30%] lg:bg-[center_20%] bg-no-repeat flex flex-col items-center justify-between px-4'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-48 mx-auto pt-[40px] lg:pt-[80px] items-center'>
                <div className='font-righteous text-[24px] lg:text-[31px] text-center lg:text-left'>
                    Dr.Sudhir Khanal
                </div>
                <div className='flex flex-col lg:flex-row gap-2 lg:gap-14 items-center justify-center'>
                    <NavBar />
                    <Button className='bg-[#2660e1] font-bold rounded-[20px] px-6 py-3 lg:py-7'>
                        Book an Appointment
                    </Button>
                </div>
            </div>

            <div className='md:flex md:flex-col lg:flex-row justify-evenly items-center w-full mt-32 hidden'>
                <Button className='rounded-[15px] py-6 px-6 font-inter font-[600] text-[16px] bg-[#00a4a4]'>Find a treatment</Button>
                <ChevronDownIcon size={80} color='#00a4a4' />
                <div>
                    <p className='font-inter font-[600] text-[48px] text-[#cacaca]'>contribute meaningfully</p>
                    <p className='font-inter font-[600] text-[30px] text-[#00a4a4]'>to the global public health community</p>
                </div>
            </div>

            <div className='bg-white rounded-[11px] border border-[#d4d4d4] px-5 py-4 max-w-[95%] sm:max-w-[1161px] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'>
                <p className='text-[12px] font-inter font-[400] text-center sm:text-left'>
                    By using this website, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our{' '}
                    <Link href={''} className='text-[#2660e1] underline'>
                        Privacy Policy
                    </Link>{' '}
                    for more information
                </p>
                <Button className='bg-[#2660e1] rounded-4xl px-6 font-[600] font-inter text-sm'>
                    I agree
                </Button>
            </div>
        </div>
    );
}

export default Hero;
