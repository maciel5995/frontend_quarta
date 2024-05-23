import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    return (
        <div>
         <span style={{padding: '8px'}}><NavLink to={'/'} className={({isActive}) => (isActive ? 'active': '')}>Home</NavLink></span>
         <span style={{padding: '8px'}}><NavLink to={'/products'} className={({isActive}) => (isActive ? 'active': '')}>Produtos</NavLink></span>
         {/* <span style={{padding: '8px'}}><Link to={'/'}>Home</Link></span>
         <span style={{padding: '8px'}}><Link to={'/products'}>Produtos</Link></span> */}
        </div>
    )
}

export default NavBar
