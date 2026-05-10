import gsap from "gsap"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViwer from "./components/ProductViwer"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViwer />
    </main>
  )
}

export default App