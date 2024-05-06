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
import PopupMessage from '@/app/components/PopupMessage'
import { Button } from '@/app/components/ui/button'
import { Newspaper } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  // Handles the button click to toggle popup visibility
  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  // This function is called when the popup is closed
  const handlePopupClose = () => {
    setButtonVisible(true);  // Make the button visible after the popup is initially closed
    setShowPopup(false);     // Ensure the popup is marked as closed
  };

  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
      <PopupMessage display={showPopup} onClose={handlePopupClose} />
      {buttonVisible && (
          <div className='fixed bottom-0 right-0 z-50 p-4 cursor-pointer hover:translate-y-1 transition-all duration-150' onClick={handlePopupToggle}>
            <div className='bg-white p-2 rounded'>
            <Newspaper size={18} className=' text-black' />

            </div>
        </div>
      )}
        <main>
       
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
