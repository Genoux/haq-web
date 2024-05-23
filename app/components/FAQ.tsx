import React, { useState, useEffect, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
  openItemIndex: number | null;
  setOpenItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  index,
  openItemIndex,
  setOpenItemIndex,
}) => {
  const handleToggle = () => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const isOpen = index === openItemIndex;

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div
      onClick={handleToggle}
      className={clsx(
        "cursor-pointer py-6 z-50 hover:bg-zinc-500 hover:bg-opacity-10 transition-all duration-100 px-6 rounded",
        { "bg-zinc-600 bg-opacity-10": isOpen }, // Apply bg-zinc-600 when the item is open
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.1 }} // Faster animation
            className="text-md font-normal text-muted-foreground max-w-3xl mt-1" // Muted text color
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const faqData = useMemo(
    () => [
      {
        question: "L'inscription au tournoi est-elle payante?",
        answer:
          "Non, l'inscription au tournoi est gratuite. Assurez-vous d'avoir une équipe complète de 5 joueurs.",
      },
      {
        question: "Existe-t-il un prix pour les vainqueurs?",
        answer:
          "Oui, l'équipe qui remportera la saison recevra un prix en argent.",
      },
      {
        question: "Est-ce que je peux m’inscrire sans avoir d’équipe?",
        answer:
          "Non, le tournoi est exclusivement réservé aux équipes complètes, soit possédant au minimum 5 joueurs.",
      },
      {
        question: "Quels niveaux de classement peuvent participer au tournoi?",
        answer: "Tous les niveaux de classement peuvent participer !",
      },
      {
        question: "Quel est le format du tournoi?",
        answer:
          "Le tournoi se jouera en format 'best of 3' avec élimination après une défaite. Chaque compétiteur jouera au moins deux parties.",
      },
      // Add more FAQ items as needed
    ],
    [],
  );

  useEffect(() => {
    setOpenItemIndex(null);
  }, [faqData]);

  return (

      <div className="container mx-auto max-w-7xl px-6 flex-grow">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 w-full justify-center flex">
          FAQ
        </h1>
        <div className="flex gap-2 flex-col max-w-5xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              openItemIndex={openItemIndex}
              setOpenItemIndex={setOpenItemIndex}
            />
          ))}
        </div>
      </div>

  );
}
