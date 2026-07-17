import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BrandStatement = () => {
  const section = useRef(null);

  const words = [
    "NOT",
    "MADE",
    "TO",
    "FIT",
    "IN.",
    "MADE",
    "TO",
    "BE",
    "REMEMBERED.",
  ];

  useGSAP(
    () => {
      gsap.from(".statement__title span", {
        scrollTrigger: {
          trigger: ".statement__title",
          start: "top 80%",
          end: "bottom 55%",
          scrub: 1,
        },
        opacity: 0.08,
        stagger: 0.1,
      });
    },
    {
      scope: section,
    }
  );

  return (
    <section className="statement" ref={section}>
      <span className="section-index">02 / ETHOS</span>

      <h2 className="statement__title">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={
              word === "REMEMBERED."
                ? "statement__accent"
                : ""
            }
          >
            {word}{" "}
          </span>
        ))}
      </h2>

      <div className="statement__footer">
        <span>AETHRIC / EST. 2026</span>

        <p>
          We create pieces for those who refuse to disappear into the
          room. Form becomes identity. Structure becomes expression.
        </p>
      </div>
    </section>
  );
};

export default BrandStatement;