import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          className="loader"
          initial={{ opacity:1 }}
          exit={{
            opacity:0,
            transition:{
              duration:.8
            }
          }}
        >

          <motion.h1
            initial={{
              opacity:0,
              y:60
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1
            }}
          >

            AETHRIC

          </motion.h1>

          <motion.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
              delay:.5
            }}
          >

            ENGINEERED FOR THE UNSEEN

          </motion.span>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default Loader;