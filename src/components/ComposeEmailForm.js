import React, { useState } from 'react'

const ComposeEmailForm = (props) => {
    const [receiverEmailAddress, setReceiverEmailAddress] = useState('')
    const [emailSubject, setEmailSubject] = useState('')
    const [emailContent, setEmailContent] = useState('')
    const senderEmailAccount = props.accountEmailAddress

    const addComment = async () => {
        const result = await fetch(`/api/composeNewEmail`, {
            method: 'post',
            body: JSON.stringify({ senderEmailAccount, receiverEmailAddress, subject: emailSubject, messageContent: emailContent }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json()
    }

    return (
        <div id="send-email-form">
            <h3>Compose New Email</h3>
            <label>
                Send To:
            <input type="text" value={receiverEmailAddress} onChange={(event) => setReceiverEmailAddress(event.target.value)} />
            </label>
            <label>
                Subject:
            <input type="text" value={emailSubject} onChange={(event) => setEmailSubject(event.target.value)} />
            </label>
            <label>
                Email Content:
            <textarea rows="4" cols="50" value={emailContent} onChange={(event) => setEmailContent(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Send Email</button>
        </div>
    )
}

export default ComposeEmailForm