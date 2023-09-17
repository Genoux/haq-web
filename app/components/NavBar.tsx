import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { Bai_Jamjuree } from 'next/font/google';
import clsx from 'clsx';
const bai = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});


export default function NavBar() {
  return (
    <nav className={clsx('z-50 relative container mx-auto py-2 flex flex-col gap-6 sm:flex-row sm:gap-0 justify-between items-center text-white font-bold text-sm uppercase', bai.className)}>
      <Image width={250} height={100} src="/logo.svg" alt="Tournois HAQ" />
      <div className="menu flex items-center space-x-6">
        <Link target='_blank' href="https://reglements.tournoishaq.ca" className="text-white">Règlements</Link>
        <Link target='_blank' href={'mailto:contact@tournoishaq.ca'} className="text-white">Contact</Link>
        <Button text="Inscription" url="https://inscription.tournoishaq.ca/" variant="bg-yellow" size="md" />
      </div>
    </nav>
  )
}
