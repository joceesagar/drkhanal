import { FacebookIcon, LocationEdit, LocationEditIcon, PhoneIcon, Twitter, TwitterIcon } from 'lucide-react'
import React from 'react'

function Topbar() {
    return (
        <div className='h-[60px] bg-gray-600 flex items-center justify-between'>
            <div className='flex ml-10 gap-3'>
                <div color='white' className='text-white'><LocationEdit /></div>
                <div className='text-white font-bold'>Kamalpokhari, Kathmandu, Nepal</div>
            </div>
            <div className='mr-20 flex gap-6'>
                <div className='flex gap-3'>
                    <div className='text-white'><PhoneIcon /></div>
                    <div className='text-white font-bold'>(905)-848-2929</div>
                </div>
                <div className='flex gap-3'>
                    <FacebookIcon className='text-white' />
                    <TwitterIcon className='text-white' />
                </div>
            </div>
        </div>
    )
}

export default Topbar