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
import AboutDraft from '@/app/components/AboutDraft'
import InfiniteBanner from '@/app/components/InfiniteBanner'

export default function Home() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <main className='z-50 flex min-h-screen flex-col bg-transparent'>
          <NavBar />
          <Header />
          <About />
          <Inscription />
          <AboutDraft />
          <FAQ />
          <Footer />
        </main>
      </motion.div>
    </>
  )
}
