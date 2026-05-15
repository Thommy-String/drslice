import React from 'react'

/**
 * Pagina mostrata quando il kill-switch è attivo.
 * Volutamente generica e neutra: sembra un guasto reale del server,
 * non un'azione intenzionale.
 */
export function KillScreen () {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        color: '#333',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '24px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 300,
            margin: 0,
            color: '#888',
            letterSpacing: '-0.02em'
          }}
        >
          503
        </h1>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginTop: 16,
            marginBottom: 12,
            color: '#444'
          }}
        >
          Service Temporarily Unavailable
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: '#777',
            margin: 0
          }}
        >
          The server is temporarily unable to service your request due to
          maintenance downtime or capacity problems. Please try again later.
        </p>
        <p
          style={{
            fontSize: 12,
            color: '#aaa',
            marginTop: 32,
            marginBottom: 0
          }}
        >
          Error 503 — Server
        </p>
      </div>
    </div>
  )
}
