import React from 'react'
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="icon-container">
                    <FacebookIcon style={{fontSize: '30px'}}/>
                    <TwitterIcon style={{fontSize: '30px'}}/>
                    <InstagramIcon style={{fontSize: '30px'}}/>
                </div>
                <div className="footer-links">
                    <Link className="link-item" to="schedule">Schedule</Link>
                    <Link className="link-item" to="players">Player Reporting</Link>
                    <Link  className="link-item" to="teams">Team Reporting</Link>
                </div>
            </div>
            <div className="footer-disclaimer">
                <p>All rights reserved of Scout Stat 2020</p>
            </div>
        </footer>
    )
}
