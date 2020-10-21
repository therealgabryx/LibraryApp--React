import React from 'react'
import './index.css'

import { Card, CardBody, CardImg, CardTitle, CardText } from 'shards-react'

export default function index() {
    return (
        <div className="BookCard"> 
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
        </div>
    )
}
