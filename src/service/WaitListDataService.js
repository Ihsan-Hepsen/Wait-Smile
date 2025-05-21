import axios from 'axios'

const URL = "http://localhost:8080/api/waitlist"


export async function sendEmailSignUp(email, projectName) {
    const body = { email, projectName }

    try {
        const response = await axios.post(URL, body)

        if (response.status === 201) {
            return { status: "new", message: "You're on the waitlist!" }
        } else if (response.status === 200) {
            return { status: "exists", message: "You're already on the waitlist!" }
        }
    } catch (error) {
        console.error("Error submitting email:", error.response?.data || error.message)
        return { status: "error", message: error.response?.data || "Something went wrong." }
    }
}

