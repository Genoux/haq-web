import clsx from 'clsx';

export default function About() {
  return (
    <div className="container mx-auto text-white flex flex-col gap-4 md:flex-row md:gap-12 relative justify-center items-center pt-40 pb-56">
      <h1 className="w-full text-9xl">HAQ?</h1>
      <p className={clsx("text-3xl font-bold md:text-right")}>C’est le premier tournoi d’Aram au Québec. Le même mode de jeu, mais revisité pour vous offrir une expérience plus compétitive. Format de double élimination place limitée et un prix à gagner!</p>
    </div>
  )
}