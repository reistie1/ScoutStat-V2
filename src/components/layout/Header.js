import React from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'


export default function Header() {

    return (
        <>
            <header>
                <Link to="/teams">
                    <h2 className="title">Scout Stat</h2>
                </Link>
                <AuthOptions />
            </header>
        </>
    )
}



