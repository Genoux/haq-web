
import clsx from "clsx";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "@/app/components/magicui/border-beam";
import TextReveal from "@/app/components/magicui/text-reveal";
export default function About2() {
  return (
    <>

   
      <div className="z-90 flex min-h-[16rem] items-center justify-center bg-black">
        <TextReveal text='Premier tournoi d’Aram au Québec. Format de simple élimination (BO3), place limitée et un prix à gagner!'  className="" />
</div>

    </>
  );
}
