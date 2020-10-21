import React from 'react'
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function index(props) {
    return (
        <div className="Header">
            <div><FontAwesomeIcon icon={faBars} className="icon active"/></div> 
            <div className="title"><h3><strong>{props.title}</strong></h3></div> 
            <div><FontAwesomeIcon icon={faSearch} className="icon active"/></div> 
        </div>
    ) 
} 
