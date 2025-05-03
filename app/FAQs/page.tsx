import FAQ_Accordin from '@/components/FAQ_Accordin';
import FAQ_Accordin_Bottom from '@/components/FAQ_Accordin_Bottom';
import { Accordion } from '@/components/ui/accordion';
import Image from 'next/image';
import React from 'react';

const leftColumn = [
    {
        index: 'item-1',
        trigger: "What happens after submitting my application?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-2',
        trigger: "Where do I get my blood test and what is the cost?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-3',
        trigger: "What blood texts do you require for the first assessment?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-4',
        trigger: "What other test are available beyond blood test?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-5',
        trigger: "What program is used for the virtual consultation?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-6',
        trigger: "What is the cost and what is included in this cost?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-7',
        trigger: "What are the expected costs of supplements?",
        content: "Appointment will be scheduled"
    },

];

const rightColumn = [
    {
        index: 'item-9',
        trigger: "Can i use my health insurance?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-10',
        trigger: "Can you be my primary care doctor?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-11',
        trigger: "Can you prescribe my medication refills?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-12',
        trigger: "What happens after the first consulatation?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-13',
        trigger: "What follow-up options are available after the first consulatation?",
        content: "Appointment will be scheduled"
    },
    {
        index: 'item-14',
        trigger: "Can you help me with (insert your health problem)?",
        content: "Appointment will be scheduled"
    },
];

const imageDescription = [
    {
        imageUrl: "/FAQs/image1.png",
        description: "View and manage your insurance and benefit summary",
        imageHeight: 150,
        imageWeight: 150,
        descriptionWidth: 327
    },
    {
        imageUrl: "/FAQs/image2.png",
        description: "View upcoming appointments and reminders",
        imageHeight: 150,
        imageWeight: 150,
        descriptionWidth: 273
    },
    {
        imageUrl: "/FAQs/image3.png",
        description: "View your medications and manage your pharmacy information",
        imageHeight: 150,
        imageWeight: 150,
        descriptionWidth: 271
    },
    {
        imageUrl: "/FAQs/image4.png",
        description: "View your statements and pay your bill",
        imageHeight: 139,
        imageWeight: 135,
        descriptionWidth: 271
    }
]

const accordin = [
    {
        trigger: 'Does insurance cover online therapy?',
        content: '',
        index: 'item-1'
    },
    {
        trigger: 'Who is the right therapist for me?',
        content: '',
        index: 'item-2'
    },
    {
        trigger: 'What is the difference between therapy and psychiatry?',
        content: '',
        index: 'item-3'
    },
    {
        trigger: 'How do you vet your therapist?',
        content: '',
        index: 'item-4'
    },
    {
        trigger: 'How do i get matched with therapist?',
        content: '',
        index: 'item-5'
    }
]

function FAQs() {
    return (
        <div className='flex flex-col items-center mt-12 lg:mt-[49px] gap-16 lg:gap-[114px] px-6 lg:px-0'>
            <h1 className='font-meriweather font-[400] text-3xl lg:text-[40px] text-center'>
                Frequently Asked Question
            </h1>
            <div className='flex flex-col gap-8 lg:gap-12 max-w-[1200px] w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-[30px]'>
                    <Accordion type="single" collapsible className='w-full'>
                        {leftColumn.map((item) => (
                            <FAQ_Accordin
                                key={item.index}
                                trigger={item.trigger}
                                content={item.content}
                                value={item.index}
                                className="w-full lg:w-[560px]"
                            />
                        ))}
                    </Accordion>
                    <Accordion type="single" collapsible className='w-full'>
                        {rightColumn.map((item) => (
                            <FAQ_Accordin
                                key={item.index}
                                trigger={item.trigger}
                                content={item.content}
                                value={item.index}
                                className="w-full lg:w-[560px]"
                            />
                        ))}
                    </Accordion>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <p className='font-inder text-2xl md:text-4xl text-center'>Download our Free Health App</p>
                    <div className='w-full flex justify-center'>
                        <Image src={'/FAQs/image.png'} alt='' width={300} height={54} content='cover' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[80px] max-w-[1200px] px-6 md:px-0'>
                {imageDescription.map((d, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-8 md:gap-[51px] w-full md:w-auto text-center'>
                        <Image src={d.imageUrl} alt='' height={d.imageHeight} width={d.imageWeight} style={{ objectFit: 'contain' }} />
                        <p className={`text-[#7d7979] font-ibm_plex_mono text-sm md:text-base w-full md:w-[${d.descriptionWidth}px]`}>
                            {d.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className='w-full bg-[url(/FAQs/gradiantBackground.png)] bg-cover bg-center bg-no-repeat py-10 md:py-[86px] px-6 md:px-[103px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
                <div className='flex flex-col items-center gap-6 md:gap-8 text-center'>
                    <p className='font-meriweather font-[400] text-sm md:text-[14px] '>GOT A QUESTIONS?</p>
                    <div>
                        <p className='font-meriweather font-[400] text-3xl md:text-[40px]'>Frequently Asked</p>
                        <p className='font-meriweather font-[700] text-3xl md:text-[40px]'>Questions</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <Image src={'/FAQs/question.png'} alt='' height={200} width={244} content='cover' />
                    </div>
                </div>
                <div className='w-full max-w-[600px]'>
                    {accordin.map((d) => (
                        <FAQ_Accordin_Bottom
                            trigger={d.trigger}
                            content={d.content}
                            value={d.index}
                            key={d.index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQs;