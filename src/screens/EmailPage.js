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
                setEmailContent(arr => [...arr, body])
            } catch (err) {
                console.log(`error: ${err}`)
            }
        }
        fetchData()
    }, [emailAccount]);


    return (
        <>
            <h1>{emailAccount}</h1>
            <hr />
            <div>{emailContent.map((content, key) => (
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