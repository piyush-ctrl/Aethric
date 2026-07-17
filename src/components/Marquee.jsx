const Marquee = () => {
  const text =
    "AETHRIC / BEYOND FORM / DESIGNED IN INDIA / STRUCTURED SILHOUETTES / ";

  return (
    <section className="marquee">
      <div className="marquee__track">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  );
};

export default Marquee;