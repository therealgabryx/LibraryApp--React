import React from 'react' 
import './index.css' 

// components
import { Form, FormGroup, FormInput, Button } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index() { 
    return ( 
        <div className='LoginContent'> 
            <div className='info'>
                <h6>
                    Log in or create a new account by <Link to='/signup'>Signing up </Link> 
                    to get access to additional features like saving your favourite books
                    or displaying books info. 
                </h6> 
            </div>
            <div className='form'>
                <Form>
                    <FormGroup>
                        <label htmlFor='#email'>Email</label>
                        <FormInput id='email' type='email' placeholder='email'/>
                    </FormGroup>
                    <FormGroup className='group'>
                        <label htmlFor='#password'>Password</label>
                        <FormInput id='password' type='password' placeholder='password'/>
                    </FormGroup>
                    <Link to='/resetPassword' className='reset'>Reset Password</Link>
                </Form>
            </div>
            <div className='actions'>
                <Button>Login</Button>
                <Link to='/signup'>or Sign up here</Link>
            </div>
        </div> 
    ) 
} 
