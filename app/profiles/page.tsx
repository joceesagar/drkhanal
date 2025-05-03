import React from 'react'

function page() {
    return (
        <div className='mb-12 md:mb-20 lg:mb-[148px]'>

            <div className='h-auto md:h-[459px] bg-[#4a84c3] flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-20 gap-6 md:gap-12 lg:gap-16 py-8 md:py-0'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-center'>
                    <div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[366px] lg:w-[366px] rounded-full bg-[#d9d9d9]' />
                    <p className='font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[59px] text-white text-center md:text-left'>Dr.Sudhir Khanal</p>
                </div>
                <div className='hidden md:block w-[1px] bg-white h-[150px] md:h-[234px] ml-[20vw]' />
            </div>


            <div className='flex flex-col lg:flex-row mt-8 md:mt-12 lg:mt-16 gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8 lg:px-0'>
                {/* PROFILE */}
                <div className='w-full lg:w-126 pl-0 lg:pl-20 pt-0 lg:pt-16'>
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

                {/* EXPERTISE */}
                <div className='flex mt-0 lg:mt-16 gap-6 md:gap-8 lg:gap-10 flex-col pl-0 lg:pl-0 w-full'>
                    <p className='font-inter font-[600] text-2xl md:text-[29px]'>EXPERTISE</p>

                    <div className='flex flex-col items-start w-full lg:w-[971px] gap-8 md:gap-14'>
                        <ul className='list-disc pl-5 md:pl-6 space-y-8 md:space-y-14'>
                            {[
                                "Coordination and collaboration with Ministries of Health of eleven countries in WHO Southeast Asia Region that has the largest birth cohort of the world to develop national strategy and action plans related to immunization programs contributing to health system strengthening and attaining SGDs: significant collaboration with GAVI and UNICEF at Regional and HQ level on the same.",
                                "Key area of expertise in Immunization in terms of policy and strategic development, technical guidance, and partner coordination in WHO South-East Asia Region include technical include Polio eradication, sustaining maternal and neonatal tetanus, elimination of measles and rubella, surveillance for vaccine preventable diseases , cold chain management, immunization wase management , outbreak preparedness and response.",
                                "Child survival and development specialist in UNICEF since 2008 to 2014 and providing technical and managerial leadership to key programs like -Immunization, MNCH, Adolescent health, Early Childhood Development, Malaria elimination, PPTCT/PMTCT, WASH etc.",
                                "New-born and Child health programme designing, planning and implementation at National level including supporting governments to development of health strategy.",
                                "Successfully lead a diverse team at National as well as international level as demonstrated by the performance evaluation done by organization that I worked with. – JSI, UNICEF and WHO",
                                "Expertise on development of guidelines, training materials, technical reports to support eleven countries in WHO Southeast Asia Region for immunization program activities strengthening."
                            ].map((text, index) => (
                                <li
                                    className='font-inter text-lg md:text-xl lg:text-[24px] font-[400] text-[#1d1d1d]'
                                    key={index}
                                >
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className='px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col gap-8 md:gap-12'>
                {/* WHO HISTORY */}
                <div>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-4 md:mb-5'>Current WHO Employment History</p>
                    <ul className='mb-6 list-disc pl-5'>
                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2'>17 Jan 2023 - till date</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>Regional Adviser, Accelerated Diseases Control</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>IVD/CDS</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>WHO Southeast Asia region</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>Oversee Polio, measles-rubella elimination, MNTE, VPD surveillance programme in WHO SEARO and provide technical support to Member States in these area of work</p>
                    </ul>
                    <ul className='mb-6 list-disc pl-5'>
                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2'>Oct 2014- 15 Jan 2023</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>Regional Adviser, Accelerated Diseases Control</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>IVD/CDS</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>WHO Southeast Asia region</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>Oversee Polio, measles-rubella elimination, MNTE, VPD surveillance programme in WHO SEARO and provide technical support to Member States in these area of work</p>
                    </ul>
                </div>

                {/* OTHER EXPERIENCES */}
                <div>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-4 md:mb-5'>Other Work Experience</p>
                    <ul className='mb-6 pl-5'>
                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Jan 2012- Sept 2014</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Child Survival Specialist /Chief of Field Office a.i., Papua, UNICEF Indonesia</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Sept 2008-Dec 2011</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Health Specialist, UNICEF Nepal Country office</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Dec 2002- Aug 2008</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Project Director, Community Based New-born Care (with a study break), John Snow R&T, Nepal</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Feb 2000-Nov 2002</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-1'>1. Medical Officer - Clinical care in Tropical and Infectious disease hospital, Nepal</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>2. Course Director IMCI for Child health Division of Ministry of Health of Nepal</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Others</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Short term assignments with UNICEF in Afghanistan (2010), UNICEF Kenya (2008), UNICEF HQ (2007)</p>
                    </ul>
                </div>

                <div>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-1'>Academic Qualifications</p>
                    <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Short term assignments with UNICEF in Afghanistan (2010), UNICEF Kenya (2008), UNICEF HQ (2007)</p>
                    <ul className='mb-6 pl-5'>
                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2019</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-2'>PhD in Health Sciences</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Azteca University, Mexico (Measles and rubella elimination)</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2007</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-2'>MPH</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Northern University, Bangladesh</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2006</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-2'>Post Doc Fellowship</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Johns Hopkins Univ., (on International Health)</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>1995-2000</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-2'>MBBS</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Manipal College of Medical science, Nepal</p>
                    </ul>
                </div>

                <div>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-4 md:mb-5'>Any other relevant information **</p>
                    <ul className='mb-6 pl-5'>
                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2016</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>&quot;WHO RD Excellence Award&quot; for outstanding contribution in 2016.</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2011</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>&quot;Immunization Champion on sustainable Immunization Financing&quot; by SABIN vaccine Institute</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2010</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Recognized by Rotary Nepal on contribution to reduction of child mortality in Nepal</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>2006</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-4 md:mb-5'>Prestigious Hubert Humphry Fellowship by Government of USA</p>

                        <li className='font-inter font-[600] text-xl md:text-[24px] mb-2 list-disc'>Member of</li>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-1'>1. Nepal Medical Association, Life member</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-1'>2. Society of Public Health Physician of Nepal, Life member</p>
                        <p className='font-inter font-[400] text-lg md:text-[20px] mb-1'>3. Perinatal Society of Nepal, Life member</p>
                    </ul>
                </div>

                <div>
                    <p className='font-inter font-[600] text-2xl md:text-[29px] mb-4 md:mb-5'>Publications</p>
                    <div className='mb-6 w-full'>
                        <p className='font-inter font-[400] text-lg md:text-[20px]'>
                            Around 30 publications as lead and co-author in various scientific peer-reviewed journal related to child health and immunization (h-index 11, i10-index 12 and Research Interest score of 158.4, as of 10 October 2022)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page