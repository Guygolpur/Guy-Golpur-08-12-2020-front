import React, { useState, useEffect } from 'react'
import EmailList from '../components/EmailList'

const EmailListPage = () => {
    var emailAccount = 'guygolpur@gmail.com'
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`/api/email-list?receiverEmailAddress=${emailAccount}`)
                const body = await result.json()
                setEmailList(body)
            } catch (err) {
                console.log(`error: ${err}`)
            }
        }
        fetchData()
    }, [emailAccount]);

    var inboxesContent = []
    emailList.map((inbox, key) => (
        inboxesContent = inboxesContent.concat(inbox)
    ))

    return (
        <>
            <h1>{emailAccount} Emails</h1>
            <hr />
            <EmailList inboxesContent={inboxesContent} />
        </>
    )
}

export default EmailListPage