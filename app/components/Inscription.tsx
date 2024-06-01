import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Inscription() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="z-0"
    >
      <div className="mx-auto max-w-7xl rounded-xl z-40 overflow-hidden flex items-center justify-center w-full bg-black px-4">
        <div className="h-fit w-full relative rounded overflow-hidden">
        <div className="relative flex flex-col py-48 text-center gap-6 justify-center w-full z-50 px-4 sm:px-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Inscriptions ouvertes
            </h1>
            <p className="text-md md:text-lg text-white text-opacity-80">
              Les inscriptions sont maintenant ouvertes! Dépêchez-vous, les
              places sont limitées.
            </p>
          </div>
          <div className="w-full">
            <Link target="_blank" href={"https://inscription.tournoishaq.ca/"}>
              <Button
                className="text-md font-semibold"
                size={"lg"}
                variant="default"
              >
                {"Inscription - Gratuite"}
              </Button>
            </Link>
          </div>
        </div>
          <div className="w-full h-full top-0 left-0 absolute">
          <div className="z-40 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full opacity-10"></div>
          <div className="bg-theme-gradient-50 z-40 absolute top-0 left-0 w-full h-full opacity-60"></div>
            <video
            className="z-20 absolute top-0 left-0 w-full h-full object-cover opacity-50"
            autoPlay
            loop
            muted
          >
            <source src="images/akali(3).webm" type="video/webm" />
          </video>
        </div>
        </div>
      </div>
    </motion.div>
  );
}
