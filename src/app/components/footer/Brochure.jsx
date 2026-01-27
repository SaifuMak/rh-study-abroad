'use client'

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

function Brochure() {
    const [email, setEmail] = useState("");
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaAnswer, setCaptchaAnswer] = useState("");
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });

    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ a, b });
        setCaptchaAnswer("");
    };

    useEffect(() => {
        if (showCaptcha) generateCaptcha();
    }, [showCaptcha]);

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleBrochureDownload = () => {
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setShowCaptcha(true);
    };

    const verifyCaptcha = () => {
        if (Number(captchaAnswer) === captcha.a + captcha.b) {
            setShowCaptcha(false);
            toast.success("Verification successful!");
            handleVerifiedDownload();
        } else {
            toast.error("Incorrect captcha. Please try again.");
            generateCaptcha();
        }
    };

    const handleVerifiedDownload = () => {
        toast.info("Brochure download started");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBrochureDownload();
        }
    };

    return (
        <>
            <div className="flex-1 flex max-md:flex-col items-center text-white md:space-x-10 2xl:space-x-20 w-full md:w-auto">
                <span className="2xl:text-2xl text-xl mb-2 whitespace-nowrap">
                    Download Brochure
                </span>

                <div className="flex w-full">
                    <div className="flex text-black items-center w-full justify-between lg:px-4 px-2 rounded-sm bg-white">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="lg:py-3 py-2 outline-none w-full"
                        />

                        {email && (
                            <span
                                onClick={() => setEmail("")}
                                className="ml-2 lg:ml-5 p-1 hover:bg-slate-50 cursor-pointer text-xl"
                            >
                                <RxCross2 />
                            </span>
                        )}
                    </div>

                    <button
                        onClick={handleBrochureDownload}
                        className="bg-primary-red ml-4 xl:px-10 px-5 lg:py-3 py-2 max-md:text-xs rounded-sm"
                    >
                        DOWNLOAD
                    </button>
                </div>
            </div>

            {/* CAPTCHA MODAL */}
            {showCaptcha && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-md w-[300px] lg:w-[500px]">
                        <h3 className="text-lg font-semibold mb-4">
                            Verify you're human
                        </h3>

                        <p className="mb-2">
                            What is <strong>{captcha.a} + {captcha.b}</strong> ?
                        </p>

                        <input
                            type="number"
                            value={captchaAnswer}
                            onChange={(e) => setCaptchaAnswer(e.target.value)}
                            className="border w-full px-3 py-2 mb-4 outline-none"
                        />

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowCaptcha(false)}
                                className="px-4 py-2 border rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={verifyCaptcha}
                                className="px-4 py-2 bg-primary-red text-white rounded"
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Brochure;
