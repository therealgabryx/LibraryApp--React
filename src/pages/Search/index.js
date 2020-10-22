import React from 'react'
import './index.css'

// components
import Header from '../../components/Header'
import SearchContent from '../../components/SearchContent'

export default function index() {
    return (
        <div className='Search'> 
            <Header title='Search' look='back'/> 
            <SearchContent/> 
        </div>
    )
}
