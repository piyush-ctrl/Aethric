import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-grid">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <span className="contact-tag">
            LET'S BUILD SOMETHING
          </span>

          <h2>
            HAVE AN IDEA?
            <br />
            LET'S MAKE
            <br />
            IT REAL.
          </h2>

          <p>
            Whether it's a fashion brand, portfolio,
            startup or business, I build premium digital
            experiences with speed and precision.
          </p>

        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <a
            href="mailto:hello@aethric.in"
            className="contact-card"
          >

            <div>

              <span>Email</span>

              <h3>piyushsunder07@gmail.com</h3>

            </div>

          </a>

          <div className="contact-social">

            <a
  href="https://instagram.com/piyush.roamz"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
</a>



<a
  href="https://github.com/piyush-ctrl"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;