import { PageHeader } from "../components/PageHeader"

export const PolicyPage = () => {
    return (
        <section className="w-full ">
            <PageHeader
                pageName="Policies"
                recall="Our Policies"
                services={["Human Rights Policy", "Health, Safety, Security, Environment & Social Policy"]}
                image="bg-[url('/projects100/Residential-Apartments-Mbezi-Beach-Dar/image2.webp')]"
            />

        </section >
    )
}
