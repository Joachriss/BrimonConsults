import  { motion } from 'motion/react'
import  { ReactTyped } from 'react-typed'

export const PageHeader = (props:any) => {
    const {pageName,services,recall,image} = props;
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`w-full mb-10 min-h-[50vh] flex flex-col py-8 md:py-16 justify-center items-start ${image} bg-cover bg-center`}
        >
            <div className="px-4 pt-7 pb-3 text-2xl md:px-8 text-white font-bold">{recall}</div>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 1.2 }}
                className="text-white p-4  md:p-8 overflow-hidden bg-[#d94a68] rounded-tr-full rounded-br-full"
            >
                <motion.h1
                    initial={{ y:"-140%" }}
                    animate={{ y:0 }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                    className="text-center text-white font-bold text-5xl md:text-7xl"
                >
                    {pageName}
                </motion.h1>


            </motion.div>
            <div className="mt-4 w-full t px-2 md:ps-8">
                <ReactTyped
                    strings={services}
                    typeSpeed={20}
                    backSpeed={40}
                    loop startDelay={1500}
                    className="text-white text-extrabold  md:text-xl w-full mt-2"
                >
                    <input type="text" className="w-full" />
                </ReactTyped>
            </div>
        </motion.div >
    )
}
