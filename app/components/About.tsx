import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "@/app/components/magicui/border-beam";

export default function About() {
  return (
    <div className="flex items-start h-full -mt-20 px-12 max-w-7xl mx-auto flex-col md:flex-row justify-between md:items-center gap-12 md:gap-24 lg:gap-32">
      <div className="hidden sm:block relative z-40">
        <div className="relative w-60 lg:w-full lg:h-auto rounded">
          <BorderBeam colorFrom="#fff" colorTo="#1E1E1E" size={500} />
          <Image
            className="border rounded w-60 lg:w-full lg:h-auto"
            width={400}
            height={400}
            src="/images/league.svg"
            alt="Tournois HAQ"
            priority={false}
          />
        </div>
      </div>
      <div className="relative z-90">
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
            Format de simple élimination (BO3), places limitées et 200$ à gagner!
          </p>
          <div className="w-fit">
            <Link
              aria-label="Inscription au tournoi"
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
  );
}
