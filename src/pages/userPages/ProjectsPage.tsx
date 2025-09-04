import { motion } from "motion/react";
import { PageHeader } from "../../components/PageHeader";
import { ProjectCardNormal } from "../../components/cards/ProjectCardNormal";
import { useProjects } from "../../hooks/useProjects";
import { pageTitle } from "../../utils/pageTitle";
import type { TProject } from "../../types";
import { MdSearchOff } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { all } from "../../data/projects.json";

// Icons
import { FaIndustry, FaRoad, FaHospital, FaUniversity, FaHotel, FaHome, FaChurch } from "react-icons/fa";
import { GiOilDrum, GiMining } from "react-icons/gi";
import { MdOutlineBusinessCenter, MdOutlineDesignServices } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

export const ProjectsPage = ({ title }: { title: string }) => {
    pageTitle(title);

    const { projects, isLoading } = useProjects();
    const [params, setParams] = useSearchParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        setParams({ limit: "20" });
    }, []);

    const projectList = projects?.results || [];
    const currentPage = projects?.page || 1;
    const totalPages = projects?.totalPages || 1;

    const handleNext = () => {
        if (projects?.hasNext)
            setParams({ page: String(projects.next.page), limit: params.get("limit") || "6" });
    };

    const handlePrev = () => {
        if (projects?.hasPrev)
            setParams({ page: String(projects.previous.page), limit: params.get("limit") || "6" });
    };

    const projectNames = projectList?.map((project: TProject) => project.title);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full">
            <PageHeader
                pageName="Our Portfolio"
                recall="Explore Our Projects"
                services={projectNames.length > 0 ? projectNames : ["Our projects", "Creativity"]}
                image="bg-[url('/projects100/Residential-Apartments-Mbezi-Beach-Dar/image2.webp')]"
            />

            {/* Expertise Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-screen-xl mx-auto px-4 py-12"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Our Expertise
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    At Brimon Consults Limited, we deliver projects across diverse sectors,
                    spanning large-scale industrial and energy developments to residential and fit-out works:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <GiOilDrum />, text: "Oil & Gas Projects – advisory, project management, and technical support" },
                        { icon: <GiMining />, text: "Mining Projects – infrastructure and operational oversight" },
                        { icon: <FaIndustry />, text: "Industrial & Warehouse Buildings – factories, warehouses, and heavy facilities" },
                        { icon: <FaRoad />, text: "Civil Engineering Projects – roads, bridges, and utilities" },
                        { icon: <FaHospital />, text: "Healthcare Infrastructure – hospitals, OPDs, and specialized clinics" },
                        { icon: <MdOutlineBusinessCenter />, text: "Commercial & Office Structures – corporate offices and retail complexes" },
                        { icon: <FaUniversity />, text: "Educational Facilities – schools and campuses" },
                        { icon: <FaHotel />, text: "Hotels & Recreational Facilities – luxury hotels and leisure spaces" },
                        { icon: <FaHome />, text: "Residential Developments – apartments, villas, and community housing" },
                        { icon: <BsBank2 />, text: "Banking & Financial Buildings – modern bank branches" },
                        { icon: <FaChurch />, text: "Religious Buildings – churches, mosques, and faith-based structures" },
                        { icon: <MdOutlineDesignServices />, text: "Fit-Out Works & Technical Advisory – turnkey interiors & consultancy" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex gap-4 items-start"
                        >
                            <div className="text-[#d94766] text-3xl flex-shrink-0">{item.icon}</div>
                            <p className="text-gray-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-8 text-sm text-gray-500 text-center">
                    <strong>Few Highlights of Projects Executed</strong> (Design and Supervision Scope)<br />
                    Note: Technical consultancy services are not reflected in this listing.
                </p>
            </motion.div>

            {/* Projects Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-screen-xl mx-auto px-4 py-8"
            >
                <div className="mb-4 text-start text-gray-600 font-semibold">
                    Here are some of our recent projects:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-80">
                    {isLoading ? (
                        <div className="col-span-full flex items-center justify-center h-full w-full">
                            <LuLoader className="w-14 h-14 text-[#d94766] animate-spin" />
                        </div>
                    ) : projectList?.length > 0 ? (
                        all.map((projectName: string, index: number) => {

                            const project = projectList.find((p: TProject) => p.title.trim() === projectName.trim());
                            return project ? (
                                <ProjectCardNormal key={index} index={index} project={project} />
                            ) : null
                        })
                        // projectList?.map((project: TProject, index: number) => (
                        //     <ProjectCardNormal key={index} index={index} project={project} />
                        // ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center font-bold text-gray-400 text-2xl text-center h-full w-full">
                            <MdSearchOff className="w-14 h-14" />
                            <p>No projects found.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-x-8 mt-8">
                    <button
                        onClick={handlePrev}
                        disabled={!projects?.hasPrev}
                        className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-semibold disabled:opacity-50 hover:bg-gray-400 transition duration-300"
                    >
                        Previous
                    </button>
                    <span className="text-gray-700 font-semibold flex items-center">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={!projects?.hasNext}
                        className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-semibold disabled:opacity-50 hover:bg-gray-400 transition duration-300"
                    >
                        Next
                    </button>
                </div>
            </motion.div>
        </section>
    );
};
