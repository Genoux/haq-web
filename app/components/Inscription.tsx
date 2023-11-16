import Button from '@/app/components/Button'

export default function Inscription() {
  const isNeutral = process.env.NEXT_PUBLIC_NEUTRAL === 'true';

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="text-black z-50 relative"
      >
        <div className="container text-center w-full py-56 mx-auto flex flex-col gap-6 justify-center items-center">
          {!isNeutral ? (
            <h1 className="text-8xl sm:text-9xl">Inscriptions</h1>
          ) : <h1 className="text-8xl sm:text-9xl">Inscription fermée</h1>}

          {!isNeutral ? (
            <p className="text-3xl px-0 lg:px-40 mb-6">Inscription gratuite et ouverte à tous - Inscrivez-vous dès maintenant!</p>
          ) : <p className="text-3xl px-0 lg:px-40 mb-6">{"Nous sommes désolés, mais nous n'acceptons pas de nouvelles inscriptions pour le moment. Veuillez revenir plus tard."}</p>
          }
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {!isNeutral &&
              <Button text="Inscription - Gratuit" url="https://inscription.tournoishaq.ca/" variant="bg-black" size="lg" />
            }
            <Button text="Règlements" url="https://reglements.tournoishaq.ca" variant="outline-black" size="lg" />
          </div>
        </div>
      </div>
    </>
  );
}
