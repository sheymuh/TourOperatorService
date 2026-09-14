import { useState, useEffect } from 'react'

function Tours({ onLogout }) {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/tours', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setTours(data)
      }
    } catch (err) {
      console.error('Error fetching tours:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Туры</h1>
        <nav style={styles.nav}>
          <a href="/tours" style={styles.navLinkActive}>Туры</a>
          <a href="/quotes" style={styles.navLink}>Квоты</a>
          <button onClick={onLogout} style={styles.logoutButton}>Выйти</button>
        </nav>
      </header>

      <main style={styles.main}>
        <div style={styles.toolbar}>
          <button style={styles.primaryButton}>Создать тур</button>
          <button style={styles.secondaryButton}>Сформировать каталог</button>
        </div>

        {loading ? (
          <p>Загрузка...</p>
        ) : tours.length === 0 ? (
          <div style={styles.emptyState}>
            <p>Список туров пуст</p>
            <p style={styles.emptyHint}>Нажмите "Создать тур", чтобы добавить первый тур</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {tours.map((tour) => (
              <div key={tour.id} style={styles.card}>
                <h3 style={styles.cardTitle}>{tour.name}</h3>
                <p style={styles.cardDescription}>{tour.description}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.destination}>{tour.destination}</span>
                  <div style={styles.cardActions}>
                    <button style={styles.actionButton}>Редактировать</button>
                    <button style={styles.actionButton}>Клонировать</button>
                    <button style={styles.dangerButton}>Удалить</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: '20px 40px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#666',
    fontSize: '14px',
  },
  navLinkActive: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '14px',
    fontWeight: '500',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  main: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  toolbar: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  primaryButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  },
  secondaryButton: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  emptyHint: {
    color: '#666',
    fontSize: '14px',
    marginTop: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '8px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
    lineHeight: '1.5',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
  },
  destination: {
    fontSize: '12px',
    color: '#007bff',
    backgroundColor: '#e7f1ff',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  cardActions: {
    display: 'flex',
    gap: '8px',
  },
  actionButton: {
    padding: '6px 12px',
    backgroundColor: 'white',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  dangerButton: {
    padding: '6px 12px',
    backgroundColor: 'white',
    color: '#dc3545',
    border: '1px solid #dc3545',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
}

export default Tours
