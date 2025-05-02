import React from 'react'
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionType {
    trigger: string,
    content: string,
    value: string
}

function FAQ_Accordin({ trigger, content, value }: AccordionType) {
    return (
        <div className='w-[560px] border-1 border-[#d3d3d3] px-4 py-5'>

            <AccordionItem value={value}>
                <AccordionTrigger className='font-meriweather text-[13px] font-[700]'>{trigger}</AccordionTrigger>
                <AccordionContent>
                    {content}
                </AccordionContent>
            </AccordionItem>

        </div >

    )
}

export default FAQ_Accordin