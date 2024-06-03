import Link from "next/link";
import clsx from "clsx";
import { Facebook, Instagram, Twitch } from "lucide-react";
import { Logo } from "haq-assets";

export default function Footer() {
  return (
    <div className="bg-black z-40 relative overflow-hidden flex flex-col items-center justify-end h-full">
      <div className="flex flex-col gap-6 justify-center items-center pb-24">
        <Logo size={70} className="mb-12" />
        <div className="flex">
          <Link href={"https://www.twitch.tv/tournois_haq"} target="_blank">
            <Twitch className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0" />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100093560062096"}
            target="_blank"
          >
            <Facebook className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0" />
          </Link>
          <Link
            href={"https://www.instagram.com/tournois_haq/"}
            target="_blank"
          >
            <Instagram className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0" />
          </Link>
        </div>
        <div
          className={clsx(
            "flex flex-col items-center sm:flex-row gap-6 text-sm font-base",
          )}
        >
          <Link
            target="_blank"
            href="https://inscription.tournoishaq.ca/privacy-policy"
            className="cursor-pointer transition-all hover:opacity-50"
          >
            Politique de confidentialité
          </Link>
          <Link
            target="_blank"
            href="https://inscription.tournoishaq.ca/terms-and-conditions"
            className="cursor-pointer transition-all hover:opacity-50"
          >
            Termes et conditions
          </Link>
          <Link
            target="_blank"
            href="https://reglements.tournoishaq.ca"
            className="cursor-pointer transition-all hover:opacity-50"
          >
            Règlements
          </Link>
        </div>
        <p className="mt-6 text-xs">
          Howling Abyss Québec © 2024 Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
