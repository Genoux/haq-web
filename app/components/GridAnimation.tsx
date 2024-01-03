import { motion } from 'framer-motion';

export default function GridAnimation() {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Define the animation duration and delay
  const duration = 3;
  const delay = 1;

  return (
    <div className='grid grid-cols-3 z-50 absolute top-0 left-0 h-full w-full'>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className='border-r border-white border-opacity-10 w-full h-full'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
