function Services() {
  return (
    <section style={styles.section}>
      <h2>Our Services</h2>
      <div style={styles.cards}>
        <div style={styles.card}>Web Development</div>
        <div style={styles.card}>UI / UX Design</div>
        <div style={styles.card}>Performance Optimization</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#6fcee1ff",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    padding: "20px",
    backgroundColor: "#fff",
    width: "220px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Services;