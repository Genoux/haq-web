"use client";

import NavBar from "@/app/components/NavBar";
import About from "@/app/components/About";
import Inscription from "@/app/components/Inscription";
import { motion } from "framer-motion";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import AboutDraft from "@/app/components/AboutDraft";
import PopupMessage from "@/app/components/PopupMessage";
import { Newspaper } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupClose = () => {
    setButtonVisible(true);
    setShowPopup(false);
  };

  return (
    <main>
      <PopupMessage display={showPopup} onClose={handlePopupClose} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {buttonVisible && (
          <div
            className="fixed bottom-0 right-0 z-50 p-4 cursor-pointer hover:translate-y-1 transition-all duration-150"
            onClick={handlePopupToggle}
          >
              <Newspaper size={28} className=" text-black bg-white p-1.5 rounded" />
          </div>
        )}
        <div className="bg-black flex flex-col gap-32 md:gap-60">
          <NavBar />
          <Header />
          <About />
          <Inscription />
          <AboutDraft />
          <FAQ />
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
