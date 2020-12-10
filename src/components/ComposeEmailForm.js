import React, { useState } from 'react'

const ComposeEmailForm = (props) => {
    const [receiverEmailAddress, setReceiverEmailAddress] = useState('')
    const [emailSubject, setEmailSubject] = useState('')
    const [emailContent, setEmailContent] = useState('')
    const senderEmailAddress = props.accountEmailAddress

    const addComment = async () => {
        var today = new Date(), date, time

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        time = today.getHours() + ':' + (today.getMinutes());

        const result = await fetch(`/api/composeNewEmail`, {
            method: 'post',
            body: JSON.stringify({ senderEmailAddress, receiverEmailAddress, subject: emailSubject, messageContent: emailContent, date, time }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json()
    }

    return (
        <div id="send-email-form">
            <h1>Compose New Email</h1>
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
            <textarea rows="12" cols="80" value={emailContent} onChange={(event) => setEmailContent(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Send Email</button>
        </div>
    )
}

export default ComposeEmailForm