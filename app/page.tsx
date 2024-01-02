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
      
      
      <main className='z-50 flex min-h-screen flex-col bg-transparent'>
        <NavBar />
        <Header />
        <About />
        <div className='hidden h-3 border border-opacity-25 m-fit max-w-5xl mx-auto w-full'></div>
        <Inscription />

        <AboutDraft />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
