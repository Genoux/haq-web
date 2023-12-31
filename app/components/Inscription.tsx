import { Button } from '@/app/components/ui/button'

export default function Inscription() {
  const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';

  return (
    <>
      <div className="relative z-20 overflow-hidden">
        <div className='bg-theme-gradien-50  backdrop-contrast-100 z-40 absolute top-0 left-0 w-full h-full'></div>
        <video className="absolute z-30 top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4" type="video/mp4" />
        </video>
        <div className="top-0 left-0 w-full h-full relative z-50">
          <div className='max-w-[1024px] gap-7 flex flex-col justify-center items-center w-full py-32 mx-auto border-white border-opacity-10'>
           
            <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-5xl font-bold tracking-tighter'>Incriptions ouvertes</h1>
            <p className='text-lg'>Les inscriptions sont maintenant ouvertes! Dépêchez-vous, les places sont limitées.</p>
           </div>
            <div className='flex gap-2'>
            <Button variant='default' size={"lg"}>{"S'inscrire"}</Button>
            <Button variant="outline" size={"lg"}>{"Contactez-nous"}</Button>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}
