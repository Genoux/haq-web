import Image from 'next/image'
import { useEffect, useState } from 'react';
import { MoveDown } from 'lucide-react';
import GridAnimation from '@/app/components/GridAnimation';
import { motion } from 'framer-motion';

export default function AboutDraft() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const currentScroll = window.scrollY;
      const newOpacity = Math.min(1, currentScroll / maxScroll);

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-black relative z-40 w-full pt-16'>
      <div className=' container mx-auto max-w-7xl px-6 flex-grow'>
        <div className="items-center mx-auto bg-black text-center flex flex-col w-full text-white">
          <div className='container max-w-5xl justify-center items-center mt-20 mb-12 z-40 flex flex-col gap-4'>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Custom draft pick/ban</h1>
            <p className="text-md md:text-xl font-medium">Nous avons développé un système de <u>pick & ban</u> <span className='text-muted-foreground font-normal'>personnalisé pour le mode ARAM, où les deux équipes partagent un pool de 30 champions aléatoires!</span></p>
          </div>
        </div>
        <motion.div
          style={{ opacity }}
          transition={{ duration: 0.2 }} className='relative'>
          <Image
            width={1920}  // The original width of your image
            height={900}  // The original height of your image
            quality={100}
            src="/images/draft.png" alt="Aram draft pick" className='z-50 w-full max-w-5xl mx-auto border rounded-xl' />
          <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 left-0 h-full w-full'>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
