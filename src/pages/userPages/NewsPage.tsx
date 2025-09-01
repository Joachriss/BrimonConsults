import { motion } from "motion/react"
import { PageHeader } from "../../components/PageHeader"
import { useEffect } from "react"
import { pageTitle } from "../../utils/pageTitle"
import { MdOutlineArticle } from "react-icons/md"
import { FaRegNewspaper } from "react-icons/fa"
import { BiBroadcast } from "react-icons/bi"
import { HiOutlineLightBulb } from "react-icons/hi"
import { Link } from "react-router"

export const NewsPage = ({ title }: { title: string }) => {
    pageTitle(title)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const categories = [
        {
            icon: <MdOutlineArticle className="w-8 h-8 text-[#d94a68]" />,
            title: "Company Announcements",
            desc: "Updates on new initiatives, collaborations, and growth."
        },
        {
            icon: <FaRegNewspaper className="w-8 h-8 text-[#d94a68]" />,
            title: "Project Milestones",
            desc: "Highlights from our ongoing and completed projects."
        },
        {
            icon: <HiOutlineLightBulb className="w-8 h-8 text-[#d94a68]" />,
            title: "Industry Insights",
            desc: "Perspectives on trends shaping our industry."
        },
        {
            icon: <BiBroadcast className="w-8 h-8 text-[#d94a68]" />,
            title: "Media Coverage",
            desc: "Features, articles, and press releases."
        }
    ]

    return (
        <section className="w-full">
            {/* Hero/Header */}
            <PageHeader
                recall="News and press updates"
                services={["News", "Press"]}
                pageName="News & Press"
                image="bg-[url('/projects100/Iyumbu/image3.webp')]"
            />

            {/* Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="md:text-5xl text-3xl font-bold text-[#194062] dark:text-white mb-4">
                        News & <span className="text-[#d94a68]">Press</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Stay informed with the latest updates, insights, and stories from Brimon Consults Limited.  
                        Welcome to our official hub for company announcements, project milestones, industry insights, and media features.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {categories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-[#194062] dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* No updates yet */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Currently, there are no updates published. Please check back soon for stories and reports as they become available.
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        For media or press-related inquiries, please reach out through our{" "}
                        <Link to="/contacts" className="text-[#d94a68] font-semibold hover:underline">
                            Contact page
                        </Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}
