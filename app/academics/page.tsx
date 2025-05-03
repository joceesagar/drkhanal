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
        description: 'Cortisone and alcohol injection for pain and morton\'s neuroma',
        image: '/academics/image2.png'
    },
    {
        title: 'Laser / Microwave',
        description: 'Laser / Microwave treatments for warts and foot pain.',
        image: '/academics/image3.png'
    },
    {
        title: 'Nail Correction',
        description: 'Non surgical nail correction system for ingrown toe nails.',
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
        description: 'The build up of hard skin on the bottom of the foot, usually due to excessive pressure in a certain area of the foot.',
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
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
            {/* PUBLICATION */}
            <div className='bg-[#f5f8fb] py-12 md:py-16 lg:py-[84px] px-6 sm:px-8 md:px-12 lg:px-[139px] flex flex-col gap-8 md:gap-12 lg:gap-20'>
                <div className='flex flex-col gap-2 md:gap-3'>
                    <p className='text-2xl sm:text-3xl md:text-4xl font-inter font-[400]'>Publications</p>
                    <p className='text-xs sm:text-[13px] w-full lg:w-[1170px] font-inter font-[400]'>
                        From ingrown toenails to foot pain, we&apos;ve developed treatments and procedures using state of the art technology and tools, resulting in a unique patient centered treatments. See our treatments
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[29px]'>
                    {smallCards.map((d, index) =>
                        <div className='bg-white w-full sm:w-[300px] lg:w-[369px] px-4 py-6 rounded-[15px] shadow-sm' key={index}>
                            <p className='text-sm sm:text-[15px] font-inter font-[600]'>{d.title}</p>
                            <div className='flex items-center justify-between gap-4 mt-2'>
                                <p className='text-xs sm:text-[14px] font-inter font-[500] text-[#6d6c6c] flex-1'>{d.description}</p>
                                <Image src={d.image} alt='' height={78} width={74} className='object-cover' />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* IMPACT */}
            <div className='my-12 md:my-16 lg:my-[77px] flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-28 justify-center px-4'>
                <Image
                    height={300}
                    width={500}
                    src={'/academics/injection.png'}
                    alt=''
                    className='rounded-2xl w-full max-w-[656px] h-auto'
                />
                <div className='flex flex-col gap-4 md:gap-6 lg:gap-9 max-w-[350px]'>
                    <p className='font-meriweather font-[400] text-2xl md:text-3xl lg:text-[40px]'>Impact of the COVID-19</p>
                    <p className='font-meriweather font-[400] text-xs sm:text-[13px] text-[#6d6c6c]'>
                        Impact of the COVID-19 pandemic on immunization and surveillance of vaccine-preventable diseases in the WHO South-East Asia Region.
                    </p>
                    <Image
                        src={'/academics/college.png'}
                        alt=''
                        width={300}
                        height={60}
                        className='w-full max-w-[424px] h-auto'
                    />
                </div>
            </div>

            {/* LARGE CARDS */}
            <div className='flex flex-col md:flex-row flex-wrap items-center justify-center my-8 md:my-10 gap-6 md:gap-8 lg:gap-16 px-4'>
                {largeCards.map((d, index) =>
                    <div
                        className='w-full sm:w-[350px] lg:w-[366px] h-auto min-h-[456px] border-gray-100 border shadow-md md:shadow-xl shadow-black/25 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 p-4'
                        key={index}
                    >
                        <Image
                            src={d.image1}
                            width={200}
                            height={130}
                            alt=''
                            className='w-full max-w-[255px] h-auto'
                        />
                        <Image
                            src={d.image2}
                            width={250}
                            height={30}
                            alt=''
                            className='w-full max-w-[294px] h-auto'
                        />
                        <p className='text-[#12abab] text-xs sm:text-[12px] font-inter font-[400]'>{d.minititle}</p>
                        <p className='text-lg md:text-xl lg:text-[24px] font-inter font-[600]'>{d.title}</p>
                        <p className='w-full max-w-[302px] text-xs sm:text-[14px] font-inter font-[600] text-[#6d6c6c]'>{d.description}</p>
                        <Link href={''} className='text-[#2660e1] text-xs sm:text-[14px] font-inter font-[600] flex items-center justify-center mt-2'>
                            Read More <ChevronRightIcon className='w-4 h-4' />
                        </Link>
                    </div>
                )}
            </div>

            <div className='bg-[#f4f9fc] flex flex-col lg:flex-row justify-center items-center py-8 md:py-12 lg:py-[49px] gap-8 md:gap-12 lg:gap-[184px] mx-0 sm:mx-4 md:mx-8 lg:mx-[80px] rounded-[15px] px-6 sm:px-8 md:px-12'>
                <div className='w-full lg:w-[385px] flex flex-col gap-6 md:gap-8 lg:gap-11'>
                    <p className='text-[#ff0f1c] font-inter font-[400] text-xs sm:text-[12px]'>TRACK YOUR PROGRESS</p>
                    <Link href={''} className='font-meriweather font-[400] text-lg md:text-xl lg:text-[24px] underline text-[#3d3d3d]'>
                        Neonatal Sepsis as a Major Cause of Morbidity in a Tertiary Center in Kathmandu
                    </Link>
                    <p className='font-meriweather font-[400] text-xs sm:text-[14px] text-[#3d3d3d]'>
                        Neonatal sepsis causes high morbidity and mortality of newborns. The study aims to study the predictors and clinical, haematological and bacteriological factors of neonatal sepsis. Methods: A descriptive cross sectional study was conducted in a Neonatal Intensive Care Unit (NICU) of Paropakar Maternity and Women&apos;s Hospital.
                    </p>
                </div>
                <Image
                    src={'/academics/babyFoot.png'}
                    alt=''
                    height={250}
                    width={350}
                    className='rounded-2xl w-full max-w-[472px] h-auto'
                />
            </div>

            <div className="bg-[#e6efee] flex justify-center mt-6 md:mt-8 lg:mt-[29px] mx-0 sm:mx-4 md:mx-8 lg:mx-[100px] py-12 md:py-16 lg:py-20 rounded-lg">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-[59px] max-w-[504px]">
                        <p className="font-inter font-[400] text-xs sm:text-[12px] text-[#5d5b5b]">
                            PROFESSIONAL CREDENTIALS
                        </p>

                        <div className="flex flex-col gap-4">
                            <p className="font-meriweather font-[400] text-xl md:text-2xl lg:text-[32px]">
                                Academic Growth
                            </p>

                            <ul className="flex flex-col items-start text-[#6d6c6c] space-y-4 md:space-y-6 mt-2 md:mt-4 list-disc pl-5 md:pl-6">
                                {[
                                    "PgDip in Cognitive-Behavioural Therapy (Distinction)",
                                    "Interpersonal Psychotherapy - Adolescent Skills Training (IPT-AST)",
                                    "Acceptance-Action Coaching, Therapy and Training - registered member of AAACCTT",
                                    "MSc Clinical Psychology and Mental Health (Distinction)",
                                    "BSc (Hons) in Psychology (First Class)",
                                ].map((text, index) => (
                                    <li key={index} className="font-inter text-sm md:text-[16px] leading-relaxed">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button className="w-[150px] md:w-[180px] h-[45px] md:h-[51px] px-4 md:px-[43px] py-2 md:py-[16px] rounded-4xl font-inder text-sm md:text-[15px] bg-white border-2 border-black text-black shadow-[0px_4px] shadow-[#00000040] hover:bg-gray-50">
                            Learn More <ArrowRightIcon className='w-4 h-4' />
                        </Button>
                    </div>

                    {/* IMAGE BLOCK */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <Image
                            src="/academics/imageBook1.png"
                            alt=""
                            height={250}
                            width={200}
                            className="rounded-2xl object-cover lg:mt-28 w-full max-w-[300px] h-auto"
                        />
                        <Image
                            src="/academics/imageBook2.png"
                            alt=""
                            height={250}
                            width={200}
                            className="rounded-2xl object-cover lg:mb-28 h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page