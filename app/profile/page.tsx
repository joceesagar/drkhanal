import React from 'react'

function page() {
    return (
        <div className='mb-12 md:mb-20 lg:mb-[148px]'>

            <div className='h-auto md:h-[459px] bg-[#4a84c3] flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-20 gap-6 md:gap-12 lg:gap-16 py-8 md:py-0'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-center'>
                    <div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[366px] lg:w-[366px] rounded-full bg-[#d9d9d9]' />
                    <p className='font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[59px] text-white text-center md:text-left'>Dr. Sudhir Khanal</p>
                </div>
                <div className='hidden md:block w-[1px] bg-white h-[150px] md:h-[234px] ml-[20vw]' />
            </div>


            <div className='flex flex-col lg:flex-row mt-8 md:mt-12 lg:mt-16 gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8 lg:px-0'>
                {/* PROFILE */}
                <div className='w-full lg:w-96 pl-0 lg:pl-20 pt-0 lg:pt-16'>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-6 md:mb-[39px]'>PROFILE</p>
                    <p className='font-inter font-[400] text-lg md:text-xl lg:text-2xl mb-8 md:mb-16 leading-relaxed md:leading-10'>
                        Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.
                    </p>

                    {/* LANGUAGES */}
                    <div className='mb-8 md:mb-16'>
                        <p className='font-inter font-[600] text-2xl md:text-[29px] mb-4 md:mb-6'>LANGUAGES</p>
                        <div className='relative max-w-md'>
                            {/* English */}
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='relative w-full'>
                                    <div className='absolute h-[8px] bg-black rounded-[20px] w-full max-w-[223px]' />
                                </div>
                                <p className='font-inter text-lg md:text-xl lg:text-2xl font-[400] min-w-[80px]'>English</p>
                            </div>

                            {/* Spanish */}
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='relative w-full'>
                                    <div className='absolute h-[8px] bg-black rounded-[20px] w-[49.3%] max-w-[110px]' />
                                </div>
                                <p className='font-inter text-lg md:text-xl lg:text-2xl font-[400] min-w-[80px]'>Spanish</p>
                            </div>

                            {/* Arabic */}
                            <div className='flex items-center gap-4'>
                                <div className='relative w-full'>
                                    <div className='absolute h-[8px] bg-black rounded-[20px] w-[69%] max-w-[154px]' />
                                </div>
                                <p className='font-inter text-lg md:text-xl lg:text-2xl font-[400] min-w-[80px]'>Arabic</p>
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className='flex flex-col gap-4 md:gap-6'>
                        <p className='font-inter font-[600] text-2xl md:text-[29px]'>EDUCATION</p>
                        <div className='mb-2 md:mb-0'>
                            <p className='font-inter font-[400] text-xl md:text-[24px]'>MS EMS</p>
                            <p className='font-inter font-[300] text-lg md:text-xl'>20XX - City, Country</p>
                        </div>
                        <div>
                            <p className='font-inter font-[400] text-xl md:text-[24px]'>BS BMS</p>
                            <p className='font-inter font-[300] text-lg md:text-xl'>20XX - City University</p>
                            <p className='font-inter font-[300] text-lg md:text-xl'>20XX - City, Country</p>
                        </div>
                    </div>
                </div>

                {/* SEPERATOR */}
                <div className='hidden lg:block w-[1px] h-auto bg-black' />

                {/* EXPERIENCE */}
                <div className='flex mt-0 lg:mt-16 gap-6 md:gap-8 lg:gap-10 flex-col pl-0 lg:pl-0'>
                    <p className='font-inter font-[600] text-2xl md:text-[29px]'>EXPERIENCE</p>

                    <div>
                        <div className='flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2'>
                            <span className='font-inter font-[500] text-xl md:text-2xl lg:text-[29px]'>EMERGENCY MEDICAL TECHNICIAN</span>
                            <span className='font-inter font-[300] text-lg md:text-xl lg:text-[29px]'> | Red Cross | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-lg md:text-xl lg:text-[24px] font-inter mb-3 md:mb-5'>Sept. 20XX - OCT. 20XX</p>
                        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-2 md:gap-4'>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Respond promptly to emergency calls, assessing and providing immediate medical care to patients.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Administer life-saving interventions, including CPR, defibrillation, and medication administration.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Maintain accurate and detailed patient records.</li>
                        </ul>
                    </div>

                    <div>
                        <div className='flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2'>
                            <span className='font-inter font-[500] text-xl md:text-2xl lg:text-[29px]'>PARAMEDIC</span>
                            <span className='font-inter font-[300] text-lg md:text-xl lg:text-[29px]'> | City General Hospital | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-lg md:text-xl lg:text-[24px] font-inter mb-3 md:mb-5'>Sept. 20XX - Oct. 20XX</p>
                        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-2 md:gap-4'>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Conduct advanced assessments to determine the nature and severity of patients&apos; conditions.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Administer life support interventions, including intubation and cardiac monitoring.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Mentored and supervised junior medical staff.</li>
                        </ul>
                    </div>


                    <div>
                        <div className='flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2'>
                            <span className='font-inter font-[500] text-xl md:text-2xl lg:text-[29px]'>MEDICAL ASSISTANT</span>
                            <span className='font-inter font-[300] text-lg md:text-xl lg:text-[29px]'> | Health Clinic | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-lg md:text-xl lg:text-[24px] font-inter mb-3 md:mb-5'>Sept. 20XX – Oct. 20XX</p>
                        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-2 md:gap-4'>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Assist physicians in routine examinations, minor surgical procedures, and patient education.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Managed patient records and ensured accurate documentation of medical histories and vital signs.</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Facilitated health care screenings and vaccination programs within the community.</li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-inter font-[500] text-xl md:text-2xl lg:text-[29px]'>SKILLS</p>
                        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-2 md:gap-4 mt-2 lg:mt-3'>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Advanced Life Support</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Triage and Patient Assessment</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Basic Life Support</li>
                            <li className='font-inter text-lg md:text-xl lg:text-[24px]'>Emergency Medical Procedures</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-4 sm:px-6 md:px-8 lg:px-20'>
                <p className='font-inter font-[500] text-xl md:text-2xl lg:text-[29px] mb-3 md:mb-5'>Publications</p>
                <p className='font-inter text-lg md:text-xl lg:text-[24px]'>
                    Around 30 publications as lead and co-author in various scientific peer-reviewed journal related to child health and immunization (h-index 11, i10-index 12 and Research Interest score of 158.4, as of 10 October 2022)
                </p>
            </div>
        </div>
    )
}

export default page