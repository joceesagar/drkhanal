import Image from 'next/image'
import React from 'react'

function Body() {
    return (
        <div className="mt-20 px-4 md:px-16">
            {/* DOCTOR PROFILE */}
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-32 items-center">
                <div className="h-[400px] w-full max-w-[353px] rounded-[20px] bg-[url(/home/body1.png)] bg-cover bg-no-repeat bg-center shadow-[#d9d9d9] shadow-[-30px_20px]" />
                <div className="w-full max-w-[729px] mt-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-[13px] text-[#1eafaf] font-roboto">Doctor’s Profile</p>
                        <p className="text-[32px] md:text-[39px] font-[700] font-meriweather">Welcome to my Homepage</p>
                        <p className="text-[28px] md:text-[39px] font-[600] font-roboto">Dr. Sudhir Khanal</p>
                        <p className="text-[18px] md:text-[22px] font-[400] leading-7 text-[#6d6c6c] font-roboto">
                            Dr. Sudhir Khanal is a distinguished global health expert currently serving as the Regional Adviser for Accelerated Disease Control at the World Health Organization, South-East Asia Region (WHO SEARO). In addition to his role at WHO, he contributes to academia as an Affiliate Faculty Member at The George Washington University.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center">
                        <Image src={'/home/who.png'} alt='WHO' height={88} width={259} quality={100} priority />
                        <Image src={'/home/unicef.png'} alt='UNICEF' height={50} width={204} />
                        <Image src={'/home/jsi.png'} alt='JSI' height={113} width={150} />
                    </div>
                </div>
            </div>

            {/* EDUCATIONAL BACKGROUND */}
            <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-10 lg:gap-32">
                <div className="flex flex-col gap-6 max-w-xl">
                    <div className="flex flex-col gap-2">
                        <p className="text-[12px] font-[400] text-[#f97a7a] font-roboto">Educational Background</p>
                        <p className="text-[18px] md:text-[20px] font-[700] text-[#6d6c6c] font-roboto">
                            Public Health Policy and Planning (International Health) at the Johns Hopkins University.
                        </p>
                    </div>
                    <p className="text-[18px] md:text-[20px] font-[400] text-[#6d6c6c] font-roboto">
                        He earned his PhD through international programs at Universidad Azteca (Azteca University) and has pursued advanced studies in Public Health Policy and Planning (International Health) at the Johns Hopkins University.
                    </p>
                    <Image src={'/home/bottom.png'} alt='Education' height={123} width={485} />
                </div>
                <div className="w-full max-w-[459px] h-[300px] md:h-[418px] bg-[url(/home/body2.png)] bg-cover bg-center rounded-[10px]" />
            </div>
        </div>
    )
}

export default Body
