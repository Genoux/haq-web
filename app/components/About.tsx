import clsx from 'clsx';
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <>


      <div className="z-40 bg-black relative overflow-hidden pt-40 pb-44">
        <div className='container mx-auto max-w-7xl px-6 flex-grow'>
          <div>
            <h1 className="w-full font-normal text-muted-foreground text-base mb-6">
              À propos
            </h1>
            <div className='flex flex-col gap-5 text-2xl md:text-4xl font-bold leading-[1:1] tracking-tight max-w-3xl'>
              <p >Premier tournoi d’Aram au Québec. Le même mode de jeu, mais revisité pour vous offrir une expérience plus compétitive.
              </p>
              <p className='text-muted-foreground text-base font-normal tracking-wide'>
                Format de double élimination place limitée et un prix à gagner!
              </p>
              <div className='w-fit'>
                <Link target='_blank' href={'https://reglements.tournoishaq.ca'}><Button variant="outline" className='w-fit mt-4' size={"lg"}>Règlements</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}