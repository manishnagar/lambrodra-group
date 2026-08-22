import React, { useState, useEffect } from "react";
import FAQImg from '../assets/images/faqimg.png';

const faqs = [
    {
        question: "Do you provide customized technology solutions?",
        answer: "Yes. All solutions are tailored to match specific business requirements, operational needs, and growth objectives.",
    },
    {
        question: "What kind of post-deployment support do you offer?",
        answer: "We provide ongoing technical support, system maintenance, updates, and performance monitoring after deployment.",
    },
    {
        question: "Are your solutions scalable for growing businesses?",
        answer: "Yes. Our solutions are designed to scale easily as business operations expand and requirements evolve.",
    },
    {
        question: "How do you ensure data security and system reliability?",
        answer: "We follow industry-standard security practices, reliable infrastructure design, and continuous monitoring to protect systems and data.",
    },
    {
        question: "What industries does Lambodra Group serve?",
        answer: "We serve multiple industries including logistics, manufacturing, retail, healthcare, education, finance, and service-based businesses."
    }

];

function FaqSection() {


    const [openIndexes, setOpenIndexes] = useState([0]);

    const toggleFaq = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // close if already open
                : [...prev, index]                // open if closed
        );
    };


    return (
        <section className="w-full py-4 md:py-6">
            <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">

                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
                <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold px-2
    bg-gradient-to-r from-orange-800 via-orange-800 to-orange-400
    bg-clip-text text-transparent text-center"> Frequently Asked Questions </h2>
                <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-0 md:px-10 items-center">
                {/* Left: Image Area */}
                <div className="space-y-4">
                    <div className="card--snap
  overflow-hidden
  transition-transform
  duration-[160ms]
  ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:scale-[1.08]
  focus-within:scale-[1.08]
  active:scale-[1.08] rounded-xl">
                        <img
                            src={FAQImg}
                            alt="faq questions"
                            className="w-full h-64 md:h-80 object-cover cursor-pointer"
                        />
                    </div>
                </div>

                {/* Right: FAQ Section */}
                <div>




                    <div className="max-w-2xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border rounded-lg shadow-sm overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center px-4 py-3 bg-orange-50 hover:bg-orange-100 transition"
                                >
                                    <span className="text-sm md:text-sm font-semibold text-gray-800">
                                        <span className="text-orange-600 font-bold mr-2">{`Q${i + 1}.`}</span>
                                        {faq.question}
                                    </span>
                                    <span className="text-orange-600 font-bold">
                                        {openIndexes.includes(i) ? "-" : "+"}
                                    </span>
                                </button>

                                {/* Answer */}
                                {openIndexes.includes(i) && (
                                    <div className="px-4 py-3 text-gray-600 text-sm md:text-sm bg-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
