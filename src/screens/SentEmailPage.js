import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        maxWidth: '75%',
    }
});

const SentEmailPage = ({ match }) => {
    var emailAccount = match.params.accountEmailAddress
    let senderEmailId = match.params.senderEmailId
    senderEmailId = parseInt(senderEmailId)
    const [emailContent, setEmailContent] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`/api/spec-email-sent/${senderEmailId}/${emailAccount}`)
                const body = await result.json()
                setEmailContent([body])
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
        <div className="page-body">
            <h1>Sent Email content</h1>
            <hr />
            <div className="page-body">{emailContent.map((content, key) => (
                <Card className={classes.root}>
                    <CardContent key={key}>
                        <Typography gutterBottom variant="h5" component="h2" >
                            Subject: {content.subject}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content.date} at {content.time}
                        </Typography>
                        <h2>from: {content.receiverEmailAddress}</h2>
                        <div>Message:</div>
                        <p> {content.messageContent}</p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => deleteEmailFromDb(emailAccount, content.id)}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
            </div>
        </div >
    )
}

export default SentEmailPage