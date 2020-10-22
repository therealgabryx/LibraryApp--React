import React from 'react'
import './index.css'

// components
import Header from '../../components/Header'
import AboutContent from '../../components/AboutContent'

export default function index() {
    return (
        <div className='About'>
            <Header title={'About'} look='cross'/>
            <AboutContent/> 
        </div>
    )
}
