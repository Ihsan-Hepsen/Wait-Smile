import { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { sendEmailSignUp } from '../service/WaitListDataService'

export default function WaitListEmbed() {
    const [email, setEmail] = useState("")
    const [didSubmit, setDidSubmit] = useState(false)

    const handleFormInputChange = (event) => {
        setEmail(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("clicked submit")
        sendEmailSignUp(email, 'test')
    }

    const styles = {
        paper: {
            m: 0,
            p: '1.5rem 1.2rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Inter',
        },
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
        },
        headerSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            textAlign: 'left',
            marginBottom: '1rem',
        },
        title: {
            fontFamily: 'Inter',
            fontWeight: 700
        },
        subtitle: {
            fontFamily: 'Inter',
            color: "#6c757d"
        },
        textField: {
            fontFamily: 'Inter',
        },
        button: {
            fontFamily: 'inherit',
            textTransform: 'none',
            margin: '0 .6rem',
            padding: '0 1.8rem',
            fontFamily: 'Inter',
        },

    }

    return (
        <>
            <Paper elevation={1} sx={styles.paper}>
                <div className='mainContainer' style={styles.mainContainer}>
                    <section style={styles.headerSection}>
                        <Typography
                            variant="h4"
                            component="h3"
                            sx={styles.title}>
                            Join our waitlist
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            sx={styles.subtitle}>
                            No spam, just updates. Limited spots.
                        </Typography>
                    </section>
                    <form
                        onChange={handleFormInputChange}
                        onSubmit={handleFormSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',

                        }}>
                        <TextField
                            id="email-submission"
                            label="Enter your email"
                            variant="outlined"
                            placeholder='your best email'
                            size='medium'
                            type='email'
                            required
                            sx={styles.textField}
                            value={email}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            sx={styles.button}
                        >
                            <ArrowForwardIcon />
                        </Button>
                    </form>
                </div>
            </Paper>
        </>
    )
}