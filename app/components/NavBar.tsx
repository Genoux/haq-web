import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/app/components/ui/button";
import { Facebook, Instagram, Twitch, ExternalLink, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control the visibility of the mobile menu
  const variants = {
    open: { display: 'flex', opacity: 1, top: 50, transition: { duration: 0.1 }, ease: [0.585, 0.535, 0.23, 0.85] },
    closed: { display: 'none', opacity: 0, top: 60, transition: { duration: 0.25 }, ease: [0.585, 0.535, 0.23, 0.85] }
  };

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);


  const handleClickOutside = (event: { target: Node | null; }) => {
    // Check if the clicked area is outside the menu and not the button
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
      mobileMenuButtonRef.current && !mobileMenuButtonRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleResize = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', (event: MouseEvent) => handleClickOutside(event as unknown as { target: Node | null; }));
    return () => {
    };
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]); // Dependency array ensures effect runs when isMobileMenuOpen changes

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 h-14 flex items-center justify-between w-full text-sm'>

        {/* Logo and Hamburger Menu Icon */}
        <div className='flex flex-row items-center h-full justify-between w-full sm:w-fit'>
          <Image width={180} height={100} src="/logo.svg" alt="Tournois HAQ" />
          <button ref={mobileMenuButtonRef} onClick={toggleMobileMenu} className='sm:hidden'>
            <Menu className='w-6 h-6' />
          </button>
        </div>

        {/* Main Links and Social Icons */}
        <div className='hidden sm:flex items-center gap-2 w-fit justify-end'>
          <Link target='_blank' href='https://reglements.tournoishaq.ca' passHref><Button variant="ghost" size={"sm"} className='text-foreground/60'>Règlements</Button></Link>
          <Link target='_blank' href='mailto:contact@tournoishaq.ca' passHref><Button variant="ghost" size={"sm"} className='text-foreground/60'>Nous contacter</Button></Link>
          <Link target='_blank' href='https://inscription.tournoishaq.ca/' passHref><Button variant="default" size={"sm"} className='flex items-center gap-1'>Inscription <ExternalLink className='hidden' size={15} /></Button></Link>
          <div className='flex'>
            <Link href={'https://www.twitch.tv/tournois_haq'} target="_blank"><Twitch className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
            <Link href={'https://www.facebook.com/profile.php?id=100093560062096'} target="_blank"><Facebook className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
            <Link href={'https://www.instagram.com/tournois_haq/'} target="_blank"><Instagram className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="absolute md:hidden top-12 right-4 rounded-md border bg-background z-50 flex flex-col gap-1 p-3 w-1/2"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={variants}
          ref={mobileMenuRef}
        >
          <Link target='_blank' href='https://reglements.tournoishaq.ca' passHref><span className='p-2 rounded-lg hover:bg-opacity-10 hover:bg-zinc-500 block transition-colors hover:text-foreground/80 text-foreground/60'>Reglements</span></Link>
          <Link target='_blank' href='mailto:contact@tournoishaq.ca' passHref><span className='p-2 rounded-lg hover:bg-opacity-10 hover:bg-zinc-500 block transition-colors hover:text-foreground/80 text-foreground/60'>Nous contacter</span></Link>
          <Link target='_blank' href='https://inscription.tournoishaq.ca/' className='mt-2 pt-4 border-t' passHref><Button variant="default" size={"sm"} className=' flex items-center gap-1 w-full'>Inscription <ExternalLink className='hidden' size={15} /></Button></Link>
          <div className='flex justify-center pt-4'>
            <Link href={'https://www.twitch.tv/tournois_haq'} target="_blank"><Twitch className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
            <Link href={'https://www.facebook.com/profile.php?id=100093560062096'} target="_blank"><Facebook className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
            <Link href={'https://www.instagram.com/tournois_haq/'} target="_blank"><Instagram className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
