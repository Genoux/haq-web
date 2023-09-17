import Button from '@/app/components/Button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect } from 'react'



export default function Header() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect run"); // Debugging log

    const handleMouseMove = (e: MouseEvent) => {
      console.log("Mouse moved"); // Debugging log

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
      className="flex flex-col items-start justify-center w-full h-screen  pt-0 mt-0 text-left container z-50 relative" >
      <div className="flex flex-col items-start justify-center w-full h-screen  pt-0 mt-0 text-left container">
        <div className='flex flex-col gap-0 text-8xl md:text-9xl'>
          <h1 className="text-primary font-bold w-full ">LEAGUE OF LEGENDS</h1>
          <h2 className="text-white font-bold w-full">TOURNOIS ARAM</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-start mt-6">
          <Button text="Inscription" url="https://inscription.tournoishaq.ca/" variant="bg-yellow" size="lg" />
          <Button text="Contacter" url="mailto:contact@tournoishaq.ca" variant="bg-white" size="lg" />
        </div>
      </div>

    </motion.div>
  )
}