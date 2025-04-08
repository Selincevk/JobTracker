import React from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
     <header>
        <h2>İş Takip</h2>
        <nav>
            <NavLink to="/">İş Listesi</NavLink>
            <NavLink to="/create">İş Ekle</NavLink>
        </nav>

     </header>
    </div>
  )
}

export default Header
