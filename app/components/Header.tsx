import { Button } from '@/app/components/ui/button'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

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
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="sm:pt-24 pb-32 sm:pb-5">
      <div className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
        <div className='flex flex-col gap-2 mb-6 text-center'>
          <h1 className='text-center text-theme-gradient text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>Tournois HAQ Saison 2</h1>
          <p className='max-w-[750px] text-center text-lg sm:text-xl'>Lorem ipsum dolor sit amet consectetur. Consectetur in eu elementum malesuada massa vitae sapien.</p>
        </div>
        <Button variant="default" size={"lg"} className=''>Inscription</Button>
      </div>
    </motion.div>
  )
}