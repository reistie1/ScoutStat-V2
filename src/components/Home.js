import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../context/UserContext'



export default function Home() {
    const {userData} = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        console.log(userData)
        if(!userData.user) history.push("/login")
    })

    return (
        <div>
            
        </div>
    )
}
