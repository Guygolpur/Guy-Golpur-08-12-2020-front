import React from 'react'
import emailContent from './email-content'

const EmailPage = ({ match }) => {
    const emailAddress = match.params.emailAddress
    const email = emailContent.find(email => email.receiveremailAddress === emailAddress)
    if(!email) return <h1>Email does not exist</h1>

    var inboxesContent = []
    email.inbox.map((inbox, key) => (
        inboxesContent = inboxesContent.concat(inbox)
    ))
    
    
    return (
        <>
            <h1>{email.receiveremailAddress}</h1>
            <div>{inboxesContent.map((email, key) => (
                <div key={key}>
                    <h2>from : {email.senderEmailAddress}</h2>
                    <h2>Subject: {email.subject}</h2>
                    <h4>Message: {email.messageContent}</h4>
                    <hr />
                </div>
            ))}
            </div>
        </>
    )
}

export default EmailPage