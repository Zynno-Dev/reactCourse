import React from 'react'
import './navbar.css'
import Cart from '../cart/Cart'

const Navbar = () => {
  return (
    <div>
      <ul className='navOptions'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contacto</a></li>
        <li><Cart ind={30}/></li>
      </ul>
    </div>
  )
}

export default Navbar