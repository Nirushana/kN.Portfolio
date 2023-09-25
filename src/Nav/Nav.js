import React, { Component } from 'react'
import navStyles from "./navStyles.css"

class Nav extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    }

    render() {
        return (
            <nav>
                <a className='logo'>kN<span>.</span></a>
                <div>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">PORTFOLIO</a></li>
                        <li><a href="#">CONTACT ME</a></li>
                    </ul>
                </div>

                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        )
    }
}

export default Nav
