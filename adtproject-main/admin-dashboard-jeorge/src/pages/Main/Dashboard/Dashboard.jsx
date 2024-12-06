import React from 'react';

function Dashboard() {
  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Dashboard</h1>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Total Users</h3>
          <p style={styles.cardContent}>1,024</p>
        </section>
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Active Users</h3>
          <p style={styles.cardContent}>840</p>
        </section>
        <section style={styles.card}>
          <h3 style={styles.cardTitle}>New Signups</h3>
          <p style={styles.cardContent}>120</p>
        </section>
      </main>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    backgroundColor: '#121212', // Very dark gray background
    color: '#fff', // White text for contrast
    minHeight: '100vh', // Full height
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#1f1f1f', // Darker gray for header
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
  },
  headerTitle: {
    margin: 0,
    color: '#00bcd4', // Cyan text for title
    fontSize: '2.5rem',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    backgroundColor: '#1c1c1c', // Darker background for cards
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Slight shadow for cards
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#fff', // White text for card titles
  },
  cardContent: {
    fontSize: '1.25rem',
    color: '#00bcd4', // Cyan text for card content to match header
  },
};

export default Dashboard;
