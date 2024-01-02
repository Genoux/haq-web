import Button from '@/app/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { MoveDown } from 'lucide-react';

export default function AboutDraft() {

  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const parallaxRef3 = useRef<HTMLDivElement>(null);

 


  return (
    <>
    <div className="max-w-5xl items-center relative mx-auto border-x bg-black text-center flex flex-col w-full text-white">
      <div className='grid grid-cols-3 z-50 absolute top-0 left-0 h-full w-full'>
        <div className='border-r border-white border-opacity-10 w-full h-full'></div>
        <div className='border-r border-white border-opacity-10 w-full h-full'></div>

      </div>
     
        <div className='container justify-center items-center mt-20 mb-12 z-50 flex flex-col gap-4'>
        <h1 className="text-5xl font-bold tracking-tighter">Custom draft pick/ban</h1>
        <p className="text-xl font-medium">Nous avons développé un système de <u>pick & ban</u> <span className='text-muted-foreground font-normal'>personnalisé pour le mode ARAM, où les deux équipes partagent un pool de 30 champions aléatoires!</span></p>
        </div>

        <MoveDown size={32} className='-mb-4 relative z-50' />
    
      
      </div>
      <div className='relative'>
      <Image
      width={1920}  // The original width of your image
      height={900}  // The original height of your image
      quality={100}
      src="/images/draft.png" alt="Aram draft pick" className='z-50 pt-4 w-full max-w-5xl mx-auto border' />
        <div className=' bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full'>

        </div>
      </div>
     
   </>
  );
}
