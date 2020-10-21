import React from 'react'
import './index.css'

import { Container, Row, Col, Card, CardTitle, CardBody, CardImg, CardHeader, CardText } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faBookmark, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons';

export default function index() {
    return (
        <React.Fragment>
            <Container className="header">
                <div className="row">
                    <div><FontAwesomeIcon icon={faBars} className="icon active"/></div>
                    <div><h3><strong>Library</strong></h3></div>
                    <div><FontAwesomeIcon icon={faSearch} className="icon active"/></div>
                </div> 
            </Container>

            <Container className="home-content">
                <Container className="featured">
                    
                    <Card className="Card">
                        <CardImg alt="img" top src="https://place-hold.it/300x200"></CardImg>
                        <CardBody className="CardBody"> 
                            <CardTitle>sample Title</CardTitle>
                            <CardText>sample author</CardText>
                            <CardTitle>0.00$</CardTitle>
                        </CardBody>
                    </Card>

                    <Card className="Card">
                        <CardImg alt="img" top src="https://place-hold.it/300x200"></CardImg>
                        <CardBody>
                            <CardTitle>sample Title</CardTitle>
                            <CardText>sample author</CardText>
                            <CardTitle>0.00$</CardTitle>
                        </CardBody>
                    </Card>

                    <Card className="Card">
                        <CardImg alt="img" top src="https://place-hold.it/300x200"></CardImg>
                        <CardBody>
                            <CardTitle>sample Title</CardTitle>
                            <CardText>sample author</CardText>
                            <CardTitle>0.00$</CardTitle>
                        </CardBody>
                    </Card>
                    

                </Container>
                <Container className="latest">
                    <div className="title"><h4><strong>Latest Books</strong></h4></div>

                    <Card className="Card">
                        <div className="img">
                            <CardImg alt="img" left src="https://place-hold.it/120x180"></CardImg>
                        </div>
                        <CardBody className="content">
                                <CardTitle>sample Title</CardTitle>
                                <CardText>sample Author</CardText>
                                <CardTitle>0.00$</CardTitle>
                        </CardBody>
                    </Card>

                    <Card className="Card">
                        <div className="img">
                            <CardImg alt="img" left src="https://place-hold.it/120x180"></CardImg>
                        </div>
                        <CardBody className="content">
                            <CardTitle>sample Title</CardTitle>
                            <CardText>sample Author</CardText>
                            <CardTitle>0.00$</CardTitle> 
                        </CardBody>
                    </Card>

                    <Card className="Card">
                        <div className="img">
                            <CardImg alt="img" left src="https://place-hold.it/120x180"></CardImg>
                        </div>
                        <CardBody className="content">
                            <CardTitle>sample Title</CardTitle>
                            <CardText>sample Author</CardText>
                            <CardTitle>0.00$</CardTitle>
                        </CardBody>

                    </Card>

                </Container>
            </Container>

            <Container className="footer">
                <div><FontAwesomeIcon icon={faBookmark} className="icon"/></div>
                <div><FontAwesomeIcon icon={faBookOpen} className="icon active"/></div>
                <div><FontAwesomeIcon icon={faUser} className="icon"/></div> 
            </Container>
        </React.Fragment> 
    )
}
