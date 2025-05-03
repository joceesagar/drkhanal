import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='bg-[#ebebeb] pt-10 mt-10 flex justify-center flex-col gap-10 md:gap-20 pb-10 px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-[148px] max-w-7xl mx-auto w-full'>
                {/* Client Resources */}
                <div className='flex flex-col gap-4 md:gap-[19px] items-center  text-center sm:text-left'>
                    <p className='font-[500] text-[18px] md:text-[20px] text-black font-roboto'>Client Resources</p>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Schedule consult</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Find your Health Plan</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Order supplements</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Resources</Link>
                </div>

                {/* Social Presence */}
                <div className='flex flex-col gap-4 md:gap-[19px] items-center  text-center sm:text-left'>
                    <p className='font-[500] text-[18px] md:text-[20px] text-black font-roboto'>Social Presence</p>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Facebook</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>WhatsApp</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>LinkedIn</Link>
                </div>

                {/* Company */}
                <div className='flex flex-col gap-4 md:gap-[19px] items-center  text-center sm:text-left'>
                    <p className='font-[500] text-[18px] md:text-[20px] text-black font-roboto'>Company</p>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Team</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Success stories</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Giving back</Link>
                </div>

                {/* Help & Support */}
                <div className='flex flex-col gap-4 md:gap-[19px] items-center  text-center sm:text-left'>
                    <p className='font-[500] text-[18px] md:text-[20px] text-black font-roboto'>Help & Support</p>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Common questions</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[14px] md:text-[16px] font-[400] font-roboto hover:text-black transition'>Contact</Link>
                </div>
            </div>

            <div className='flex flex-col gap-6 max-w-7xl mx-auto w-full'>
                <div className=' flex justify-center sm:justify-end gap-4 sm:gap-6 md:gap-[44px] sm:mr-[70px] md:mr-[70px] lg:mr-[70px]'>
                    <Link href={''} className='hover:opacity-80 transition'>
                        <Image src={'/home/facebook.svg'} alt='Facebook' height={40} width={40} className='w-8 h-8 md:w-10 md:h-10' />
                    </Link>
                    <Link href={''} className='hover:opacity-80 transition'>
                        <Image src={'/home/youtube.svg'} alt='YouTube' height={40} width={40} className='w-8 h-8 md:w-10 md:h-10' />
                    </Link>
                    <Link href={''} className='hover:opacity-80 transition'>
                        <Image src={'/home/instagram.svg'} alt='Instagram' height={40} width={40} className='w-8 h-8 md:w-10 md:h-10' />
                    </Link>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between items-center'>
                    <p className='text-[#6d6c6c] text-[12px] sm:text-[14px] md:text-[16px] font-[400] font-roboto text-center'>2025 Dr. Sudhir Khanal. All Rights Reserved.</p>
                    <p className='text-[#6d6c6c] text-[12px] sm:text-[14px] md:text-[16px] font-[400] font-roboto text-center'>© Terms of Use / Privacy Policy / FB Disclaimer</p>
                </div>
            </div>
        </div>
    )
}

export default Footer