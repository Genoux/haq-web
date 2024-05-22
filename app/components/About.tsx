import clsx from "clsx";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="z-40 bg-black relative overflow-hidden pt-40 pb-40 md:pb-96">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-24 lg:gap-40">
          <div>
            <Image
              className="border rounded w-60 md:w-96 lg:w-full lg:h-auto"
              width={400}
              height={400}
              src="/images/league.svg"
              alt="Tournois HAQ"
              priority={false}
            />
          </div>
          <div>
            <h1 className="w-full font-normal text-muted-foreground text-sm mb-6">
              À PROPOS
            </h1>
            <div className="flex flex-col gap-5 text-2xl lg:text-3xl font-bold leading-[1:1] tracking-tight max-w-3xl">
              <p>
                Premier tournoi d’Aram au Québec.
                <br></br>
                <span className="text-gray">
                  Le même mode de jeu, mais revisité pour vous offrir une
                  expérience plus compétitive.
                </span>
              </p>
              <p className="text-muted-foreground text-base font-normal tracking-wide">
                Format de double élimination place limitée et un prix à gagner!
              </p>
              <div className="w-fit">
                <Link
                  target="_blank"
                  href={"https://reglements.tournoishaq.ca"}
                >
                  <Button variant="outline" className="mt-4" size={"lg"}>
                    Règlements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
