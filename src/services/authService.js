import axios from '../helpers/customAxios';

const authService = {
    async Register(registerData)
    {
        axios.post("users/register", registerData)
        .then(response => {
            console.log(response.data.token);
        })
        .catch(e => {
            console.log(e.response);
        })
    },
    async Login(email, password)
    {
        axios.post("users/login", {email,password})
        .then(response => {
            console.log(response.data.token);
        })
        .catch(e => {
            console.log(e.response);
        })
    },
    async ResetPassword()
    {

    },
    async UpdateAccountInfo()
    {

    }
}

export default authService;