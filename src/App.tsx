import './App.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </>
  )
}

export default App
