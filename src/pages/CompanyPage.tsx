import { motion } from 'motion/react'
import { PageHeader } from '../components/PageHeader'
import { IoTelescopeOutline } from 'react-icons/io5'
import { FaRegPaperPlane } from 'react-icons/fa'
import { LuHeartHandshake } from 'react-icons/lu'
import { GrCertificate } from 'react-icons/gr'

export const CompanyPage = () => {
  const values = [
    { value: "People First", icon: "/icons/values/people.svg" },
    { value: "Passion for Learning", icon: "/icons/values/passion.svg" },
    { value: "Ensure & Preserve Safety", icon: "/icons/values/safety.svg" },
    { value: "Shared Success", icon: "/icons/values/success.svg" },
    { value: "Modernize", icon: "/icons/values/modernize.svg" },
    { value: "Sustain/Maintain", icon: "/icons/values/sustain.svg" },
    { value: "Ethics & Integrity", icon: "/icons/values/ethics.svg" },
    { value: "Team up (Collaborate)", icon: "/icons/values/team.svg" },
    { value: "Thrive", icon: "/icons/values/thrive.svg" },
    { value: "Aiming High", icon: "/icons/values/aiming.svg" },
    { value: "Deliver", icon: "/icons/values/deliver.svg" }
  ]
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <PageHeader pageName="Who We Are" recall="Our company" services={["Our Vision", "Our Mission", "Our Values", "Certifications & Licenses"]} image="bg-[url('/projects100/Proposed-Presidential-Library/image2.webp')]" />
      <div className="max-w-full overflow-hidden mx-auto px-4 py-8 border-s-8 border-[#d94a68] dark:border-[#d94a68]">
        <h1 className="md:text-5xl text-3xl text-[#194062] dark:text-white mb-4">Who <span className="text-[#d94a68]">We Are</span></h1>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Brimon Consults Limited (BCL) is a construction consultancy firm with a dedicated team
          offering innovative project management solutions tailored to specific needs. Our diverse
          expertise spans industrial work, mining, urban development, transportation, infrastructure,
          water, renewable energy, and environmental initiatives. We prioritize collaboration and continuous
          learning, assembling seasoned professionals to navigate project complexities and deliver successful outcomes.
        </motion.p>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          From project initiation to completion, we support clients across the construction industry with a focus on enhancing lives and creating sustainable legacies.
          Our culture embraces boundless thinking, extending our expertise globally to provide transformative solutions.
        </motion.p>
      </div>

      {/* Vision and Mission */}
      <div className="w-full my-5 bg-[url('/construction.webp')] dark:bg-[#d94a68] bg-cover bg-center bg-fixed">
        <div className="w-full h-fit bg-black/70 justify-center grid grid-cols-1 items-center md:grid-cols-2 gap-y-8 md:gap-x-4 overflow-hidden mx-auto px-4 md:px-42 py-18 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row gap-x-4 gap-y-2">
              <IoTelescopeOutline size={45} className='text-[#d94a68]' />
              <h1 className="text-4xl  text-white">Our Vision</h1>
            </div>
            <p className='text-lg text-white'>
              Guiding construction and project management
              with precision, efficiency, and sustainability. Our
              commitment to excellence, innovation, and client-
              focused solutions drives us to achieve industry-
              leading results for a brighter future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row gap-x-4 gap-y-2">
              <FaRegPaperPlane size={45} className='text-[#d94a68]' />
              <h1 className="text-4xl  text-white">Our Mission</h1>
            </div>
            <p className='text-lg text-white'>
              Deliver comprehensive construction and project
              management consultancy with excellence,
              integrity, and innovation. Empower clients
              through strategic collaboration, expert guidance,
              and superior quality assurance
            </p>
          </motion.div>
        </div>
      </div>

      <section className='w-full'>
        <div className="max-w-screen-xl mx-auto px-4 py-8">

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-x-4 gap-y-2"
          >
            <LuHeartHandshake size={50} className='text-[#d94a68]' />
            <h1 className="md:text-5xl text-4xl text-[#194062]">Our <span className='text-[#d94a68]'>Values</span></h1>
          </motion.div>
          <p className='text-xl text-center px-10 text-gray-600 dark:text-gray-400 mt-4'>
            We believe in a culture of excellence, collaboration, and continuous learning.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="grid p-8 grid-cols-2 mt-10 md:grid-cols-3 gap-4"
          >
            {
              values.map((value, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-x-4 gap-y-2">
                  <img src={value.icon} alt={value.value} className="w-16 h-16 mb-2" />
                  <h1 className="text-xl text-center text-gray-600">{value.value}</h1>
                </div>
              ))
            }
          </motion.div>

          {/* Our Policies */}
          <section className='text-justify'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-row w-gap-x-4 gap-y-2 mt-20"
            >
              <GrCertificate size={50} className='text-[#d94a68]' />
              <h1 className="md:text-5xl text-3xl text-[#194062]">Our <span className='text-[#d94a68]'>Policies</span></h1>

            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base py-5 font-bold tracking-tight text-[#194062] dark:text-white sm:text-2xl"
            >
              BCL HUMAN RIGHT POLICY
            </motion.h2>
            <h1 className='text-lg my-2 font-bold text-start px-2 md:ps-10 text-[#194062] dark:text-white'>Towards Employees:</h1>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              Brimon Consults Limited (BCL) shall always respect the character and individuality of everyone in the workplace, in all their diversity, and strive to develop and grow together.
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL shall never engage in or tolerate discrimination on any basis including, but not limited to, race, color, gender, age, language, property, nationality or national origin, religion, ethnic or social origin, political or other opinion, disability, health status and sexual orientation, nor do we engage in or tolerate moral harassment, including sexual harassment and abuse of power.
            </p>

            <h1 className='text-lg my-2 font-bold text-start px-2 md:ps-10 text-[#194062] dark:text-white'>Toward Service Partners:</h1>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL shall always respect all our service partners who share our aims and work together with them toward sustained growth.
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL shall always maintain equitable relationships with our service partners, and do not apply coercive pressure.
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL shall share our stance regarding fulfillment of social responsibility, including respect for human rights, compliance with laws and protection of the environment, with our business partners and advocate standard practice
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL shall cooperate with our service partners in working to enhance the value of the service that we endure to provide.
            </p>


            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base py-5 font-bold tracking-tight text-[#194062] dark:text-white sm:text-2xl"
            >
              BCL HEALTH, SAFETY, SECURITY, ENVIRONMENT & SOCIAL POLICY
            </motion.h2>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              Brimon Consults Limited (BCL) is a registered architectural, quantity surveying and project management consultancy firm comprising a cohesive team of skilled professionals dedicated to tackling project challenges through innovative, construction-focused program and project management solutions. As consultants in project management, we customize teams, resources, and processes to suit your specific project needs, consistently delivering positive outcomes
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL recognizes that the health, safety and welfare of employees, clients, external stakeholders, and the wider community, who may be affected by its activities/opinion is of primary importance in the successful conduct of its services. It also recognizes its obligations to care for the environment through the prevention of pollution, promoting good environmental practices and providing scientifically balanced advice and opinion. As a minimum standard, BCL will meet the requirements of all national legal and environmental and safety standards.
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              The Organization strives to maintain best practice, seeking continual improvement and innovation within all the organizational activities, both in the office and in the field.
            </p>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              The Secretary General is responsible for policy implementation within the Organization.
            </p>
            <h1 className='text-lg my-2 font-bold text-start px-2 md:ps-10 text-[#194062] dark:text-white'>General Policy:</h1>
            <p className='text-xl text-start md:px-10 px-2 text-gray-600 dark:text-gray-400 mt-4'>
              BCL so far as is reasonably practicable provide:
            </p>

            <ul className='text-xl sm:ms-10 ms-3 spacing-y-2 list-disc text-start px-10 text-gray-600 dark:text-gray-400 mt-4'>
              <li>
                Adequate resources to ensure the proper provision for the implementation of the HS&E management systems and compliance with current legislation and guidance.
              </li>
              <li>
                Work equipment and systems of work, which are safe, and without risk to health.
              </li>
              <li>
                Arrangements for the safe use, handling, storage and transport of articles and substances for use at work and minimize the environmental impact of such processes.
              </li>
              <li>
                Employees with such information, instruction, training and supervision as is necessary to enable the employee to ensure their health and safety at work (both in the office and in the field) and the safety of others that may be affected by their acts, omissions or opinion.
              </li>
              <li>
                A working environment that is safe and without risks to health, with adequate means of access and egress, and adequate welfare arrangements. • Arrangements for effective employee consultation/induction regarding health, safety and environmental matters.
              </li>
              <li>
                Monitoring procedures to maintain agreed standards and ensure that steps are taken to reduce the likelihood of days lost from work related injury and ill health.
              </li>
              <li>
                Access to adequate competent advice on Health, Safety and Environmental matters to assist in applying the provisions of health, safety, and environmental law.
              </li>
              <li>
                Information, advice, facilities, and products to promote the economic minimization of energy use, waste produced, fuel usage and water consumption.
              </li>
            </ul>
          </section>

          {/* Our Certifications & Licenses */}
          <section className='overflow-hidden'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-row gap-x-4 gap-y-2 mt-20"
            >
              <GrCertificate size={50} className='text-[#d94a68]' />
              <h1 className="md:text-5xl text-3xl text-[#194062]">Our <span className='text-[#d94a68]'>Certifications & Licenses</span></h1>

            </motion.div>
            <p className='text-xl text-start md:text-center px-10 text-gray-600 dark:text-gray-400 mt-4'>
              We are proud to hold the following certifications and licenses, which reflect our commitment to quality, safety, and excellence in the construction industry:
            </p>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid p-8 grid-cols-1 mt-10 items-center md:grid-cols-2 gap-4"
            >
              <img src="/certificates2.png" alt="" />
              <img src="/certificates.png" alt="" />
            </motion.div>
            <div className=" hidden p-8 grid-cols-2 mt-10 md:grid-cols-3 gap-4">
              {
                values.map((value, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-x-4 gap-y-2">
                    <img src={value.icon} alt={value.value} className="w-16 h-16 mb-2" />
                    <h1 className="text-xl text-center text-gray-600">{value.value}</h1>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}
