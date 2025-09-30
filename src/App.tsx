import './App.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Outlet } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PhotoProvider } from 'react-photo-view'

const queryClient = new QueryClient

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
                                  <PhotoProvider>
          
          <Outlet />
          </PhotoProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
