import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <div style={{
    'max-width': '600px',
    margin: '0 auto',
    padding: '50px',
  }}>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      {children}
    </main>
  </div>
)
