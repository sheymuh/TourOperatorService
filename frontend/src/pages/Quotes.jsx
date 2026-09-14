import { useState, useEffect } from 'react'

function Quotes({ onLogout }) {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/quotes', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setQuotes(data)
      }
    } catch (err) {
      console.error('Error fetching quotes:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Квоты</h1>
        <nav style={styles.nav}>
          <a href="/tours" style={styles.navLink}>Туры</a>
          <a href="/quotes" style={styles.navLinkActive}>Квоты</a>
          <button onClick={onLogout} style={styles.logoutButton}>Выйти</button>
        </nav>
      </header>

      <main style={styles.main}>
        <div style={styles.toolbar}>
          <button style={styles.primaryButton}>Добавить квоту</button>
        </div>

        {loading ? (
          <p>Загрузка...</p>
        ) : quotes.length === 0 ? (
          <div style={styles.emptyState}>
            <p>Список квот пуст</p>
            <p style={styles.emptyHint}>Нажмите "Добавить квоту", чтобы добавить первую квоту</p>
          </div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Тип</th>
                <th style={styles.th}>Поставщик</th>
                <th style={styles.th}>Дата</th>
                <th style={styles.th}>Забронировано</th>
                <th style={styles.th}>Доступно</th>
                <th style={styles.th}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td style={styles.td}>{quote.type}</td>
                  <td style={styles.td}>{quote.supplier}</td>
                  <td style={styles.td}>{new Date(quote.date).toLocaleDateString()}</td>
                  <td style={styles.td}>{quote.bookedCount}</td>
                  <td style={styles.td}>{quote.availableCount}</td>
                  <td style={styles.td}>
                    <button style={styles.actionButton}>Редактировать</button>
                    <button style={styles.dangerButton}>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  table: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '16px',
    textAlign: 'left',
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  td: {
    padding: '16px',
    borderBottom: '1px solid #dee2e6',
    fontSize: '14px',
    color: '#666',
  },
  actionButton: {
    padding: '6px 12px',
    backgroundColor: 'white',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    marginRight: '8px',
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

export default Quotes
