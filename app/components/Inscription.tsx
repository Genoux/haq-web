import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Inscription() {
  return (
    <>
      <div className="mx-auto relative z-40 overflow-hidden w-full h-full rounded-md bg-black">
        <div className="relative flex flex-col py-48 text-center gap-6 justify-center w-full h-full z-50 px-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Incriptions ouvertes
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
                {"S'inscrire - Gratuit"}
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
            <source src="images/akali.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
