import { useState } from "react";

const faqs = [
  {
    question: "What is Morpheus8?",
    answer:
      "Morpheus8 is a minimally invasive procedure that tightens the deeper layers of the skin, reduces wrinkles, and improves skin texture. It stimulates collagen production, giving a rejuvenated appearance.",
  },
  { question: "How does Morpheus8 work?",  answer:
    "Morpheus8 is a minimally invasive procedure that tightens the deeper layers of the skin, reduces wrinkles, and improves skin texture. It stimulates collagen production, giving a rejuvenated appearance.",},
  { question: "Which areas are suitable for Morpheus8?",  answer:
    "Morpheus8 is a minimally invasive procedure that tightens the deeper layers of the skin, reduces wrinkles, and improves skin texture. It stimulates collagen production, giving a rejuvenated appearance.",},
  { question: "Is Morpheus8 painful?",  answer:
    "Morpheus8 is a minimally invasive procedure that tightens the deeper layers of the skin, reduces wrinkles, and improves skin texture. It stimulates collagen production, giving a rejuvenated appearance.", },
  { question: "How long is the recovery time after Morpheus8?",  answer:
    "Morpheus8 is a minimally invasive procedure that tightens the deeper layers of the skin, reduces wrinkles, and improves skin texture. It stimulates collagen production, giving a rejuvenated appearance.", },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#dfdcd4] p-4  mx-auto min-h-[100vh] justify-center items-center flex flex-col my-10">

   
    <div className=" container ">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Questions & answers about Morpheus8
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className=" text-left w-full py-4 flex justify-between items-center hover:text-[#888789] transition-all duration-500 text-lg font-medium text-gray-800"
            >
              {index + 1}. {faq.question}
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? "max-h-[1000px] pb-4" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <p className="text-[#5b4b3c]">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div> </div>
  );
}
