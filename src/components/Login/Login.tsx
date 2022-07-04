import React, {useState} from 'react'
import { useHistory } from 'react-router'
import ErrorNotice from '../../misc/errorNotice'
import '../../styles.css'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const history = useHistory()

    // const submit = async (e) => {
    //     e.preventDefault()
    //     try{
    //         const loginUser = {email,password}
    //         const currentUser = await Axios.post("http://localhost:5000/users/login", loginUser)
    //         setUserData({
    //             token: currentUser.data.token,
    //         })
    //         localStorage.setItem("token", currentUser.data.token)
    //         history.push("/teams")
    //     }catch(e){
    //         e.response.data.msg && setError(e.response.data.msg)
    //     }
    // }

    return (
        <div className="credential-container">
            {/* {error && <ErrorNotice message={error} clearError={()=> setError(undefined)} />}
            <div className="credential-wrapper">
            <h2 className="credential-title">Login</h2>
                <form onSubmit={submit} className="form">
                    <label htmlFor="register-email">Email</label>
                    <input type="email" id="register-email" onChange={(e)=> setEmail(e.target.value)}/>
                    <label htmlFor="register-password">Password</label>
                    <input type="password" id="register-password" onChange={(e)=> setPassword(e.target.value)}/>
                    <input type="submit" value="Login" />
                </form>
            </div> */}
        </div>
    )
}
