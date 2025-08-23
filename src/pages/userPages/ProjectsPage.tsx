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

export const ProjectsPage = ({ title }: { title: string }) => {
    pageTitle(title);

    const { projects, isLoading } = useProjects();
    const [params, setParams] = useSearchParams();
    useEffect(() => {
        window.scrollTo(0, 0)
        setParams({  limit: "6" });
    }, []);

    const projectList = projects?.results || [];

    const currentPage = projects?.page || 1;
    const totalPages = projects?.totalPages || 1;

    const handleNext = () => {
        if (projects?.hasNext) setParams({ page: String(projects.next.page), limit: params.get("limit") || "6" });
    };

    const handlePrev = () => {
        if (projects?.hasPrev) setParams({ page: String(projects.previous.page), limit: params.get("limit") || "6" });
    };

    const projectNames = projectList?.map((project: TProject) => project.title);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="w-full">
            <PageHeader
                pageName="Our Portfolio"
                recall="Explore Our Projects"
                services={projectNames.length > 0 ? projectNames : ["Our projects", "Creativity"]}
                image="bg-[url('/projects100/Residential-Apartments-Mbezi-Beach-Dar/image2.webp')]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-screen-xl mx-auto px-4 py-8"
            >
                {/* Total projects */}
                <div className="mb-4 text-right text-gray-600 font-semibold">
                    Projects Conducted: {projects?.total || 0}
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-80">
                    {isLoading ? (
                        <div className="col-span-full flex items-center justify-center h-full w-full">
                            <LuLoader className="w-14 h-14 text-[#d94766] animate-spin" />
                        </div>
                    ) : projectList?.length > 0 ? (
                        projectList?.map((project: TProject, index: number) => (
                            <ProjectCardNormal key={index} index={index} project={project} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center font-bold text-gray-400 text-2xl text-center h-full w-full">
                            <MdSearchOff className="w-14 h-14" />
                            <p>No projects found.</p>
                        </div>
                    )}
                </div>

                {/* Pagination buttons */}
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
