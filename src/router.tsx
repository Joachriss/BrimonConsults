import { createBrowserRouter, Outlet } from "react-router";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TeamPage } from "./pages/TeamPage";
import { ErrorPage } from "./pages/ErrorPage";
import App from "./App";
import { DashboardLayout } from "./layouts/DashboardLayout";

export const allMenus = [
    {
        "category":"Dashboard",
        "subMenus":[
            {
                "label":"Dashboard",
                "link":"/dashboard"
            }
        ]
    },
    {
        "category":"Contacts",
        "subMenus":[
            {   
                "label":"Contacts",
                "link":"inquiries"
            },
        ]
    },
    {
        "category":"Projects",
        "subMenus":[
            {
                "label":"Projects",
                "link":"projects-list"
            },
            {
                "label":"Add project",
                "link":"create-project"
            }
        ]
    }
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "contacts",
                        element: <ContactPage />,
                    },
                    {
                        path: "company",
                        element: <CompanyPage />
                    },
                    {
                        path: "projects",
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <ProjectsPage />
                            },
                            {
                                path: ":project",
                                element: <ProjectDetailsPage />
                            }
                        ]
                    },
                    {
                        path: "services",
                        element: <ServicesPage />
                    },
                    {
                        path: "team",
                        element: <TeamPage />
                    }
                    
                ]
            },
            {
                path: "dashboard",
                element:<DashboardLayout/>,
                children:[

                ]
            }
        ]
    },
]);