import { useState } from "react";

export const Faq = () => {
    const [isVisible, setIsVisible] = useState(false);

    const faq = [
        {
            question: "Who are we?", answer: "<p className='mb-2 text-gray-500 dark:text-gray-400'>Landwind is an open-source library of Brimon Consults Limited(BCL) is a construction consultancy firm with a dedicated team offering innovative project management solutions tailored to specific needs.Our diverse expertise spans Industrial work and mining urban development, transportation, infrastructure, water, renewable energy, and environmental initiatives.We prioritize collaboration and continuous learning, assembling seasoned professionals to navigate project complexities and deliver successful outcomes</p ><p className='text-gray-500 dark:text-gray-400'>Check out this guide to <Link to='company' className='text-[#194062] font-bold dark:text-purple-400 hover:underline'>learn More about us </Link> and Let's start working together.</p>"
        },
        {
            question: "What services do we offer?", answer: "We offer a wide range of construction services, including land acquisition, project management, and construction management, ensuring efficient project execution and maximizing value for our clients. <p><Link to='company' className='text-[#194062] font-bold dark:text-purple-400 hover:underline'>learn More about our services </Link> and Let's start working together.<p/>"
        }
    ]
    return (
        <div id="accordion-flush" data-accordion="collapse" data-active-classnamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classnamees="text-gray-500 dark:text-gray-400">
            {
                faq.map((faq, index) => (
                    // <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    <div key={index}>
                        <h3 id="accordion-flush-heading-1">
                            <button type="button" onClick={() => setIsVisible(!isVisible)} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                <span>{faq.question}</span>
                                <svg data-accordion-icon="" className={`w-6 duration-300 ease-in-out transform h-6 ${isVisible ? 'rotate-180' : 'rotate-0'} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-1" className={`overflow-hidden transform  ${isVisible ? '-h-full' : 'h-0'}`} aria-labelledby="accordion-flush-heading-1">
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} className={`py-5 border-b border-gray-200 dark:border-gray-700`}>
                                
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
