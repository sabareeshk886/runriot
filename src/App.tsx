import './index.css'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CommunityImpact from './components/CommunityImpact'
import RunExperience from './components/RunExperience'
import Collaborations from './components/Collaborations'
import BrandOffer from './components/BrandOffer'
import ExperienceFlow from './components/ExperienceFlow'
import Gallery from './components/Gallery'
import FutureVision from './components/FutureVision'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <CommunityImpact />
        <RunExperience />
        <Collaborations />
        <BrandOffer />
        <ExperienceFlow />
        <Gallery />
        <FutureVision />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
