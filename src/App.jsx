import gsap from "gsap"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViwer from "./components/ProductViwer"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViwer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App