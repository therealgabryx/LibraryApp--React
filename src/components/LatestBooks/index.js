import React from 'react'
import './index.css'

// components
import Card from '../Card'

export default function index({ books }) {
    return (
        <div className="LatestBooks">
            <div className="title"> 
                <h4><b>Latest Books</b></h4>  
            </div> 
            
            {
                books && books.map(book => {
                    return <Card book={book} key={book.id}/>
                }) 
            }
        </div>
    )
}
