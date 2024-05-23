import { Button } from "@/app/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to update the scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effect (adjust speed as needed)
  const parallaxShift = scrollY * 0.7;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      <div className="z-40 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full"></div>
      <div className="bg-theme-gradient-50 backdrop-contrast-100 z-30 absolute top-0 left-0 w-full h-full opacity-70"></div>
      <div
        className="z-30 fixed top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: 'url("/images/bg.jpg")', // Update the path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        style={{ transform: `translateY(${parallaxShift}px)` }}
        className="h-full"
      >
        <video
          className="z-20 absolute top-0 left-0 w-full h-screen object-cover"
          autoPlay
          loop
          muted
        >
          <source src="images/jhin.webm" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div className="relative z-40 container mx-auto max-w-7xl px-12 lg:px-4 pt-40 sm:pt-52 pb-0 sm:pb-40 flex-col">
        <div className="flex flex-col gap-1 mb-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className=" w-fit text-center rounded text-6xl sm:text-8xl tracking-tighter font-black uppercase">
              Saison 3
            </div>
            <h1 className="w-full text-center lg:text-start text-5xl sm:text-7xl lg:text-8xl px-0 md:px-0 font-black tracking-tighter">
              TOURNOI ARAM
            </h1>
            <h2 className="text-5xl sm:text-6xl text-center lg:text-start font-black w-fit tracking-tight my-4">
              15 JUIN - 18H
            </h2>
            <p className="max-w-xl text-center lg:text-start text-base text-muted-foreground">
              Le mode ARAM de
              <span className="underline">League of Legends</span> en version
              compétitive, enrichi d&apos;un système de draft personnalisé pour
              une stratégie renouvelée.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link target="_blank" href={"https://inscription.tournoishaq.ca/"}>
            <Button
              className="text-lg font-semibold py-6"
              size={"lg"}
              variant="default"
            >
              Inscription - Gratuit
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
