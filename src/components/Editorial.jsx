import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Editorial = () => {
  return (
    <section className="editorial">

      <div className="editorial-container">

        <motion.div
          className="editorial-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <span className="editorial-tag">
            CAMPAIGN / 2026
          </span>

          <h2>

            CLOTHING
            <br />

            SHOULD
            <br />

            SPEAK
            <br />

            BEFORE
            <br />

            YOU DO.

          </h2>

          <p>

            AETHRIC creates silhouettes inspired by
            engineering, architecture and timeless
            craftsmanship.

            Every piece is designed to feel like
            wearable sculpture.

          </p>

          <button className="editorial-btn">

            VIEW CAMPAIGN

            <ArrowUpRight size={18}/>

          </button>

        </motion.div>

        <motion.div
          className="editorial-right"
          initial={{ opacity:0, x:100 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:1 }}
        >

          <div className="editorial-large">

            <img
              src="/images/editorial/editorial1.jpg
              "
              alt="Editorial Campaign"
            />

          </div>

          <div className="editorial-small">

            <img
              src="/images/editorial/editorial2.jpg"
              alt="Editorial Portrait"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Editorial;