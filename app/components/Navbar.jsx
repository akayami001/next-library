import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h1>Mat Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar