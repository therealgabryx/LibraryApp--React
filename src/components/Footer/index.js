import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function index(props) {
    return (
        <div className="Footer"> 
            <div>
                <Link to='/saved'> 
                    <FontAwesomeIcon icon={faBookmark} className={props.currentPage == 'saved' ? 'icon active' : 'icon'}/>
                </Link> 
            </div> 
            <div>
                <Link to='/home'> 
                    <FontAwesomeIcon icon={faBookOpen} className={props.currentPage == 'home' ? 'icon active' : 'icon'}/>
                </Link>
            </div> 
            <div>
                <Link to='/account'> 
                    <FontAwesomeIcon icon={faUser} className={props.currentPage == 'account' ? 'icon active' : 'icon'}/>
                </Link> 
            </div> 
        </div>
    )
}
