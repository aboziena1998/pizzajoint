import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const Model = ({ showModel, setShowModel }) => {
  return (
    <AnimatePresence mode="wait">
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>want to make another pizza</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
