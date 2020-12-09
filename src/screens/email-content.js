const emails = [
    {
        receiverEmailAddress: 'guygolpur@gmail.com',
        inbox: [
            {
                id: 0,
                senderEmailAddress: 'golpur@hotmail.com',
                subject: 'its Guy from hotmail!',
                messageContent: 'I am here only to check your email app :)'
            },
            {
                id: 1,
                senderEmailAddress: 'from2@gmail.com',
                subject: 'check again',
                messageContent: 'I am here only to DOUBLE check your email app :)'
            },
            {
                id: 2,
                senderEmailAddress: 'from3@gmail.com',
                subject: 'Hey dude',
                messageContent: 'I am here only to DOUBLE check your email app :)'
            },
            {
                id: 3,
                senderEmailAddress: 'from4@gmail.com',
                subject: 'Dear Guy',
                messageContent: 'I am here only to DOUBLE check your email app :)'
            },
            {
                id: 4,
                senderEmailAddress: 'from5@gmail.com',
                subject: 'New Email!',
                messageContent: 'I am here only to DOUBLE check your email app :)'
            },
            {
                id: 5,
                senderEmailAddress: 'from6@gmail.com',
                subject: 'Advertisment',
                messageContent: 'I am here only to DOUBLE check your email app :)'
            }
        ],
        sent: [
            {
                id: 0,
                receiverEmailAddress: 'golpur@hotmail.com',
                subject: 'guy golpur from gmail!',
                messageContent: 'Hi, can you read this content?'
            }
        ]
    },
    {
        receiverEmailAddress: 'golpur@hotmail.com',
        inbox: [
            {
                id: 0,
                senderEmailAddress: 'from2@gmail.com',
                subject: 'dear Golpur',
                messageContent: 'Hi, can you read this content?'
            },
            {
                id: 1,
                senderEmailAddress: 'guygolpur@gmail.com',
                subject: 'guy golpur from gmail!',
                messageContent: 'Hi, can you read this content?'
            }
        ],
        sent: [
            {
                id: 0,
                receiverEmailAddress: 'guygolpur@gmail.com',
                subject: 'its Guy from hotmail!',
                messageContent: 'I am here only to check your email app :)'
            }
        ]
    }
]

export default emails