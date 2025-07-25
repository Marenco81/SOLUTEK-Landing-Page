import { Layout } from "./components/Layout"
import { AboutUs, Brands, CallToAction, Hero, Pricing, Services } from "./components/sections"


function App() {

  return (
    <Layout title="Solutek">
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <AboutUs></AboutUs>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
    </Layout>
  )
}

export default App
