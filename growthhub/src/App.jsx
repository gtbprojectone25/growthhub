import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import RivieraSection from './components/RivieraSection.jsx'
import CreatorPartnerSection from './components/CreatorPartnerSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="gh-page-shell min-h-dvh">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RivieraSection />
        <CreatorPartnerSection />
      </main>
      <Footer />
    </div>
  )
}
