import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: `-100vw`,
    transition: { ease: 'easeInOut' },
  },
};
const Order = ({ pizza, setShowModel }) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const showTheModal = setTimeout(() => {
      setShowModel(true);
    }, 5000);

    return () => {
      clearTimeout(showTheModal);
    };
  }, [setShowModel]);
  useEffect(() => {
    const hideTitle = setTimeout(() => {
      setShowTitle(false);
    }, 4000);

    return () => {
      clearTimeout(hideTitle);
    };
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={'exit'}
      className="container order"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{
              y: -1000,
              rotateX: 360 * 10,
              offsetRotate: 45,
              transition: { duration: 3 },
            }}
          >
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map(topping => (
        <motion.div variants={childVariant} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
