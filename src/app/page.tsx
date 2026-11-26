import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import BoatRide from '@/components/BoatRide'
import Stack from '@/components/Stack'
import Awards from '@/components/Awards'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <BoatRide />
        <Stack />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
