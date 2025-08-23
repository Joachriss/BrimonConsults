import { motion } from 'motion/react'
import { PageHeader } from '../../components/PageHeader'
import { IoTelescopeOutline } from 'react-icons/io5'
import { FaFileDownload, FaRegPaperPlane } from 'react-icons/fa'
import { LuHeartHandshake } from 'react-icons/lu'
import { GrCertificate } from 'react-icons/gr'
import { pageTitle } from '../../utils/pageTitle'
import { useEffect, useState } from 'react'
import policies from "../../data/policies.json"
import values from "../../data/values.json"
import { PolicyModal } from '../../components/dialogs/PolicyDialog'
import { ImageModal } from '../../components/dialogs/ImageDialog'
import ServicesDialog from '../../components/dialogs/ServicesDialog'
// import {Helmet} from "react-helmet";

export const CompanyPage = ({ title }: { title: string }) => {
  pageTitle(title)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const certificates = [
    { name: "Cert_Incorporation", image: "/certificates/01_Cert_Incorporation.jpg" },
    { name: "ARC_CONSULTANCY_BL", image: "/certificates/02_ARC_CONSULTANCY_BL.jpg" },
    { name: "QS_CONSULTANCY_BL", image: "/certificates/03_QS_CONSULTANCY_BL.jpg" },
    { name: "Certificate-ARC", image: "/certificates/04_Certificate-ARC.jpg" },
    { name: "Certificate-QS", image: "/certificates/05_Certificate-QS.jpg" },
    { name: "TIN-BRIMON", image: "/certificates/06_TIN-BRIMON.jpg" },
    { name: "VAT_Certificate", image: "/certificates/07_VAT_Certificate.jpg" },
    { name: "OSHA_Certificate", image: "/certificates/08_OSHA_Certificate.jpg" },
    { name: "NSSF_Certificate", image: "/certificates/09_NSSF_Certificate.jpg" },
    { name: "WCF-Brimon", image: "/certificates/10_WCF-Brimon.jpg" },
    { name: "Practising_Certificate_Arc", image: "/certificates/12_Practising_Certificate_Arc.jpg" },
    { name: "Practising_Certificate_QS", image: "/certificates/13_Practising_Certificate_QS.jpg" },
  ]

  const [selectedPolicy, setSelectedPolicy] = useState<any>();
  const [selectedValue, setSelectedValue] = useState<any>();
  const [isValueOpen, setIsValueOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>();

  const openModal = (policy: any) => { setSelectedPolicy(policy) };
  const openModalImage = (image: any) => { setSelectedImage(image) };
  const closeModal = () => { setSelectedPolicy(null); setSelectedImage(null) };
  const handleValueClick = (value: any) => { setSelectedValue(value); setIsValueOpen(true) };
  return (
    <section className="w-full relative bg-white dark:bg-gray-900 py-16">
      <PageHeader pageName="Who We Are" recall="Our company" download={true} services={["Our Vision", "Our Mission", "Our Values", "Our Policies", "Certifications & Licenses"]} image="bg-[url('/projects100/Iyumbu/image3.webp')]" />
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#194062] dark:text-white"
        >
          Get to Know <span className="text-[#d94a68]">Brimon Consults</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 text-lg"
        >
          Discover our journey, expertise, and vision for the future.
          Download our <span className="font-semibold text-[#d94a68]">Company Profile</span> now.
        </motion.p>

        {/* Glassmorphic Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/20 max-w-lg w-full"
        >
          <FaFileDownload className="mx-auto text-[#d94a68] text-6xl animate-bounce" />

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Download Our Company Profile
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            A detailed overview of our expertise, values, and commitment to sustainable development.
          </p>

          {/* Button */}
          <a
            href="/docs/Brimon_Consults_Company_Profile.pdf"
            download="Brimon_Consults_Company_Profile.pdf"
            className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-[#d94a68] text-white font-medium hover:bg-[#194062] transition"
          >
            <FaFileDownload className="mr-2" />
            Download PDF
          </a>
        </motion.div>
      </div>

      {/* who we are */}
      <div className="max-w-screen-xl mt-8 overflow-hidden mx-auto px-4 py-8 border-s-8 border-[#d94a68] dark:border-[#d94a68]">
        <h1 className="md:text-5xl text-3xl text-[#194062] dark:text-white mb-4">Who <span className="text-[#d94a68]">We Are</span></h1>
        <motion.p initial={{ x: -1300 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }} className="text-lg text-gray-600 dark:text-gray-400 mb-4" >
          Brimon Consults Limited (BCL)is a construction consultancy firm comprising a cohesive team of skilled professionals dedicated to tackling project challenges through innovative, construction-focused program and project management solutions. As consultants in project management, we customize teams, resources, and processes to suit your specific project needs, consistently delivering positive outcomes.
        </motion.p>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Our team includes advisors across various disciplines such as planning, design, engineering, contracts, consulting, and program and construction management, offering comprehensive services across urban development, transportation, infrastructure, water, renewable energy, and environmental initiatives. Throughout the project lifecycle, we work collaboratively with a shared goal of contributing to a better world.
        </motion.p>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          We take pride in assembling teams of seasoned professionals with substantial real-world experience in construction management. Our personnel are driven by a commitment to continuous learning, leadership, and problem-solving, striving for both personal and professional growth. We prioritize a thorough understanding of project complexities, leveraging diverse perspectives and knowledge sources to find tailored solutions.
        </motion.p>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Whether you're an owner, contractor, legal professional, or part of the construction industry, we're equipped to support you from project initiation to completion, ensuring success at every stage. Our approach involves actively listening to clients and the communities we serve, aiming to enhance lives, livelihoods, and create sustainable legacies for future generations.
        </motion.p>
        <motion.p
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Our culture is rooted in boundless thinking, recognizing that ideas are limitless and transcendent of borders. This philosophy underscores our commitment to offering our full range of expertise to anyone, regardless of location, who requires transformative solutions.
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
            <p>Our objective is to revolutionize project management, driving improvements in project outcomes, our own development, and the professional standards of our industry</p>
            Our core values encapsulate our identity, guiding our actions and aspirations:
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
                <div key={index} onClick={() => handleValueClick(value)} className="hover:scale-105 cursor-pointer duration-300 hover:border-b-4 border-[#d94a68] flex flex-col md:flex-row justify-center md:justify-start items-center gap-x-4 gap-y-2">
                  <img src={value.icon} alt={value.title} className="w-16 h-16 mb-2" />
                  <h1 className="text-xl text-center text-gray-600">{value.title}</h1>
                </div>
              ))
            }

            <ServicesDialog
              service={selectedValue}
              isServiceOpen={isValueOpen}
              setIsServiceOpen={setIsValueOpen}
            />
          </motion.div>



          {/* Our Policies */}
          <section className='text-justify'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-row w-gap-x-4 gap-y-2 mt-20 mb-5"
            >
              <GrCertificate size={50} className='text-[#d94a68]' />
              <h1 className="md:text-5xl text-3xl text-[#194062]">Our <span className='text-[#d94a68]'>Policies</span></h1>

            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {policies.map((policy, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
                  onClick={() => openModal(policy)}
                >
                  {/* Title */}
                  <h2 className="text-lg md:text-xl font-bold text-[#194062] dark:text-white mb-2">
                    {policy.title}
                  </h2>

                  {/* Short description + Read More */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto truncate">
                    {policy.description
                      ? policy.description.length > 10
                        ? `${policy.description.slice(0, 30)}... `
                        : policy.description
                      : "Description coming soon."}
                    {/* <br /> */}
                    <span className="text-[#d94a68] font-semibold ml-1 hover:underline">
                      Read more
                    </span>
                  </p>

                  {/* Decorative accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-1 bg-[#d94a68] rounded-tr-xl rounded-bl-xl opacity-50"></div>
                </motion.div>
              ))}

              {/* Modal */}
              <PolicyModal
                isOpen={selectedPolicy !== null}
                onClose={closeModal}
                policy={selectedPolicy}
              />
            </div>
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
              {/* <img src="/certificates2.png" alt="" /> */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {
                  certificates.map((certificate, index) => (
                    <div
                      key={index}
                      onClick={() => openModalImage(certificate)}
                      className="flex flex-col hover:scale-[103%] md:flex-row justify-center md:justify-start items-center gap-x-4 gap-y-2 border-4 rounded-lg"
                      style={{
                        borderImage: 'linear-gradient(to bottom right, #f43f5e, #194062) 1',
                        borderImageSlice: 1,
                      }}
                    >
                      <img src={certificate.image} alt={certificate.name} className=" mb-2" />
                    </div>
                  ))
                }

                <ImageModal
                  isOpen={selectedImage !== null}
                  onClose={closeModal}
                  image={selectedImage}
                />


              </div>
              <img src="/certificates.png" alt="" />
            </motion.div>
            <div className=" hidden p-8 grid-cols-2 mt-10 md:grid-cols-3 gap-4">
              {
                values.map((value, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-x-4 gap-y-2">
                    <img src={value.icon} alt={value.title} className="w-16 h-16 mb-2" />
                    <h1 className="text-xl text-center text-gray-600">{value.title}</h1>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
      </section>
    </section >
  )
}
