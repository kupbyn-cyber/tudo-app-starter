import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
        boxSizing: 'border-box',
      }}
    >
      <section style={{ maxWidth: 680 }}>
        <p style={{ marginBottom: 8, fontWeight: 700 }}>TPES Foundation</p>
        <h1 style={{ marginTop: 0 }}>Tự Do App Starter</h1>
        <p>
          STARTER-P01 application skeleton is ready. Database, authentication,
          authorization, and Product-specific domains are intentionally not implemented yet.
        </p>
      </section>
    </main>
  )
}
