import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <ul className="flex justify-center gap-4 py-4 bg-blue-900 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
        </ul>
    )
}

export default Navbar