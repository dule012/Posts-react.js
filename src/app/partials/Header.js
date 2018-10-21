import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h2>Posts</h2>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                <Link to='/authors' style={{ textDecoration: 'none' }}>Authors</Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>Aubout</Link>
            </div>
        </header>
    )
}
export default Header