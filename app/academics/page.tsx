import { Button } from '@/components/ui/button'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const smallCards = [
    {
        title: 'Indonesia, 2013–2022',
        description: 'Progress Toward Measles and Rubella Elimination',
        image: '/academics/image.png'
    },
    {
        title: 'Immunization in WHO South-East Asia',
        description: 'A five-decade journey of saving millions of lives & ending diseases',
        image: '/academics/image1.png'
    },
    {
        title: 'General Foot Care',
        description: 'General foot health assessments.',
        image: '/academics/image2.png'
    },
    {
        title: 'Injection',
        description: 'Cortisone and alcohol injection for pain and morton’s neuroma',
        image: '/academics/image2.png'
    },
    {
        title: 'Laser / Microwave',
        description: 'Leasure /  Microwavw treatments for warts and foot pain.',
        image: '/academics/image3.png'
    },
    {
        title: 'Nail Correction',
        description: 'Non surgical nail correction system for ingrown teo nails.',
        image: '/academics/image4.png'
    }
]

const largeCards = [
    {
        minititle: 'Bone Issues',
        title: 'Bunions',
        description: 'A bony structural change to the big toe that causes it to bend sideways and creates an enlarged bump at the 1st MPJ joint.',
        image1: '/academics/imagefoot.png',
        image2: '/academics/researchGate.png'
    },
    {
        minititle: 'Foot Care',
        title: 'Calluses',
        description: 'The buid up of hard skin on the botton of the foot, usually due to excessive pressure in a certain area of the foot.',
        image1: '/academics/imageheel.png',
        image2: '/academics/google.png'
    },
    {
        minititle: 'Foot Pain',
        title: 'Capsulitis/Foot Joint Pain',
        description: 'Overuse injury that affects the ligaments which forms a capsule around a joint.',
        image1: '/academics/imageankel.png',
        image2: '/academics/academia.png'
    }
]



function page() {
    return (
        <div>
            {/* PUBLICATION */}
            <div className='bg-[#f5f8fb] py-[84px] px-[139px] flex flex-col gap-20'>
                <div className='flex flex-col gap-3' >
                    <p className='text-[40px] font-inter font-[400]'>Publications</p>
                    <p className='text-[13px] w-[1170px] font-inter font-[400]'>From ingrown toenails to foot pain, we’ve developed treatments and procedures using state of the art technology and toold, resulting in a unique patients centred treatments. See our treatments</p>
                </div>
                <div className='grid grid-cols-3 gap-y-[29px]'>
                    {smallCards.map((d, index) =>
                        <div className='bg-white w-[369px] px-4 py-6 rounded-[15px]' key={index}>
                            <p className='text-[15px] font-inter font-[600] '>{d.title}</p>
                            <div className='flex items-center gap-14'>
                                <p className='text-[14px] font-inter font-[500] text-[#6d6c6c]'>{d.description}</p>
                                <Image src={d.image} alt='' height={78} width={74} content='cover' />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* IMPACT */}
            <div className='my-[77px] flex items-center gap-28 justify-center'>
                <Image height={424} width={656} src={'/academics/injection.png'} alt='' content='cover' quality={100} className='rounded-2xl' />
                <div className='flex flex-col gap-9'>
                    <p className='font-meriweather font-[400] text-[40px] w-[350px]'>Impact of the COVID-19 </p>
                    <p className='font-meriweather font-[400] text-[13px] w-[350px] text-[#6d6c6c]'>Impact of the COVID-19 pandemic on immunization and surveillance of vaccine-preventable diseases in the WHO South-East Asia Region. </p>
                    <Image src={'/academics/college.png'} alt='' width={424} height={90} />
                </div>
            </div>

            <div className='flex items-center justify-center my-10 gap-16'>
                {largeCards.map((d, index) =>
                    <div className='w-[366px] h-[456px] border-gray-100 border shadow-xl shadow-black/25 rounded-2xl flex flex-col items-center justify-center gap-4' key={index}>
                        <Image src={d.image1} width={255} height={164} alt='' />
                        <Image src={d.image2} width={294} height={38} alt='' />
                        <p className='text-[#12abab] text-[12px] font-inter font-[400]'>{d.minititle}</p>
                        <p className='text-[24px] font-inter font-[600]'>{d.title}</p>
                        <p className='w-[302px] text-[14px] font-inter font-[600] text-[#6d6c6c]'>{d.description}</p>
                        <Link href={''} className='text-[#2660e1] text-[14px] font-inter font-[600] flex items-center justify-center'>Read More <ChevronRightIcon /></Link>
                    </div>
                )}
            </div>

            <div className='bg-[#f4f9fc] flex justify-center py-[49px] gap-[184px] mx-[80px] rounded-[15px]'>
                <div className='w-[385px] flex flex-col gap-11'>
                    <p className='text-[#ff0f1c] font-inter font-[400] text-[12px]'>TRACK YOUR PROGRESS</p>
                    <Link href={''} className='font-meriweather font-[400] text-[24px] underline text-[#3d3d3d]'>Neonatal Sepsis as a Major Cause of Mobidity in a Tertiary Center in Kathmandu</Link>
                    <p className='font-meriweather font-[400] text-[14px] text-[#3d3d3d]'>Neonatal sepsis causes high morbidity and mortality of newborns. The study aims to study the predictors and clinical, haematological and bacteriological factors of neonatal sepsis. Methods: A descriptive cross sectional study was conducted in a Neonatal Intensive Care Unit (NICU) of Paropakar Maternity and Women&apos;s Hospital.</p>
                </div>
                <Image src={'/academics/babyFoot.png'} alt='' height={307} width={472} className='rounded-2xl' />
            </div>
            <div className="bg-[#e6efee] flex justify-center mt-[29px] mx-[100px] py-20">
                <div className="flex flex-row gap-20 items-start">
                    {/* TEXT BLOCK */}
                    <div className="flex flex-col gap-[59px]">
                        <p className="font-inter font-[400] text-[12px] text-[#5d5b5b]">
                            PROFESSIONAL CREDENTIALS
                        </p>

                        <div className="flex flex-col">
                            <p className="font-meriweather font-[400] text-[32px] w-[376px]">
                                Academic Growth
                            </p>

                            <ul className="flex flex-col items-start text-[#6d6c6c] space-y-6 mt-4 list-disc pl-6">
                                {[
                                    "PgDip in Cognitive-Behavioural Therapy (Distinction)",
                                    "Interpersonal Psychotherapy - Adolescent Skills Training (IPT-AST)",
                                    "Acceptance-Action Coaching, Therapy and Training - registered member of AAACCTT",
                                    "MSc Clinical Psychology and Mental Health (Distinction)",
                                    "BSc (Hons) in Psychology (First Class)",
                                ].map((text, index) => (
                                    <li key={index} className="font-inter text-[16px] leading-relaxed w-[504px]">
                                        {text}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <Button className="w-[180px] h-[51px] px-[43px] py-[16px] rounded-4xl font-inder text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040]">
                            Learn More <ArrowRightIcon />
                        </Button>
                    </div>

                    {/* IMAGE BLOCK */}
                    <div className="flex gap-6">
                        <Image
                            src="/academics/imageBook1.png"
                            alt=""
                            height={374}
                            width={300}
                            className="rounded-2xl object-cover mt-28"
                        />
                        <Image
                            src="/academics/imageBook2.png"
                            alt=""
                            height={374}
                            width={300}
                            className="rounded-2xl object-cover mb-28"
                        />
                    </div>


                </div>
            </div>


        </div>
    )
}

export default page