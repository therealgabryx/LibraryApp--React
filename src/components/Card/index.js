import React from 'react'
import './index.css'

// assets
import img from './img/120x190.png'

// components
import { Card, CardBody, CardImg, CardTitle, CardText } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index({ book }) {
    return (
        <div className="BookCard">
            <Link to='/bookInfo/someIDhere'> 
                <Card className="ShardsCard">
                    <div className="img">
                        <CardImg alt="CardImg" left="true" src={ img }/>
                    </div> 
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
