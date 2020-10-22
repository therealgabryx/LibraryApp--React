import React, { useState } from 'react'
import './index.css'

// components
import { ListGroupItem, Collapse, ButtonGroup, Button } from 'shards-react'
import { faEnvelope, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListGroup } from 'react-bootstrap'

export default function Index() {
    const [ emailCollapse, setEmailCollapse ] = useState(false) 

    const  handleEmailToggle = () => {
        setEmailCollapse(!emailCollapse) 
    }  

    return (
        <div className='ProfileInfo'>
            <div className='email'>
                <span className='label'>(icon) email (editbtns - right)</span>
                <ListGroup>
                    <ListGroupItem className="toggler">
                        <span>email@example.com</span>
                    </ListGroupItem> 
                </ListGroup> 
            </div> 
            <div className='bio'> 
                <span className='label'>(icon) bio (editbtns - right)</span> 
                <ListGroup> 
                    <ListGroupItem className='toggler'> 
                        <span> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quare ad ea primum, si videtur 
                        </span> 
                    </ListGroupItem>  
                </ListGroup>
            </div>
            <div className='actions'> 
                <Button>Logout</Button>         
            </div>
        </div> 
    )   
} 
