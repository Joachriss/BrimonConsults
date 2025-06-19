import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router';

export const Btn = ({ name, w,location }: {location:string, name: string, w: string }) => {
    // const { name,width } = props;
    return (
        <Link to={location} className={`text-white ${w} group flex gap-x-2 flex-row duration-300 ease-in-out items-center bg-[#d94a68] hover:bg-[#194062]  focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800`}>
            <div>{name}</div>
            <div className='group-hover:translate-x-1 transition-all duration-300 ease-in-out '>
                <IoArrowForward size={22} className='hidden group-hover:block'/>
            </div>
        </Link>
    )
}
