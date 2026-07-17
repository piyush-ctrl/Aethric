const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <span className="footer-tag">
            ENGINEERED IN INDIA
          </span>

          <h2>
            AETHRIC
          </h2>

          <p>
            Minimal fashion inspired by architecture,
            engineering and timeless luxury.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <span>
              EXPLORE
            </span>

            <a href="#collection">
              COLLECTION
            </a>

            <a href="#">
              NEW ARRIVALS
            </a>

            <a href="#">
              CAMPAIGNS
            </a>

            <a href="#">
              JOURNAL
            </a>

          </div>

          <div>

            <span>
              COMPANY
            </span>

            <a href="#about">
              ABOUT
            </a>

            <a href="#">
              CONTACT
            </a>

            <a href="#">
              SHIPPING
            </a>

            <a href="#">
              RETURNS
            </a>

          </div>

          <div>

            <span>
              FOLLOW
            </span>

            <a
              href="https://instagram.com/theguywithscooty"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <a
              href="https://github.com/piyush-ctrl"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a href="#">
              LINKEDIN ↗
            </a>

          </div>

        </div>

      </div>

      <div className="footer-divider"></div>
            <div className="footer-bottom">

        <span>
          © 2026 AETHRIC. ALL RIGHTS RESERVED.
        </span>

        <span>
          DESIGNED & DEVELOPED IN INDIA
        </span>

        <span>
          BEYOND FORM.
        </span>

      </div>

      <div className="footer-watermark">
        AETHRIC
      </div>

    </footer>
  );
};

export default Footer;