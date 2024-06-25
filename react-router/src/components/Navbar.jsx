import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="flex items-center justify-center h-20 w-screen z-20 sticky bg-green-600 text-white">
    <div className="flex justify-center items-center w-1/2">
        <p className='w-full text-left pl-5 text-3xl'>Logo</p>
    </div>
    <div className="w-1/2">
        <ul className="flex items-center justify-end pr-5 text-xl gap-5">
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
    </ul>
    </div>
    
</nav>
  )
}

export default Navbar
