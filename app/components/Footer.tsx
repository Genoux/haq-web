import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Waves from '@/app/components/three/Waves'


export default function Footer() {
  return (
    <>

      <div className="container mx-auto flex flex-col items-center gap-12 w-full justify-center py-48">
      <div className=''>
        <Waves />
      </div>
        <Image width={390} height={390} src="/s1-logo.svg" alt="Tournois HAQ" />
        <div className='flex gap-4'>
          <Link href={'https://www.facebook.com/profile.php?id=100093560062096'} target="_blank"><Facebook className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' /></Link>
          <Link href={'https://www.instagram.com/tournois_haq/'} target="_blank"><Instagram className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' /></Link>
          <Twitch className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' />
        </div>
        <div className={clsx(
          'flex flex-col items-center sm:flex-row gap-12 text-sm font-medium',
          inter.className
        )}>
          <Link target="_blank" href="https://inscription.tournoishaq.ca/privacy-policy" className='cursor-pointer transition-all hover:opacity-50'>
            Politique de confidentialité
          </Link>
          <Link target="_blank" href="https://inscription.tournoishaq.ca/terms-and-conditions" className='cursor-pointer transition-all hover:opacity-50'>
            Termes et conditions
          </Link>
          <Link target="_blank" href="https://reglements.tournoishaq.ca" className='cursor-pointer transition-all hover:opacity-50'>
            Règlements
          </Link>
        </div>
      </div>
    </>
  )
}