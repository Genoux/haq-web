import { Button } from '@/app/components/ui/button'
import { useRef, useEffect } from 'react'
import Waves from './three/Waves'
import Link from 'next/link'
import { motion } from 'framer-motion';
export default function Header() {
  const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      const { clientX: x, clientY: y } = e;
      const { innerWidth: width, innerHeight: height } = window;

      const xPos = x / width - 0.5;
      const yPos = y / height - 0.5;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${xPos * -20.0}px, ${yPos * -20.0}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='absolute z-30 w-full'>
      <div className='z-50 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full'></div>

        <Waves />
      </div>
      <div className="z-50">
        <section className='relative z-10 max-w-[1024px] mx-auto text-center gap-2 pt-56 pb-64 px-6'>
          <div className='flex flex-col gap-1 mb-6'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-5xl lg:text-6xl px-0 lg:px-40 font-extrabold leading-tight tracking-tighter lg:leading-[1.1]'>Tournoi HAQ <span className='text-theme-gradient'>Saison 2</span></h1>
              <p className='max-w-[620px] mx-auto text-lg text-muted-foreground sm:text-lg'>
                Le mode ARAM de <span className="underline">League of Legends</span> en version compétitive, enrichi d&apos;un système de draft personnalisé pour une stratégie renouvelée.
              </p>
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <Link target='_blank' href={'https://inscription.tournoishaq.ca/'}> <Button variant="default">Inscription</Button></Link>
            <Link target='_blank' href={'mailto:contact@tournoishaq.ca'}> <Button variant="outline">Nous contacter</Button></Link>
          </div>
        </section>

      </div>
    </>
  )
}