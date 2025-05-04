import React from 'react';

function FamilyPage() {
    return (
        <div className="flex flex-col">
            {/* TITLE */}
            <div className="h-[200px] sm:h-[300px] md:h-[396px] bg-[#b91414] text-white flex flex-col justify-center pl-6 sm:pl-12 md:pl-[47px] text-center md:text-left">
                <p className="text-4xl sm:text-5xl md:text-[57px] font-inter font-[700]">Photo Gallery</p>
                <p className="text-xl sm:text-2xl md:text-[35px] font-inter font-[400]">Best moments captured</p>
            </div>

            {/* GRID */}
            <div className="bg-[#ffd02f] flex-1 pb-12 sm:pb-20 md:pb-[134px]">

                <div className="md:hidden grid grid-cols-1 gap-4 px-4 sm:px-6 pt-8 sm:pt-12 mt-[-200px]">
                    {[...Array(17)].map((_, i) => (
                        <div
                            key={i}
                            className={`bg-[url(/family/image${i - 1}.png)] bg-cover bg-center w-full h-[28.44vh]`}
                        />
                    ))}
                </div>

                <div className="hidden md:grid grid-cols-4 w-full px-8 lg:px-[220px] h-full pt-12 lg:pt-[60px] gap-4 lg:gap-x-6 lg:gap-y-3">
                    <div className="bg-[url(/family/image0.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image1.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image2.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image3.png)] bg-cover bg-center row-span-2 w-full h-full" />
                    <div className="bg-[url(/family/image4.png)] bg-cover bg-center w-full h-[273px] col-span-2" />
                    <div className="bg-[url(/family/image5.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image6.png)] bg-cover bg-center w-full h-[638px]" />
                    <div className="bg-[url(/family/image7.png)] bg-cover bg-center w-full h-full" />
                    <div className="bg-[url(/family/image8.png)] bg-cover bg-center w-full h-full col-span-2" />
                    <div className="bg-[url(/family/image9.png)] bg-cover bg-center w-full h-[555px] row-span-2" />
                    <div className="bg-[url(/family/image10.png)] bg-cover bg-center h-[273px] w-full" />
                    <div className="bg-[url(/family/image11.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image12.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image13.png)] bg-cover bg-center w-full h-[273px] col-span-2" />
                    <div className="bg-[url(/family/image14.png)] bg-cover bg-center w-full h-[273px]" />
                    <div className="bg-[url(/family/image15.png)] bg-cover bg-center w-full h-[273px] col-span-2" />
                    <div className="bg-[url(/family/image16.png)] bg-cover bg-center col-span-2 w-full h-[273px]" />
                </div>
            </div>
        </div>
    );
}

export default FamilyPage;