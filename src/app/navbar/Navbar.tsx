import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between m-5 p-5'>
      <Image src="/logo.jpg" alt='logo' width={40} height={50}/>

      <ul className='flex gap-16'>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar