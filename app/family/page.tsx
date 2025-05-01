import React from 'react';

function FamilyPage() {
    return (
        <div className="flex flex-col">
            {/* TITLE */}
            <div className="h-[396px] bg-[#b91414] text-white flex flex-col justify-center pl-[47px]">
                <p className="text-[57px] font-inter font-[700]">Photo Gallery</p>
                <p className="text-[35px] font-inter font-[400]">Best moments captured</p>
            </div>

            {/* GRID */}
            <div className=" bg-[#ffd02f] flex-1 pb-[134px]">
                <div className="grid grid-cols-4 w-full px-[220px] h-full pt-[60px] gap-x-6 gap-y-3">
                    <div className="bg-[url(/family/image.png)] bg-cover bg-center w-[347px] h-[273px]" />
                    <div className="bg-[url(/family/image1.png)] bg-cover bg-center " />
                    <div className="bg-[url(/family/image2.png)] bg-cover bg-center " />
                    <div className="bg-[url(/family/image3.png)] bg-cover bg-center row-span-2" />
                    <div className="bg-[url(/family/image4.png)] bg-cover bg-center w-[722px] h-[273px] col-span-2" />
                    <div className="bg-[url(/family/image5.png)] bg-cover bg-center" />
                    <div className="bg-[url(/family/image6.png)] bg-cover bg-center w-[347px] h-[638px]" />
                    <div className="bg-[url(/family/image7.png)] bg-cover bg-center w-full h-full" />
                    <div className="bg-[url(/family/image8.png)] bg-cover bg-center w-full h-full col-span-2" />
                    <div className="bg-[url(/family/image9.png)] bg-cover bg-center w-[347px] h-[555px] row-span-2  " />
                    <div className="bg-[url(/family/image10.png)] bg-cover bg-center h-[273px]" />
                    <div className="bg-[url(/family/image11.png)] bg-cover bg-center" />
                    <div className="bg-[url(/family/image12.png)] bg-cover bg-center" />
                    <div className="bg-[url(/family/image13.png)] bg-cover bg-center w-[722px] h-[273] col-span-2 " />
                    <div className="bg-[url(/family/image14.png)] bg-cover bg-center  " />
                    <div className="bg-[url(/family/image15.png)] bg-cover bg-center w-[722px] h-[273px] col-span-2" />
                    <div className="bg-[url(/family/image16.png)] bg-cover bg-center col-span-2" />
                </div>
            </div>
        </div>
    );
}

export default FamilyPage;
