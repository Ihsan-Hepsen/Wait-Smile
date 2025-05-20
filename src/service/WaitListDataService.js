import axios from 'axios'

const URL = "http://localhost:8080/api/waitlist"

export async function sendEmailSignUp(email, projectId) {
    const body = {
        email: email,
        projectId: projectId
    }

    try {
        const response = await axios.post(URL, body)
        console.log("Response data:")
        console.log(response.data)
    } catch (error) {
        console.error("Error submitting email:", error.response?.data || error.message)
    }
}