export const BACKEND_URL = "http://localhost:3000/api/";

export const endpoints = {
    "register": BACKEND_URL + "auth/signup" , 
    "login" : BACKEND_URL + "auth/signin",
    "contests": BACKEND_URL + "contests",
    "problems": BACKEND_URL + "problems"
}
