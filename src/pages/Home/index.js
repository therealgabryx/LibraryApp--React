import React from 'react'
import './index.css'

// components 
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import Footer from '../../components/Footer'

export default function index() { 
    return ( 
        <div className="Home"> 
            <Header title={"Library"}/> 
            <HomeContent/>
            <Footer currentPage='home'/>
        </div> 
    ) 
} 
