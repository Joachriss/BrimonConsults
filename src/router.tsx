import { createBrowserRouter, Outlet } from "react-router";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/userPages/home/Home";
import { ContactPage } from "./pages/userPages/ContactPage";
import { ProjectsPage } from "./pages/userPages/ProjectsPage";
import { CompanyPage } from "./pages/userPages/CompanyPage";
import { ProjectDetailsPage } from "./pages/userPages/ProjectDetailsPage";
import { ServicesPage } from "./pages/userPages/ServicesPage";
import { TeamPage } from "./pages/userPages/TeamPage";
import { ErrorPage } from "./pages/ErrorPage";
import App from "./App";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/dashboard";
import type { ReactElement } from "react";
import { MdContacts, MdOutlineDashboard } from "react-icons/md";
import { BsBuildings, BsQuestionDiamond } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { Projects } from "./pages/projects";
import { Faqs } from "./pages/faq";
import { Inquiries } from "./pages/inquiries";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./pages/auth";
import { Register } from "./pages/auth/Register";
import { Staffs } from "./pages/staffs";
import { NewsPage } from "./pages/userPages/NewsPage";

export interface IRoutes {
    path: string;
    label: string;
    icon?: ReactElement
    subMenu?: IRoutes[];
}

export const allMenus: IRoutes[] = [
    {
        path: "/admin/dashboard",
        label: "Dashboard",
        subMenu: [
            {
                label: "Dashboard",
                path: "/admin/dashboard",
                icon: <MdOutlineDashboard size={20} />
            }
        ]
    },
    {
        path: "/admin/inquiries",
        label: "Contacts",
        subMenu: [
            {
                label: "Inquiries",
                path: "/admin/inquiries",
                icon: <MdContacts size={20} />
            },
        ]
    },
    {
        path: "/admin/projects",
        label: "Projects",
        subMenu: [
            {
                label: "Projects",
                path: "/admin/projects",
                icon: <BsBuildings size={20} />
            }
        ]
    },
    {
        path: "/admin/faqs",
        label: "FAQs",
        subMenu: [
            {
                label: "Questions",
                path: "/admin/faqs",
                icon: <BsQuestionDiamond size={20} />
            }
        ]
    },
    {
        path: "/admin/team",
        label: "Employees",
        subMenu: [
            {
                path: "/admin/staffs",
                label: "Staffs",
                icon: <RiTeamFill size={20} />
            }
        ]
    }
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage title="404 page not found"/>,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        index: true,
                        
                        element: <Home/>,
                    },
                    {
                        path: "contacts",
                        element: <ContactPage title="Contacts"/>,
                    },
                    {
                        path: "company",
                        element: <CompanyPage title="Our Company" />,
                    },
                    {
                        path: "projects",
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <ProjectsPage title="Projects" />
                            },
                            {
                                path: ":project",
                                element: <ProjectDetailsPage title="Projects" />
                            }
                        ]
                    },
                    {
                        path: "services",
                        element: <ServicesPage title="Services" />
                    },
                    {
                        path: "team",
                        element: <TeamPage title="Team" />
                    },
                    {
                        path: "news",
                        element: <NewsPage title="News and press" />
                    }

                ]
            },
            {
                path: "admin",
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        path: "/admin/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "projects",
                        element: <Projects/>
                    },
                    {
                        path: "faqs",
                        element: <Faqs/>
                    },
                    {
                        path: "inquiries",
                        element: <Inquiries/>
                    },
                    {
                        path: "staffs",
                        element: <Staffs/>
                    }
                ]
            },
            {
                path:"/auth",
                element:<AuthLayout/>,
                children:[
                    {
                        index:true,
                        path:"login",
                        element:<Login/>
                    },
                    {
                        index:true,
                        path:"register",
                        element:<Register/>
                    }
                ]
            }
        ]
    },
]);