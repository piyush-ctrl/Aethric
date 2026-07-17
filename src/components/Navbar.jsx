import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const Navbar = ({ cartCount = 0, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <button
          className="nav-icon"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={18} />
          <span>MENU</span>
        </button>

        <a href="/" className="logo">
          AETHRIC
        </a>

        <div className="nav-right">

          <button className="icon-btn">
            <Search size={18} />
          </button>

          <button
            className="icon-btn cart-btn"
            onClick={onCartOpen}
          >
            <ShoppingBag size={18} />

            <span className="cart-count">
              {cartCount}
            </span>

          </button>

        </div>

      </header>

      <div
        className={`mobile-menu ${
          mobileOpen ? "mobile-open" : ""
        }`}
      >

        <button
          className="close-btn"
          onClick={() => setMobileOpen(false)}
        >
          <X size={28} />
        </button>

        <nav>

          <a href="#">Collection</a>

          <a href="#">New Arrivals</a>

          <a href="#">Editorial</a>

          <a href="#">Archive</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </nav>

      </div>
    </>
  );
};

export default Navbar;