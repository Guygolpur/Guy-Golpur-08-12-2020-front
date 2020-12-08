import React from 'react'
import emailContent from './email-content'

const EmailPage = ({ match }) => {

    let senderEmailId = match.params.senderEmailId
    senderEmailId = parseInt(senderEmailId)
    console.log('senderEmailId: ', senderEmailId)
    var userEmailAddress = 'guygolpur@gmail.com'

    const email = emailContent.find(email => email.receiveremailAddress === userEmailAddress)
    if (!email) return <h1>Email does not exist</h1>

    var emailById = []
    email.inbox.map((inbox, key) => {
        if (inbox.id === senderEmailId) emailById = emailById.concat(inbox)
    })


    return (
        <>
            <h1>{email.receiveremailAddress}</h1>
            <div>{emailById.map((content, key) => (
                <div key={key}>
                    <h2>from : {content.senderEmailAddress}</h2>
                    <h2>Subject: {content.subject}</h2>
                    <h4>Message: {content.messageContent}</h4>
                    <hr />
                </div>
            ))}
            </div>
        </>
    )
}

export default EmailPage