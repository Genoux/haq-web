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
        <main className='z-50 flex flex-col bg-black'>
          <NavBar />
          <Header />
          <div className='z-50 bg-gradient-to-t from-black to-transparent  top-0 left-0 h-40 w-full -mt-32'></div>
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
