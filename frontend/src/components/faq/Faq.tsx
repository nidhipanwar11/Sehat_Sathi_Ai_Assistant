"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Navbar from "../navBar/navBar";
import ContactUs from "../navBar/contactUs";
import ScrollBar from "../contact/scrollbar"; // Import ScrollBar

const faqs = [
    { question: "How does Sehat-Sathi analyze my X-ray?", answer: "Sehat-Sathi uses AI-powered image analysis to examine your uploaded X-ray and provide insights into possible health conditions. However, it is always recommended to consult a doctor for a final diagnosis." },
    { question: "Is my medical data secure on Sehat-Sathi?", answer: "Yes, we prioritize user privacy. All uploaded images and chat data are securely stored and not shared with third parties." },
    { question: "Can Sehat-Sathi replace a doctor’s consultation?", answer: "No, Sehat-Sathi provides AI-based assistance but should not be used as a substitute for professional medical advice. Always consult a healthcare professional for accurate diagnosis and treatment." },
    { question: "How can the chatbot help me?", answer: "Our chatbot provides guidance on dietary recommendations, symptoms, possible causes of diseases, and general health advice based on your queries." },
    { question: "What types of X-rays can I upload?", answer: "You can upload X-rays of the chest, brain, lungs, and tuberculosis screening. Other scans are a work in progress, and we are continuously improving our model to support more types of medical imaging in the future. Stay tuned for updates!" },
    { question: "Is Sehat-Sathi free to use?", answer: "Yes, basic services like X-ray analysis and chatbot consultation are free. However, we may introduce premium features in the future." },
    { question: "How accurate is the AI diagnosis?", answer: "While our AI is trained on a vast dataset, it is not 100% accurate. It provides probable diagnoses, but a medical professional should always confirm the results." }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number>(0); // First question open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <div className="bg-[#0D0D1F] h-screen overflow-hidden"> {/* Prevents body scrollbar */}
            <Navbar />
            <ScrollBar /> {/* Injects custom scrollbar styles */}

            {/* Scrollable FAQ Content */}
            <div className="custom-scrollbar h-screen overflow-y-auto">
                <div className="min-h-screen text-white p-6 flex flex-col md:flex-row items-start justify-center gap-8 ml-10 mr-10">
                    {/* Left Section (Image & Heading) */}
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 ml-5">
                        <h1 className="text-5xl font-bold">Frequently Asked <br />Questions</h1>
                        <p className="text-gray-400 font-bold">Do you have any kind of questions? We're here to help.</p>
                        <img
                            src="/faq.png"
                            alt="FAQ Illustration"
                            className="w-full max-w-md h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Section (FAQs) */}
                    <div className="w-full md:w-1/2 space-y-4 mr-10">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#1d1e35] p-4 rounded-lg cursor-pointer flex items-start"
                                onClick={() => toggleFAQ(index)}
                            >
                                {/* Number Section with Circular Effect */}
                                <div className="relative flex items-center mr-4">
                                    <span
                                        className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold
                                            ${openIndex === index ? "text-white" : "text-pink-400"}`}
                                        style={{
                                            backgroundColor: "#0D0D1F",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                    >
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Question & Answer Section */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-medium block">{faq.question}</span>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {openIndex === index ? (
                                                <Minus className="text-white" />
                                            ) : (
                                                <Plus className="text-pink-400" />
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Answer Section */}
                                    {openIndex === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-400 mt-2"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-16">
                <ContactUs />
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
