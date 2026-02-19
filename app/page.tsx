'use client'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import UVPrinterShowcase from './sections/UVPrinterShowcase'
import ProductsGrid from './sections/ProductsGrid'
import Services from './sections/Services'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Navbar />
      <Hero />
      {/* Seamless transition - same background color */}
      <UVPrinterShowcase />
      <ProductsGrid />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}