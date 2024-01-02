import clsx from 'clsx';
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <>


      <div className="z-40 bg-black relative w-full overflow-hidden">
        <div className='max-w-[1024px] relative z-50 gap-12 px-12 py-24 border-opacity-10 mx-auto border-x'>
          <video className="hidden top-0 left-0 z-30 w-full h-full object-cover rounded" autoPlay loop muted>
            <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4" type="video/mp4" />
          </video>
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
            <Link target='_blank' href={'https://reglements.tournoishaq.ca'}><Button variant="outline" className='w-fit mt-4' size={"lg"}>Règlements</Button></Link>  

            </div>
          </div>

        </div>
      </div>
    </>
  )
}