import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router'
import Axios from 'axios'
import UserContext from '../../context/UserContext'
import ErrorNotice from '../../misc/errorNotice'
import '../../styles.css'

export default function Register() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordCheck, setPasswordCheck] = useState()
    const [displayName, setDisplayName] = useState()
    const [error, setError] = useState()
    const {setUserData} = useContext(UserContext)
    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()

        try{
            const newUser = {email,password,passwordCheck,displayName}
            await Axios.post("http://localhost:5000/users/register", newUser)
            // const loginResponse = await Axios.post("http://localhost:5000/users/login", {email, password})
            // setUserData({
            //     token: loginResponse.data.token,
            // })
            // localStorage.setItem("token", loginResponse.data.token)
            history.push("/login")
        }catch(e){
            e.response.data.msg && setError(e.response.data.msg)
        }
    }

    return (
        <div className="credential-container">
            {error && <ErrorNotice message={error} clearError={()=> setError(undefined)} />}
                <div className="credential-wrapper">
                    <h2 className="credential-title">Register</h2>
                    <form onSubmit={submit} className="form">
                        <label htmlFor="register-email">Email</label>
                        <input type="email" id="register-email" onChange={(e)=> setEmail(e.target.value)}/>

                        <label htmlFor="register-password">Password</label>
                        <input type="password" id="register-password" onChange={(e)=> setPassword(e.target.value)}/>

                        <label htmlFor="register-passwordCheck">Password Check</label>
                        <input type="password" id="register-passwordCheck" placeholder="verify password" onChange={(e)=> setPasswordCheck(e.target.value)}/>

                        <label htmlFor="register-displayName">Display Name</label>
                        <input type="text" id="register-displayName" onChange={(e)=> setDisplayName(e.target.value)}/>

                        <input type="submit" value="Register" />
                    </form>
                </div>
        </div>
    )
}
