import React from 'react'
import './index.css'

// components 
import Header from '../../components/Header'
import SignupContent from '../../components/SignupContent'

export default function index() {
    return (
        <div className='Signup'>
            <Header title='Signup' look='back'/> 
            <SignupContent/> 
        </div> 
    )
}
