import { Dot } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div className='mb-[148px]'>
            <div className='h-[459px] bg-[#4a84c3] flex items-center px-20 gap-[500]'>
                <div className='flex gap-12 items-center'>
                    <div className='h-[366px] w-[366px] rounded-full bg-[#d9d9d9]' />
                    <p className='font-inter text-[59px] text-white'>Dr.Sudhir Khanal</p>
                </div>
                <div className='w-[1px] bg-white h-[234px]' />
            </div>
            <div className='flex mt-16 gap-20 mb-20'>
                {/* PROFILE */}
                <div className='w-96 pl-20 pt-16'>
                    <p className='font-inter font-[600] text-[29px] mb-[39px]'>PROFILE</p>
                    <p className='font-inter font-[400] text-2xl mb-16 leading-10'>Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.</p>
                    {/* LANGUAGES */}
                    <div className='mb-16'>
                        <p className='font-inter font-[600] text-[29px] mb-6'>LANGUAGES</p>
                        <div className='grid grid-cols-2 items-center gap-x-48'>
                            {/* BARS */}
                            <div className='flex justify-end flex-col items-end gap-6 mx-auto'>
                                <div className='w-[223px] h-[8px] bg-black rounded-[20px]' />
                                <div className='w-[110px] h-[8px] bg-black rounded-[20px]' />
                                <div className='w-[154px] h-[8px] bg-black rounded-[20px]' />

                            </div>
                            {/* LABELS */}
                            <div className='flex justify-end flex-col items-start mx-auto'>
                                <p className='font-inter text-2xl font-[400]'>English</p>
                                <p className='font-inter text-2xl font-[400]'>Spanish</p>
                                <p className='font-inter text-2xl font-[400]'>Arabic</p>
                            </div>

                        </div>
                    </div>
                    {/* EDUCATION */}
                    <div className='flex flex-col gap-6'>
                        <p className='font-inter font-[600] text-[29px]'>EDUCATION</p>
                        <div>
                            <p className='font-inter font-[400] text-[24px] '>MS EMS</p>
                            <p className='font-inter font-[300] text-xl '>20XX - City, Country</p>
                        </div>
                        <div>
                            <p className='font-inter font-[400] text-[24px] '>BS BMS</p>
                            <p className='font-inter font-[300] text-xl '>20XX - City University</p>
                            <p className='font-inter font-[300] text-xl '>20XX - City, Country</p>

                        </div>
                    </div>


                </div>
                {/* SEPERATOR */}
                <div className='w-[1px] h-[1350px] bg-black ' />

                {/* EXPERIENCE */}
                <div className='flex mt-16 gap-10 flex-col'>
                    <p className='font-inter font-[600] text-[29px]'>EXPERIENCE</p>
                    <div>
                        <div>
                            <span className='font-inter font-[500] text-[29px]'>EMERGENCY MEDICAL TECHNICIAN</span>
                            <span className='font-inter font-[300] text-[29px]'> | Red Cross | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-[24px] font-inter mb-5'>Sept. 20XX - OCT. 20XX</p>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Respond promptly to emergency calls, assessing and providing immediate medical care to patients.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Administer life-saving interventions, including CPR, defibrillation, and medication administration.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Maintain accurate and detailed patient records.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className='font-inter font-[500] text-[29px]'>PARAMEDIC</span>
                            <span className='font-inter font-[300] text-[29px]'> | City General Hospital | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-[24px] font-inter mb-5'>Sept. 20XX - Oct. 20XX</p>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Conduct advanced assessments to determine the nature and severity of patients’ conditions.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Administer life support interventions, including intubation and cardiac monitoring.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Mentored and supervised junior medical staff.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className='font-inter font-[500] text-[29px]'>MEDICAL ASSISTANT</span>
                            <span className='font-inter font-[300] text-[29px]'> | Health Clinic | NY, USA</span>
                        </div>
                        <p className='text-[#707070] text-[24px] font-inter mb-5'>Sept. 20XX – Oct. 20XX</p>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Assist physicians in routine examinations, minor surgical procedures, and patient education.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Managed patient records and ensured accurate documentation of medical histories and vital signs.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Facilitated health care screenings and vaccination programs within the community.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SKILLS */}
                    <div>
                        <p className='font-inter font-[500] text-[29px]'>SKILLS</p>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Advanced Life Support</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Triage and Patient Assessment</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Basic Life Support</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Dot size={50} />
                                <p className='font-inter text-[24px]'>Emergency Medical Procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20'>
                <p className='font-inter font-[500] text-[29px] mb-5'>Publications</p>
                <p className='font-inter text-[24px]'>Around 30 publications as lead and co-author in various scientific peer-reviewed journal related to child health and immunization (h-index 11, i10-index 12 and Research Interest score of 158.4, as of 10 October 2022)</p>
            </div>
        </div>
    )
}

export default page