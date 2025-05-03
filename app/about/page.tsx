import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='mt-16 md:mt-[164px] flex justify-center flex-col gap-8 md:gap-[37px] px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center flex-col gap-6 md:gap-[28px]'>
                <h1 className='font-meriweather font-[400] text-3xl sm:text-4xl md:text-[40px] text-center'>About Dr. Khanal</h1>
                <div className='w-full lg:w-[1102px] flex flex-col items-center mx-auto gap-4 md:gap-7'>
                    <p className='font-inter font-[400] text-base md:text-[20px] text-center md:text-left'>
                        Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.
                    </p>
                    <p className='font-inter font-[400] text-base md:text-[20px] text-center md:text-left'>
                        With a career dedicated to advancing public health, Dr. Khanal has held several key positions, including Medical Officer for Measles and Rubella at WHO SEARO, Health Specialist at UNICEF, and Project Director for the MINI initiative at John Snow, Inc. His leadership in disease control and immunization programs has had a significant impact across the South-East Asia region.
                    </p>
                </div>
                <div className='flex flex-col mx-auto items-center'>
                    <div className='relative w-full max-w-[487px] h-auto aspect-[487/230]'>
                        <Image
                            src={'/about/image1.png'}
                            alt='Dr. Khanal'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <p className='font-inder font-[400] text-xs sm:text-[14px] text-[#ff2424] mt-2 sm:ml-[95px] self-start sm:self-center'>
                        LOOK AND FEEL BETTER THAN YOU HAVE IN YEARS
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6 md:gap-[37px]'>
                <div className='flex flex-col gap-6 md:gap-[37px]'>
                    <h1 className='font-inder font-[400] text-3xl sm:text-4xl md:text-[40px] text-center'>Individualized health consulting</h1>
                    <p className='w-full lg:w-[1204px] mx-auto font-inter font-[400] text-base md:text-[20px] leading-relaxed md:leading-8 text-center md:text-left'>
                        Dr. Khanal&apos;s academic credentials reflect his commitment to lifelong learning and public health excellence. He earned his PhD through international programs at Universidad Azteca (Azteca University) and has pursued advanced studies in Public Health Policy and Planning (International Health) at the Johns Hopkins University. His educational background also includes degrees from Manipal College of Medical Sciences, Northern University Bangladesh, and Kathmandu Valley Campus.
                    </p>
                </div>
                <Button className='w-[160px] sm:w-[180px] h-[44px] sm:h-[51px] px-4 sm:px-[43px] py-3 sm:py-[16px] rounded-4xl mx-auto font-inder text-sm sm:text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040] hover:bg-gray-50 transition'>
                    How it works
                </Button>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-6 md:gap-[43px] mt-6 md:mt-9'>
                <div className='w-full lg:w-[572px] h-[250px] sm:h-[372px] bg-[url(/about/image2.jpg)] bg-cover bg-no-repeat bg-center rounded-lg' />
                <div className='flex flex-col gap-4 md:gap-6 max-w-full lg:max-w-[478px]'>
                    <p className='text-[#ff0f1c] text-xs sm:text-[14px] font-inder'>HEALTH PROFILE</p>
                    <p className='w-full text-xl sm:text-2xl font-inder font-[400]'>
                        Build your health story and gain clarity about your future health goals.
                    </p>
                    <p className='w-full text-sm sm:text-[15px] text-[#6e6868]'>
                        Complete your online health profile by answering questions about your medical history, current health challenges, and future health goals.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[73px] gap-y-4 font-inconsolata font-[700] text-sm sm:text-[15px]'>
                        <p>🗸 Medical history</p>
                        <p>🗸 Health goals</p>
                        <p>🗸 Health habits</p>
                        <p>🗸 Diet</p>
                        <p>🗸 Life choices</p>
                        <p>🗸 Fitness</p>
                    </div>
                </div>
            </div>

            <div className='mx-0 md:mx-4 h-auto md:h-[555px] py-12 md:py-0 bg-[#ff8786] mb-8 md:mb-[47px] flex flex-col gap-8 md:gap-12 justify-center items-center rounded-lg md:rounded-none'>
                <div className='flex flex-col items-center gap-6 md:gap-12 px-4 text-center'>
                    <p className='font-inder font-[400] text-sm sm:text-[15px] text-white'>GET STARTED TODAY</p>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-1 items-center'>
                        <span className='font-inder font-[400] text-2xl sm:text-[32px] text-white'>Start to improve your</span>
                        <span className='font-inder font-[400] text-2xl sm:text-[32px] text-[#293068]'> Digestion.</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-6 md:gap-12 px-4'>
                    <p className='w-full lg:w-[1072px] font-inter font-[400] text-base md:text-[20px] text-center'>
                        Originally from Biratnagar, Dr. Khanal&apos;s journey from St. Joseph&apos;s School to international leadership exemplifies dedication, expertise, and service. He is married and continues to contribute meaningfully to the global public health community.
                    </p>
                    <Button className='bg-[#0055c2] rounded-4xl px-6 py-4 sm:px-6 sm:py-6 font-[600] font-inter hover:bg-[#0045a2] transition'>
                        Start Application
                    </Button>
                    <p className='font-serif font-[400] text-xs sm:text-[14px] text-center'>
                        *Click the button above and complete a quick application to receive an email with more information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page