import './App.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Outlet } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
