import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-gradient"></div>

      <div className="hero-grid"></div>

      <div className="hero-noise"></div>

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="hero-label">
            AETHRIC® 2026
          </span>

          <h1>
            <span>WEAR</span>

            <span className="outline">
              THE
            </span>

            <span>UNSEEN.</span>
          </h1>

          <p>
            Precision tailored silhouettes inspired by
            architecture, engineering and timeless
            luxury.
          </p>

          <button
            className="hero-btn"
            onClick={scrollToCollection}
          >
            DISCOVER COLLECTION

            <ArrowDownRight size={18} />
          </button>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-image">

  <img
    src="/images/hero/hero.jpg"
    alt="Aethric Campaign"
  />

  <div className="image-shadow"></div>

</div>
        </motion.div>

      </div>

      <div className="hero-footer">

        <span>ENGINEERED IN INDIA</span>

        <span>EST. 2026</span>

      </div>
    </section>
  );
};

export default Hero;