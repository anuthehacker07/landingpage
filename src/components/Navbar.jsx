function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Sammunat</h2>
      <button style={styles.btn}>Get Started</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    backgroundColor: "#46b2d0ff",
    color: "#f1f8f8ff",
  },
  btn: {
    backgroundColor: "#fff",
    color: "#2563eb",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Navbar;