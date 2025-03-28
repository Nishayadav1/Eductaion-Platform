import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is Lorem Ipsum?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { question: "Why do we use it?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { question: "Where can I get some?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  ];

  return (
    <div className="bg-[#F5F7FB] w-full py-20">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 px-4">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-8 left-0 bg-[#FF743B] text-white px-8 py-2 rounded-lg -rotate-6 shadow-md">
            <span className="font-semibold">Testimonial</span>
          </div>

          <h1 className="text-6xl font-extrabold text-gray-800 mb-6 mt-8">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="md:w-1/2 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" p-6 border-b-2 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{faq.question}</h2>
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </div>
              {openIndex === index && <p className="text-gray-700 mt-4">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;