"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        "question": "What are the common symptoms of skin cancer?",
        "answer": "Common symptoms include new or changing moles, unusual skin growths, sores that don't heal, and spots that are itchy, bleeding, or painful."
    },
    {
        "question": "How is skin cancer diagnosed?",
        "answer": "Doctors examine the skin and may perform a biopsy to test suspicious spots for cancerous cells."
    },
    {
        "question": "Can skin cancer be prevented?",
        "answer": "Yes, using sunscreen, wearing protective clothing, avoiding tanning beds, and limiting sun exposure can help prevent skin cancer."
    }
]
    ;

const SkinCancerPage = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-[#0D0D1F] text-white min-h-screen p-6 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What is Skin Cancer?
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Skin cancer is the abnormal growth of skin cells, often due to UV exposure.</li>
                        <li>It is the most common type of cancer but is highly treatable if detected early.</li>
                        <li>There are different types, including basal cell carcinoma, squamous cell carcinoma, and melanoma.</li>
                        <li>Common symptoms include new or changing moles, sores that don't heal, and unusual skin growths.</li>
                        <li>Prevention includes using sunscreen, wearing protective clothing, and avoiding excessive sun exposure.</li>
                    </ul>

                    {/* Frequently Asked Questions */}
                    <section className="mt-6">
                        <h3 className="text-2xl font-semibold mb-4">
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1d1e35] p-4 rounded-lg cursor-pointer flex items-start hover:bg-[#23244b] transition"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {/* Question Number */}
                                    <div className="relative flex items-center mr-4">
                                        <span
                                            className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold ${openIndex === index ? "text-white" : "text-pink-400"
                                                }`}
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
                                            <span className="text-lg font-medium">{faq.question}</span>
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
                    </section>
                </div>

                {/* Right Section - Images */}
                <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
                    <div className="text-center">
                        <h3 className="text-4xl font-semibold mb-2">Normal Skin</h3>
                        <img
                            src="/diseaseImg/normalSkin.jpeg"
                            alt="Normal Skin"
                            className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-lg shadow-md"
                        />
                    </div>

                    <div className="text-center mt-4">
                        <h3 className="text-4xl font-semibold mb-2">Cancer Skin</h3>
                        <img
                            src="/diseaseImg/cancerSkin.jpg"
                            alt="Cancer Skin"
                            className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkinCancerPage;
