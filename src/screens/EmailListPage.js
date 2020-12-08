import React from 'react'
import emailContent from './email-content'
import EmailList from '../components/EmailList'

const EmailListPage = () => {

    var receiverEmailAddress = 'guygolpur@gmail.com'
    const emails = emailContent.find(email => email.receiverEmailAddress === receiverEmailAddress)
    if (!emails) return <h1>Email does not exist</h1>

    var inboxesContent = []
    emails.inbox.map((inbox, key) => (
        inboxesContent = inboxesContent.concat(inbox)
    ))

    return (
        <>
            <h1>{receiverEmailAddress} Emails</h1>
            <hr />
            <EmailList inboxesContent={inboxesContent}/>
        </>
    )
}

export default EmailListPage