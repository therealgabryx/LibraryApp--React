import React from 'react'
import './index.css'

// components
import CardSlider from '../CardSlider'

export default function index({ books }) { 
    

    return (
        <div className="HorizontalScroll"> 
            { books && books.map(book => {
                return <CardSlider book={book} key={book.id}/>
            }) }   
        </div> 
    ) 
}   
