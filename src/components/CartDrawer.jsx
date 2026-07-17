import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const CartDrawer = ({
  isOpen,
  cart,
  onClose,
  onIncrease,
  onDecrease,
}) => {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 4000
      ? 0
      : subtotal >= 2000
      ? 99
      : 199;

  const total = subtotal + shipping;

  return (
    <AnimatePresence>

      {isOpen && (

        <>

          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="cart-header">

              <h2>

                <ShoppingBag size={22} />

                Cart

              </h2>

              <button onClick={onClose}>

                <X size={24} />

              </button>

            </div>

            <div className="cart-body">

              {cart.length === 0 ? (

                <div className="empty-cart">

                  <ShoppingBag size={70} />

                  <h3>Your cart is empty</h3>

                  <p>
                    Discover premium essentials crafted
                    for timeless style.
                  </p>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">

                      <h4>{item.name}</h4>

                      <span>{item.category}</span>

                      <strong>
                        ₹{item.price.toLocaleString()}
                      </strong>

                      <div className="qty">

                        <button
                          onClick={() =>
                            onDecrease(item.id)
                          }
                        >
                          <Minus size={16} />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            onIncrease(item.id)
                          }
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

            {cart.length > 0 && (

              <div className="cart-footer">

                <div className="cart-row">

                  <span>Subtotal</span>

                  <strong>
                    ₹{subtotal.toLocaleString()}
                  </strong>

                </div>

                <div className="cart-row">

                  <span>Shipping</span>

                  <strong>

                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping}`}

                  </strong>

                </div>

                <div className="cart-total">

                  <span>Total</span>

                  <strong>
                    ₹{total.toLocaleString()}
                  </strong>

                </div>

                <button className="checkout-btn">

                  Secure Checkout

                </button>

              </div>

            )}

          </motion.aside>

        </>

      )}

    </AnimatePresence>
  );
};

export default CartDrawer;