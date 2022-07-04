import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header className="m-0 pl-3 pt-0">
                <Link to="/teams">
                    <h1 className="title">Scout Stat</h1>
                </Link>
            </header>
        </>
    )
}



