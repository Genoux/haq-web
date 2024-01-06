import { Button } from '@/app/components/ui/button'
import { useRef, useEffect } from 'react'
import Waves from './three/Waves'
import Link from 'next/link'
import { motion } from 'framer-motion';
import SeasonTitle from './SeasonTitle';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 1 }}
      
    >
      <div className='z-40 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full'></div>
      <div
        className="z-10 fixed top-0 left-0 w-full h-full opacity-50" style={{
          backgroundImage: 'url("/bg.jpg")', // Update the path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .6 }}
        transition={{ duration: 2 }}
      >
      <video className="z-20 fixed top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="images/animated-zed-odyssey-intro.webm" type="video/mp4" />
      </video>
      </motion.div>

      <div className='fixed z-20 w-full'>
        <div className='z-20 opacity-50 bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full'></div>
        <Waves />
      </div>
      <motion.div
        className='relative z-40 mx-auto text-center pt-40 pb-64 px-6'>
        <div className='flex flex-col gap-1 mb-8'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-5xl lg:text-6xl px-0 lg:px-40 font-extrabold leading-tight tracking-tighter lg:leading-[1.1]'>League of Legends</h1>

            <h1 className='text-5xl lg:text-8xl px-0 lg:px-40 font-extrabold leading-tight tracking-tighter lg:leading-[1.1]'>Tournoi HAQ <span className='text-theme-gradient'>Saison 2</span></h1>
            <h2 className='text-6xl font-black w-fit mx-auto  leading-tight tracking-tighter lg:leading-[1.1] my-6'>20 Janvier - 18H</h2>

            <p className='hidden max-w-[620px] mx-auto text-lg text-muted-foreground sm:text-lg'>
              Le mode ARAM de <span className="underline">League of Legends</span> en version compétitive, enrichi d&apos;un système de draft personnalisé pour une stratégie renouvelée.
            </p>
          </div>
        </div>
        <div className='flex gap-4 justify-center'>
          <Link target='_blank' href={'https://inscription.tournoishaq.ca/'}> <Button className='bg-theme-gradient text-white text-lg font-medium py-6' size={'lg'} variant="default">Inscription - Gratuit</Button></Link>
        </div>
      </motion.div>
    </motion.div>
  )
}