import { useState } from "react";
import type { IFaq } from "../../../../types";
import { useFaqs } from "../../../../hooks/useFaqs";
import { LuLoader } from "react-icons/lu";
import { MdSearchOff } from "react-icons/md";

export const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { faqs, isLoading } = useFaqs()

  const toggleAccordion = (index: number) => {
    setCurrentIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto" id="accordion-flush">
      {
        isLoading ?
          <div className="col-span-full flex items-center justify-center h-full w-full">
            <LuLoader className="w-14 h-14 text-[#d94766] duration-300 animate-spin" />
          </div>
          : faqs?.length > 0 ?
            faqs?.map((item: IFaq, index: any) => {
              const isOpen = currentIndex === index;

              return (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-5 text-left font-extrabold text-gray-900 bg-white dark:bg-gray-900 dark:text-white"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen py-4" : "max-h-0"} `}
                    aria-labelledby={`faq-header-${index}`}
                  >
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              );
            }) :
            <div className="col-span-full flex flex-col items-center justify-center font-bold text-gray-400 text-2xl text-center h-full w-full">
              <MdSearchOff className="w-14 h-14" /><br />
              <p>No FAQs found.</p>
            </div>
      }
    </div>
  );
};
