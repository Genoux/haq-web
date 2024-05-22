import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutDraft() {
  return (
    <div className="bg-black relative z-40 w-full pt-6 md:pt-16">
      <div className=" container mx-auto max-w-7xl flex-grow">
        <div className="items-center mx-auto bg-black text-center flex flex-col w-full text-white">
          <div className=" max-w-5xl justify-center items-center mt-20 mb-12 z-40 flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              Nouveau format de draft
            </h1>
            <p className="text-md md:text-xl font-medium container">
              Nous avons développé un système de <u>pick & ban</u>{" "}
              <span className="text-muted-foreground font-normal">
                personnalisé pour le mode ARAM, où les deux équipes partagent un
                pool de 30 champions aléatoires!
              </span>
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <Image
            width={1920} // The original width of your image
            height={900} // The original height of your image
            quality={100}
            src="/images/draft.png"
            alt="Aram draft pick"
            className="z-50 w-full max-w-5xl mx-auto border rounded-xl"
          />
          <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
