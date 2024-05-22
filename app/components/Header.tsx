import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {

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
          className="z-20 absolute top-0 left-0 w-full object-cover h-screen"
          autoPlay
          loop
          muted
        >
          <source src="images/jhin.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div className="relative z-40 container mx-auto max-w-7xl px-4 pt-40 pb-0 md:pt-56 md:pb-52 flex-grow">
        <div className="flex flex-col gap-1 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className=" w-fit text-center rounded text-6xl md:text-8xl tracking-tighter font-black uppercase">
              Saison 3
            </div>
            <h1 className="w-full text-center md:text-start text-5xl  md:text-8xl  px-0 md:px-0 font-black tracking-tighter">
              TOURNOI ARAM
            </h1>
            <h2 className="text-5xl text-center md:text-start font-black w-fit tracking-tight my-4">
              15 JUIN - 18H
            </h2>
            <p className="max-w-xl text-center md:text-start text-base text-muted-foreground">
              Le mode ARAM de{" "}
              <span className="underline">League of Legends</span> en version
              compétitive, enrichi d&apos;un système de draft personnalisé pour
              une stratégie renouvelée.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
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
