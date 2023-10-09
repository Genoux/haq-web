"use client"

import Image from 'next/image'
import NavBar from '@/app/components/NavBar'
import About from '@/app/components/About'
import Inscription from '@/app/components/Inscription'
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import FAQ from '@/app/components/FAQ'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import ThreeDWaveGrid from '@/app/components/three/ThreeDWaveGrid'
import AboutDraft from '@/app/components/AboutDraft'

export default function Home() {

  return (
    <>
      <main className='z-50 relative overflow-x-hidden'>
        <NavBar />
        <Header />
        <div className='bg-black'>
          <About />
          <Inscription />
          <AboutDraft />
          <FAQ />
          <Footer />
        </div>
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
