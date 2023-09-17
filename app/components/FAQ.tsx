import React, { useState, useEffect, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
  openItems: boolean[];
  setOpenItems: React.Dispatch<React.SetStateAction<boolean[]>>;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index, openItems, setOpenItems, hoveredIndex, setHoveredIndex }) => {

  const handleToggle = () => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div
      onClick={handleToggle}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={clsx(
        'transition-all duration-200 cursor-pointer py-6 z-50',
        { 'opacity-20': hoveredIndex !== null && hoveredIndex !== index }, inter.className
      )}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-bold pr-12 text-white'>{question}</h3>
        <span>{openItems[index] ? <ChevronUp /> : <ChevronDown />}</span>
      </div>
      {openItems[index] &&
        <p className='text-lg mt-3 font-normal opacity-60 text-white'>{answer}</p>
      }
    </div>
  );
};

export default function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<boolean[]>([]);
  const faqData = useMemo(() => [
    {
      "question": "L'inscription au tournoi est-elle payante?",
      "answer": "Non, l'inscription au tournoi est gratuite. Assurez-vous d'avoir une équipe complète de 5 joueurs."
    },
    {
      "question": "Existe-t-il un prix pour les vainqueurs?",
      "answer": "Oui, l'équipe qui sera vainqueur de la saison gagnera 1380 RP pour chaque joueur de son équipe."
    },
    {
      "question": "Est-ce que je peux m’inscrire sans avoir d’équipe?",
      "answer": "Non, le tournoi est exclusivement réservé aux équipes complètes, soit possédant au minimum 5 joueurs."
    },
    {
      "question": "J'ai atteint le rang Master pendant la saison 7, mais depuis, je n'ai pas dépassé le rang Diamond 2. Suis-je éligible pour le tournoi?",
      "answer": "Non, si vous avez déjà été classé au-delà de Diamond 1 dans n'importe quelle saison, vous n'êtes pas éligible pour participer au tournoi."
    },
    {
      "question": "J'ai été classé Bronze jusqu'à la dernière saison, mais cette année je suis Silver. Puis-je participer au tournoi?",
      "answer": "Oui, tant que vous êtes classé au-dessus de Bronze dans la saison actuelle, vous êtes éligible pour le tournoi."
    },
    {
      "question": "Quel est le format du tournoi?",
      "answer": "Le tournoi se déroulera sous forme de double élimination. Cela signifie qu'il y aura un bracket des gagnants et un bracket des perdants, vous garantissant au minimum deux matchs à jouer."
    }
  ]
    , []);

  useEffect(() => {
    setOpenItems(new Array(faqData.length).fill(false));
  }, [faqData]);

  return (
    <div className='container w-full mx-auto pb-48 pt-24'>
      <h1 className='text-9xl mb-12 mt-32'>FAQs</h1>
      <div className='grid grid-cols-1 gap-2'>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            openItems={openItems}
            setOpenItems={setOpenItems}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
