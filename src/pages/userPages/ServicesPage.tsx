import { PageHeader } from "../../components/PageHeader"
import { ServicesSection } from "./home/fragments/ServicesSection"
import services from "../../data/services.json"
import { pageTitle } from "../../utils/pageTitle"
import { useEffect } from "react"

export const ServicesPage = ({ title }: { title: string }) => {
  pageTitle(title)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="w-full">
      <PageHeader recall="Explore Our Services" pageName="Our Services" services={services.map(service => service.title)} image="bg-[url('/projects100/Medeli-Conventioanl-Centre-Dodoma/image2.webp')]" />
      <ServicesSection showParagraph={true} />
    </section>
  )
}
