import React from "react";
import { sansita } from '../../fonts';

const stats = [
    { value: "17+", label: "Years of Excellence" },
    { value: "15000+", label: "Happy Students" },
    { value: "20", label: "Countries" },
    { value: "99%", label: "Visa Success rate" },
    { value: "700+", label: "Universities" },
];

const StudyAbroadStats = () => {
    return (
        <section className={`${sansita.className} w-full bg-white`}>
            <div className=" ">

                {/* upto 676px  */}
                <div className="flex max-md:hidden flex-col md:flex-row justify-between xl:space-x-10 2xl:space-x-16 items-center max-md:mx-auto w-11/12 bg-red-50 gap-x-16">

                    {/* LEFT BLOCK */}
                    <div className=" bg-primary-red text-white  rounded-r-3xl px-10 xl:py-12 py-8 flex items-center  justify-end md:min-w-[200px] lg:min-w-[350px] xl:min-w-[400px] 2xl:min-w-[450px]">
                        <h2 className="text-2xl lg:text-4xl 2xl:text-5xl  leading-tight ">
                            Study <br />
                            <span className=" lg:text-6xl 2xl:text-7xl">Abroad</span>
                        </h2>
                    </div>

                    {/* STATS */}
                    <div className="flex flex-wrap md:flex-nowrap justify-between w-full   pr-5  gap-x-5">
                        {stats.map((item, index) => (
                            <div key={index} className="text-center  ">
                                <p className=" text-primary-red text-2xl xl:text-3xl font-semibold">
                                    {item.value}
                                </p>
                                <p className="text-sm xl:text-base text-gray-600 mt-1">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudyAbroadStats;
