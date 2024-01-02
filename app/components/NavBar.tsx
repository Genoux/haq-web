import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Facebook, Instagram, Twitch } from 'lucide-react';

const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';

export default function NavBar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container h-14 flex flex-col gap-6 sm:flex-row sm:gap-0 justify-between text-sm'>
        <div className='flex items-center gap-6'>
          <Image width={160} height={100} src="/logo.svg" alt="Tournois HAQ" />
          <Link href={''} className='transition-colors hover:text-foreground/80 text-foreground/60'>Reglements</Link>
          <Link target='_blank' href={'mailto:contact@tournoishaq.ca'} className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</Link>
        </div>
        <div className="menu flex items-center gap-2 cursor-pointer">
          <Button variant="default" size={"sm"}>Inscription</Button>
          <div>
          <Link href={'https://www.twitch.tv/tournois_haq' } target="_blank"><Twitch className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
          <Link href={'https://www.facebook.com/profile.php?id=100093560062096'} target="_blank"><Facebook className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
          <Link href={'https://www.instagram.com/tournois_haq/'} target="_blank"><Instagram className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0' /></Link>
        </div>
        </div>
      </div>
    </nav>
  )
}
