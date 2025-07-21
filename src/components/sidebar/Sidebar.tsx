import { allMenus } from "../../router"
import { Link, NavLink } from "react-router"
export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-full gap-y-3">
        <Link to="/dashboard" className="mb-5">
            <img src="/logo/Logo-dark.png" className="w-[40%]" alt="logo" />
        </Link>
        {
            allMenus.map((menu)=>(
                <div>
                    <h1 className="font-bold my-3">{menu.category}</h1>
                    <div className="ps-2 flex flex-col gap-3">
                        {
                            menu.subMenus.map((sub)=>(
                                <NavLink to={sub.link}>{sub.label}</NavLink>
                            ))
                        }

                    </div>
                </div>
            ))
        }
    </aside>
  )
}
