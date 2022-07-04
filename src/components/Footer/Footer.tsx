import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="d-flex justify-content-center align-items-center p-2">
                <div className="container p-2 col-7">
                    <Link className="link-item p-1" to="schedule">Schedule</Link>
                    <Link className="link-item p-1" to="players">Player Reporting</Link>
                    <Link  className="link-item p-1" to="teams">Team Reporting</Link>
                </div>
                <div className="text-light col-4 p-1">
                    <p>All rights reserved of Scout Stat 2020</p>
                </div>
            </div>
        </footer>
    )
}
