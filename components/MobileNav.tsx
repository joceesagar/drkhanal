import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'


function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger><MenuIcon color='white' /></SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle className='text-center mb-3 text-xl'>Dr. Sudhir Khanal</SheetTitle>
                    <SheetDescription className='flex flex-col gap-10 mt-4'>
                        <Link href='/about' className='font-bold text-base border-b-2'>About Me</Link>
                        <Link href='/family' className='font-bold text-base border-b-2'>Family</Link>
                        <Link href='' className='font-bold text-base border-b-2'>CV</Link>
                        <Link href='' className='font-bold text-base border-b-2'>Certifications</Link>
                        <Link href='/FAQs' className='font-bold text-base border-b-2'>FAQ</Link>
                        <Link href='/contact' className='font-bold text-base border-b-2'>Contact</Link>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNav