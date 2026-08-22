import { CtaSection } from '../components/sections/CtaSection'
import { Hero } from '../components/sections/Hero'
import { Methodology } from '../components/sections/Methodology'
import { Partners } from '../components/sections/Partners'
import { Reviews } from '../components/sections/Reviews'
import { ServicesOverview } from '../components/sections/ServicesOverview'

export function HomePage() {
  return (
    <div className="site-home">
      <Hero />
      <ServicesOverview />
      <Methodology />
      <Partners />
      <Reviews />
      <CtaSection />
    </div>
  )
}
