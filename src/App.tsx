import { Layout } from "./components/Layout"
import { AboutUs, Brands, Hero, Pricing, Services } from "./components/sections"


function App() {

  return (
    <Layout title="EdgeAI">
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <AboutUs></AboutUs>
      <Pricing></Pricing>
    </Layout>
  )
}

export default App
