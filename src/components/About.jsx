import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity:0, x:-80 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:1 }}
        >

          <span className="about-tag">
            OUR PHILOSOPHY
          </span>

          <h2>

            BUILT FOR
            <br />

            THOSE WHO
            <br />

            VALUE
            <br />

            SIMPLICITY.

          </h2>

        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }}
          transition={{ duration:1 }}
        >

          <p>

            AETHRIC is inspired by architecture,
            engineering and timeless silhouettes.

            We design garments that ignore trends
            and focus on proportion, quality and
            longevity.

          </p>

          <p>

            Every collection is intentionally small,
            allowing every piece to receive the same
            attention to craftsmanship.

          </p>

          <div className="stats">

            <div>

              <h3>04</h3>

              <span>Collections</span>

            </div>

            <div>

              <h3>100%</h3>

              <span>Premium Fabric</span>

            </div>

            <div>

              <h3>2026</h3>

              <span>Founded</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;