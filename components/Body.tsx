import Image from 'next/image'
import React from 'react'

function Body() {
    return (
        <div className='mt-20 mx-32'>
            {/* DOCTOR PROFILE */}
            <div className='flex justify-center gap-32'>
                <div className='h-[508px] w-[353px] rounded-[20px] bg-[url(/home/body1.png)] bg-cover bg-no-repeat bg-center shadow-[#d9d9d9] shadow-[-30px_20px]' />
                <div className='w-[729px] mt-4 flex flex-col gap-9'>
                    <div className='flex flex-col gap-7'>
                        <p className='text-[13px] text-[#1eafaf] font-roboto'>Doctor’s Profile</p>
                        <p className='text-[39px] font-[700] font-meriweather'>Welcome to my Homepage</p>
                        <p className='text-[39px] font-[600] font-roboto'>Dr. Sudhir Khanal</p>
                        <p className='text-[22px] font-[400] leading-7 text-[#6d6c6c] font-roboto'>Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.</p>
                    </div>
                    <div className='flex gap-14 justify-center items-center'>
                        <Image src={'/home/who.png'} alt='' height={88} width={259} quality={100} priority></Image>
                        <Image src={'/home/unicef.png'} alt='' height={50} width={204}></Image>
                        <Image src={'/home/jsi.png'} alt='' height={113} width={150}></Image>

                    </div>
                </div>
            </div>
            {/* EDUCATIONAL BACKGROUND */}
            <div className='flex items-center justify-center mt-20 gap-32'>
                <div className='flex gap-8 flex-col'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[12px] font-[400] text-[#f97a7a] font-roboto'>Educational Background</p>
                        <p className='text-[20px] font-[700] text-[#6d6c6c] w-[385px] font-roboto'>Public Health Policy and Planning (International Health) at the Johns Hopkins University. </p>
                    </div>
                    <p className='text-[20px] font-[400] text-[#6d6c6c] w-[545px] font-roboto'>He earned his PhD through international programs at Universidad Azteca (Azteca University) and has pursued advanced studies in Public Health Policy and Planning (International Health) at the Johns Hopkins University. </p>
                    <Image src={'/home/bottom.png'} alt='' height={123} width={485} />
                </div>
                <div className='w-[459px] h-[418px] bg-[url(/home/body2.png)] rounded-[10px]' />
            </div>
        </div>
    )
}

export default Body