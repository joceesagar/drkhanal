import React from 'react'
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionType {
    trigger: string,
    content: string,
    value: string,
    className?: string
}

function FAQ_Accordin({ trigger, content, value, className }: AccordionType) {
    return (
        <div className={`border-1 border-[#d3d3d3] px-4 py-5 ${className}`}>
            <AccordionItem value={value}>
                <AccordionTrigger className='font-meriweather text-sm md:text-[13px] font-[700]'>{trigger}</AccordionTrigger>
                <AccordionContent className='text-sm md:text-base'>
                    {content}
                </AccordionContent>
            </AccordionItem>
        </div>
    )
}

export default FAQ_Accordin