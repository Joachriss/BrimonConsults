import { motion } from 'motion/react'
import { Link } from 'react-router'

export const ProjectCardNormal = (props:any) => {
    const {project,index} = props;
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="group duration-300"
        >
            <Link to={`/projects/${project.name}`} rel="noopener noreferrer">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl easy-in-out transition-shadow duration-300">
                    <img src={`/${project.path}/${project.image[0]}`} alt={project.name} className="w-full ease-in-out duration-300 h-48 object-cover group-hover:scale-105" />
                    <div className="py-4">
                        <hr className='w-3/4 group-hover:w-full duration-300 my-1 border-4 border-[#d94766]'/>
                        <h3 className=" px-4 text-xl font-semibold text-[#194062]">{project.name}</h3>
                        <p className="px-4 text-gray-600 mt-2">{project.description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
