import fetch from 'node-fetch'
import { PORT } from './config/env.js'

const seedAdmin = async () => {
  const res = await fetch(`http://localhost:${PORT}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'Admin@123',
      role: 'admin'
    })
  })

  const text = await res.text() // Get raw response first
  try {
    const data = JSON.parse(text)
    console.log('✅ Admin Created:', data)
  } catch (err) {
    console.error('❌ Failed to parse response as JSON')
    console.error(text) // Show raw HTML or error message
  }
}

seedAdmin()
