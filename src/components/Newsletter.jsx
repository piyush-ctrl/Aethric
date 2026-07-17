import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="newsletter-bg"></div>

      <motion.div
        className="newsletter-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <span className="newsletter-tag">
          JOIN THE COMMUNITY
        </span>

        <h2>
          NEVER MISS
          <br />
          A DROP.
        </h2>

        <p>
          Be the first to access limited releases,
          editorial campaigns and exclusive member-only
          collections.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
          />

          <button type="submit">

            SUBSCRIBE

            <ArrowRight size={18} />

          </button>

        </form>

        <div className="newsletter-bottom">

          <span>No spam.</span>

          <span>Only premium drops.</span>

          <span>Unsubscribe anytime.</span>

        </div>

      </motion.div>

    </section>
  );
};

export default Newsletter;