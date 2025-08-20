import { Outlet } from "react-router"

export const AuthLayout = () => {

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-fixed" style={{backgroundImage:"url('/projects100/Iyumbu/image1.webp')"}}>
        <Outlet />
      </div>
    </>
  )
}
