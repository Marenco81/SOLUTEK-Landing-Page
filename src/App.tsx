import { Layout } from "./components/Layout"
import { AboutUs, Brands, CallToAction, Hero, Services } from "./components/sections"
import {Helmet} from "react-helmet";

function App() {

  return (
    <Layout title="SOTEK-Soluciones Tecnicas en Construcción">
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content="Soluciones Tecnicas en mantenimiento, ingeniería y construcción. Mantenimiento preventivo y correctivo. Contratistas."/>
        <meta name="keywords" content="Mantenimiento Residencial en Costa Rica. Mantenimiento Comercial. Contratista. Construcción. Remodelación. Ingeniería."/>
        <meta name="robots" content="INDEX,FOLLOW"/>
      </Helmet>
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <AboutUs></AboutUs>
      {/* <Pricing></Pricing> */}
      <CallToAction></CallToAction>
    </Layout>
  )
}

export default App
