import React from 'react'
import emailContent from './email-content'
import EmailList from '../components/EmailList'
import PageNotFound from './PageNotFound'

const EmailPage = ({ match }) => {

    let senderEmailId = match.params.senderEmailId
    senderEmailId = parseInt(senderEmailId)
    console.log('senderEmailId: ', senderEmailId)
    var receiverEmailAddress = 'guygolpur@gmail.com'

    const email = emailContent.find(email => email.receiverEmailAddress === receiverEmailAddress)
    if (!email) return <PageNotFound />

    var emailById = []
    email.inbox.map((inbox, key) => {
        if (inbox.id === senderEmailId) emailById = emailById.concat(inbox)
    })

    var otherEmails = []
    email.inbox.map((inbox, key) => {
        if (inbox.id !== senderEmailId) otherEmails = otherEmails.concat(inbox)
    })


    return (
        <>
            <h1>{email.receiverEmailAddress}</h1>
            <hr />
            <div>{emailById.map((content, key) => (
                <div key={key}>
                    <h2>from : {content.senderEmailAddress}</h2>
                    <h2>Subject: {content.subject}</h2>
                    <h4>Message: {content.messageContent}</h4>
                    <hr />
                </div>
            ))}
            </div>

            <h1>Other Emails</h1>
            <EmailList inboxesContent={otherEmails} />
        </>
    )
}

export default EmailPage