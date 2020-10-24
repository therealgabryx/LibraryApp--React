import React from 'react' 
import './index.css' 

// components 
import Header from '../../components/Header'
import ResetContent from '../../components/ResetContent'

export default function index() { 
    return ( 
        <div className='ResetPassword'> 
            <Header title='Recover' look='back'/>
            <ResetContent/>
        </div> 
    )  
}   

