import { useState } from 'react'
import { Button } from '../../components/buttons/Button'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router'

export const Login = () => {
  const { login, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="border bg-white border-gray-200 p-5 min-w-md rounded">
      <div className="w-fit mx-auto">
        <Link to="/" target="_blank">
          <img src="/logo/Logo-light.png" className="w-25 my-3" alt="Logo" />
        </Link>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Welcome Back!</h2>
        <p className="text-sm text-zinc-500">Please login to access your console</p>
      </div>

      {/* Wrap everything in a <form> and attach onSubmit */}
      <form onSubmit={submit} className="grid grid-cols-1 gap-y-5 space-y-8">
        <div className="gap-y-3 flex flex-col">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-lg border-b border-gray-300 focus:outline-none"
          />
        </div>

        <div className="max-w-1/2 mx-auto">
          <Button type="submit" label="Login" loading={loading} />
        </div>
      </form>
    </div>
  )
}
