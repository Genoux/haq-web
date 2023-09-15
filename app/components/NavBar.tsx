import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="container mx-auto py-2 flex justify-between items-center text-white">
      <Image width={250} height={100} src="/logo.svg" alt="Tournois HAQ" />
      <div className="menu flex items-center space-x-12">
        <Link href="/" className="text-white">Règlements</Link>
        <Link href="/" className="text-white">Contact</Link>
        <button className="bg-primary text-secondary px-5 py-1 text-lg">Inscription</button>
      </div>
    </nav>
  )
}
