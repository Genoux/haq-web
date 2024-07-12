import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/app/components/magicui/border-beam";

export default function AboutDraft() {
  return (
    <div className="bg-black relative z-40 w-full items-center ">
      <div className=" px-4 mx-auto max-w-7xl flex flex-col gap-12">
        <div className="items-center mx-auto bg-black text-center flex flex-col w-full text-white">
          <div className=" max-w-5xl justify-center items-center z-40 flex flex-col gap-4">
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
          <div className="relative rounded-xl max-w-5xl overflow-hidden mx-auto">
            <BorderBeam colorFrom="#fff" colorTo="#1E1E1E" size={500} />
            <Image
              width={1024}
              height={680}
              priority
              quality={100}
              src="/images/draft.webp"
              alt="Aram draft pick"
              className="z-50 w-full mx-auto border rounded-xl"
            />
          </div>
          <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
