import React from 'react'
import './index.css'

import { Card, CardBody, CardImg, CardTitle, CardText } from 'shards-react'

export default function index() {
    return (
        <div className="CardSlider"> 
            <Card className="ShardsCard">
                <CardImg alt="CardImg" top src="https://place-hold.it/300x200"/> 
                <CardBody className="CardBody">
                    <CardTitle>sample Title</CardTitle>
                    <CardText>sample Author</CardText>
                    <CardTitle>0.00$</CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}
