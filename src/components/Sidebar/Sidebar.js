import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles.css'


export default function Sidebar() {

    return (
        <aside className="sidebar">
            <h5>Dashboard</h5>
            <hr/>
            <div className="sidebar-nav">
                <div className="sidebar-item">
                    <Link to="schedule">Schedule</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="players">Player Reporting</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="teams">Team Reporting</Link>
                </div>
            </div>
        </aside>
    )
}




