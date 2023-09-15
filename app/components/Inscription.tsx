export default function Inscription() {
  return (
    <div 
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      className="text-black z-50"
    >
      <div className="container text-center w-full h-screen mx-auto flex flex-col gap-6 justify-center items-center">
        <h1 className="text-9xl">Inscriptions</h1>
        <p className="text-3xl">Êtes-vous majeur, classé entre Silver et Diamond la dernière saison et avez-vous une équipe complète ? Inscrivez-vous via le lien ci-dessous.</p>
        <div className="flex gap-4 w-full justify-center">
          <button className="bg-black text-white px-12 py-3 text-2xl mt-6 rounded-sm">Inscription</button>
          <button className="bg-none border-2 border-black text-black px-12 py-3 text-2xl mt-6 rounded-sm">Règlements</button>
        </div>
      </div>
    </div>
  );
}
