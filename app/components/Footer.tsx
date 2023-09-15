import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12 w-full justify-center py-48">
      <Image width={390} height={390} src="/s1-logo.svg" alt="Tournois HAQ" />
      <div className='flex gap-4'>
        <Facebook className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' />
        <Instagram className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' />
        <Twitter className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' />
        <Twitch className=' cursor-pointer transition-all hover:opacity-25 hover:scale-95' />
      </div>
      <div className={clsx(
        'flex gap-12 text-sm font-medium', 
        inter.className
      )}>
        <Link href="/" className='cursor-pointer transition-all hover:opacity-50'>
        Privacy Policy
        </Link>
        <Link href="/" className='cursor-pointer transition-all hover:opacity-50'>
        Terms and Conditions
        </Link>
        <Link href="/" className='cursor-pointer transition-all hover:opacity-50'>
        Reglements
        </Link>
      </div>
    </div>

  )
}