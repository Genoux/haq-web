import Button from '@/app/components/Button'
import Link from 'next/link'



export default function Inscription() {
  return (
    <div 
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      className="text-black z-50 relative"
    >
      <div className="container text-center w-full h-screen mx-auto flex flex-col gap-6 justify-center items-center">
        <h1 className="text-8xl sm:text-9xl">Inscriptions</h1>
        <p className="text-3xl px-0 lg:px-40 mb-6">{"La date sera annoncée très bientôt, restez à l'affût"}</p>
        {/* <p className="text-3xl px-0 lg:px-40 mb-6">Inscription gratuite et ouverte à tous - Inscrivez-vous dès maintenant!</p> */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button text="Inscription" url="https://inscription.tournoishaq.ca/" variant="disabled" size="lg" />
          <Button text="Règlements" url="https://reglements.tournoishaq.ca" variant="outline-black" size="lg" />
        </div>
      </div>
    </div>
  );
}
