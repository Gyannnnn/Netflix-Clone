import React from 'react'
import "./Header.scss"
import logo from '../../Assets/Logo.png'
import {Link} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";


const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="Logo" />
        <div>
            {/* <Link to='/home' >Home</Link> */}
            <Link to='/tvshows' >Tv Shows</Link>
            <Link to="/movies" >Movies</Link>
            <Link to='/' >Recently Added</Link>
            <Link to='/' >My List</Link>            
        </div>
        <AiOutlineSearch/>
    </nav>
  )
}

export default Header