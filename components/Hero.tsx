import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className='relative h-[944px]'>
            <Image
                src={'/Hero.png'}
                layout='fill'
                alt='background'
                objectFit='cover'
                quality={100}
            />
            <div className='relative z-10 flex justify-around'>
                <h1 className='text-4xl font-extrabold mt-[114px]'>Dr.Sudhir Khanal</h1>
                <div className='flex mt-[109px] gap-20'>
                    <div className='flex gap-10'>
                        <Link href={''} className='font-extrabold'>About Me</Link>
                        <Link href={' '} className='font-extrabold'>Family</Link>
                        <Link href={' '} className='font-extrabold'>CV</Link>
                        <Link href={' '} className='font-extrabold'>Certifications</Link>
                        <Link href={' '} className='font-extrabold'>FAQ</Link>
                        <Link href={' '} className='font-extrabold'>Contact</Link>
                    </div>
                    <div className='bg-blue-600 flex items-center justify-center px-6 rounded-4xl text-white font-bold hover:cursor-pointer mt-[-16px] h-14'>
                        <button className='cursor-pointer'>Book an Appointment</button>
                    </div>
                </div>
            </div>
            <div className='relative flex justify-center bg-white mx-auto mt-[650px] px-20 rounded-2xl gap-6 w-[1161px] items-center'>
                <div className='hover:underline'>
                    By using this website,you agree to the storing of cookies on your device to enhance site navigation,analyze site usage,and assist in our marketing efforts. View our <span className='text-blue-500 underline hover:cursor-pointer'>Privacy Policy</span> for more information
                </div>
                <div className='bg-blue-600 flex items-center text-white font-bold justify-center px-6 my-4 py-2 rounded-4xl w-36'>
                    <button className='cursor-pointer'>I agree</button>
                </div>
            </div>
        </div>
    )
}

export default Hero