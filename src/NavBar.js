import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/email-list">Inbox</Link>
            </li>
            <li>
                <Link to="/sent-email-list">Sent</Link>
            </li>
            <li>
                <Link to="/composeNewEmail">New</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar