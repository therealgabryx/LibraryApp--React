import React from 'react'
import './index.css'

// assets
import img from './img/300x200.png'

// components
import { Card, CardBody, CardImg, CardTitle, CardText } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index({ book }) {
    return ( 
        <div className="CardSlider"> 
            <Link to={ '/bookInfo/'+ book.id }>
                <Card className="ShardsCard">
                    <CardImg alt="CardImg" top src={ img }/> 
                    <CardBody className="CardBody">
                        <CardTitle>{ book.title }</CardTitle>
                        <CardText>{ book.author }</CardText>
                        <CardTitle>{ book.price }$</CardTitle>
                    </CardBody> 
                </Card>
            </Link> 
        </div>
    )
}
