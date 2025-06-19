import { PageHeader } from "../components/PageHeader"
import { ServicesSection } from "../components/ServicesSection"
import services from "../data/services.json"

export const ServicesPage = () => {
  return (
    <section className="w-full">
        <PageHeader recall="Explore Our Services" pageName="Our Services" services={services.map(service => service.title)} image="bg-[url('/projects/Medeli-Conventioanl-Centre-Dodoma/image2.webp')]" />
        <ServicesSection />
        {/*  services design */}

    </section>
  )
}
