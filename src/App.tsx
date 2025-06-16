import { Layout } from "./components/Layout"
import { AboutUs, Brands, Hero, Services } from "./components/sections"


function App() {

  return (
    <Layout title="EdgeAI">
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <AboutUs></AboutUs>
    </Layout>
  )
}

export default App
