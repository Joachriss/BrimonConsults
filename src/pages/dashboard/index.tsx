import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router';
import { MdContacts } from 'react-icons/md';
import { BsBuildings, BsQuestionDiamond } from 'react-icons/bs';
import { useProjects } from '../../hooks/useProjects';
import { useFaqs } from '../../hooks/useFaqs';
import { useInquiries } from '../../hooks/useInquiries';
import { useAuth } from '../../../context/AuthContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Performance',
    },
  },
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export const Dashboard = () => {
  const { projects } = useProjects()
  const { inquiries } = useInquiries()
  const { faqs } = useFaqs()
  const { user } = useAuth()

  return (
    <section className="p-3">
      <h1 className="col-span-full text-2xl font-bold my-7">Dashboard</h1>
      <div className="text-2xl font-extralight ">Hello, <span className="text-black font-[600]">{user.name}</span></div>
      <div className="mb-4">Welcome to your dashboard</div>
      <div className="grid grid-cols-12 items-center gap-4">

        <Link to="/admin/inquiries" className="rounded-lg  shadow bg-white hover:scale-[103%] duration-300 col-span-4 w-full py-4 px-8 gap-4 font-bold flex flex-row items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-xl italic">{inquiries?.results?.length || 0}</div>
            <span className='text-[#0159a7]'>Inquiries</span>
          </div>
          <MdContacts className='text-pink-500' size={50} />
        </Link>
        <Link to="/admin/projects" className="rounded-lg  shadow bg-white hover:scale-[103%] duration-300 col-span-4 w-full py-4 px-8 gap-4 font-bold flex flex-row items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-xl italic">{projects?.results?.length || 0}</div>
            <span className='text-[#0159a7]'>Projects</span>
          </div>
          <BsBuildings className='text-pink-500' size={50} />
        </Link>
        <Link to="/admin/faqs" className="rounded-lg  shadow bg-white hover:scale-[103%] duration-300 col-span-4 w-full py-4 px-8 gap-4 font-bold flex flex-row items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-xl italic">{faqs?.results?.length || 0}</div>
            <span className='text-[#0159a7]'>FAQs</span>
          </div>
          <BsQuestionDiamond className='text-pink-500' size={50} />
        </Link>

        <div className="rounded-lg bg-white col-span-6 w-full min-h-30 flex items-center justify-center">
          <Line options={options} data={data} />
        </div>
        <div className="rounded-lg bg-white h-full col-span-6 w-full min-h-30 flex">
          {/* details */}
          <h1>Details</h1>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 bg-blue-500"></div>
              <div>Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
