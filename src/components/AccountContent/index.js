import React from 'react'
import './index.css'

// components
import ProfileMain from './components/ProfileMain'
import ProfileInfo from './components/ProfileInfo'

export default function index() {
    return (
        <div className="AccountContent">
            <ProfileMain/>
            <ProfileInfo/> 
        </div>  
    )
}
