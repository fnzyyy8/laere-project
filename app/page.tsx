import Hero from "./homeSection/Hero"
import Tentang from "./homeSection/Tentang"
import Portofolio from "./homeSection/Portofolio"
export default function Home() {
  return (
    <main>
      <Hero sectionName="#hero" />
      <Tentang sectionName="about" />
      <Portofolio sectionName="portofolio" />
    </main>
  )
}
