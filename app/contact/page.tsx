'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});

function page() {
    return (
        <div className='mt-[81px] flex flex-col justify-center items-center lg:gap-[78px] gap-[60px] mb-[81px] px-4'>
            {/* GENERAL INFORMATION */}
            <div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[110px] justify-center w-full'>
                <div className='lg:ml-[57px] flex flex-col gap-[43px]'>
                    <p className='font-inder text-[#14abac] text-[14px] text-center md:text-left'>GENERAL INFORMATION</p>
                    <div className='flex gap-[20px] flex-col'>
                        <p className='font-inder text-[32px] sm:text-[36px] md:text-[40px] w-full max-w-[357px] text-center md:text-left'>We&apos;re here for you And your feet.</p>
                        <p className='font-inder text-[14px] max-w-[493px] text-center md:text-left'>See the full details of clinic hours and contact information below. Use the booking buttons located across this site to book your appointment today.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-[30px] sm:gap-[110px]'>
                        <div className='flex flex-col gap-[18px] items-center md:items-start'>
                            <p className='text-[#2660e1] font-inder text-center md:text-left'>Location</p>
                            <p className='w-full max-w-[182px] font-inder text-center md:text-left'>250 Dundas Street West Suite 305 Mississauga ON L5B 1J2</p>
                        </div>
                        <div className='flex flex-col gap-[18px] items-center md:items-start'>
                            <p className='text-[#2660e1] font-inder text-center md:text-left'>Business hours</p>
                            <p className='w-full max-w-[237px] font-inder text-center md:text-left'>Monday: 9:30 am - 6:30 pm<br />Tuesday: 9:30 am - 6:30 pm<br />Wednesday: 9:30 am - 6:30 pm<br />Thursday: 9:30 am - 6:30 pm<br />Friday: 9:30 am - 6:30 pm<br />Saturday: 9:30 am - 5:00 pm<br />Sunday: Closed</p>
                        </div>
                    </div>
                    <div className='w-full lg:max-w-[261px] mt-[20px] flex flex-col gap-[18px] font-inder items-center md:items-start'>
                        <p className='text-[#2660e1] text-center md:text-left'>Contact information</p>
                        <p className='text-center md:text-left'>Email: mail@drsudhir.com.np<br />Fax: 1-289-276-0511<br />Phone: 905-848-2929</p>
                    </div>
                </div>
                <div className='w-full lg:w-[30vw] h-[300px] sm:h-[400px] lg:h-[60vh] rounded-[20px] overflow-hidden'>
                    <Map />
                </div>
            </div>

            {/* HOW CAN I HELP YOU */}
            <div className='flex flex-col lg:flex-row gap-6 w-full justify-center items-center lg:items-start'>
                <div className='w-full max-w-[700px]'>
                    <Image
                        src={'/contact/image1.png'}
                        alt='Contact'
                        height={436}
                        width={700}
                        quality={100}
                        className='w-full h-auto object-cover'
                    />
                </div>
                <div className='flex flex-col gap-[41px] mt-6 lg:items-start items-center px-2'>
                    <div className='flex flex-col gap-8 items-center md:items-start'>
                        <p className='font-inder text-[14px] text-[#ff0b0b] text-center md:text-left'>WHO CAN I HELP?</p>
                        <p className='w-full max-w-[670px] font-inder text-[24px] sm:text-[28px] md:text-[32px] text-center md:text-left'>Your health is not a destination, it&apos;s a journey.</p>
                        <div className='w-full max-w-[523px] font-inder text-[15px] flex flex-col gap-4 text-center md:text-left'>
                            <p>Although you may be currently struggling with an illness or symptoms, my focus is on restoring health rather than just focusing on the disease. This approach may be different than what you are used to but it is far superior for improving your overall quality of life and reducing your future risk of chronic disease.</p>
                            <p>I only work with people who are ready to make changes and who I know I can help. If I do not think that I can help you I will refer you to someone or something that can.
                                To determine if this type of health consulting is a good fit for you, please click the button below to quickly complete our 5-minute application. We will be in touch shortly with details.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] lg:items-start items-center'>
                        <Button className='w-[180px] h-[51px] px-[43px] py-[16px] rounded-4xl font-inder text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040]'>Apply now</Button>
                        <p className='font-sans text-[14px] text-[#706b6b] text-center md:text-left'>*Click the button above and complete a quick application to receive an email with more information.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
