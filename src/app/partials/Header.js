import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h2>Posts</h2>
            <nav>
                <span><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></span>
                <span><Link to='/authors' style={{ textDecoration: 'none', color: 'black' }}>Authors</Link></span>
                <span class="lastChild-in-nav"><Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>Aubout</Link></span>
            </nav>
        </header>
    )
}
export default Header