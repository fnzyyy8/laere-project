import Hero from "./homeSection/Hero"
import About from "./homeSection/About"
import Products from "./homeSection/Products"
export default function Home() {
  return (
    <main className="main">
      <Hero sectionName="#hero" />
      <About sectionName="about" />
      <Products sectionName="portofolio" />
    </main>
  )
}
