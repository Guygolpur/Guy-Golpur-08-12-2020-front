import React, { useState, useEffect } from 'react'

const EmailPage = ({ match }) => {
    var emailAccount = match.params.accountEmailAddress
    let senderEmailId = match.params.senderEmailId
    senderEmailId = parseInt(senderEmailId)
    const [emailContent, setEmailContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`/api/email/${senderEmailId}/${emailAccount}`)
                const body = await result.json()
                setEmailContent( [body] )
            } catch (err) {
                console.log(`error: ${err}`)
            }
        }
        fetchData()
    }, [emailAccount]);

    const deleteEmailFromDb = async (receiverEmailAddress, emailId) => {
        try {
            const result = await fetch('/api/deleteEmail', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    receiverEmailAddress: receiverEmailAddress,
                    id: emailId,
                })
            })
        } catch (err) {
            console.log(`error: ${err}`)
        }
    }


    return (
        <>
            <h1>{emailAccount}</h1>
            <hr />
            <div>{emailContent.map((content, key) => (
                <div key={key}>
                    <h2>from : {content.senderEmailAddress}</h2>
                    <h5>{content.date}</h5>
                    <h5>{content.time}</h5>
                    <h2>Subject: {content.subject}</h2>
                    <h4>Message: {content.messageContent}</h4>
                    <button onClick={() => deleteEmailFromDb(emailAccount, content.id)}>Delete</button>
                    <hr />
                </div>
            ))}
            </div>
        </>
    )
}

export default EmailPage