import React from 'react'
import navStyles from "./navStyles.css"

function Nav() {
    return (
        <nav>
            <a className='logo'>kN<span>.</span></a>
            <div className='navbar'>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT ME</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
