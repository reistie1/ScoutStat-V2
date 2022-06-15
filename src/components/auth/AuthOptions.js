import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import userContext from '../../context/UserContext'
// import Cookie from 'react-cookies'

export default function AuthOptions() {
    const history = useHistory()
    
    useEffect(() => {
        history.push("/teams");
    }, [])
    // const {userData, setUserData} = useContext(userContext)

    

    // const Register = () =>{
    //     history.push('/register')
    // }

    // const Login = () =>{
    //     history.push('/login')
    // }

    // const Logout = () => {
    //     setUserData({
    //         token: undefined,
    //     })
    //     // Cookie.remove('token')
    //     localStorage.removeItem("token")
    //     history.push('/login')
    // }

    return (
        <div>
            
        </div>
        // <nav className="auth-options">
        // {
        // userData.token ? (<button onClick={Logout}>Log Out</button>
        // ) : (
        // <>
        //     <button onClick={Register}>Register</button>
        //     <button onClick={Login}>Login</button>
        // </>
        // )}
        // </nav>
    )
}
