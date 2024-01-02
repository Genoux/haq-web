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
    const newOpenItems = openItems.map((item, idx) => idx === index ? !item : false);
    setOpenItems(newOpenItems);
  };

  return (
    <div
      onClick={handleToggle}
      onMouseLeave={() => setHoveredIndex(null)}
      className={clsx(
        'transition-all duration-200 cursor-pointer py-3 z-50',
        { 'opacity-20': hoveredIndex !== null && hoveredIndex !== index }, inter.className
      )}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-white'>{question}</h3>
        <span>{openItems[index] ? <ChevronUp /> : <ChevronDown />}</span>
      </div>
      {openItems[index] &&
        <p className='text-md mt-1 font-normal opacity-60 text-white'>{answer}</p>
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
      "answer": "Oui, l'équipe qui remportera la saison recevra un certain nombre de RP pour chaque joueur de son équipe."
    },
    {
      "question": "Est-ce que je peux m’inscrire sans avoir d’équipe?",
      "answer": "Non, le tournoi est exclusivement réservé aux équipes complètes, soit possédant au minimum 5 joueurs."
    },
    {
      "question": "Quels niveaux de classement peuvent participer au tournoi?",
      "answer": "Tous les niveaux de classement peuvent participer!"
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
    <div className='max-w-5xl mx-auto relative z-20 overflow-hidden w-full py-12'>
      <h1 className='text-5xl font-bold tracking-tighter mb-6'>FAQs</h1>
      <div className=''>
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
