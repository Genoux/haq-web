import Button from '@/app/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function AboutDraft() {

  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const parallaxRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      const { clientX: x, clientY: y } = e;
      const { innerWidth: width, innerHeight: height } = window;

      const xPos = x / width - 0.5;
      const yPos = y / height - 0.5;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${xPos * -50.0}px, ${yPos * -50.0}px)`;
      }

      if (parallaxRef2.current) {
        parallaxRef2.current.style.transform = `translate(${xPos * -80.0}px, ${yPos * -80.0}px)`;
      }

      if (parallaxRef3.current) {
        parallaxRef3.current.style.transform = `translate(${xPos * -70.0}px, ${yPos * -70.0}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div
      className="text-center flex flex-col w-full text-white mt-56 mb-0 lg:mb-24 h-screen relative z-20 "
    >
      <div className='container mb-6 lg:mb-16'>
        <h1 className="text-7xl lg:text-8xl">Custom draft pick/ban</h1>
        <p className="text-3xl px-0 lg:px-12 font-normal mt-6">{'Nous avons développé un système de "pick & ban" personnalisé pour le mode ARAM, où les deux équipes partagent un pool de 30 champions aléatoires !'}</p>
      </div>
      <div
        ref={parallaxRef}
        className='mx-auto relative z-40'
      >
        <Image
          width={1220}  // The original width of your image
          height={900}  // The original height of your image
          quality={80}
          src="/images/demo-draft.png" alt="Aram draft pick" />
      </div>
    </div>
  );
}
