import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/app/components/ui/button";
import { Facebook, Instagram, Twitch, ExternalLink, Menu } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 h-14 flex items-center justify-between text-sm'>
        
        {/* Logo and Hamburger Menu Icon */}
        <div className='flex items-center gap-6'>
          <Image width={160} height={100} src="/logo.svg" alt="Tournois HAQ" />
          <div className='sm:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </div>

        {/* Main Links and Social Icons */}
        <div className='hidden sm:flex items-center gap-6'>
          <Link href='https://reglements.tournoishaq.ca' passHref><span className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>Reglements</span></Link>
          <Link href='mailto:contact@tournoishaq.ca' passHref><span className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>Contact</span></Link>
          <Link href='https://inscription.tournoishaq.ca/' passHref><Button variant="default" size={"sm"} className='flex items-center gap-1'>Inscription <ExternalLink className='hidden' size={15} /></Button></Link>
          <Link href='https://www.twitch.tv/tournois_haq' passHref><span className='icon-style'><Twitch /></span></Link>
          <Link href='https://www.facebook.com/profile.php?id=100093560062096' passHref><span className='icon-style'><Facebook /></span></Link>
          <Link href='https://www.instagram.com/tournois_haq/' passHref><span className='icon-style'><Instagram /></span></Link>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute sm:hidden top-14 left-0 w-full bg-background p-4 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link href='https://reglements.tournoishaq.ca' passHref><span className='block transition-colors hover:text-foreground/80 text-foreground/60'>Reglements</span></Link>
          <Link href='mailto:contact@tournoishaq.ca' passHref><span className='block transition-colors hover:text-foreground/80 text-foreground/60'>Contact</span></Link>
          <Link href='https://inscription.tournoishaq.ca/' passHref><span className='block transition-colors hover:text-foreground/80 text-foreground/60'>Inscription</span></Link>
        </div>
      </div>
    </nav>
  );
}
