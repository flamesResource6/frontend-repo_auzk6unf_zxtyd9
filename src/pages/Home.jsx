import PageLayout from '../components/PageLayout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Trust from '../components/Trust'

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Services />
      <Trust />
    </PageLayout>
  )
}
