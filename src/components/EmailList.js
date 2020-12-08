import React from 'react'
import { Link } from 'react-router-dom'

const EmailList = ({ inboxesContent }) => (
    <>
        {inboxesContent.map((email, key) => (
            <Link className="email-list-item" key={key} to={`/email/${email.id}`}>
                <h3>from : {email.senderEmailAddress}</h3>
                <h4>Subject: {email.subject}</h4>
                <p>Message brief: {email.messageContent.substring(0, 30)}...</p>
            </Link>
        ))}
    </>
)

export default EmailList