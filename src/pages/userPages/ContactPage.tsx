import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaYoutube } from "react-icons/fa";
import { BookingForm } from "../../components/forms/BookingForm";
import { motion } from "motion/react";
import { BsPostcardFill } from "react-icons/bs";
import { pageTitle } from "../../utils/pageTitle";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";

export const ContactPage = ({ title }: { title: string }) => {
    pageTitle(title);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <motion.div className="container md:mt-10 mx-auto py-10 px-4"
            initial={{ opacity: 0, translateY: -50 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, type: 'ease-in-out' }}
        >
            <h3 className="text-3xl font-semibold text-gray-800 text-center ">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-pink-100 text-lg shadow-lg p-6 rounded-lg flex flex-col gap-y-2">
                    <h4 className="text-2xl font-medium">Get In Touch</h4>
                    <p className="text-gray-700 mt-2">We'd love to hear from you!</p>
                    <div className="mt-4 text-gray-700 space-y-4">
                        <a href="tel:255760941503" className="flex hover:font-extrabold duration-200 flex-row items-center gap-4">
                            <div><FaPhoneAlt size={20} /></div>
                            <div>
                                <strong>Phone:</strong> +255 760 941 503
                            </div>
                        </a>
                        <a href="mailto:info@brimonconsults.com" className="flex hover:font-extrabold duration-200 flex-row items-center gap-4">
                            <div><FaEnvelope size={20} /></div>
                            <div>
                                <strong>Email:</strong> info@brimonconsults.com
                            </div>
                        </a>
                        {/* <div className="flex flex-row items-center gap-4"><div><FaPhone size={20} /></div> <div><strong>Phone:</strong> +123 456 7890</div></div> */}
                        <div className="flex flex-row items-center gap-4">
                            <div><FaMapMarkerAlt size={20} /></div>
                            <a href="https://maps.app.goo.gl/guRv8SuoTwSsh6GF6" target="_blank" className="hover:font-extrabold duration-200">
                                <strong>Location:</strong>Morocco Square - Tower II
                                (Exchange Tower)- 10th Floor
                                Kinondoni , Dar es salaam, Tanzania
                            </a>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div><BsPostcardFill size={20} /></div>
                            <div>
                                <strong>Address:</strong>P.O Box 70646
                                Dar es salaam,
                                Tanzania
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-10 border-t pt-4">
                            <a href="https://www.facebook.com/share/1E2mHwUVvc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/brimonconsults?igsh=MWFqaXV3bjJ4d3U0Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/brimonconsults?s=21" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaXTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/brimon-consults/" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.youtube.com/channel/UCXzXygd-hN0P9z9fwJ5vMMA" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaYoutube />
                            </a>
                            <a href="https://www.tiktok.com/@brimon.consults" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-pink-600/20 transition">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>
                <BookingForm />
            </div>
            <div className="my-10">
                <iframe className="w-full h-64 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.942990254!2d39.260587908232736!3d-6.776793593191846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d0049860211%3A0x5f0f3b992212d915!2sBrimon%20Consults%20Limited!5e0!3m2!1sen!2stz!4v1750599981681!5m2!1sen!2stz" loading="lazy"></iframe>
            </div>

            {/* Join our team */}
            <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8">
                <h1 className="md:text-5xl text-3xl text-[#194062] dark:text-white mb-4">JOIN OUR <span className="text-[#d94a68]">DREAMTEAM</span></h1>
                <motion.p
                    initial={{ x: -1300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-lg md:px-2 text-gray-600 dark:text-gray-400"
                >
                    Get a chance to join the Dream Team and experience
                    an exciting opportunity to collaborate with industry
                    veterans, each bringing unique expertise and a shared
                    passion for excellence. Together, we’ll drive innovation,
                    tackle challenges, and make significant contributions
                    to our field and beyond.
                </motion.p>
                <div className="md:text-2xl font-bold text-lg md:px-2 text-center">
                    <h4 className="text-[#194062] dark:text-white mt-4">Send your CV to us at</h4>
                    <h3 className="text-[#194062] dark:text-white mb-4">Email: <a href="mailto:careers@brimonconsults.com" className="text-[#d94a68]">careers@brimonconsults.com</a></h3>

                </div>
            </div>
        </motion.div>
    );
};
