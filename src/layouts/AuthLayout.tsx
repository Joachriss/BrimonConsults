import { Outlet } from "react-router"

export const AuthLayout = () => {

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-fixed overflow-y-auto" style={{backgroundImage:"url('/projects100/Iyumbu/image1.webp')"}}>
        <Outlet />
      </div>
    </>
  )
}
