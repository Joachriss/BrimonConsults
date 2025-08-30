import { useParams, useSearchParams } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState, type Key } from "react";
import { ProjectCardNormal } from "../../components/cards/ProjectCardNormal";
import { FaAngleDoubleDown } from "react-icons/fa";
import { pageTitle } from "../../utils/pageTitle";
import { useProjects } from "../../hooks/useProjects";
import type { TProject } from "../../types";
import { ImageModal } from "../../components/dialogs/ImageDialog";

export const ProjectDetailsPage = ({ title }: { title: string }) => {
    pageTitle(title)
    const params = useParams();
    const [_,setParams] = useSearchParams();
    const { projects } = useProjects()

    const projectName = params.project;
    const project = projects?.results.find((p: TProject) => p.title.trim() === projectName?.trim());
    const isSliding = true;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setParams({limit: '20'});
        if (isSliding) {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % project?.images?.length);
            }, 5000);

            return () => clearInterval(slideInterval);
        }
    }, [isSliding, project]);

    // scroll
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }
    const onOpenImage = (image: string) => { setSelectedImage(image) }
    const onCloseImage = () => { setSelectedImage('') }
    return (
        <div className="w-full overflow-hidden">
            <section className="bg-white dark:bg-gray-900 relative w-full h-screen">
                <div className="relative w-full h-s">
                    {
                        Array.isArray(project?.images) &&
                        <div className={`h-screen w-full  transition-transform duration-1000`} >
                            {project?.images.map((image: string, index: Key) => (
                                <img src={image}  className={`w-full z-10 absolute h-screen object-cover transition-transform duration-1000 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full '} `} key={index} alt="" />
                            ))}

                        </div>
                    }
                </div>
                <div className="absolute z-20 h-screen inset-0 top-0 bg-black/50  w-full ">
                    <div className="lg:col-span-5 h-screen max-w-screen-xl grid px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 ">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ opacity: 0, y: "50%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="max-w-2xl mb-4 text-center md:text-start text-4xl font-bold leading-none tracking-tight md:text-5xl text-white xl:text-6xl dark:text-white">
                                    {project?.title}
                                </motion.h1>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.5 }}
                                className="h-5 w-full bg-[#d94a68]"
                            ></motion.div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <FaAngleDoubleDown onClick={scrollDown} size={90} className=" cursor-pointer ms-auto animate-bounce mt-[80%] text-[#d94766]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* details */}
            <section className="bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md">
                        <h2 className="mb-4 md:text-5xl text-3xl tracking-tight text-[#194062] dark:text-white">Project Details</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">{project?.title}</p>
                        <hr className="w-1/2 mt-7 border-4 border-[#d94a68]" />
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(project?.images) && project?.images.map((image: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="group duration-300"
                                onClick={() => { onOpenImage(image) }}
                            >
                                <img src={image} alt={project?.title} className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" />
                            </motion.div>
                        ))}
                        <ImageModal isOpen={selectedImage !== ''} onClose={() => onCloseImage()} image={selectedImage} />
                    </div>
                </div>

                {/* More projects */}
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                    <h2 className="mb-4 text-5xl tracking-tight text-[#194062] dark:text-white py-8">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            projects?.results.slice(0, 3).filter((p: TProject) => p.id !== project?.id).map((project: TProject, index: Key) => (
                                <ProjectCardNormal key={index} index={index} project={project} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
