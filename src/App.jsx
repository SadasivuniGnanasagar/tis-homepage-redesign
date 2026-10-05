import { MotionConfig } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import NumbersSection from './components/sections/NumbersSection'
import SportsSection from './components/sections/SportsSection'
import RecognitionSection from './components/sections/RecognitionSection'
import PeopleSection from './components/sections/PeopleSection'
import ParentsSection from './components/sections/ParentsSection'
import EnquireSection from './components/sections/EnquireSection'
import ChatAssistant from './components/ui/ChatAssistant'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-skip">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <NumbersSection />
        <SportsSection />
        <RecognitionSection />
        <PeopleSection />
        <ParentsSection />
        <EnquireSection />
      </main>
      <Footer />
      <ChatAssistant />
    </MotionConfig>
  )
}
