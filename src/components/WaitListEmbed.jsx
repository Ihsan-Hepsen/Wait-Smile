import { Button, Paper, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function WaitListEmbed() {

    const styles = {
        paper: {
            m: 0,
            p: '1.5rem 1.2rem',
            borderRadius: '10px',
        },
        headerSection: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            marginBottom: '.6rem'
        },
        title: {},
        subtitle: {
            color: "#6c757d"
        },
        textField: {
        },
        button: {
            fontFamily: 'inherit',
            textTransform: 'none',
            margin: '0 .6rem',
        },

    }

    return (
        <>
            <Paper elevation={4} sx={styles.paper}>
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
                <form style={{
                    display: 'flex',
                    flexDirection: 'row',

                }}>
                    <TextField
                        id="email-submission"
                        label="Enter your email"
                        variant="outlined"
                        placeholder='your best email'
                        size='small'
                        type='email'
                        required
                        sx={styles.textField}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        sx={styles.button}
                    >
                        {/* Join */}
                        <ArrowForwardIcon />
                    </Button>
                </form>
            </Paper>
        </>
    )
}