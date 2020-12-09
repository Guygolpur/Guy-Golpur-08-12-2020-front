import React from 'react'
import { Link } from 'react-router-dom'

const EmailList = ({ inboxesContent, accountEmailAddress }) => {
    return (
        <div className="email-list-item-wrapper">
            {inboxesContent.map((email, key) => (
                <div className="email-list-item-wrapper">
                    <Link className="email-list-item" key={key} to={`/email/${email.id}/${accountEmailAddress}`}>
                        <h3>from : {email.senderEmailAddress}</h3>
                        <h4>Subject: {email.subject}</h4>
                        <p>Message brief: {email.messageContent.substring(0, 30)}...</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default EmailList