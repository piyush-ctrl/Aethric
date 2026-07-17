import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import products from "../data/products";

const FeaturedProducts = ({ onAddToCart }) => {
  return (
    <section className="featured" id="collection">

      <div className="featured-header">

        <span className="section-tag">
          COLLECTION / 2026
        </span>

        <h2>

          DESIGNED TO
          <br />
          OUTLAST TRENDS.

        </h2>

        <p>

          Every garment is engineered around proportion,
          precision and timeless silhouettes.

        </p>

      </div>

      <div className="featured-grid">

        {products.map((product, index) => (

          <motion.article

            className="product"

            key={product.id}

            initial={{
              opacity:0,
              y:80
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8,
              delay:index*.12
            }}

          >

            <div className="product-image">

              <img

                src={product.image}

                alt={product.name}

                className="front"

              />

              <img

                src={product.hoverImage}

                alt={product.name}

                className="back"

              />

              <button

                className="quick-add"

                onClick={() => onAddToCart(product)}

              >

                QUICK ADD

                <ArrowUpRight size={18}/>

              </button>

            </div>

            <div className="product-info">

              <div>

                <h3>{product.name}</h3>

                <span>{product.category}</span>

              </div>

              <strong>

                ₹{product.price.toLocaleString()}

              </strong>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;