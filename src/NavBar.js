import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ accountEmailAddress }) => (
    <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#c7dcff', flexDirection: 'column' }}>
        <div style={{ width: '100%', height: '15%', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            {accountEmailAddress}
        </div>
        <div style={{ width: '100%', height: '85%', display: 'flex', justifyContent: "center" }}>
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
        </div>

    </div>
)

export default NavBar