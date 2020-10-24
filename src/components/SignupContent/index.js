import React from 'react'
import './index.css'

// components
import { Form, FormGroup, FormInput, Button } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className='SignupContent'> 
            <div className='info'>
                <h6> 
                    Sign up by creating a new account or <Link to='/login'>Log in </Link> 
                    to get access to additional features like saving your favouite books
                    or displaying books info. 
                </h6> 
            </div>
            <div className='form'>
                <Form> 
                    <FormGroup> 
                        <label htmlFor='#firstName'>First Name</label> 
                        <FormInput id='firstName' placeholder='first name' type='text'/>  
                    </FormGroup> 
                    <FormGroup>
                        <label htmlFor='#lastName'>Last Name</label> 
                        <FormInput id='lastName' placeholder='last name' type='text'/>
                    </FormGroup>
                    <FormGroup> 
                        <label htmlFor='#email'>Email</label> 
                        <FormInput id='email' placeholder='mail@example.com' type='email'/> 
                    </FormGroup> 
                    <FormGroup> 
                        <label htmlFor='#password'>Password</label> 
                        <FormInput id='password' placeholder='password' type='password'/> 
                    </FormGroup>
                </Form> 
            </div>

            <div className='actions'>
                <Button>Signup</Button>
                <Link to='/login'>or Log in here</Link>
            </div>
            
        </div>
    )
}
