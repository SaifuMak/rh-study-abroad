'use client';
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Footer() {
    const [email, setEmail] = useState("");

    const subtileStyle = ' text-xl lg:text-2xl mb-2 md:mb-5'

    const handleBrochureDownload = () => {
        if (!email) return;

        console.log("Brochure email:", email);

        // reset if needed
        // setEmail("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBrochureDownload();
        }
    };


    return (
        <footer className="bg-[#3B3B3D] pt-5  md:pt-10 text-white">
            <div className="xl:w-10/12 w-11/12 mx-auto">
                {/* Top section */}
                <div className="">
                    <div className=" font-medium  border-b border-white/20 mx-auto xl:py-10 py-5 flex flex-col md:flex-row items-center justify-between max-lg:space-y-5  md:space-x-5  lg:space-x-10 ">
                        <img src="/images/logo.png" alt="RH Study Abroad" className="xl:h-16 lg:h-10 h-7" />

                        <div className="bg-white/50 h-12  max-md:hidden lg:h-20 lg:ml-20  w-[2px]"></div>

                        <div className=" flex-1 flex max-md:flex-col items-center text-white md:space-x-10 2xl:space-x-20 w-full md:w-auto">
                            <span className="2xl:text-2xl text-xl mb-2 whitespace-nowrap">
                                Download Brochure
                            </span>

                            <div className=" flex  w-full ">
                                <div className=" flex text-black  items-center w-full justify-between lg:px-4 px-2  rounded-sm w-full bg-white">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className=" lg:py-3 py-2 outline-none w-full"
                                    />
                                    {email && <span onClick={() => setEmail('')} className=" ml-2 lg:ml-5 p-1 hover:bg-slate-50 cursor-pointer text-xl"><RxCross2 /></span>}

                                </div>

                                <button
                                    onClick={handleBrochureDownload}
                                    className="bg-primary-red cursor-pointer ml-4 xl:px-10 px-5 lg:py-3 py-2 max-md:text-xs rounded-sm"
                                >
                                    DOWNLOAD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links section */}
                <div className="md:py-10 py-5  flex md:gap-8 font-light max-lg:text-sm text-lg ">

                    <div className=" flex max-md:flex-col xl:space-x-64 lg:space-x-32 max-md:space-y-8  justify-between w-full 2xl:w-10/12">
                        {/* Contact */}
                        <div>
                            <h4 className={subtileStyle}>Contact</h4>
                            <p>
                                Ambakkadan Jn, P.I.K Tower,
                                <br />
                                St Thomas College Rd, Thrissur,
                                <br />
                                Kerala 680001
                            </p>
                            <p className="mt-4 flex items-center">
                                <img src="/Icons/mail.svg" alt="" className=" size-4 md:size-5 mr-2 " />info@rhstudyabroad.com</p>
                            <p className="mt-2 flex items-center"> <img src="/Icons/phone.svg" alt="" className=" size-4 md:size-5 mr-2 " />+91 9544 22 11 55</p>
                        </div>

                        <div className=" 2xl:space-x-42 lg:space-x-28 md:space-x-10 justify-between max-md:flex-col max-md:space-y-8 flex  ">
                            {/* Explore */}
                            <div className="">
                                <h4 className={subtileStyle}>Explore</h4>
                                <ul className="space-y-2">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Study Abroad</a></li>
                                    <li><a href="#">Student Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>

                            {/* Top Countries */}
                            <div>
                                <h4 className={subtileStyle}>Top Countries</h4>
                                <ul className="space-y-2">
                                    <li><a href="#">United States of America</a></li>
                                    <li><a href="#">United Kingdom</a></li>
                                    <li><a href="#">Canada</a></li>
                                    <li><a href="#">Australia</a></li>
                                    <li><a href="#">New Zealand</a></li>
                                </ul>
                            </div>

                            {/* MBBS Abroad */}
                            <div>
                                <h4 className={subtileStyle}>MBBS Abroad</h4>
                                <ul className="space-y-2">
                                    <li><a href="#">UK</a></li>
                                    <li><a href="#">Poland</a></li>
                                    <li><a href="#">Romania</a></li>
                                    <li><a href="#">Lithuania</a></li>
                                    <li><a href="#">Bulgaria</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom bar */}

            </div>

            <div className=" w-full bg-[#323233] ">
                <div className=" xl:w-10/12 w-11/12  mx-auto pt-8 pb-10 ">
                    <div className="  flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <p className=" lg:text-lg font-light">
                            <span className=" text-[#DE0046]">©</span> 2025 Rayon Hoffnu Edu. Pvt.Ltd. Designed by
                            <span className="ml-1">
                                <a
                                    href="https://maktalseo.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    MakTal
                                </a>
                            </span>

                        </p>

                        {/* Social icons */}
                        <div className="flex gap-4">
                            <SocialIcon src="/images/social/fb.svg" alt="Facebook" />
                            <SocialIcon src="/images/social/insta.svg" alt="Instagram" />
                            <SocialIcon src="/images/social/whatsapp.svg" alt="WhatsApp" />
                            <SocialIcon src="/images/social/linkedin.svg" alt="LinkedIn" />
                            <SocialIcon src="/images/social/google.svg" alt="Google" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


function SocialIcon({ src, alt }) {
    return (
        <div className="md:size-5 size-4 cursor-pointer">
            <img src={src} alt={alt} className="w-full h-full" />
        </div>
    );
}
