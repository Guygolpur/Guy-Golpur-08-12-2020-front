import React from 'react'
import { Link } from 'react-router-dom'
import emailContent from './email-content'

const EmailList = () => {

    var userEmailAddress = 'guygolpur@gmail.com'
    const emails = emailContent.find(email => email.receiveremailAddress === userEmailAddress)
    if (!emails) return <h1>Email does not exist</h1>

    var inboxesContent = []
    emails.inbox.map((inbox, key) => (
        inboxesContent = inboxesContent.concat(inbox)
    ))

    return (
        <>
            <h1>{userEmailAddress} Emails</h1>
            <hr />
            {inboxesContent.map((email, key) => (
                <Link className="email-list-item" key={key} to={`/email/${email.id}`}>
                    <h3>from : {email.senderEmailAddress}</h3>
                    <h4>Subject: {email.subject}</h4>
                    <p>Message brief: {email.messageContent.substring(0, 30)}...</p>
                    <hr />
                </Link>
            ))}
        </>
    )
}

export default EmailList