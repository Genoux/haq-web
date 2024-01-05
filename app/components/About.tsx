import clsx from 'clsx';
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <>


      <div className="z-50 bg-black relative w-full overflow-hidden rounded-lg mt-32 mb-40 max-w-5xl mx-auto">
        <div className='relative z-50 gap-12 px-12 py-12'>
          <div className='relative z-50'>
            <h1 className="w-full font-normal text-muted-foreground text-base mb-6">
              À propos
            </h1>
            <div className='flex flex-col gap-5 text-2xl font-semibold'>
              <p >Premier tournoi d’Aram au Québec. Le même mode de jeu, mais revisité pour vous offrir une expérience plus compétitive.
              </p>
              <p className='text-muted-foreground text-xl font-medium'>
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