import Header from './components/Header'

function App() {
  return (
      <main style={{ minHeight: '100vh', padding: '1rem' }}>
        <Header />

        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--mc-green)'
          }}>
            ⛏️ Каталог товаров
          </h2>

          {/* Сетка карточек — сюда будем рендерить товары */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Заглушка: скоро здесь будут карточки из WB */}
            <div className="mc-box" style={{
              padding: '1.5rem',
              textAlign: 'center',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{ color: 'var(--mc-text-muted)', fontSize: '0.65rem' }}>
                Загрузка товаров из Wildberries...
              </p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default App

