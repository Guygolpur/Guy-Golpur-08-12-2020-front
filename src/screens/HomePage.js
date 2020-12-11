import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const HomePage = () => {

    const [receiverEmailAddress, setReceiverEmailAddress] = useState('')

    const loginWithEmail = (event) => {
        event.preventDefault()
    }

    return (
        <div className="page-body">
            <h1>Welcome</h1>
            <form onSubmit={loginWithEmail}>
                <TextField
                    id="standard-full-width"
                    label="Please enter an email address:"
                    style={{ margin: 8 }}
                    placeholder="example@email.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={receiverEmailAddress} onChange={(event) => setReceiverEmailAddress(event.target.value)}
                    required={true}
                    type="email"
                    variant="outlined"
                />
                <Button variant="outlined" color="primary" type="submit" style={{marginLeft: '8px'}}>
                    Sign in
                </Button>
            </form>
        </div>
    )
}


export default HomePage