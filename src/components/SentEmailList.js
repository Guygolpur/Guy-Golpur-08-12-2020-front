import React, { useState, useEffect } from 'react'

const SentEmailList = (props) => {
    var emailAccount = props.accountEmailAddress
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
            {sentEmails.slice(0).reverse().map((sentEmail, key) => (
                <div key={key}>
                    <h3>to : {sentEmail.receiverEmailAddress}</h3>
                    <h5>{sentEmail.date}</h5>
                    <h5>{sentEmail.time}</h5>
                    <h4>Subject: {sentEmail.subject}</h4>
                    <p>Message brief: {sentEmail.messageContent.substring(0, 30)}...</p>
                    <hr />
                </div>
            ))}
        </>
    )
}


export default SentEmailList