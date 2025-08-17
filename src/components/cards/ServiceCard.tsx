import { useState } from 'react'
import ServicesDialog from '../dialogs/ServicesDialog'

export const ServiceCard = (props:  any) => {
    const { service, index } = props
  let [isServiceOpen, setIsServiceOpen] = useState(false)
    return (
        <div key={index} onClick={() => setIsServiceOpen(true)} className="bg-white cursor-pointer dark:bg-gray-900 group p-6 rounded-2xl shadow-md border-r-4 border-b-4 border-[#d94766]">
            <div className="w-10 bg-white aspect-square rounded-full -mt-[40px] ms-auto">
                <img src={`/icons/${service.image}.svg`} className="group-hover:rotate-y-180 duration-600 ease-in-out object-contain" alt={service.title} />
            </div>
            <h3 className="text-xl font-semibold text-[#194062] dark:text-purple-400">{service.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{service.description}</p>
            
            <ServicesDialog isServiceOpen={isServiceOpen} setIsServiceOpen={setIsServiceOpen} service={service} />
        </div>
    )
}
