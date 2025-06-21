import { motion } from "motion/react"
import projects from "../data/projects.json"
import { PageHeader } from "../components/PageHeader";
import { ProjectCardNormal } from "../components/cards/ProjectCardNormal";

export const ProjectsPage = () => {
    const projectNames = projects.map(project => project.name).reduce((array: string[], name) => array.concat(name), []);
    return (
        <section className="w-full ">
            <PageHeader
                pageName="Our Portfolio"
                recall="Explore Our Projects"
                services={projectNames}
                image="bg-[url('/projects100/Residential-Apartments-Mbezi-Beach-Dar/image2.webp')]"
            />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-screen-xl mx-auto px-4 py-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 6).map((project, index) => (
                        <ProjectCardNormal key={index} project={project} />
                    ))}
                </div>
            </motion.div>
        </section >
    )
}
