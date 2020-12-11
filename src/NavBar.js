import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge)

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))


const NavBar = ({ accountEmailAddress }) => {
    const classes = useStyles()
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#c7dcff', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '15%', display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <div className={classes.root}>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar alt="badge" >{accountEmailAddress.charAt(0).toUpperCase()}</Avatar>
                    </StyledBadge>
                </div>
                {accountEmailAddress}
            </div>
            <div style={{ width: '100%', height: '85%', display: 'flex', justifyContent: "center" }}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/composeNewEmail">New Email</Link>
                        </li>
                        <li>
                            <Link to="/email-list">Inbox</Link>
                        </li>
                        <li>
                            <Link to="/sent-email-list">Sent</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default NavBar