import gsap from "gsap"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViwer from "./components/ProductViwer"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViwer />
        <Showcase />
    </main>
  )
}

export default App