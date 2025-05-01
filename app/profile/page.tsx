import React from 'react'

function page() {
    return (
        <div>
            <div className='h-[459px] bg-[#4a84c3]'></div>
            <div className='flex mt-16 gap-20'>
                <div className='w-[313px] pl-20'>
                    <p className='font-inter font-[600] text-[45px]'>Profile</p>
                    <p className='font-inter font-[400] text-[29px]'>Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.</p>
                </div>
                {/* SEPERATOR */}
                <div className='w-[1px] h-[1591px] bg-black ' />
            </div>
            <div></div>
        </div>
    )
}

export default page