import { useEffect, useState } from "react";
import Lenis from "lenis";

import Loader from "./components/Loader";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedProducts from "./components/FeaturedProducts";
import Editorial from "./components/Editorial";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };

  }, []);

  useEffect(() => {

    document.body.style.overflow = cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  }, [cartOpen]);

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

    setCartOpen(true);

  };

  const increaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>

      <Loader loading={loading} />

      <Announcement />

      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>

        <Hero />

        <Marquee />

        <FeaturedProducts
          onAddToCart={addToCart}
        />

        <Editorial />

        <About />

        <Newsletter />

        <Contact />

      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />

    </>
  );
}

export default App;