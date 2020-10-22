import React from 'react'
import './index.css'

import { Card, CardBody, CardImg, CardTitle, CardText } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className="BookCard">
            <Link to='/bookInfo/someIDhere'> 
                <Card className="ShardsCard">
                    <div className="img">
                        <CardImg alt="CardImg" left src="https://place-hold.it/120x190"/>
                    </div> 
                    <CardBody className="CardBody">
                        <CardTitle>sample Title</CardTitle>
                        <CardText>sample Author</CardText>
                        <CardTitle>0.00$</CardTitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}
