import React from 'react'
import './index.css'

// components
import Header from '../../components/Header'
import AccountContent from '../../components/AccountContent'
import Footer from '../../components/Footer'

export default function index() {
    return (
        <div className='Account'>
            <Header title='Account' look='primary'/>
            <AccountContent/> 
            <Footer currentPage='account'/>
        </div>
    ) 
} 
