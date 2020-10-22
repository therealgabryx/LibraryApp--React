import React from 'react'
import './index.css'

// components
import CardSlider from '../CardSlider'

export default function index() { 
    return (
        <div className="HorizontalScroll"> 
            <CardSlider/>
            <CardSlider/>
            <CardSlider/>
            <CardSlider/>
            <CardSlider/>
        </div> 
    ) 
} 
