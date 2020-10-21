import React from 'react'
import './index.css'

// components 
import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

export default function index() { 


    return ( 
        <div className="Home"> 
            <Header title={"Library"}/> 
            <Content/>
            <Footer/>
        </div> 
    ) 
} 
