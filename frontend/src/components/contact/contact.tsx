"use client"

import { Phone, Mail, Calendar, Send, Stethoscope, BriefcaseMedicalIcon } from "lucide-react";
import TypingEffect from "./typingeffect";
import Navbar from "../navBar/navBar";
import ScrollBar from "./scrollbar";

const ContactPage: React.FC = () => {
    return (
        <div className="bg-black" > 
            <Navbar/>
            <div className="min-h-screen bg-[#0d0d1d] text-white flex flex-col items-center overflow-y-auto max-h-screen custom-scrollbar">
                
                <ScrollBar/>
                {/* Header Section */}
                <div className="w-full bg-gradient-to-b from-black via-[#0D0D1F] to-[#432663] rounded-b-3xl p-32 pb-28 text-center relative ">
                    <h1 className="text-6xl font-bold">Contact Us</h1>
                    <div className="h-8 flex justify-center items-center">
                        <TypingEffect />
                    </div>
                    <div className="absolute top-14 left-28 rotate-[20deg]">
                        <BriefcaseMedicalIcon className="text-white" size={48} />
                    </div>

                    <div className="absolute bottom-14 right-28 text-white rotate-[-20deg]">
                        <Stethoscope size={48} />
                    </div>

                </div>

                {/* Contact Info Section */}
                <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-md flex flex-col items-center">
                        <Phone size={36} />
                        <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
                        <a href="tel:+918447411862" className="text-gray-500 mt-6 hover:text-pink-500 transition-colors">
                            +9194361XXXXX
                        </a>
                    </div>
                    <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-md flex flex-col items-center">
                        <Mail size={36} />
                        <h3 className="text-lg font-semibold mt-4">Email</h3>
                        <a href="mailto:info@dehix.org" className="text-gray-500 mt-6 hover:text-pink-500 transition-colors">
                            info@sehatsathi.org
                        </a>
                    </div>
                    <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-md flex flex-col items-center">
                        <Calendar size={36} />
                        <h3 className="text-lg font-semibold mt-4">Calendly</h3>
                        <a
                            href="https://calendly.com/sehathsathi/meeting"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 mt-6 hover:text-pink-500 transition-colors break-all px-4"
                        >
                            https://calendly.com/sehathsathi
                        </a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full max-w-6xl mt-16 p-10 bg-[#1a1a2e] rounded-xl shadow-md text-center mb-24">
                    <h2 className="text-3xl font-semibold mb-10">Get In Touch Now</h2>
                    <form className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="flex-1 p-4 rounded-xl bg-[#29293f] border border-gray-600 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 p-4 rounded-xl bg-[#29293f] border border-gray-600 focus:outline-none"
                            />
                        </div>
                        <textarea
                            placeholder="Enter your message....."
                            rows={4}
                            className="p-4 rounded-xl bg-[#29293f] border border-gray-600 focus:outline-none"
                        ></textarea>
                        <button className="bg-white hover:bg-gray-300 text-black p-4 rounded-full font-semibold flex items-center justify-center gap-2 w-56 mx-auto">
                            Send Message <Send className="text-pink-500" size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;