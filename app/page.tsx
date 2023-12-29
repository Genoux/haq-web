"use client"

import NavBar from '@/app/components/NavBar'
import About from '@/app/components/About'
import Inscription from '@/app/components/Inscription'
import {
  motion,
} from "framer-motion";
import FAQ from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import ThreeDWaveGrid from '@/app/components/three/ThreeDWaveGrid'
import Waves from '@/app/components/three/Waves'
import AboutDraft from '@/app/components/AboutDraft'

export default function Home() {

  return (
    <>
      <main className='relative flex min-h-screen flex-col bg-background'>
      <ThreeDWaveGrid />

        <NavBar />
        <Header />
          <About />
          <Inscription />
          <AboutDraft />
          <FAQ />
          <Footer />
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .2, delay: .1 }} >
        <ThreeDWaveGrid />
      </motion.div>
    </>
  )
}
