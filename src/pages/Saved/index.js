import React from 'react'
import './index.css'

// components
import Header from '../../components/Header'
import SavedContent from '../../components/SavedContent'
import Footer from '../../components/Footer'

export default function index() { 
    return ( 
        <div className='Saved'> 
            <Header title='Saved' look='primary'/> 
            <SavedContent/> 
            <Footer currentPage='saved'/>
        </div> 
    ) 
} 
