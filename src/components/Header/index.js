import React from 'react'
import './index.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function index(props) { 
    return ( 
        <div className="Header"> 
            { 
                props.look === 'primary'  
                ?   <div> 
                        <Link to='/about'>
                            <FontAwesomeIcon icon={faBars} className='icon active'/>
                        </Link>
                    </div>

                : props.look === 'cross'
                ? <div>
                    <Link to='/home'>
                        <FontAwesomeIcon icon={faTimes} className='icon active'/> 
                    </Link> 
                </div>

                : props.look === 'back'   
                ? <div> 
                        <Link to='/home'> 
                            <FontAwesomeIcon icon={faArrowLeft} className='icon active'/>
                        </Link> 
                    </div> 
                : <div></div>
            } 

            <div className="title"><h3><strong>{props.title}</strong></h3></div> 
            
            { 
                props.look === 'primary'
                ?   <div>
                        <Link to='/search'> 
                            <FontAwesomeIcon icon={faSearch} className="icon active"/>
                        </Link> 
                    </div> 
                : <div></div>  
            }  
        </div> 
    ) 
} 
