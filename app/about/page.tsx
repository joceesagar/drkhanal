import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='mt-[164px] flex justify-center flex-col gap-[37px]'>
            <div className='flex justify-center flex-col gap-[28px]'>
                <h1 className='font-meriweather font-[400] text-[40px] text-center'>About Dr. Khanal</h1>
                <div className='w-[1102px] flex flex-col items-center mx-auto gap-7'>
                    <p className='font-inter font-[400] text-[20px]'>Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.</p>
                    <p className='font-inter font-[400] text-[20px]'> With a career dedicated to advancing public health, Dr. Khanal has held several key positions, including Medical Officer for Measles and Rubella at WHO SEARO, Health Specialist at UNICEF, and Project Director for the MINI initiative at John Snow, Inc. His leadership in disease control and immunization programs has had a significant impact across the South-East Asia region.</p>
                </div>
                <div className='flex flex-col mx-auto'>
                    <Image src={'/about/image1.png'} alt='' height={230} width={487} />
                    <p className='font-inder font-[400] text-[14px] text-[#ff2424] ml-[95px]'>LOOK AND FEEL BETTER THAN YOU HAVE IN YEARS</p>
                </div>
            </div>
            <div className='flex flex-col gap-[37px]'>
                <div className='flex flex-col gap-[37px]'>
                    <h1 className='font-inder font-[400] text-[40px] text-center'>Individualized health consulting</h1>
                    <p className='w-[1204px] mx-auto font-inter font-[400] text-[20px] leading-8'>Dr. Khanal's academic credentials reflect his commitment to lifelong learning and public health excellence. He earned his PhD through international programs at Universidad Azteca (Azteca University) and has pursued advanced studies in Public Health Policy and Planning (International Health) at the Johns Hopkins University. His educational background also includes degrees from Manipal College of Medical Sciences, Northern University Bangladesh, and Kathmandu Valley Campus.</p>
                </div>
                <Button className='w-[180px] h-[51px] px-[43px] py-[16px] rounded-4xl mx-auto font-inder text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040]'>How it works</Button>
            </div>
            <div className='flex justify-center gap-[43px] mt-9'>
                <div className='w-[572px] h-[372px] bg-[url(/about/image2.jpg)] bg-cover bg-no-repeat bg-center' />
                <div className='flex flex-col gap-6'>
                    <p className='text-[#ff0f1c] text-[14px] font-inder'>HEALTH PROFILE</p>
                    <p className='w-[423px] text-2xl font-inder font-[400]'>Build your health story and gain clarity about your future health goals.</p>
                    <p className='w-[478px] text-[#6e6868] text-[15px]'>Complete your online health profile by answering questions about your medical history,current health challanges, and future health goals.</p>
                    <div className='grid grid-cols-2 gap-x-[73px] gap-y-6 font-inconsolata font-[700] text-[15px]'>
                        <p className='font-inconsolata'>🗸 Medical history</p>
                        <p>🗸 Health goals</p>
                        <p>🗸 Health habits</p>
                        <p>🗸 Diet</p>
                        <p>🗸 Life choices</p>
                        <p>🗸 Fitness</p>
                    </div>
                </div>

            </div>
            <div className='mx-4 h-[555px] bg-[#ff8786] mb-[47px] flex flex-col gap-12 justify-center items-center'>
                <div className='flex flex-col items-center gap-12 '>
                    <p className='font-inder font-[400] text-[15px] text-white'>GET STARTED TODAY</p>
                    <div>
                        <span className='font-inder font-[400] text-[32px] text-white'>Start to improve your</span><span className='font-inder font-[400] text-[32px] text-[#293068]'> Digestion.</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-12'>
                    <p className='w-[1072px] font-inter font-[400] text-[20px] text-center'>Originally from Biratnagar, Dr. Khanal's journey from St. Joseph’s School to international leadership exemplifies dedication, expertise, and service. He is married and continues to contribute meaningfully to the global public health community.</p>
                    <Button className='bg-[#0055c2] rounded-4xl px-6 py-6 font-[600] font-inter'>Start Application</Button>
                    <p className='font-serif font-[400] text-[14px]'>*Click the button above and complete a quick application to receive an email with more information.</p>
                </div>

            </div>
        </div>
    )
}

export default page