import Button from '@/app/components/Button'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Header() {
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
      ref={parallaxRef} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full pt-0 mt-0 text-left container z-50 relative" >
      <div className="flex flex-col items-center justify-center w-full pt-12 sm:pt-24 pb-32 sm:pb-52 mt-0 text-center container">
        <div className='flex flex-col gap-0 text-7xl md:text-9xl'>
          <div className='bg-primary py-2 px-12 text-5xl text-secondary mx-auto mb-8 w-fit h-full'>SAISON 1</div>
          <h1 className="text-primary font-bold w-full lg:whitespace-nowrap">LEAGUE OF LEGENDS</h1>
          <h2 className="text-white font-bold w-full">TOURNOI ARAM</h2>
          <p className='text-4xl md:text-5xl w-full mt-10 mb-6'>Date à déterminer</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6">
          <Button text="Inscription" url="https://inscription.tournoishaq.ca/" size="lg" />
          <Button text="Nous contacter" url="mailto:contact@tournoishaq.ca" variant="bg-white" size="lg" />
        </div>
      </div>
    </motion.div>
  )
}