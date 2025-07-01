import { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router";
export const ProjectCard = ({  cols,project }: {  cols: number | undefined, project: any }) => {
    const images = project.image;
    const [currentIndex, setCurrentIndex] = useState(0);
    const isImageSlide = true; 
    useEffect(() => {
        if (isImageSlide) {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex)=> (prevIndex + 1) % images.length); 
            }, 5000);
            return () => clearInterval(slideInterval);
        }
    }, [isImageSlide, currentIndex]);

    return (
        <Link to={`/projects/${project.name}`} className={`col-span-${cols} h-56 overflow-hidden duration-200 group relative hover:scale-[101%]`}>
            {   Array.isArray(images) &&
                images.map((image,index) => (
                    <div className={`absolute inset-0 transition-transform  duration-500 w-full ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`} key={index}>
                        <img className="w-full h-full mb-4 rounded-lg object-cover" src={`${project.path}${image}`} alt="project image " />
                    </div>
                ))
            }
            <div className="absolute bottom-0 w-full bg-linear-to-t from-black to-transparent h-3/4 pt-22 flex  text-white p-3  flex-col">
                <h1 className="font-bold text-xs md:text-lg line-clamp-1 flex gap-x-1"><ImLocation2 size={20}/><div>{project.name}</div> </h1>
                <p className="text-sm font-light line-clamp-1 hidden group-hover:block"> {project.description}</p>
            </div>
        </Link>
    )
}
