import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='bg-[#ebebeb] pt-10 mt-10 flex justify-center flex-col gap-20 pb-10'>
            <div className='grid grid-cols-4  gap-[148px] max-w-7xl mx-auto'>
                <div className='flex flex-col gap-[19px] justify-center'>
                    <p className='font-[500] text-[20px] text-black font-roboto'>Client Resources</p>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Schedule consult</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Find your Health Plan</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Order supplements</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Resources</Link>
                </div>
                <div className='flex flex-col gap-[19px]'>
                    <p className='font-[500] text-[20px] text-black font-roboto'>Social Presence</p>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Facebook</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>WhatsApp</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>LinkedIn</Link>
                </div>
                <div className='flex flex-col gap-[19px]'>
                    <p className='font-[500] text-[20px] text-black'>Company</p>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Team</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Success stories</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Giving back</Link>
                </div>
                <div className='flex flex-col gap-[19px]'>
                    <p className='font-[500] text-[20px] text-black'>Help & Support</p>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Common questions</Link>
                    <Link href={''} className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>Contact</Link></div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-end gap-[44px] mr-[470px]'>
                    <Link href={''}><Image src={'/home/facebook.svg'} alt='' height={49} width={49} /></Link>
                    <Link href={''}><Image src={'/home/youtube.svg'} alt='' height={49} width={49} /></Link>
                    <Link href={''}><Image src={'/home/instagram.svg'} alt='' height={49} width={49} /></Link>
                </div>
                <div className='flex gap-[400px] justify-center'>
                    <p className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>2025 Dr. Sudhir Khanal.  All Rights Reserved.</p>
                    <p className='text-[#6d6c6c] text-[16px] font-[400] font-roboto'>© Terms of Use / Privacy Policy / FB Disclaimer</p>
                </div>
            </div>
        </div>
    )
}

export default Footer