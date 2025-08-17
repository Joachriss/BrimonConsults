import  { useState, } from 'react'
import { Button } from '../../components/buttons/Button'
import { useAuth } from '../../../context/AuthContext'

export const Register = () => {
    const { register, loading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submit = (e:any) => {
        e.preventDefault; 
        register(name,email, password,confirmPassword);
    }

    return (
        <div className="border bg-white border-gray-200 p-5 min-w-md  rounded">
            <img src="/logo/Logo-light.png" className='w-25 mx-auto my-3' alt="" />
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                    Welcome Back!
                </h2>

                <p className="text-sm text-zinc-500">
                    Please login to access Console
                </p>
            </div>

            <div
                className="grid grid-cols-1 gap-y-5 space-y-8 "
            >
                <div className="gap-y-3 flex flex-col">
                    <input
                        type="name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                    <input
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                    <input
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-type password"
                        className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
                    />
                </div>

                <div className="max-w-1/2 mx-auto">
                    <Button
                        type='submit'
                        label={'Register'}
                        loading={loading}
                        onClick={submit}
                    />
                </div>
            </div>
        </div>
    )
}
