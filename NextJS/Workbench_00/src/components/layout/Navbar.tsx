import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Navbar</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="/pricing" className="text-white hover:text-gray-300">Pricing</Link>
          </li>
          {/* <li>
              <Link href="/blog" className="text-white hover:text-gray-300">Blog</Link>
            </li> */}
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}