import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import userContext from '../../context/UserContext'
// import Cookie from 'react-cookies'

export default function AuthOptions() {
    const {userData, setUserData} = useContext(userContext)

    const history = useHistory()

    const Register = () =>{
        history.push('/register')
    }

    const Login = () =>{
        history.push('/login')
    }

    const Logout = () => {
        setUserData({
            token: undefined,
        })
        // Cookie.remove('token')
        localStorage.removeItem("token")
        history.push('/login')
    }

    return (
        <nav className="auth-options">
        {
        userData.token ? (<button onClick={Logout}>Log Out</button>
        ) : (
        <>
            <button onClick={Register}>Register</button>
            <button onClick={Login}>Login</button>
        </>
        )}
        </nav>
    )
}
