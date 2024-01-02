import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
export default function Inscription() {
  const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';

  return (
    <>
      <div className="max-w-5xl mx-auto relative z-20 overflow-hidden grid grid-cols-2">
        <div className="flex flex-col py-32 gap-6 justify-center w-full h-full z-50 bg-black border-white border-opacity-10 border px-12">
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-bold tracking-tighter'>Incriptions ouvertes</h1>
            <p className='text-lg text-muted-foreground'>Les inscriptions sont maintenant ouvertes! Dépêchez-vous, les places sont limitées.</p>
          </div>
          <Link target='_blank' href={'https://inscription.tournoishaq.ca/'}><Button variant='default' className='w-fit'>{"S'inscrire"}</Button></Link> 
        </div>
        <div className='bg-theme-gradien-50 backdrop-contrast-100 z-40 absolute top-0 left-0 w-full h-full'></div>
        <video className="absolute z-30 top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
