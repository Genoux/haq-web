import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { LogoText } from "haq-assets";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control the visibility of the mobile menu
  const variants = {
    open: {
      display: "flex",
      opacity: 1,
      top: 56,
      transition: { duration: 0.1 },
      ease: [0.585, 0.535, 0.23, 0.85],
    },
    closed: {
      display: "none",
      opacity: 0,
      top: 50,
      transition: { duration: 0.15 },
      ease: [0.585, 0.535, 0.23, 0.85],
    },
  };

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    setIsScrolled(position > 0); // Set true if scrolled down, false if at the top
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event: { target: Node | null }) => {
    // Check if the clicked area is outside the menu and not the button
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      mobileMenuButtonRef.current &&
      !mobileMenuButtonRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", (event: MouseEvent) =>
      handleClickOutside(event as unknown as { target: Node | null }),
    );
    return () => {};
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, isMobileMenuOpen]); // Dependency array ensures effect runs when isMobileMenuOpen changes

  return (
    <nav
      className={`fixed top-0 z-50 w-full ${isScrolled ? "border-b border-border/40" : ""} bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between w-full text-sm">
        <div className="flex flex-row items-center h-full justify-between w-full md:w-fit">
          <LogoText size={180} />
          <button
            ref={mobileMenuButtonRef}
            onClick={toggleMobileMenu}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 w-fit justify-end">
          <div className="flex gap-0">
            <Link
              target="_blank"
              href="https://reglements.tournoishaq.ca"
              passHref
            >
              <Button
                variant="ghost"
                size={"sm"}
                className="text-foreground/60 hover:bg-transparent"
              >
                Règlements
              </Button>
            </Link>
            <Link target="_blank" href="mailto:contact@tournoishaq.ca" passHref>
              <Button
                variant="ghost"
                size={"sm"}
                className="text-foreground/60 hover:bg-transparent"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
          <Link
            target="_blank"
            href="https://inscription.tournoishaq.ca/"
            passHref
          >
            <Button
              variant="default"
              size={"sm"}
              className="flex items-center gap-1"
            >
              Inscription
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="absolute w-full md:hidden top-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 flex flex-col gap-1 p-3"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={variants}
          ref={mobileMenuRef}
        >
          <Link
            target="_blank"
            href="https://reglements.tournoishaq.ca"
            passHref
          >
            <span className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-zinc-500 block transition-colors hover:text-foreground/80 text-foreground/60">
              Reglements
            </span>
          </Link>
          <Link target="_blank" href="mailto:contact@tournoishaq.ca" passHref>
            <span className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-zinc-500 block transition-colors hover:text-foreground/80 text-foreground/60">
              Nous contacter
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://inscription.tournoishaq.ca/"
            className="mt-2 pt-4 border-t"
            passHref
          >
            <Button
              variant="default"
              size={"sm"}
              className=" flex items-center gap-1 w-full"
            >
              Inscription <ExternalLink className="hidden" size={15} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
