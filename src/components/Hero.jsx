function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Build Better Digital Products</h1>
      <p>
        We help businesses grow with modern, scalable, and user-friendly web
        solutions.
      </p>
      <button style={styles.btn}>Contact Us</button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor:"#6fcee1ff",
  },
  btn: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "#f2f2f3ff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Hero;