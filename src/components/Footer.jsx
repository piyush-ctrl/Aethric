const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="/" className="footer__logo">
          AETHRIC
        </a>

        <div className="footer__links">
          <div>
            <span>EXPLORE</span>

            <a href="#collection">COLLECTION</a>
            <a href="#collection">NEW FORMS</a>
            <a href="#collection">ARCHIVE</a>
          </div>

          <div>
            <span>INFORMATION</span>

            <a href="#about">ABOUT</a>
            <a href="#shipping">SHIPPING</a>
            <a href="#returns">RETURNS</a>
          </div>

          <div>
            <span>FOLLOW</span>

            <a
  href="https://instagram.com/piyush.roamz"
  target="_blank"
  rel="noopener noreferrer"
>
  INSTAGRAM ↗
</a>
            
          </div>
        </div>
      </div>

      <div className="footer__wordmark">
        AETHRIC
      </div>

      <div className="footer__bottom">
        <span>© AETHRIC 2026</span>

        <span>DESIGNED IN INDIA</span>

        <span>BEYOND FORM.</span>
      </div>
    </footer>
  );
};

export default Footer;