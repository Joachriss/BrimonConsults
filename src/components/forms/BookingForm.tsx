import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { RoundSpinner } from '../RoundSpinner'
import { motion } from 'motion/react'

export const BookingForm = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [inquiry, setInquiry] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post("inquiries/sendinquiry", { name, email, subject, inquiry });
            if (response.status === 201) {
                toast.success("Inquiry submitted successfully!");
                setLoading(false);
                setName('');
                setEmail('');
                setSubject('');
                setInquiry('');
            }
        } catch (error: any) {
            toast.error("Failed to submit inquiry. Please try again later.");
            setLoading(false);
            console.log(error.message);
        }

    }

    return (
        <motion.div className="w-full bg-white shadow-lg p-6 rounded-lg"
            initial={{ opacity: 0, translateY: 60 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, type: 'ease-in-out' }}
        >
            <h3 className="text-2xl font-semibold text-[#194062] mb-4">Booking Form</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                    <input
                        type="email"
                        value={email}
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                </div>
                <input
                    type="text"
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                />
                <textarea
                    value={inquiry}
                    name={'inquiry'}
                    onChange={(e) => setInquiry(e.target.value)}
                    placeholder="Meeting Inquiry"
                    className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                ></textarea>
                <button disabled={loading} className="bg-[#d94a68] max-w-[200px] mx-auto text-white px-6 py-2 rounded-lg hover:bg-[#194062]">
                    {loading ? <RoundSpinner /> : 'Book a Meeting'}
                </button>
            </form>
        </motion.div>
    )
}
