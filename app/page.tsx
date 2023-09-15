"use client"

import Image from 'next/image'
import NavBar from '@/app/components/NavBar'
import About from '@/app/components/About'
import Inscription from '@/app/components/Inscription'
import { motion, useScroll, useTransform } from 'framer-motion'
import  FAQ  from '@/app/components/FAQ'
import Footer  from '@/app/components/Footer'



export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full pt-48 pb-56 text-center z-50">
        <h1 className="text-primary font-bold w-full text-9xl">LEAGUE OF LEGENDS</h1>
        <h2 className="text-white font-bold w-full text-9xl">TOURNOIS ARAM</h2>
        <div className="flex gap-4 w-full justify-center">
          <button className="bg-primary text-secondary px-12 py-3 text-2xl mt-6 rounded-sm">Inscription</button>
          <button className="bg-none border text-white px-12 py-3 text-2xl mt-6 rounded-sm">Contacter</button>
        </div>
      </div>
      <About />
      <Inscription />
      <FAQ />
      <Footer />
    </main>
  )
}
