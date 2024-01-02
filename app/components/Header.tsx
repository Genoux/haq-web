import { Button } from '@/app/components/ui/button'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Waves from './three/Waves'
import { MoveRight } from 'lucide-react';

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
      <div className='absolute z-30'>
        <Waves />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="z-40 theme-zinc">
        <section className='relative z-10 max-w-[1024px] border-x border-b mx-auto text-center gap-2 py-48 px-6'>
        
          <div className='flex flex-col gap-3 mb-6'>
            <p className='uppercase text-theme-gradient tracking-tighter font-extrabold text-5xl w-full'>Saison 2</p>
            <div className='flex flex-col gap-2'>
              <h1 className='text-6xl font-extrabold leading-tight tracking-tighter lg:leading-[1.1]'>Tournois League Of Legend Aram</h1>
              <p className='max-w-[750px] mx-auto text-lg text-muted-foreground sm:text-xl'>
                {"ARAM en mode compétitif, enrichi d'un système de draft personnalisé pour une stratégie renouvelée"}
              </p>
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <Button variant="default">Inscription</Button>
            <Button variant="outline">Contacter</Button>


          </div>
        </section>
        <div className='z-0 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full'></div>

      </motion.div>
    </>
  )
}