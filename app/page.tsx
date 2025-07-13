import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f4ff] bg-[radial-gradient(circle_at_center,_#e0e7ff_1px,_transparent_1px)] [background-size:20px_20px]">
      <Header />
      <Hero />
      <About className="bg-white" /> {/* White background for About */}
      <Skills />
      <Projects className="bg-white" /> {/* White background for Projects */}
      <Achievements />
      <Contact className="bg-white" /> {/* White background for Contact */}
      <Footer />
    </main>
  )
}
