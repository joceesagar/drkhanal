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
        <div className='mt-[81px] flex flex-col justify-center items-center gap-[78px] mb-[81px]'>
            {/* GENERAL INFORMATION */}
            <div className='flex gap-[110px] justify-center'>
                <div className='ml-[57px] flex flex-col gap-[43px]'>
                    <p className='font-inder text-[#14abac] text-[14px]'>GENERAL INFORMATION</p>
                    <div className='flex gap-[20px] flex-col'>
                        <p className='font-inder text-[40px] w-[357px]'>We&apos;re here for you And your feet.</p>
                        <p className='font-inder text-[14px] w-[493px]'>See the full details of clinic hours and contact information below. Use the booking buttons located across this site to book your appointment today.</p>
                    </div>
                    <div className='flex gap-[110px]'>
                        <div className='flex flex-col gap-[18px]'>
                            <p className='text-[#2660e1] font-inder'>Location</p>
                            <p className='w-[182px] font-inder'>250 Dundas Street West Suite 305 Mississauga ON L5B 1J2</p>
                        </div>
                        <div className='flex flex-col gap-[18px]'>
                            <p className='text-[#2660e1] font-inder'>Business hours</p>
                            <p className='w-[237px] font-inder'>Monday: 9:30 am - 6:30 pm Tuesday: 9:30 am - 6:30 pm Wednesday: 9:30 am - 6:30 pm Thursday: 9:30 am - 6:30 pm Friday: 9:30 am - 6:30 pm Saturday: 9:30 am - 5:00 pm Sunday: Closed</p>

                        </div>
                    </div>
                    <div className='w-[261px] mt-[20px] flex flex-col gap-[18px] font-inder'>
                        <p className='text-[#2660e1] font-inder'>Contact information</p>
                        <p>Email: mail@drsudhir.com.np Fax: 1-289-276-0511 Phone: 905-848-2929</p>
                    </div>
                </div>
                <Map />
            </div>
            {/* HOW CAN I HELP YOU */}
            <div className='flex gap-6'>
                <Image src={'/contact/image1.png'} alt='' height={436} width={700} content='cover' quality={100} objectFit='cover' />
                <div className='flex flex-col gap-[41px] mt-6 items-start'>
                    <div className='flex flex-col gap-8'>
                        <p className='font-inder text-[14px] text-[#ff0b0b]'>WHO CAN I HELP?</p>
                        <p className='w-[670px] font-inder text-[32px]'>Your health is not a destination, it&apos;s a journey.</p>
                        <div className='w-[523px] font-inder text-[15px] flex flex-col gap-4 '>
                            <p>Although you may be currently struggling with an illness or symptoms, my focus is on restoring health rather than just focusing on the disease. This approach may be different than what you are used to but it is far superior for improving your overall quality of life and reducing your future risk of chronic disease.</p>
                            <p>I only work with people who are ready to make changes and who I know I can help. If I do not think that I can help you I will refer you to someone or something that can.
                                To determine if this type of health consulting is a good fit for you, please click the button below to quickly complete our 5-minute application. We will be in touch shortly with details.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[41px]'>
                        <Button className='w-[180px] h-[51px] px-[43px] py-[16px] rounded-4xl mx-auto font-inder text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040] text-start ml-0'>Apply now</Button>
                        <p className='font-sans text-[14px] text-[#706b6b]'>*Click the button above and complete a quick application to receive an email with more information.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page