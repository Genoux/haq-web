import { Button } from '@/app/components/ui/button'
import { useRef, useEffect, useState } from 'react'
import Waves from './three/Waves'
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSVG from './AnimatedSVG'

export default function Header() {
  const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';
  const parallaxRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to update the scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect (adjust speed as needed)
  const parallaxShift = scrollY * 0.5;

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
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative overflow-hidden'
    >

      <div className='z-40 bg-gradient-to-t from-black to-transparent absolute top-0 left-0 h-full w-full'></div>
      <div
        className="z-30 fixed top-0 left-0 w-full h-full opacity-40" style={{
          backgroundImage: 'url("/bg.jpg")', // Update the path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .6 }}
        transition={{ duration: 2 }}
        style={{ transform: `translateY(${parallaxShift}px)` }}
      >
        <video className="z-20 absolute top-0 left-0 w-full object-cover" autoPlay loop muted>
          <source src="images/animated-zed-odyssey-intro.webm" type="video/mp4" />
        </video>
      </motion.div>
      <div className='fixed hidden z-20 w-full'>
        <div className='z-20 opacity-50 bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full'></div>
        <Waves />
      </div>
      <motion.div
        className='relative z-40 container mx-auto max-w-7xl px-6 py-32 flex-grow'>
        <div className='flex flex-col gap-1 mb-8'>
          <div className='flex flex-col'>
            <div className='w-fit'>
            <AnimatedSVG />
            </div>
            
            <div className='hidden text-theme-gradient w-fit rounded text-8xl tracking-tighter font-black uppercase'>Saison 2</div>
            <h1 className='text-4xl lg:text-8xl mt-2 px-0 lg:px-0 font-black tracking-tighter'>TOURNOI ARAM<span className='text-theme-gradient hidden'> Saison 2</span></h1>
            <h2 className='text-4xl font-black w-fit tracking-tight my-4'>20 Janvier - 18H</h2>
            <p className='max-w-xl text-xl lg:text-base text-muted-foreground'>
              Le mode ARAM de <span className="underline">League of Legends</span> en version compétitive, enrichi d&apos;un système de draft personnalisé pour une stratégie renouvelée.
            </p>
          </div>
        </div>
        <div className='flex gap-4 justify-start'>
          <Link target='_blank' href={'https://inscription.tournoishaq.ca/'}> <Button className='bg-theme-gradient text-white text-lg font-semibold py-6' size={'lg'} variant="default">Inscription - Gratuit</Button></Link>
        </div>

        <div className='mt-20'>
          <Image width={180} height={100} src="/images/league.svg" alt="Tournois HAQ" />
        </div>

      </motion.div>
    </motion.div>
  )
}