import React, { useState, useEffect } from 'react'

const SentEmailList = () => {
    var emailAccount = 'guygolpur@gmail.com'
    const [sentEmails, setSentEmails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`/api/sent-email-list?receiverEmailAddress=${emailAccount}`)
                const body = await result.json()
                setSentEmails(body)
            } catch (err) {
                console.log(`error: ${err}`)
            }
        }
        fetchData()
    }, [emailAccount]);


    return (
        <>
            <h3>Sent Items</h3>
            {console.log('sentEmails:', sentEmails)}
            {sentEmails.map((sentEmail, key) => (
                <div key={key}>
                    <h3>to : {sentEmail.receiverEmailAddress}</h3>
                    <h4>Subject: {sentEmail.subject}</h4>
                    <p>Message brief: {sentEmail.messageContent.substring(0, 30)}...</p>
                    <hr />
                </div>
            ))}
        </>
    )
}


export default SentEmailList