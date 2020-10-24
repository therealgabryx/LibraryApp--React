import React from 'react' 
import './index.css' 

// components 
import Header from '../../components/Header'
import LoginContent from '../../components/LoginContent'

export default function index() { 
    return ( 
        <div className='Login'> 
            <Header title='Login' look='back'/>
            <LoginContent/>
        </div> 
    )  
}   

