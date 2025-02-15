"use client";
import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const ToggleFaq = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the FAQ if it's already open
        } else {
            setActiveIndex(index); // Open the clicked FAQ
        }
    };

    // ✅ FAQ Data (Added here directly)
    const faqData = [
        {
            question: "What is Hijama therapy?",
            answer: "Hijama therapy, also known as cupping therapy, is an ancient practice that involves placing cups on the skin to create suction and improve circulation."
        },
        {
            question: "Is Hijama safe?",
            answer: "Yes, when performed by a trained professional, Hijama is safe and has many health benefits including detoxification and pain relief."
        },
        {
            question: "Does Hijama hurt?",
            answer: "The procedure is generally painless, though some individuals may feel mild discomfort due to the suction and small incisions."
        },
        {
            question: "How often should I get Hijama done?",
            answer: "The frequency depends on your health condition and goals. Some people do it monthly, while others opt for quarterly or annual sessions."
        },
        {
            question: "Who should avoid Hijama therapy?",
            answer: "Pregnant women, individuals with blood disorders, and those on certain medications should consult a healthcare professional before undergoing Hijama."
        }
    ];

    return (
        <div className="p-12 mt-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-customGreen">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <button
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                                onClick={() => ToggleFaq(index)}
                            >
                                <h3 className="text-xl font-semibold text-customGreen">{faq.question}</h3>
                                <span className="ml-4 text-customGreen">
                                    {activeIndex === index ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-4 text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
