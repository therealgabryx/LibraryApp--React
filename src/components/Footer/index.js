import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons'

export default function index() {
    return (
        <div className="Footer">
            <div><FontAwesomeIcon icon={faBookmark} className="icon"/></div>
            <div><FontAwesomeIcon icon={faBookOpen} className="icon active"/></div>
            <div><FontAwesomeIcon icon={faUser} className="icon"/></div> 
        </div>
    )
}
