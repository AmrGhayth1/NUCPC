import { endpoints } from "./constants"

interface registerInput {
    name: string,
    username: string,
    email: string,
    password: string,
    studentId: string
}
export default function register(input: registerInput) {
    const back = {
        name: input.name,
        username: input.username,
        email: input.email,
        password: input.password,
        nu_id: input.studentId,
    }
    fetch(endpoints.register, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(back)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert(err))
}