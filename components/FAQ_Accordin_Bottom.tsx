'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MinusIcon, PlusIcon } from 'lucide-react'

interface AccordionType {
    trigger: string,
    content: string,
    value: string
}



function FAQ_Accordin_Bottom({ trigger, content, value }: AccordionType) {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b border-[#6e6868]'>
            <Accordion type="single" collapsible>
                <AccordionItem value={value}>
                    <AccordionTrigger
                        className='font-meriweather text-[20px] font-[400]'
                        icon={
                            open ? <MinusIcon className=" transition-transform duration-200 size-6" />
                                : <PlusIcon className="transition-transform duration-200 size-6" />
                        }
                        onClick={() => setOpen(!open)}
                    >
                        {trigger}
                    </AccordionTrigger>
                    <AccordionContent>
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div >

    )
}

export default FAQ_Accordin_Bottom