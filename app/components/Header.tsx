import { Button } from "@/app/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gangplank from "@/public/images/gangplank.webp";
import jax from "@/public/images/jax.webp";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [headerImage, setHeaderImage] = useState(jax);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxShift = scrollY * 0.7;

  return (
    <div className="relative overflow-hidden">
    <div className="z-40 bg-gradient-to-t h-screen from-black via-transparent to-transparent absolute top-0 left-0 w-full"></div>
      <div className="bg-theme-gradient-50 z-30 absolute top-0 left-0 w-full h-full opacity-100"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ transform: `translateY(${parallaxShift}px)` }}
      >
        <Image
          src={jax}
          alt="Header Image"
          placeholder="blur"
          quality={80}
          className="z-20 opacity-80 absolute top-0 left-0 w-full h-screen object-cover"
        />
      </motion.div>
      <div className="relative z-40 w-full container h-screen px-0 lg:px-4 justify-center flex flex-col">
        <div className="flex flex-col gap-1 mb-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className=" w-fit text-center rounded text-6xl sm:text-8xl tracking-tighter font-black uppercase">
              Saison 3
            </div>
            <h1 className="w-full text-center lg:text-start text-5xl sm:text-7xl lg:text-8xl px-0 md:px-0 font-black tracking-tighter">
              TOURNOI ARAM
            </h1>
            <h2 className="text-5xl sm:text-6xl text-center lg:text-center font-black w-fit tracking-tight my-4">
              15 JUIN - 18H
            </h2>
            <p className="max-w-xl text-center lg:text-start text-base text-white text-opacity-80">
              Le mode ARAM de League of Legends en version compétitive, enrichi
              d&apos;un système de draft personnalisé pour une stratégie
              renouvelée.
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
              Inscription - Gratuite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
