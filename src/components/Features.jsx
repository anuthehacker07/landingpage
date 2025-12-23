function Features() {
  return (
    <section style={styles.section}>
      <h2>Why Choose Us</h2>
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>Fast Performance</h3>
          <p>
            Optimized and lightweight solutions that ensure smooth user
            experience.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Responsive Design</h3>
          <p>
            Designs that adapt perfectly across mobile, tablet, and desktop
            devices.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Clean Code</h3>
          <p>
            Well-structured, maintainable, and scalable code following best
            practices.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#a2d5f2ff",
    padding: "70px 20px",
    textAlign: "center",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    width: "240px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
};

export default Features;
