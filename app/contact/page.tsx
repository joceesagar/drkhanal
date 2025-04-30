import React from 'react'

function page() {
    return (
        <div>
            <div className='mt-[81px] ml-[57px] flex flex-col gap-[43px]'>
                <p className='font-inder text-[#14abac] text-[14px]'>GENERAL INFORMATION</p>
                <div className='flex gap-[20px] flex-col'>
                    <p className='font-inder text-[40px] w-[357px]'>We're here for you And your feet.</p>
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
            </div>
            <div className='w-[261px]'>
                <p className='text-[#2660e1] font-inder'>Contact information</p>
                <p>Email: mail@drsudhir.com.np Fax: 1-289-276-0511 Phone: 905-848-2929</p>
            </div>
        </div>
    )
}

export default page