import { useState } from "react";

export const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "Who are we?",
      answer: `
        <p class='mb-2 text-gray-500 dark:text-gray-400'>
          Brimon Consults Limited (BCL) is a construction consultancy firm with a dedicated team offering innovative project management solutions tailored to specific needs.
        </p>
        <p class='text-gray-500 dark:text-gray-400'>
          Check out this guide to 
          <a href='/company' class='text-[#194062] font-bold dark:text-purple-400 hover:underline'> learn more about us</a> and let's start working together.
        </p>
      `
    },
    {
      question: "What services do we offer?",
      answer: `
        <p class='text-gray-500 dark:text-gray-400'>
          We offer a wide range of construction services, including land acquisition, project management, and construction management.
        </p>
        <p>
          <a href='/company' class='text-[#194062] font-bold dark:text-purple-400 hover:underline'> Learn more about our services</a>.
        </p>
      `
    }
  ];

  const toggleAccordion = (index: number) => {
    setCurrentIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto" id="accordion-flush">
      {faq.map((item, index) => {
        const isOpen = currentIndex === index;

        return (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-900 dark:text-white"
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
      })}
    </div>
  );
};
