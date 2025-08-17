
import { motion } from "motion/react";
import services from "../../../../data/services.json";
import { ServiceCard } from "../../../../components/cards/ServiceCard";


export const ServicesSection = (props: any) => {
  const { showParagraph } = props;
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white"><span className="text-[#194a68]">Our services</span> </h2>
            {
              !showParagraph && (
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:px-20">
                  We offer quality driven services in architecture, quantity surveying, and project management delivering personalized solutions, optimizing budgets, integrating sustainability, and ensuring successful project outcomes.
                </p>
              )
            }
            {
              showParagraph && (
                <>
                <p className="mt-4 text-justify text-lg text-gray-600 dark:text-gray-300 md:px-20">
                  The operations of the company are focused on dynamic solutions to challenges facing project implementation on Architectural, Quantity Surveying and Project Management. We thus endeavor to offer solutions with highly personalized service. Our depth of technical and managerial experience provides clients with a high level of financial analysis and management advice they require to make investment and development decisions.
                </p>
                <ul className="mt-4 ms-4 list-disc list-inside text-gray-600 dark:text-gray-300 md:px-20 text-start">
                  {
                    services.map((service, index) => (
                      <li key={index} className="mt-2 text-lg">
                        <span className="font-semibold">{service.title}:</span> 
                      </li>
                    ))
                  }
                </ul>
                </>
              )
            }
          </div>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {
              Array.isArray(services) && services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
          </div>
        </div>
      </motion.section>

    </>
  )
}
