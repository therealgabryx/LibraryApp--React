import React from 'react'
import './index.css'

// components
import Card from '../Card'

export default function index() {
    return (
        <div className="Section">
            <div className="title"> 
                <h4><b>Latest Books</b></h4>  
            </div> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
