import React from 'react'
import './index.css'

// assets
import img from '../../img/250x250.png' 

export default function index() {
    return (
        <div className='ProfileMain'>
            <div className='imgContainer'>
                <img alt='Profile Image' src={img}/>
            </div>
            <div className='nameContainer'>
                <h4>Name</h4> 
                <h4>Surname</h4> 
            </div>
        </div> 
    )
}
