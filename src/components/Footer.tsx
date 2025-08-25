import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPostcardFill } from "react-icons/bs";
import { Link } from "react-router";
import logo from "/logo/Logo-dark.png";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#194062] to-[#d94766] text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">

                    {/* Logo & About */}
                    <div>
                        <img src={logo} alt="Brimon Logo" className="w-28 mb-4" />
                        <p className="text-sm opacity-80">
                            Brimon Consults — delivering excellence in construction & project management with integrity, innovation, and sustainability.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/company" className="hover:text-white">About</Link></li>
                            <li><Link to="/services" className="hover:text-white">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                            <li><Link to="/contacts" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/team" className="hover:text-white">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Contacts</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2"><FaPhoneAlt /> <a href="tel:+255760941503">+255 760 941 503</a></li>
                            <li className="flex items-center gap-2"><FaRegEnvelope /> <a href="mailto:info@brimonconsults.com">info@brimonconsults.com</a></li>
                            <li className="flex items-start gap-2"><MdLocationOn className="mt-1" /> Morocco Square Tower II, 10th Floor, Kinondoni, Dar es Salaam</li>
                            <li className="flex items-start gap-2"><BsPostcardFill className="mt-1" /> P.O Box 70646, Dar es Salaam, Tanzania</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1E2mHwUVvc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/brimonconsults?igsh=MWFqaXV3bjJ4d3U0Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/brimonconsults?s=21" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaXTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/brimon-consults/" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.youtube.com/channel/UCXzXygd-hN0P9z9fwJ5vMMA" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaYoutube />
                            </a>
                            <a href="https://www.tiktok.com/@brimon.consults" target="_blank" rel="noopener noreferrer"
                               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider + Bottom */}
                <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm opacity-80">
                    © {new Date().getFullYear()} Brimon Consults. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
