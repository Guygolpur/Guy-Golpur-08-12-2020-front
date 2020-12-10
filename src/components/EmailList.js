import React from 'react'
import { Link } from 'react-router-dom'

const EmailList = ({ inboxesContent, accountEmailAddress }) => {
    return (
        <div className="email-list-item-wrapper">
            {inboxesContent.slice(0).reverse().map((email, key) => (
                <div className="email-list-item-wrapper">
                    <Link className="email-list-item" key={key} to={`/email/${email.id}/${accountEmailAddress}`}>
                        <h3>from : {email.senderEmailAddress}</h3>
                        <h5>{email.date}</h5>
                        <h5>{email.time}</h5>
                        <h4>Subject: {email.subject}</h4>
                        <p>Message brief: {email.messageContent.substring(0, 30)}...</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default EmailList